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
    <div className="group">
      <div
        ref={containerRef}
        className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-col-resize select-none touch-none bg-n-100 shadow-xl shadow-n-900/[0.08] ring-1 ring-n-200/50"
        onPointerDown={onPointerDown}
        onPointerMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
        onPointerUp={() => { dragging.current = false; }}
      >
        <Image src={after} alt="정리 후" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={before} alt="정리 전" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>

        <span className="absolute top-3 left-3 text-[11px] font-bold bg-n-900/70 text-white px-3 py-1.5 rounded-lg backdrop-blur-sm tracking-wide">BEFORE</span>
        <span className="absolute top-3 right-3 text-[11px] font-bold bg-white/90 text-n-800 px-3 py-1.5 rounded-lg backdrop-blur-sm tracking-wide shadow-sm">AFTER</span>

        <div className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_16px_rgba(255,255,255,0.6)]" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl shadow-n-900/20 flex items-center justify-center border-2 border-primary-400">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M4 2L1 7L4 12" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 2L13 7L10 12" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm text-n-500 text-center font-medium">{caption}</p>
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
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary-600 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-6 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              Before & After
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-n-900 tracking-tight leading-snug mb-5">
              정리 전과 후,<br />직접 비교해보세요
            </h2>
            <p className="text-n-400 text-sm">슬라이더를 좌우로 드래그해 비교할 수 있어요</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <BASlider {...item} />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="text-center">
            <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 bg-white rounded-full px-6 py-3 border border-primary-200 hover:border-primary-300 shadow-sm hover:shadow-md transition-all duration-300">
              나도 이렇게 바꾸고 싶다면
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M3 8H13M9.5 5L13 8L9.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
