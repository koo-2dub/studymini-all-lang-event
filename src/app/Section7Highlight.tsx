"use client";

import { useEffect, useRef, useState } from "react";

export default function Section7Highlight() {
  const highlightRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const highlight = highlightRef.current;

    if (!highlight || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(highlight);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <span
      ref={highlightRef}
      className={`section-language-library-highlight${isVisible ? " is-visible" : ""}`}
    >
      오사카의 봄, 베를린의 서점, 하노이 골목의 커피.
    </span>
  );
}
