import type { CSSProperties } from "react";

const languageCards = ["中文", "にほんご", "Deutsch", "English", "Español", "Français", "Italiano"];
const loopingLanguageCards = [...languageCards, ...languageCards];

export default function HeroCardCarousel() {
  return (
    <div className="hero-card-viewport absolute left-1/2 top-[70px] z-20 h-[258px] w-[1140px] -translate-x-1/2" aria-hidden="true">
      <div className="hero-card-track">
        {loopingLanguageCards.map((label, index) => (
          <div
            key={`${label}-${index}`}
            className="hero-language-card"
            style={{ "--card-index": index % languageCards.length } as CSSProperties}
          >
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
