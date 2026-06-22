"use client";

import { useEffect, useRef, useState } from "react";

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export default function StickyTextTransition() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollableDistance = Math.max(1, rect.height - window.innerHeight);
      const nextProgress = clamp(-rect.top / scrollableDistance);
      setProgress(nextProgress);
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const transitionProgress = clamp((progress - 0.45) / 0.1);
  const languageOpacity = 1 - transitionProgress;
  const worldOpacity = transitionProgress;
  const languageOffset = -8 * transitionProgress;
  const worldOffset = 8 * (1 - transitionProgress);

  return (
    <section ref={sectionRef} className="section-static-copy" aria-label="12개의 언어에서 12개의 세계로 전환">
      <div className="section-static-copy-sticky">
        <div className="section-static-copy-text">
          <span className="section-static-copy-number">12개</span>
          <span className="section-static-copy-word-wrap" aria-live="polite">
            <span
              className="section-static-copy-word section-static-copy-word-language"
              style={{ opacity: languageOpacity, transform: `translateY(${languageOffset}px)` }}
            >
              의 언어
            </span>
            <span
              className="section-static-copy-word section-static-copy-word-world"
              style={{ opacity: worldOpacity, transform: `translateY(${worldOffset}px)` }}
              aria-hidden={worldOpacity === 0}
            >
              의 세계
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
