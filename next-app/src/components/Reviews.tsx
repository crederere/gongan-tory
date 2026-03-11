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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-n-200 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary-600 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-6 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              Reviews
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-n-900 tracking-tight leading-snug mb-5">
              실제 고객님들의 후기
            </h2>
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => <span key={i} className="text-lg">★</span>)}
              <span className="text-sm font-bold text-n-800 ml-2">5.0</span>
              <span className="text-sm text-n-400 ml-1">· 75개 이상</span>
            </div>
          </div>
        </FadeIn>

        {/* Featured quote */}
        <FadeIn>
          <div className="mb-14 relative">
            <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary-500 to-primary-300 rounded-l-2xl" />
              <div className="absolute top-6 right-8 text-8xl text-primary-100 font-serif leading-none select-none">&rdquo;</div>
              <div className="relative z-10 max-w-2xl pl-4">
                <p className="text-n-900 text-xl md:text-2xl font-bold leading-relaxed mb-6">
                  이사 온 지 한 달이 지났는데 여전히{" "}
                  <span className="gradient-text">깔끔하게 유지 중이에요!</span>
                </p>
                <p className="text-n-500 text-sm leading-relaxed mb-6">
                  단순히 예쁘게 배치하는 걸 넘어, 이후의 유지 가능성을 최우선으로 고려해 주신 덕분입니다.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-primary-500/20">어</div>
                  <div>
                    <p className="text-n-800 text-sm font-semibold">어피치의하루 님</p>
                    <p className="text-n-400 text-xs">서울 강남구 논현동</p>
                  </div>
                  <div className="flex gap-0.5 text-amber-400 text-[11px] ml-auto">
                    {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Photo scroll */}
        <FadeIn>
          <div className="mb-14 -mx-6 px-6 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 w-max pb-2">
              {captureItems.map((item, i) => (
                <div key={i} className="w-48 flex-shrink-0">
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-n-100 shadow-lg shadow-n-900/[0.06] ring-1 ring-n-200/50">
                    <Image src={item.src} alt={item.label} fill className="object-cover" sizes="192px" loading="lazy" />
                  </div>
                  <p className="mt-2.5 text-xs text-n-400 text-center font-medium">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-n-300 text-center mt-2">← 옆으로 밀어서 더 보기</p>
          </div>
        </FadeIn>

        {/* Review grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {visible.map((r, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className="p-6 rounded-2xl bg-n-50 border border-n-200/50 h-full flex flex-col card-hover hover:border-primary-200/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center text-primary-600 text-xs font-bold border border-primary-200/50">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-n-900">{r.name} 님</p>
                      <p className="text-xs text-n-400 mt-0.5">{r.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-amber-400 text-[11px] flex-shrink-0 ml-2">
                    {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
                  </div>
                </div>
                <p className="text-sm text-n-500 leading-relaxed flex-1">
                  <strong className="text-n-800 font-medium">{r.highlight}</strong>{" "}
                  {r.text.replace(r.highlight, "")}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {reviews.length > 6 && (
          <div className="text-center mb-12">
            <button onClick={() => setShowAll(!showAll)}
              className="text-sm text-n-500 hover:text-primary-600 inline-flex items-center gap-1.5 font-semibold bg-white border border-n-200 rounded-full px-6 py-2.5 hover:border-primary-200 hover:shadow-sm transition-all">
              {showAll ? "후기 접기" : "후기 더 보기"}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={`transition-transform ${showAll ? "rotate-180" : ""}`}>
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        )}

        {/* Daangn */}
        <FadeIn>
          <a href={DAANGN_LINK} target="_blank" rel="noopener"
            className="group block rounded-2xl bg-gradient-to-br from-[#FF6F0F]/[0.06] to-[#FF6F0F]/[0.02] border border-[#FF6F0F]/15 p-8 md:p-10 mb-6 hover:border-[#FF6F0F]/30 hover:shadow-xl hover:shadow-[#FF6F0F]/5 transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-sm font-bold text-[#FF6F0F] mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-[#FF6F0F]/10 flex items-center justify-center text-xs">🥕</span>
                  당근 정리 검색 전국 1위
                </p>
                <div className="flex items-center gap-8">
                  {[{ n: "5.0", l: "평점" }, { n: "75+", l: "후기" }, { n: "257+", l: "단골" }].map((s) => (
                    <div key={s.l}>
                      <p className="text-2xl font-bold text-n-900">{s.n}</p>
                      <p className="text-xs text-n-400">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-n-500 mb-2">후기 작성 시 <strong className="text-n-700">할인 쿠폰</strong> 증정</p>
                <span className="text-sm text-[#FF6F0F] font-semibold group-hover:underline inline-flex items-center gap-1">
                  당근에서 확인하기
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform"><path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>
            </div>
          </a>
        </FadeIn>

        {/* Blog */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {blogReviews.map((r, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <a href={r.url} target="_blank" rel="noopener"
                className="group flex items-center gap-3 p-4 rounded-2xl border border-n-200/60 bg-white hover:border-primary-200 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-500 flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v12h16V6H4zm2 2h5v3H6V8zm0 4h12v1H6v-1zm0 2h12v1H6v-1z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-n-800">{r.label}</p>
                  <p className="text-xs text-n-400">{r.desc}</p>
                </div>
                <span className="text-n-300 group-hover:text-primary-500 transition-all text-sm">→</span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
