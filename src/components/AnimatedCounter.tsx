"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

export default function AnimatedCounter({ value, duration = 2000 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/^([^0-9]*)([0-9,.]+)([^0-9]*)$/);
    if (!match) {
      setDisplayed(value);
      return;
    }

    const prefix = match[1];
    const numStr = match[2].replace(/,/g, "");
    const suffix = match[3];
    const target = parseFloat(numStr);

    if (isNaN(target)) {
      setDisplayed(value);
      return;
    }

    const startTime = performance.now();
    let frameId: number;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      let formatted: string;
      if (numStr.includes(".")) {
        formatted = current.toFixed(1);
      } else if (target >= 1000) {
        formatted = Math.round(current).toLocaleString();
      } else {
        formatted = Math.round(current).toString();
      }
      setDisplayed(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayed}</span>;
}
