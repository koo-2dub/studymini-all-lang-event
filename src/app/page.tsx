import Image from "next/image";
import HeroCardCarousel from "./HeroCardCarousel";
import StickyTextTransition from "./StickyTextTransition";
import SectionCollectionStage from "./SectionCollectionStage";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";
import Section12 from "./Section12";
import Section13 from "./Section13";

const starterCards = [
  "starter-img.png",
  "starter-img-1.png",
  "starter-img-2.png",
  "starter-img-3.png",
  "starter-img-4.png",
  "starter-img-5.png",
  "starter-img-6.png",
  "starter-img-7.png",
  "starter-img-8.png",
  "starter-img-9.png",
  "starter-img-10.png",
  "starter-img-11.png",
];

const loopingStarterCards = [...starterCards, ...starterCards];

export default function Home() {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section
        aria-labelledby="hero-title"
        className="hero-section relative mx-auto min-h-[820px] max-w-[1920px] bg-black text-center"
      >
        <div className="hero-copy">
          <p className="text-[32px] font-medium leading-none tracking-[-0.035em] text-white md:text-[38px]">
            단 하나의 마스터피스
          </p>
          <h1
            id="hero-title"
            className="hero-title mt-[28px] text-[72px] font-extrabold leading-none tracking-[-0.055em] md:text-[88px] lg:text-[96px]"
          >
            모두의 언어
          </h1>
        </div>

        <div className="hero-stage relative h-[430px] w-full max-w-[1140px] overflow-hidden">
          <Image
            src="/assets/all-language/hero-back.png"
            alt="별이 보이는 우주와 지구 배경"
            width={752}
            height={423}
            priority
            className="hero-earth hero-earth-back absolute left-1/2 top-0 z-10 h-auto w-[752px] max-w-none -translate-x-1/2"
          />

          <HeroCardCarousel />

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

      <section className="section-weekly-offer flex h-[196px] w-full items-center justify-center px-6 text-center">
        <h2 className="text-[34px] font-extrabold leading-tight tracking-[-0.04em] text-white md:text-[44px]">
          일주일 동안만 선보입니다
        </h2>
      </section>

      <section className="section-collection relative overflow-hidden bg-black text-center">
        <div className="section-collection-copy">
          <p className="section-collection-kicker">영어부터 아랍어까지</p>
          <h2 className="section-collection-title">
            {"미니학습지가 만든 12개 언어를\n하나의 컬렉션에 담다"}
          </h2>
        </div>

        <SectionCollectionStage />
      </section>

      <StickyTextTransition numberSrc="/assets/all-language/section-4-5-num.png" />

      <section className="section-starter-pack bg-black text-center">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center px-6">
          <Image
            src="/assets/all-language/section6-number-12.png"
            alt="12"
            width={210}
            height={128}
            className="section-starter-pack-number-image h-auto w-[210px] max-w-[34vw]"
          />
          <Image
            src="/assets/all-language/section6-description.png"
            alt="아직 시작하지 않은 세계의 설렘까지 담은 미니학습지 스타터팩 풀 세트"
            width={620}
            height={92}
            className="section-starter-pack-description-image h-auto w-[620px] max-w-[82vw]"
          />
        </div>

        <div className="section-starter-marquee">
          <div className="section-starter-marquee-track">
            {loopingStarterCards.map((card, index) => (
              <article key={`${card}-${index}`} className="section-starter-card">
                <Image
                  src={`/assets/all-language/${card}`}
                  alt="미니학습지 스타터팩 이미지"
                  width={267}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
    </main>
  );
}
