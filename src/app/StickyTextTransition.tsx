"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

export default function StickyTextTransition() {
  const wrapperRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const updateProgress = () => {
      const wrapper = wrapperRef.current;

      if (!wrapper) {
        return;
      }

      const rect = wrapper.getBoundingClientRect();
      const scrollableDistance = Math.max(rect.height - window.innerHeight, 1);
      const nextProgress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);

      setProgress(nextProgress);
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section ref={wrapperRef} className="section-sticky-copy" style={{ "--sticky-progress": progress } as CSSProperties}>
      <div className="section-sticky-copy-inner">
        <p className="section-sticky-copy-text section-sticky-copy-text-first">12개의 언어</p>
        <p className="section-sticky-copy-text section-sticky-copy-text-second">12개의 세계</p>
      </div>
    </section>
  );
}
