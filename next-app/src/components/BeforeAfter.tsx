"use client";

import { useState, useRef, useCallback } from "react";
import FadeIn from "./FadeIn";
import Image from "next/image";

interface SliderProps { before: string; after: string; story: string; caption: string; tags: string[]; }

function BASlider({ before, after, story, caption, tags }: SliderProps) {
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
    <div className="bg-white rounded-2xl border border-n-100 overflow-hidden">
      <div className="p-4 pb-3">
        <p className="text-[15px] font-semibold text-n-800">{story}</p>
        <div className="flex gap-1.5 mt-1.5">
          {tags.map((tag) => (
            <span key={tag} className="text-[11px] px-2 py-0.5 rounded bg-n-50 text-n-400">#{tag}</span>
          ))}
        </div>
      </div>
      <div
        ref={containerRef}
        className="relative aspect-[4/3] cursor-col-resize select-none touch-none bg-n-100"
        onPointerDown={onPointerDown}
        onPointerMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
        onPointerUp={() => { dragging.current = false; }}
        style={{ touchAction: "pan-y" }}
      >
        <Image src={after} alt="정리 후" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={before} alt="정리 전" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>

        <span className="absolute top-3 left-3 text-[11px] font-semibold bg-n-900/70 text-white px-3 py-1.5 rounded-lg backdrop-blur-sm tracking-wider uppercase">Before</span>
        <span className="absolute top-3 right-3 text-[11px] font-semibold bg-white/90 text-n-800 px-3 py-1.5 rounded-lg backdrop-blur-sm tracking-wider uppercase">After</span>

        <div className="absolute top-0 bottom-0 w-[2px] bg-white/90" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center border border-n-200">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M4 2L1 7L4 12" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 2L13 7L10 12" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="p-4 pt-3">
        <p className="text-[13px] text-n-400">{caption}</p>
      </div>
    </div>
  );
}

const items = [
  {
    before: "/images/ba/before_1.jpg", after: "/images/ba/after_1.jpg",
    story: "이사 후 3개월, 거실 정리가 막막했어요",
    caption: "거실 정리 — 6시간 컨설팅", tags: ["32평", "거실"],
  },
  {
    before: "/images/ba/before_2.jpg", after: "/images/ba/after_2.jpg",
    story: "옷이 넘쳐나는 드레스룸, 어디서부터?",
    caption: "옷장 정리 — 반나절 컨설팅", tags: ["드레스룸", "수납"],
  },
  {
    before: "/images/ba/before_3.jpg", after: "/images/ba/after_3.jpg",
    story: "조리대도 없는 주방, 살릴 수 있을까?",
    caption: "주방 정리 — 종일 컨설팅", tags: ["주방", "8시간"],
  },
];

export default function BeforeAfter() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="relative py-24 md:py-36 bg-n-50 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-n-400 font-medium mb-6">Before & After</p>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-n-900 tracking-tight leading-[1.15] mb-4">
              이런 고민,<br />이렇게 해결했어요
            </h2>
            <p className="text-n-400 text-[15px]">슬라이더를 좌우로 드래그해 비교할 수 있어요</p>
          </div>
        </FadeIn>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 mb-12">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <BASlider {...item} />
            </FadeIn>
          ))}
        </div>

        {/* Mobile: arrow navigation */}
        <div className="md:hidden mb-12">
          <FadeIn>
            <BASlider {...items[current]} />
          </FadeIn>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <button
              onClick={() => setCurrent((p) => Math.max(0, p - 1))}
              disabled={current === 0}
              className="w-10 h-10 rounded-full border border-n-200 flex items-center justify-center text-n-400 hover:border-n-300 hover:text-n-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M8 3L4 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="flex gap-1.5">
              {items.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-n-800 w-6" : "bg-n-300"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((p) => Math.min(items.length - 1, p + 1))}
              disabled={current === items.length - 1}
              className="w-10 h-10 rounded-full border border-n-200 flex items-center justify-center text-n-400 hover:border-n-300 hover:text-n-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M6 3L10 7L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <FadeIn>
          <div className="text-center">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-n-900 text-white text-[15px] font-semibold hover:bg-n-800 transition-colors active:scale-[0.97]">
              나도 이렇게 바꾸고 싶다면
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M9.5 5L13 8L9.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
