import type { CSSProperties } from "react";
import Image from "next/image";

const languageCards = [
  { label: "中文", tone: "muted" },
  { label: "にほんご" },
  { label: "Deutsch" },
  { label: "English", featured: true },
  { label: "Español" },
  { label: "Français" },
  { label: "Italiano", tone: "muted" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section
        aria-labelledby="hero-title"
        className="relative mx-auto flex min-h-[820px] w-full max-w-[1920px] flex-col items-center bg-black px-6 pt-[138px] text-center"
      >
        <p className="text-[32px] font-medium leading-none tracking-[-0.035em] text-white md:text-[38px]">
          단 하나의 마스터피스
        </p>
        <h1
          id="hero-title"
          className="mt-[28px] text-[72px] font-extrabold leading-none tracking-[-0.055em] text-[#dcecff] md:text-[88px] lg:text-[96px]"
        >
          모두의 언어
        </h1>

        <div className="hero-stage relative mt-[87px] h-[430px] w-full max-w-[1140px] overflow-hidden">
          <Image
            src="/assets/all-language/hero-back.png"
            alt="별이 보이는 우주와 지구 배경"
            width={752}
            height={423}
            priority
            className="hero-earth hero-earth-back absolute left-1/2 top-0 z-10 h-auto w-[752px] max-w-none -translate-x-1/2"
          />

          <div className="hero-card-track absolute left-1/2 top-0 z-20 h-[252px] w-[1140px] -translate-x-1/2" aria-hidden="true">
            {languageCards.map((card, index) => (
              <div
                key={card.label}
                className={`hero-language-card ${card.featured ? "hero-language-card-featured" : ""} ${card.tone === "muted" ? "hero-language-card-muted" : ""}`}
                style={{ "--card-index": index } as CSSProperties}
              >
                <span>{card.label}</span>
              </div>
            ))}
          </div>

          <Image
            src="/assets/all-language/hero-front.png"
            alt="언어 카드 앞쪽으로 떠오른 지구의 푸른 빛"
            width={752}
            height={423}
            priority
            className="hero-earth absolute left-1/2 top-0 z-30 h-auto w-[752px] max-w-none -translate-x-1/2"
          />
          <Image
            src="/assets/all-language/hero-gra-shadow.png"
            alt=""
            fill
            priority
            sizes="1140px"
            className="pointer-events-none z-40 object-contain"
          />
        </div>
      </section>
    </main>
  );
}
