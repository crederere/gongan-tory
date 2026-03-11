"use client";

import { KAKAO_LINK } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function CTABanner() {
  return (
    <section className="relative py-24 md:py-32 bg-n-950 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <FadeIn>
          <p className="text-[11px] text-n-500 uppercase tracking-[0.2em] mb-6 font-medium">지금 바로 시작하세요</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-snug tracking-tight">
            더 이상 혼자<br className="sm:hidden" /> 고민하지 마세요
          </h2>
          <p className="text-n-400 mb-10 text-sm max-w-md mx-auto leading-relaxed">
            무료 상담으로 시작해서, 당신에게 딱 맞는 정리를 제안해드립니다.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-n-900 text-sm font-semibold hover:bg-n-100 transition-colors active:scale-[0.97]">
              무료 상담 신청하기
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href={KAKAO_LINK} target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-n-700 text-n-300 text-sm font-medium hover:border-n-600 hover:text-white transition-all active:scale-[0.97]">
              카카오톡 문의
            </a>
          </div>
          <p className="text-n-600 text-xs mt-8">
            3월 잔여 예약 <span className="text-n-400">8건</span> · 무료 상담 후 결정하셔도 됩니다
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
