"use client";

import type { CSSProperties } from "react";
import Image from "next/image";

const conveyorBoxes = [
  { src: "/assets/all-language/en-box.png", delay: "0s", rotate: "-3deg", width: 290, height: 320 },
  { src: "/assets/all-language/en-box.png", delay: "0s", rotate: "-3deg", width: 290, height: 320 },
  { src: "/assets/all-language/jp-box.png", delay: "1.5s", rotate: "2deg", width: 288, height: 348 },
  { src: "/assets/all-language/de-box.png", delay: "3s", rotate: "-1deg", width: 323, height: 348 },
  { src: "/assets/all-language/fr-box.png", delay: "4.5s", rotate: "3deg", width: 263, height: 346 },
  { src: "/assets/all-language/es-box.png", delay: "6s", rotate: "-2deg", width: 254, height: 326 },
  { src: "/assets/all-language/ru-box.png", delay: "7.5s", rotate: "2deg", width: 276, height: 310 },
  { src: "/assets/all-language/vn-box.png", delay: "9s", rotate: "-3deg", width: 312, height: 337 },
  { src: "/assets/all-language/ar-box.png", delay: "10.5s", rotate: "1deg", width: 341, height: 358 },
  { src: "/assets/all-language/po-box.png", delay: "12s", rotate: "-1deg", width: 333, height: 341 },
  { src: "/assets/all-language/ch-box.png", delay: "13.5s", rotate: "3deg", width: 253, height: 321 },
  { src: "/assets/all-language/in-box.png", delay: "15s", rotate: "-2deg", width: 260, height: 300 },

];

export default function SectionCollectionStage() {
  return (
    <div className="section-collection-stage relative mx-auto">
      <div className="section-collection-boxes absolute inset-x-0 top-0 z-10 mx-auto">
        {conveyorBoxes.map((box, index) => (
          <Image
            key={`language-box-${index}`}
            src={box.src}
            alt=""
            aria-hidden="true"
            width={box.width}
            height={box.height}
            className="section-collection-box absolute h-auto max-w-none"
            style={
              {
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
        className="section-collection-bottom-box absolute bottom-0 left-1/2 z-20 h-auto -translate-x-1/2"
      />
    </div>
  );
}
