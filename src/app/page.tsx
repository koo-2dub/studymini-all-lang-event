import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section
        aria-labelledby="hero-title"
        className="relative mx-auto flex min-h-[820px] w-full max-w-[1920px] flex-col items-center bg-black px-6 pt-[136px] text-center"
      >
        <p className="text-[32px] font-medium leading-none tracking-[-0.02em] text-white md:text-[38px]">
          단 하나의 마스터피스
        </p>
        <h1
          id="hero-title"
          className="mt-7 text-[72px] font-extrabold leading-none tracking-[-0.05em] text-[#dcecff] md:text-[88px] lg:text-[96px]"
        >
          모두의 언어
        </h1>

        <div className="relative mt-[88px] h-[430px] w-full max-w-[1140px]">
          <Image
            src="/assets/all-language/hero-gra-shadow.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1140px"
            className="object-contain"
          />
          <Image
            src="/assets/all-language/hero-back.png"
            alt="다양한 언어 카드가 떠 있는 어두운 우주 배경"
            width={752}
            height={423}
            priority
            className="absolute left-1/2 top-0 z-10 w-[66%] max-w-[752px] -translate-x-1/2 object-contain"
          />
          <Image
            src="/assets/all-language/hero-front.png"
            alt="지구 위로 떠오르는 푸른 빛"
            width={752}
            height={423}
            priority
            className="absolute left-1/2 top-0 z-20 w-[66%] max-w-[752px] -translate-x-1/2 object-contain"
          />
        </div>
      </section>
    </main>
  );
}
