"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,                                    // was 1.2 — snappier response
      easing: (t: number) => 1 - Math.pow(1 - t, 3),  // cubic ease-out, lighter than prev
      smoothWheel: true,
      syncTouch: false,                                 // native touch on mobile (faster)
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
