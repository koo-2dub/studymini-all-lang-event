const recommendationCards = [
  <>좋아하는 세계가 많아,<br />배우고 싶은 말도 많은 사람</>,
  <>여행지의 풍경보다,<br />그 곳의 말까지 기억하고 싶은 사람</>,
  <>필요보다 먼저,<br />마음에 들어온 언어가 있는 사람</>,
  <>여러 언어를 천천히,<br />오래 좋아하고 싶은 사람</>,
];

export default function Section9() {
  return (
    <section className="section9" aria-labelledby="section9-title">
      <h2 id="section9-title" className="section9-title">
        이런 당신에게<br />모두의 언어를 권합니다
      </h2>

      <div className="section9-card-grid">
        {recommendationCards.map((copy, index) => (
          <article className="section9-card" key={index}>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
