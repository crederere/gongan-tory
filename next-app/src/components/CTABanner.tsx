"use client";

import { KAKAO_LINK } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function CTABanner() {
  return (
    <section className="py-20 md:py-28 bg-warm-900">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <FadeIn>
          <p className="text-warm-400 text-sm mb-4">
            더 이상 혼자 고민하지 마세요
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-warm-50 mb-8">
            지금 바로, 간편하게 상담하세요
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-warm-50 text-warm-900 text-sm font-medium hover:bg-white transition-all active:scale-[0.98]"
            >
              상담 신청하기
            </a>
            <a
              href={KAKAO_LINK}
              target="_blank"
              rel="noopener"
              className="px-7 py-3.5 rounded-full border border-warm-600 text-warm-300 text-sm font-medium hover:bg-warm-800 transition-all active:scale-[0.98]"
            >
              카카오톡 문의
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
