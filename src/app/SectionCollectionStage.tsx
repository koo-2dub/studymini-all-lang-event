"use client";

import type { CSSProperties } from "react";
import Image from "next/image";

const conveyorBoxes = Array.from({ length: 3 }, (_, index) => index);

export default function SectionCollectionStage() {
  return (
    <div className="section-collection-stage relative mx-auto h-[760px] w-full max-w-[900px] overflow-hidden">
      <div className="section-collection-boxes absolute inset-x-0 top-0 z-10 mx-auto h-full w-full">
        {conveyorBoxes.map((boxIndex) => (
          <Image
            key={boxIndex}
            src="/assets/all-language/minibox.png"
            alt="미니학습지 박스"
            width={340}
            height={358}
            className="section-collection-box absolute h-auto max-w-none"
            style={{ "--box-delay": `${boxIndex * 0.9}s` } as CSSProperties}
          />
        ))}
      </div>
      <Image
        src="/assets/all-language/bottom-box.png"
        alt="미니학습지 로고가 있는 컬렉션 베이스 박스"
        width={620}
        height={259}
        className="section-collection-bottom-box absolute bottom-0 left-1/2 z-20 h-auto w-[620px] max-w-[92vw] -translate-x-1/2"
      />
    </div>
  );
}
