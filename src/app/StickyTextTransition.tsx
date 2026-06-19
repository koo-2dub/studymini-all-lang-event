import Image from "next/image";

type StickyTextTransitionProps = {
  numberSrc: string;
};

export default function StickyTextTransition({
  numberSrc,
}: StickyTextTransitionProps) {
  return (
    <>
      <section className="section-static-copy">
        <div className="section-static-copy-text">
          <Image
            src={numberSrc}
            alt="12개"
            width={240}
            height={96}
            className="section-static-copy-number-image"
          />
          <span className="section-static-copy-word">의 언어</span>
        </div>
      </section>

      <section className="section-static-copy">
        <div className="section-static-copy-text">
          <Image
            src={numberSrc}
            alt="12개"
            width={240}
            height={96}
            className="section-static-copy-number-image"
          />
          <span className="section-static-copy-word">의 세계</span>
        </div>
      </section>
    </>
  );
}