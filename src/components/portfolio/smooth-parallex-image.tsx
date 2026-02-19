"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

type Props = {
//   src: string
  alt: string
  className?: string
  // Smaller speed = subtler motion. Negative inverts direction.
  speed?: number // default 0.25
  // How quickly we ease toward the target (0..1). Lower = smoother.
  ease?: number // default 0.08
  // Optional: override sizes for Next/Image
  sizes?: string
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

export default function SmoothParallaxImage({
//   src,
  alt,
  className,
  speed = 0.25,
  ease = 0.08,
  sizes = "(min-width: 1024px) 1000px, 100vw",
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const inViewRef = useRef<boolean>(false)
  const reducedRef = useRef<boolean>(false)
  const currentRef = useRef<number>(0)
  const targetRef = useRef<number>(0)

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const wrap = wrapRef.current
    const img = imgRef.current
    if (!wrap || !img) return

    // Observe visibility to avoid work when offscreen
    const io = new IntersectionObserver(
      (entries) => {
        inViewRef.current = entries.some((e) => e.isIntersecting)
        if (inViewRef.current && rafRef.current == null) loop()
        if (!inViewRef.current && rafRef.current != null) {
          cancelAnimationFrame(rafRef.current)
          rafRef.current = null
        }
      },
      { root: null, threshold: [0, 0.2, 0.5, 1] },
    )
    io.observe(wrap)

    const onScroll = () => updateTarget()
    const onResize = () => updateTarget()

    function updateTarget() {
      const rect = wrap.getBoundingClientRect()
      const viewportH = window.innerHeight || 1
      // Center-based delta for subtle, smooth feel
      const centerDelta = rect.top + rect.height / 2 - viewportH / 2
      const normalized = clamp(centerDelta / viewportH, -1, 1)
      targetRef.current = -normalized * (speed * 200) // scale for visual effect
    }

    function loop() {
      if (!img) return
      if (reducedRef.current) {
        img.style.transform = "translate3d(0, 0, 0)"
        return
      }
      const current = currentRef.current
      const target = targetRef.current
      const next = current + (target - current) * ease
      currentRef.current = next
      img.style.transform = `translate3d(0, ${next.toFixed(2)}px, 0) scale(1.03)`
      rafRef.current = requestAnimationFrame(loop)
    }

    updateTarget()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)

    // Kick off if initially in view
    io.takeRecords()
    // Fallback start
    if (rafRef.current == null) rafRef.current = requestAnimationFrame(loop)

    return () => {
      io.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [ease, speed])

  return (
    <div
      ref={wrapRef}
      className={["position-relative overflow-hidden rounded border bg-body-tertiary", className]
        .filter(Boolean)
        .join(" ")}
      style={{ willChange: "transform", height:"100vh" }}
      
    >
      <div ref={imgRef} className="position-relative w-100 h-100" style={{ willChange: "transform" }}>
        <img src="/assets/img/portfolio/class_photo.jpg" 
        style={{objectFit:"cover"}}
        crossOrigin="anonymous"
        // height={600}
        // width={400}
        alt=""className="position-absolute top-0 start-0 w-100 h-100" />
        
        <Image
          src={
            // src || 
            "/assets/img/portfolio/class-photo.jpg"}
          alt={alt}
          fill
          sizes={sizes}
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover" }}
          crossOrigin="anonymous"
          priority
        />
      </div>
    </div>
  )
}
