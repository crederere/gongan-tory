"use client";

import { useState, useRef, useCallback } from "react";
import FadeIn from "./FadeIn";
import Image from "next/image";

interface SliderProps {
  before: string;
  after: string;
  caption: string;
}

function BASlider({ before, after, caption }: SliderProps) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePos(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) updatePos(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-col-resize select-none touch-none bg-warm-200"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        {/* After (full background) */}
        <Image src={after} alt="정리 후" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />

        {/* Before (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image src={before} alt="정리 전" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>

        {/* Labels */}
        <span className="absolute top-4 left-4 text-xs font-medium bg-black/50 text-white px-3 py-1 rounded-full backdrop-blur-sm">
          Before
        </span>
        <span className="absolute top-4 right-4 text-xs font-medium bg-white/80 text-warm-800 px-3 py-1 rounded-full backdrop-blur-sm">
          After
        </span>

        {/* Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/80 shadow-lg"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5 3L2 8L5 13" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11 3L14 8L11 13" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm text-warm-400 text-center">{caption}</p>
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
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-xs text-warm-400 uppercase tracking-widest mb-3 text-center">
            Before & After
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-900 leading-snug mb-14 text-center">
            정리 전과 후,
            <br />
            직접 비교해보세요
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <BASlider {...item} />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm text-accent-dark hover:text-warm-900 transition-colors font-medium"
            >
              나도 이렇게 바꾸고 싶다면
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M10 5L13 8L10 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
