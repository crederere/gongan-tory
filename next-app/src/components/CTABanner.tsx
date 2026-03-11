"use client";

import { KAKAO_LINK } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function CTABanner() {
  return (
    <section className="py-20 md:py-28 bg-warm-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 grain" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(196,149,106,0.12),transparent)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <FadeIn>
          <p className="text-xs text-warm-500 uppercase tracking-widest mb-5">지금 바로 시작하세요</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-snug tracking-tight">
            더 이상 혼자 고민하지 마세요
          </h2>
          <p className="text-warm-400 mb-10 text-base max-w-md mx-auto leading-relaxed">
            무료 상담으로 시작해서, 당신에게 딱 맞는 정리를 제안해드립니다.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-warm-900 text-sm font-bold hover:bg-warm-50 transition-all duration-300 shadow-xl shadow-black/20 active:scale-[0.97]">
              무료 상담 신청하기
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href={KAKAO_LINK} target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-warm-300 text-sm font-medium hover:bg-white/[0.07] hover:text-white transition-all duration-300 active:scale-[0.97]">
              카카오톡 문의
            </a>
          </div>
          <p className="text-warm-600 text-xs mt-8">
            3월 잔여 예약 <strong className="text-warm-400">8건</strong> · 무료 상담 후 결정하셔도 됩니다
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
