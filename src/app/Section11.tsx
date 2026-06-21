import Image from "next/image";

export default function Section11() {
  return (
    <section className="section11" aria-labelledby="section11-title">
      <h2 id="section11-title" className="section11-title">
        할인에 할인을 더했다
      </h2>

      <Image
        src="/assets/all-language/section11-price-graph.png"
        alt="정가와 할인가에서 특별 한정가 199만원까지 할인되는 가격 그래프"
        width={800}
        height={542}
        className="section11-price-graph"
      />

      <Image
        src="/assets/all-language/section11-price-card.png"
        alt="모두의 언어 특별 한정가 월 11만원 가격 카드"
        width={520}
        height={695}
        className="section11-price-card"
      />
    </section>
  );
}
