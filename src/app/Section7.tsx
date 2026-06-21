import Image from "next/image";

export default function Section7() {
  return (
    <section className="section-language-library" aria-labelledby="section-language-library-title">
      <div className="section-language-library-image" aria-hidden="true">
        <Image
          src="/assets/all-language/woman-book.png"
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 58vw"
          className="object-cover object-[center_right]"
        />
      </div>

      <div className="section-language-library-gradient" aria-hidden="true" />
      <div className="section-language-library-vignette" aria-hidden="true" />

      <div className="section-language-library-content-wrap">
        <div className="section-language-library-content">
          <h2 id="section-language-library-title">
            많이 팔리는 언어만 만들었다면,
            <br />
            12개는 되지 않았을 겁니다.
          </h2>

          <div className="section-language-library-body">
            <p>
              가장 익숙한 언어부터 누군가는 오랫동안 기다려온 언어까지
              <br />
              크라우드 펀딩으로 성장한 미니학습지.
            </p>

            <p>
              ‘모두의 언어’는 미니학습지가 10년 동안 쌓아온
              <br />
              언어에 대한 애정의 기록입니다.
            </p>

            <p>
              오사카의 봄, 베를린의 서점, 하노이 골목의 커피.
              <br />
              우리가 좋아한 세계에는 언제나 언어가 있었습니다.
            </p>

            <p className="section-language-library-emphasis">
              모두의 언어와 함께 평생 꺼내볼 수 있는
              <br />
              나만의 언어 서재를 만들어보세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
