"use client";

import type { CSSProperties } from "react";
import Image from "next/image";

const conveyorBoxes = [
  { left: "50%", delay: "0s", rotate: "-3deg" },
  { left: "50%", delay: "0.9s", rotate: "2deg" },
  { left: "50%", delay: "1.8s", rotate: "-1deg" },
  { left: "50%", delay: "2.7s", rotate: "3deg" },
];

export default function SectionCollectionStage() {
  return (
    <div className="section-collection-stage relative mx-auto h-[760px] w-full max-w-[900px]">
      <div className="section-collection-boxes absolute inset-x-0 top-0 z-10 mx-auto h-[590px] w-full">
        {conveyorBoxes.map((box, index) => (
          <Image
            key={`minibox-${index}`}
            src="/assets/all-language/minibox.png"
            alt="미니학습지 미니 박스"
            width={655}
            height={1477}
            className="section-collection-box absolute h-auto max-w-none"
            style={
              {
                "--box-left": box.left,
                "--box-delay": box.delay,
                "--box-rotate": box.rotate,
              } as CSSProperties
            }
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
