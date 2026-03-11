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
    <section id="reviews" className="py-20 md:py-32 bg-warm-50">
      <div className="mx-auto max-w-6xl px-6">

        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs text-warm-400 uppercase tracking-widest mb-4">Reviews</p>
            <h2 className="text-3xl md:text-5xl font-bold text-warm-900 tracking-tight leading-snug mb-5">
              실제 고객님들의 후기
            </h2>
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => <span key={i} className="text-lg">★</span>)}
              <span className="text-sm font-bold text-warm-800 ml-2">5.0</span>
              <span className="text-sm text-warm-400 ml-1">· 75개 이상</span>
            </div>
          </div>
        </FadeIn>

        {/* Featured quote */}
        <FadeIn>
          <div className="mb-12 p-8 md:p-12 rounded-3xl bg-warm-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-25 grain" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(196,149,106,0.15),transparent_60%)]" />
            <div className="relative z-10 max-w-2xl">
              <div className="text-5xl text-accent/40 font-serif leading-none mb-4 select-none">&ldquo;</div>
              <p className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-6">
                이사 온 지 한 달이 지났는데 여전히{" "}
                <span className="text-accent">깔끔하게 유지 중이에요!</span>
              </p>
              <p className="text-warm-400 text-sm leading-relaxed mb-6">
                단순히 예쁘게 배치하는 걸 넘어, 이후의 유지 가능성을 최우선으로 고려해 주신 덕분입니다.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-bold">어</div>
                <div>
                  <p className="text-white text-sm font-medium">어피치의하루 님</p>
                  <p className="text-warm-500 text-xs">서울 강남구 논현동</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Photo scroll */}
        <FadeIn>
          <div className="mb-12 -mx-6 px-6 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 w-max pb-2">
              {captureItems.map((item, i) => (
                <div key={i} className="w-48 flex-shrink-0">
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-warm-200 shadow-lg shadow-warm-900/5">
                    <Image src={item.src} alt={item.label} fill className="object-cover" sizes="192px" loading="lazy" />
                  </div>
                  <p className="mt-2 text-xs text-warm-400 text-center">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-warm-300 text-center mt-2">← 옆으로 밀어서 더 보기</p>
          </div>
        </FadeIn>

        {/* Review grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {visible.map((r, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className="p-6 rounded-2xl bg-white border border-warm-200/60 h-full flex flex-col card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm font-semibold text-warm-900">{r.name} 님</p>
                    <p className="text-xs text-warm-400 mt-0.5">{r.location}</p>
                  </div>
                  <div className="flex gap-0.5 text-amber-400 text-[11px] flex-shrink-0 ml-2">
                    {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
                  </div>
                </div>
                <p className="text-sm text-warm-500 leading-relaxed flex-1">
                  <strong className="text-warm-800 font-medium">{r.highlight}</strong>{" "}
                  {r.text.replace(r.highlight, "")}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {reviews.length > 6 && (
          <div className="text-center mb-12">
            <button onClick={() => setShowAll(!showAll)}
              className="text-sm text-warm-500 hover:text-warm-700 transition-colors inline-flex items-center gap-1.5 font-medium">
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
            className="group block rounded-3xl bg-gradient-to-br from-[#FF6F0F]/[0.08] to-[#FF6F0F]/[0.04] border border-[#FF6F0F]/15 p-8 md:p-10 mb-6 hover:border-[#FF6F0F]/30 hover:shadow-xl hover:shadow-[#FF6F0F]/5 transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-sm font-bold text-[#FF6F0F] mb-3">🥕 당근 정리 검색 전국 1위</p>
                <div className="flex items-center gap-8">
                  {[{ n: "5.0", l: "평점" }, { n: "75+", l: "후기" }, { n: "257+", l: "단골" }].map((s) => (
                    <div key={s.l}>
                      <p className="text-2xl font-bold text-warm-900">{s.n}</p>
                      <p className="text-xs text-warm-400">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-warm-500 mb-2">🎫 후기 작성 시 <strong>할인 쿠폰</strong> 증정</p>
                <span className="text-sm text-[#FF6F0F] font-semibold group-hover:underline">당근에서 확인하기 →</span>
              </div>
            </div>
          </a>
        </FadeIn>

        {/* Blog */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {blogReviews.map((r, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <a href={r.url} target="_blank" rel="noopener"
                className="group flex items-center gap-3 p-4 rounded-2xl border border-warm-200/60 bg-white hover:border-warm-300 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-sage-50 flex items-center justify-center text-sage-600 flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v12h16V6H4zm2 2h5v3H6V8zm0 4h12v1H6v-1zm0 2h12v1H6v-1z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-warm-800">{r.label}</p>
                  <p className="text-xs text-warm-400">{r.desc}</p>
                </div>
                <span className="text-warm-300 group-hover:text-warm-600 transition-all text-sm">→</span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
