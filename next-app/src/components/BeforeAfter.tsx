"use client";

import { useState, useRef, useCallback } from "react";
import FadeIn from "./FadeIn";
import Image from "next/image";

interface SliderProps { before: string; after: string; caption: string; }

function BASlider({ before, after, caption }: SliderProps) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPos(Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePos(e.clientX);
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-col-resize select-none touch-none bg-n-100 ring-1 ring-n-200/50"
        onPointerDown={onPointerDown}
        onPointerMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
        onPointerUp={() => { dragging.current = false; }}
      >
        <Image src={after} alt="정리 후" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={before} alt="정리 전" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>

        <span className="absolute top-3 left-3 text-[10px] font-semibold bg-n-900/70 text-white px-2.5 py-1 rounded-md backdrop-blur-sm tracking-wider uppercase">Before</span>
        <span className="absolute top-3 right-3 text-[10px] font-semibold bg-white/90 text-n-800 px-2.5 py-1 rounded-md backdrop-blur-sm tracking-wider uppercase">After</span>

        <div className="absolute top-0 bottom-0 w-[2px] bg-white/90" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center border border-n-200">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M4 2L1 7L4 12" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 2L13 7L10 12" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <p className="mt-3 text-[13px] text-n-400 text-center">{caption}</p>
    </div>
  );
}

const items = [
  { before: "/images/ba/before_1.jpg", after: "/images/ba/after_1.jpg", caption: "거실 정리 — 6시간 컨설팅" },
  { before: "/images/ba/before_2.jpg", after: "/images/ba/after_2.jpg", caption: "옷장 정리 — 반나절 컨설팅" },
  { before: "/images/ba/before_3.jpg", after: "/images/ba/after_3.jpg", caption: "주방 정리 — 종일 컨설팅" },
];

export default function BeforeAfter() {
  return (
    <section className="relative py-24 md:py-36 bg-n-50 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-n-400 font-medium mb-6">Before & After</p>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-n-900 tracking-tight leading-[1.15] mb-4">
              정리 전과 후,<br />직접 비교해보세요
            </h2>
            <p className="text-n-400 text-sm">슬라이더를 좌우로 드래그해 비교할 수 있어요</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <BASlider {...item} />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="text-center">
            <a href="#contact" className="text-sm font-medium text-n-500 hover:text-n-900 transition-colors inline-flex items-center gap-1.5">
              나도 이렇게 바꾸고 싶다면
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M9.5 5L13 8L9.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
