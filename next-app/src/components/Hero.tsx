"use client";

import { motion } from "framer-motion";
import { KAKAO_LINK, VIDEO_URL } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Subtle background grain */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(196,149,106,0.08),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 w-full">
        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium text-warm-600 bg-warm-100 rounded-full px-4 py-2 border border-warm-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            3월 예약 30건 중 <strong className="text-warm-800">22건 마감</strong> — 잔여 8건
          </span>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {[
            "당근 정리 검색 전국 1위",
            "평점 5.0 · 후기 75개+",
            "서울 여성 전문",
          ].map((badge) => (
            <span
              key={badge}
              className="text-xs text-warm-500 border border-warm-200 rounded-full px-3 py-1"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight text-warm-950 mb-6"
        >
          정리해도
          <br />
          또 어질러지는 집,
          <br />
          <span className="relative">
            <span className="relative z-10 text-accent-dark">이제 끝내드릴게요</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="absolute bottom-1 md:bottom-2 left-0 right-0 h-3 md:h-4 bg-accent-light/50 origin-left -z-0 rounded-sm"
            />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg text-warm-500 leading-relaxed max-w-lg mb-10"
        >
          보여주기식 칼각 정리가 아닌,
          <br className="hidden sm:block" /> 고객님의{" "}
          <strong className="text-warm-700">생활 패턴에 맞는 맞춤 정리</strong>
          로
          <br className="hidden sm:block" /> 다시 어질러지지 않는 공간을
          만들어드립니다.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full bg-warm-900 text-warm-50 text-sm font-medium hover:bg-warm-800 transition-all hover:shadow-lg hover:shadow-warm-900/10 active:scale-[0.98]"
          >
            무료 상담 신청하기
          </a>
          <a
            href={KAKAO_LINK}
            target="_blank"
            rel="noopener"
            className="px-7 py-3.5 rounded-full border border-warm-300 text-warm-700 text-sm font-medium hover:bg-warm-100 transition-all active:scale-[0.98]"
          >
            카카오톡 문의하기
          </a>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-20"
        >
          <p className="text-xs text-warm-400 mb-4 tracking-wide uppercase">
            정리 후 유지법까지 직접 설명해드려요
          </p>
          <div className="relative rounded-2xl overflow-hidden bg-warm-200 aspect-video shadow-2xl shadow-warm-900/5">
            <iframe
              src={VIDEO_URL}
              title="공간토리 정리 후 유지법 설명 영상"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
