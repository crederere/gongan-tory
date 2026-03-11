"use client";

import { KAKAO_LINK } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function CTABanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="absolute top-8 right-12 w-32 h-32 rounded-full border border-white/10" />
      <div className="absolute bottom-8 left-12 w-24 h-24 rounded-full border border-white/10" />
      <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full border border-white/5" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <FadeIn>
          <p className="text-xs text-primary-200 uppercase tracking-widest mb-5 font-semibold">지금 바로 시작하세요</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-snug tracking-tight">
            더 이상 혼자 고민하지 마세요
          </h2>
          <p className="text-primary-100 mb-10 text-base max-w-md mx-auto leading-relaxed">
            무료 상담으로 시작해서, 당신에게 딱 맞는 정리를 제안해드립니다.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-primary-700 text-sm font-bold hover:bg-white/90 transition-all duration-300 shadow-xl shadow-black/10 active:scale-[0.97]">
              무료 상담 신청하기
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href={KAKAO_LINK} target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300 active:scale-[0.97]">
              카카오톡 문의
            </a>
          </div>
          <p className="text-primary-200 text-xs mt-8">
            3월 잔여 예약 <strong className="text-white">8건</strong> · 무료 상담 후 결정하셔도 됩니다
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
