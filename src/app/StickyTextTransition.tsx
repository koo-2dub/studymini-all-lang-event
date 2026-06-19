"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const fadeRange = (progress: number, start: number, end: number) => clamp((progress - start) / (end - start), 0, 1);

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
      const nextProgress = clamp(-rect.top / scrollableDistance, 0, 1);

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

  const transitionStyle = useMemo(() => {
    const languageOut = fadeRange(progress, 0.24, 0.42);
    const worldIn = fadeRange(progress, 0.38, 0.56);

    return {
      "--language-opacity": 1 - languageOut,
      "--language-y": `${languageOut * -36}px`,
      "--world-opacity": worldIn,
      "--world-y": `${(1 - worldIn) * 36}px`,
    } as CSSProperties;
  }, [progress]);

  return (
    <section ref={wrapperRef} className="section-sticky-copy" style={transitionStyle}>
      <div className="section-sticky-copy-inner">
        <p className="section-sticky-copy-text" aria-live="polite">
          <span className="section-sticky-copy-prefix">12개의</span>
          <span className="section-sticky-copy-word-wrap" aria-hidden="true">
            <span className="section-sticky-copy-word section-sticky-copy-word-language">언어</span>
            <span className="section-sticky-copy-word section-sticky-copy-word-world">세계</span>
          </span>
          <span className="sr-only">12개의 언어, 12개의 세계</span>
        </p>
      </div>
    </section>
  );
}
