"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { reviews, blogReviews, DAANGN_LINK } from "@/lib/data";
import Image from "next/image";

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? reviews : reviews.slice(0, 3);

  const captureItems = [
    { src: "/images/reviews/review_1.png", label: "거실 정리 완료" },
    { src: "/images/reviews/review_2.png", label: "옷장 정리 완료" },
    { src: "/images/reviews/review_3.png", label: "주방 정리 완료" },
    { src: "/images/reviews/review_4.png", label: "아이방 정리 완료" },
    { src: "/images/reviews/review_5.png", label: "화장대 정리 완료" },
  ];

  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-xs text-warm-400 uppercase tracking-widest mb-3 text-center">
            Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-900 leading-snug mb-14 text-center">
            실제 고객님들의 후기
          </h2>
        </FadeIn>

        {/* Photo captures */}
        <FadeIn>
          <div className="mb-14 -mx-6 px-6 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 w-max pb-2">
              {captureItems.map((item, i) => (
                <div key={i} className="w-52 flex-shrink-0">
                  <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-warm-200">
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-cover"
                      sizes="208px"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-2 text-xs text-warm-400 text-center">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-warm-300 text-center mt-3">
              ← 옆으로 밀어서 더 보기
            </p>
          </div>
        </FadeIn>

        {/* Text reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {visible.map((r, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="p-6 rounded-2xl bg-white border border-warm-200/60 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-semibold text-warm-800">
                      {r.name} 님
                    </p>
                    <p className="text-xs text-warm-400">{r.location}</p>
                  </div>
                  <div className="flex gap-0.5 text-amber-400 text-xs">
                    {[...Array(5)].map((_, j) => (
                      <span key={j}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-warm-500 leading-relaxed flex-1">
                  <strong className="text-warm-700">{r.highlight}</strong>{" "}
                  {r.text.replace(r.highlight, "")}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {reviews.length > 3 && (
          <div className="text-center mb-14">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-warm-500 hover:text-warm-700 transition-colors inline-flex items-center gap-1"
            >
              {showAll ? "후기 접기" : "후기 더 보기"}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={`transition-transform ${showAll ? "rotate-180" : ""}`}
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Daangn banner */}
        <FadeIn>
          <a
            href={DAANGN_LINK}
            target="_blank"
            rel="noopener"
            className="block rounded-2xl bg-gradient-to-br from-[#FF6F0F]/5 to-[#FF6F0F]/10 border border-[#FF6F0F]/15 p-8 mb-8 hover:shadow-lg hover:shadow-[#FF6F0F]/5 transition-all group"
          >
            <p className="text-sm font-bold text-[#FF6F0F] mb-4">
              🥕 당근 &apos;정리&apos; 검색 전국 1위
            </p>
            <div className="flex items-center gap-8 sm:gap-12 mb-4">
              <div>
                <p className="text-2xl font-bold text-warm-900">5.0</p>
                <p className="text-xs text-warm-400">평점</p>
              </div>
              <div className="w-px h-8 bg-warm-200" />
              <div>
                <p className="text-2xl font-bold text-warm-900">75+</p>
                <p className="text-xs text-warm-400">후기</p>
              </div>
              <div className="w-px h-8 bg-warm-200" />
              <div>
                <p className="text-2xl font-bold text-warm-900">257+</p>
                <p className="text-xs text-warm-400">단골</p>
              </div>
            </div>
            <p className="text-xs text-warm-500 mb-3">
              🎫 당근 후기 작성 시 <strong>할인 쿠폰</strong> 증정!
            </p>
            <span className="text-xs text-[#FF6F0F] font-medium group-hover:underline">
              당근마켓에서 프로필 확인하기 →
            </span>
          </a>
        </FadeIn>

        {/* External reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {blogReviews.map((r, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-3 p-4 rounded-xl border border-warm-200/60 bg-white hover:border-warm-300 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-sage-50 flex items-center justify-center text-sage-600 flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v12h16V6H4zm2 2h5v3H6V8zm0 4h12v1H6v-1zm0 2h12v1H6v-1z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-warm-800">
                    {r.label}
                  </p>
                  <p className="text-xs text-warm-400">{r.desc}</p>
                </div>
                <span className="text-warm-300 group-hover:text-warm-500 transition-colors">
                  →
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
