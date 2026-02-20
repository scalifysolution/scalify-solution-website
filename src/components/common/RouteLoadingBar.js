"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

function isModifiedClick(e) {
  return e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
}

function shouldHandleAnchor(a) {
  if (!a) return false;
  const href = a.getAttribute("href") || "";
  if (!href) return false;
  if (href.startsWith("#")) return false;
  if (a.getAttribute("target") === "_blank") return false;
  if (a.hasAttribute("download")) return false;
  if (a.getAttribute("rel") === "external") return false;
  // Only handle same-origin absolute/relative internal links.
  if (href.startsWith("http://") || href.startsWith("https://")) {
    try {
      const url = new URL(href);
      return url.origin === window.location.origin;
    } catch {
      return false;
    }
  }
  return href.startsWith("/");
}

export default function RouteLoadingBar() {
  const pathname = usePathname();

  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const timersRef = useRef([]);
  const lastPathnameRef = useRef(pathname);

  const clearTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };

  const start = () => {
    clearTimers();
    setActive(true);
    setProgress(8);

    // Simulated progress ramp to feel responsive.
    timersRef.current.push(
      setTimeout(() => setProgress(25), 80),
      setTimeout(() => setProgress(45), 160),
      setTimeout(() => setProgress(65), 260),
      setTimeout(() => setProgress(80), 420),
      setTimeout(() => setProgress(90), 700)
    );

    // Safety: if route never changes, hide later.
    timersRef.current.push(
      setTimeout(() => {
        setProgress(100);
        timersRef.current.push(
          setTimeout(() => {
            setActive(false);
            setProgress(0);
          }, 220)
        );
      }, 4000)
    );
  };

  const done = () => {
    clearTimers();
    setActive(true);
    setProgress(100);
    timersRef.current.push(
      setTimeout(() => {
        setActive(false);
        setProgress(0);
      }, 220)
    );
  };

  useEffect(() => {
    // Finish when the route actually changed.
    if (lastPathnameRef.current !== pathname) {
      lastPathnameRef.current = pathname;
      done();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const onClickCapture = (e) => {
      if (isModifiedClick(e)) return;
      const a = e.target?.closest?.("a");
      if (!shouldHandleAnchor(a)) return;
      start();
    };

    const onPopState = () => start();

    document.addEventListener("click", onClickCapture, true);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("click", onClickCapture, true);
      window.removeEventListener("popstate", onPopState);
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!active) return null;

  return (
    <>
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          zIndex: 9999,
          background: "transparent",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            transition: "width 220ms ease",
            background:
              "linear-gradient(90deg, #1d4ed8 0%, #3b82f6 40%, #06b6d4 100%)",
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.55)",
          }}
        />
      </div>
      {/* Prevent content jump under the fixed bar */}
      <div style={{ height: 3 }} />
    </>
  );
}

