"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { reviews, blogReviews, DAANGN_LINK } from "@/lib/data";
import Image from "next/image";

const captureItems = [
  { src: "/images/reviews/review_1.png", label: "거실 정리 완료" },
  { src: "/images/reviews/review_2.png", label: "옷장 정리 완료" },
  { src: "/images/reviews/review_3.png", label: "주방 정리 완료" },
  { src: "/images/reviews/review_4.png", label: "아이방 정리 완료" },
  { src: "/images/reviews/review_5.png", label: "화장대 정리 완료" },
];

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? reviews : reviews.slice(0, 6);

  return (
    <section id="reviews" className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-n-400 font-medium mb-6">Reviews</p>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-n-900 tracking-tight leading-[1.15] mb-4">
              실제 고객님들의 후기
            </h2>
            <div className="flex items-center gap-1.5 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => <span key={i} className="text-sm">★</span>)}
              <span className="text-sm font-semibold text-n-800 ml-1.5">5.0</span>
              <span className="text-sm text-n-400 ml-1">· 75개 이상</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mb-14">
            <div className="p-8 md:p-10 rounded-2xl border border-n-100 relative">
              <div className="absolute top-8 right-10 text-7xl text-n-100 font-serif leading-none select-none">&rdquo;</div>
              <div className="relative z-10 max-w-2xl">
                <p className="text-n-900 text-xl md:text-2xl font-bold leading-relaxed mb-5">
                  이사 온 지 한 달이 지났는데 여전히
                  깔끔하게 유지 중이에요!
                </p>
                <p className="text-n-500 text-sm leading-relaxed mb-6">
                  단순히 예쁘게 배치하는 걸 넘어, 이후의 유지 가능성을 최우선으로 고려해 주신 덕분입니다.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-n-100 flex items-center justify-center text-n-500 text-xs font-semibold">어</div>
                  <div>
                    <p className="text-n-800 text-sm font-semibold">어피치의하루 님</p>
                    <p className="text-n-400 text-xs">서울 강남구 논현동</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mb-14 -mx-6 px-6 overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 w-max pb-2">
              {captureItems.map((item, i) => (
                <div key={i} className="w-44 flex-shrink-0">
                  <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-n-100 ring-1 ring-n-100">
                    <Image src={item.src} alt={item.label} fill className="object-cover" sizes="176px" loading="lazy" />
                  </div>
                  <p className="mt-2 text-[11px] text-n-400 text-center">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-n-300 text-center mt-2">← 옆으로 밀어서 더 보기</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {visible.map((r, i) => (
            <FadeIn key={i} delay={i * 0.03}>
              <div className="p-5 rounded-2xl bg-white border border-n-100 h-full flex flex-col card-hover">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-n-100 flex items-center justify-center text-n-500 text-[10px] font-semibold">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-n-800">{r.name} 님</p>
                      <p className="text-[11px] text-n-400">{r.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-amber-400 text-[10px] flex-shrink-0 ml-2">
                    {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
                  </div>
                </div>
                <p className="text-[13px] text-n-500 leading-relaxed flex-1">
                  <span className="text-n-700 font-medium">{r.highlight}</span>{" "}
                  {r.text.replace(r.highlight, "")}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {reviews.length > 6 && (
          <div className="text-center mb-12">
            <button onClick={() => setShowAll(!showAll)}
              className="text-[13px] text-n-500 hover:text-n-800 inline-flex items-center gap-1.5 font-medium border border-n-200 rounded-full px-5 py-2 hover:border-n-300 transition-all">
              {showAll ? "후기 접기" : "후기 더 보기"}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={`transition-transform ${showAll ? "rotate-180" : ""}`}>
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        )}

        <FadeIn>
          <a href={DAANGN_LINK} target="_blank" rel="noopener"
            className="group block rounded-2xl border border-n-100 p-7 mb-5 hover:border-n-200 hover:shadow-sm transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-n-800 mb-3 flex items-center gap-2">
                  <span className="text-base">🥕</span>
                  당근 정리 검색 전국 1위
                </p>
                <div className="flex items-center gap-8">
                  {[{ n: "5.0", l: "평점" }, { n: "75+", l: "후기" }, { n: "257+", l: "단골" }].map((s) => (
                    <div key={s.l}>
                      <p className="text-xl font-bold text-n-900">{s.n}</p>
                      <p className="text-[11px] text-n-400">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <span className="text-sm text-n-400 group-hover:text-n-600 font-medium inline-flex items-center gap-1 transition-colors">
                당근에서 확인하기
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform"><path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </div>
          </a>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {blogReviews.map((r, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <a href={r.url} target="_blank" rel="noopener"
                className="group flex items-center gap-3 p-4 rounded-xl border border-n-100 hover:border-n-200 hover:shadow-sm transition-all duration-300">
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-n-800">{r.label}</p>
                  <p className="text-[11px] text-n-400">{r.desc}</p>
                </div>
                <span className="text-n-300 group-hover:text-n-500 transition-colors text-sm">→</span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
