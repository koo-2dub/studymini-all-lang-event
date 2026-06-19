"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

const languageCards = ["中文", "にほんご", "Deutsch", "English", "Español", "Français", "Italiano"];
const loopingLanguageCards = [...languageCards, ...languageCards];

export default function HeroCardCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  useEffect(() => {
    let animationFrameId = 0;

    const updateActiveCard = () => {
      const viewport = viewportRef.current;

      if (!viewport) {
        animationFrameId = requestAnimationFrame(updateActiveCard);
        return;
      }

      const viewportRect = viewport.getBoundingClientRect();
      const viewportCenterX = viewportRect.left + viewportRect.width / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) {
          return;
        }

        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(viewportCenterX - cardCenterX);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCardIndex((currentIndex) => (currentIndex === closestIndex ? currentIndex : closestIndex));
      animationFrameId = requestAnimationFrame(updateActiveCard);
    };

    animationFrameId = requestAnimationFrame(updateActiveCard);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div ref={viewportRef} className="hero-card-viewport absolute left-1/2 top-[61px] z-20 h-[252px] w-[1140px] -translate-x-1/2" aria-hidden="true">
      <div className="hero-card-track">
        {loopingLanguageCards.map((label, index) => (
          <div
            key={`${label}-${index}`}
            ref={(card) => {
              cardRefs.current[index] = card;
            }}
            className={`hero-language-card ${activeCardIndex === index ? "hero-language-card-active" : ""}`}
            style={{ "--card-index": index % languageCards.length } as CSSProperties}
          >
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
