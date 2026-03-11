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
        className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-col-resize select-none touch-none bg-warm-200 shadow-xl shadow-warm-900/8"
        onPointerDown={onPointerDown}
        onPointerMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
        onPointerUp={() => { dragging.current = false; }}
      >
        <Image src={after} alt="정리 후" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={before} alt="정리 전" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 text-[11px] font-semibold bg-black/60 text-white/90 px-2.5 py-1 rounded-full backdrop-blur-sm tracking-wide">BEFORE</span>
        <span className="absolute top-3 right-3 text-[11px] font-semibold bg-white/80 text-warm-800 px-2.5 py-1 rounded-full backdrop-blur-sm tracking-wide">AFTER</span>

        {/* Handle line */}
        <div className="absolute top-0 bottom-0 w-px bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.5)]" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M4 2L1 7L4 12" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 2L13 7L10 12" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm text-warm-500 text-center">{caption}</p>
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
    <section className="py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs text-warm-400 uppercase tracking-widest mb-4">Before & After</p>
            <h2 className="text-3xl md:text-5xl font-bold text-warm-900 tracking-tight leading-snug mb-5">
              정리 전과 후,
              <br />직접 비교해보세요
            </h2>
            <p className="text-warm-400 text-sm">슬라이더를 좌우로 드래그해 비교할 수 있어요</p>
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
            <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors">
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
