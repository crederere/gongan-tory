"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { KAKAO_LINK } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const op = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] bg-warm-950 flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-40 grain" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-5%,rgba(196,149,106,0.18),transparent_65%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-warm-50 via-warm-50/60 to-transparent z-20 pointer-events-none" />

      <motion.div style={{ y, opacity: op }} className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-36 w-full">
        {/* Urgency */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
          <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-wide text-warm-300 bg-white/[0.07] border border-white/[0.1] rounded-full px-4 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse flex-shrink-0" />
            3월 예약 30건 중 <strong className="text-white font-semibold">22건 마감</strong> · 잔여 8건
          </span>
        </motion.div>

        {/* Badges */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }} className="flex flex-wrap gap-2 mb-10">
          {["당근 정리 검색 전국 1위", "평점 5.0 · 후기 75개+", "서울 여성 전문"].map((b) => (
            <span key={b} className="text-[11px] text-warm-400 border border-white/[0.1] rounded-full px-3 py-1">{b}</span>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 52 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold leading-[1.04] tracking-tighter text-white mb-8"
          style={{ fontSize: "clamp(2.8rem, 7.5vw, 6.5rem)" }}
        >
          정리해도<br />
          또 어질러지는 집,<br />
          <span className="text-accent">이제 끝내드릴게요</span>
        </motion.h1>

        {/* Sub */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.28 }}
          className="text-warm-400 text-base md:text-lg leading-relaxed max-w-[420px] mb-12">
          보여주기식 칼각 정리가 아닌,{" "}
          <strong className="text-warm-200 font-medium">생활 패턴에 맞는 맞춤 정리</strong>로
          다시 어질러지지 않는 공간을 만들어드립니다.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.38 }} className="flex flex-wrap gap-3 mb-20">
          <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/20 active:scale-[0.97]">
            무료 상담 신청하기
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href={KAKAO_LINK} target="_blank" rel="noopener"
            className="px-7 py-3.5 rounded-full border border-white/15 text-warm-400 text-sm font-medium hover:bg-white/[0.06] hover:text-warm-200 hover:border-white/25 transition-all duration-300 active:scale-[0.97]">
            카카오톡 문의
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
          className="pt-10 border-t border-white/[0.07] flex flex-wrap gap-x-12 gap-y-6">
          {[
            { n: "5.0", sub: "당근마켓 평점" },
            { n: "75+", sub: "누적 고객 후기" },
            { n: "257+", sub: "단골 고객" },
            { n: "전국 1위", sub: "당근 정리 검색" },
          ].map((s, i) => (
            <motion.div key={s.sub} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 + i * 0.09 }}>
              <p className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none mb-1.5">{s.n}</p>
              <p className="text-[11px] text-warm-600 tracking-wide">{s.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-30">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.3, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 opacity-25">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/60" />
          <svg width="10" height="7" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
