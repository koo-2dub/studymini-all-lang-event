"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const collectionBoxes = [
  { src: "indonesia-box.png", alt: "인도네시아어 미니학습지 박스", className: "section-collection-box-id" },
  { src: "russia-box.png", alt: "러시아어 미니학습지 박스", className: "section-collection-box-ru" },
  { src: "ch-box.png", alt: "중국어 미니학습지 박스", className: "section-collection-box-ch" },
  { src: "de-box.png", alt: "독일어 미니학습지 박스", className: "section-collection-box-de" },
  { src: "jp-box.png", alt: "일본어 미니학습지 박스", className: "section-collection-box-jp" },
  { src: "vn-box.png", alt: "베트남어 미니학습지 박스", className: "section-collection-box-vn" },
  { src: "en-box.png", alt: "영어 미니학습지 박스", className: "section-collection-box-en" },
  { src: "fr-box.png", alt: "프랑스어 미니학습지 박스", className: "section-collection-box-fr" },
  { src: "ar-box.png", alt: "아랍어 미니학습지 박스", className: "section-collection-box-ar" },
  { src: "es-box.png", alt: "스페인어 미니학습지 박스", className: "section-collection-box-es" },
  { src: "it-box.png", alt: "이탈리아어 미니학습지 박스", className: "section-collection-box-it" },
  { src: "portugal-box.png", alt: "포르투갈어 미니학습지 박스", className: "section-collection-box-pt" },
];

export default function SectionCollectionStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      },
    );

    observer.observe(stage);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={stageRef}
      className={`section-collection-stage relative mx-auto h-[760px] w-full max-w-[900px]${isVisible ? " is-collection-visible" : ""}`}
    >
      <div className="section-collection-boxes absolute inset-x-0 top-0 z-10 mx-auto h-[590px] w-full">
        {collectionBoxes.map((box, index) => (
          <Image
            key={box.src}
            src={`/assets/all-language/${box.src}`}
            alt={box.alt}
            width={340}
            height={358}
            className={`section-collection-box absolute h-auto max-w-none ${box.className}`}
            style={{ "--box-index": index } as CSSProperties}
          />
        ))}
      </div>
      <Image
        src="/assets/all-language/bottom-box.png"
        alt="미니학습지 로고가 있는 컬렉션 베이스 박스"
        width={620}
        height={259}
        className="absolute bottom-0 left-1/2 z-20 h-auto w-[620px] max-w-[92vw] -translate-x-1/2"
      />
    </div>
  );
}
