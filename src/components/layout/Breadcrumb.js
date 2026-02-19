"use client"
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Utility: "website-development" -> "Website Development"
const slugToTitle = (slug) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

const Breadcrumb = () => {
  const path = usePathname();
  const segments = path.split("/").filter(Boolean);

  // ["Service", "Website Development", ...]
  const crumbs = segments.map(slugToTitle);

  return (
    <div
      className="breadcrumb-section"
      style={{
        backgroundImage:
          "url(/assets/img/innerpage/breadcrumb-bg1.png), linear-gradient(180deg, #121212 0%, #121212 100%)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-wrapper">
              <div className="banner-content">
                <ul className="breadcrumb-list flex gap-2 items-center">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  {crumbs.map((c, i) => (
                    <React.Fragment key={i}>
                      <li>{c}</li>
                    </React.Fragment>
                  ))}
                </ul>
                <h1>{crumbs.length > 0 ? crumbs[crumbs.length - 1] : "Home"}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
