import Image from "next/image";

const phrases = [
  { word: "의 언어", label: "12개의 언어" },
  { word: "의 세계", label: "12개의 세계" },
];

export default function StickyTextTransition() {
  return (
    <>
      {phrases.map((phrase) => (
        <section key={phrase.label} className="section-static-copy" aria-label={phrase.label}>
          <div className="section-static-copy-text">
            <Image
              src="/assets/all-language/section-4-5-num.png"
              alt="12개"
              width={360}
              height={120}
              priority={phrase.word === "의 언어"}
              className="section-static-copy-number-image h-auto w-[360px] max-w-[38vw]"
            />
            <span className="section-static-copy-word">{phrase.word}</span>
          </div>
        </section>
      ))}
    </>
  );
}
