"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
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

  const { languageStyle, worldStyle } = useMemo(() => {
    const languageOut = fadeRange(progress, 0.12, 0.24);
    const worldIn = fadeRange(progress, 0.2, 0.32);

    return {
      languageStyle: {
        opacity: 1 - languageOut,
        transform: `translate3d(0, ${languageOut * -36}px, 0)`,
      } as CSSProperties,
      worldStyle: {
        opacity: worldIn,
        transform: `translate3d(0, ${(1 - worldIn) * 36}px, 0)`,
      } as CSSProperties,
    };
  }, [progress]);

  return (
    <section ref={wrapperRef} className="section-sticky-copy">
      <div className="section-sticky-copy-inner">
        <p className="section-sticky-copy-text" aria-live="polite">
          <Image
            src="/assets/all-language/section-4-5-num.png"
            alt="12개"
            width={360}
            height={120}
            priority
            className="section-sticky-copy-number-image h-auto w-[360px] max-w-[38vw]"
          />
          <span className="section-sticky-copy-word-wrap" aria-hidden="true">
            <span className="section-sticky-copy-word section-sticky-copy-word-language" style={languageStyle}>의 언어</span>
            <span className="section-sticky-copy-word section-sticky-copy-word-world" style={worldStyle}>의 세계</span>
          </span>
          <span className="sr-only">12개의 언어, 12개의 세계</span>
        </p>
      </div>
    </section>
  );
}
