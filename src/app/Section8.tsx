import Image from "next/image";

const languageButtons = [
  { src: "/assets/all-language/lang_btn-0.png", alt: "영어", width: 89 },
  { src: "/assets/all-language/lang_btn-1.png", alt: "일본어", width: 104 },
  { src: "/assets/all-language/lang_btn-2.png", alt: "스페인어", width: 104 },
  { src: "/assets/all-language/lang_btn-3.png", alt: "독일어", width: 104 },
  { src: "/assets/all-language/lang_btn-4.png", alt: "중국어", width: 104 },
  { src: "/assets/all-language/lang_btn-5.png", alt: "프랑스어", width: 118 },
  { src: "/assets/all-language/lang_btn-6.png", alt: "아랍어", width: 104 },
  { src: "/assets/all-language/lang_btn-7.png", alt: "베트남어", width: 133 },
  { src: "/assets/all-language/lang_btn-8.png", alt: "포르투갈어", width: 118 },
  { src: "/assets/all-language/lang_btn-9.png", alt: "러시아어", width: 133 },
  { src: "/assets/all-language/lang_btn-10.png", alt: "이탈리아어", width: 148 },
  { src: "/assets/all-language/lang_btn-11.png", alt: "인도네시아어", width: 118 },
];

export default function Section8() {
  return (
    <section className="section8" aria-labelledby="section8-title">
      <div className="section8-inner">
        <h2 id="section8-title" className="section8-title">
          모두의 언어 서재에는
        </h2>

        <div className="section8-point section8-point-01">
          <p className="section8-point-label">Point 01</p>
          <h3 className="section8-point-title">12개 언어 스타터팩 제공</h3>
          <p className="section8-point-desc">영어부터 아랍어까지, 12개 언어의 첫걸음을 한 번에 시작하세요.</p>

          <div className="section8-language-panel" aria-label="12개 언어 스타터팩">
            {languageButtons.map((button) => (
              <Image
                key={button.src}
                src={button.src}
                alt={button.alt}
                width={button.width}
                height={42}
                className="section8-language-button"
              />
            ))}
          </div>
        </div>

        <div className="section8-point section8-point-02">
          <p className="section8-point-label">Point 02</p>
          <h3 className="section8-point-title">종이책+디지털을 함께</h3>
          <p className="section8-point-desc">각 나라의 문화와 풍경을 담은 교재를 종이와 디지털로 소장할 수 있습니다.</p>

          <div className="section8-study-cards">
            <article className="section8-study-card">
              <Image src="/assets/all-language/section8-paper.png" alt="종이 학습지" width={435} height={326} />
              <span>종이 학습지</span>
            </article>
            <article className="section8-study-card">
              <Image src="/assets/all-language/section8-digital.png" alt="디지털 학습지" width={435} height={326} />
              <span>디지털 학습지</span>
            </article>
          </div>
          <p className="section8-notice">*러시아어 · 인도네시아어 · 아랍어 스타터팩은 디지털 학습지만 제공됩니다.</p>
        </div>

        <div className="section8-bottom-grid">
          <article className="section8-benefit-card">
            <p className="section8-point-label">Point 03</p>
            <h3 className="section8-point-title">기한 제한 없는<br />무제한 수강</h3>
            <Image src="/assets/all-language/unlimited.png" alt="무제한 수강" width={435} height={253} />
          </article>
          <article className="section8-benefit-card">
            <p className="section8-point-label">Point 04</p>
            <h3 className="section8-point-title">18개월 무이자<br />할부 지원</h3>
            <Image src="/assets/all-language/creditcard.png" alt="18개월 무이자 할부 지원" width={435} height={253} />
          </article>
        </div>
      </div>
    </section>
  );
}
