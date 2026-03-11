"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { KAKAO_LINK } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const op = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center overflow-hidden bg-white">
      {/* Gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary-200/30 blur-[120px] animate-subtle-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary-100/40 blur-[100px] animate-subtle-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-primary-300/15 blur-[80px] animate-float" />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-[0.3]" />

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-400/50 to-transparent" />

      <motion.div style={{ y, opacity: op }} className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-32 w-full">
        {/* Urgency */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8">
          <span className="inline-flex items-center gap-2.5 text-[11px] font-medium tracking-wide text-primary-700 bg-primary-50 border border-primary-200/60 rounded-full px-5 py-2.5 shadow-sm shadow-primary-600/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400" />
            </span>
            3월 예약 30건 중 <strong className="text-primary-800 font-bold">22건 마감</strong> · 잔여 8건
          </span>
        </motion.div>

        {/* Badges */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }} className="flex flex-wrap gap-2 mb-10">
          {["당근 정리 검색 전국 1위", "평점 5.0 · 후기 75개+", "서울 여성 전문"].map((b) => (
            <span key={b} className="text-[11px] text-n-500 border border-n-200 rounded-full px-3.5 py-1.5 bg-white/80 backdrop-blur-sm">{b}</span>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 52 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-extrabold leading-[1.02] tracking-tighter text-n-900 mb-8"
          style={{ fontSize: "clamp(2.8rem, 7.5vw, 6.5rem)" }}
        >
          정리해도<br />
          또 어질러지는 집,<br />
          <span className="gradient-text-hero">이제 끝내드릴게요</span>
        </motion.h1>

        {/* Sub */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.28 }}
          className="text-n-500 text-base md:text-lg leading-relaxed max-w-[440px] mb-14">
          보여주기식 칼각 정리가 아닌,{" "}
          <strong className="text-n-800 font-semibold">생활 패턴에 맞는 맞춤 정리</strong>로
          다시 어질러지지 않는 공간을 만들어드립니다.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.38 }} className="flex flex-wrap gap-3 mb-24">
          <a href="#contact" className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-bold hover:from-primary-700 hover:to-primary-600 transition-all duration-300 btn-glow active:scale-[0.97]">
            무료 상담 신청하기
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
              <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href={KAKAO_LINK} target="_blank" rel="noopener"
            className="px-8 py-4 rounded-full border border-n-200 text-n-600 text-sm font-medium hover:bg-n-50 hover:border-n-300 hover:text-n-800 transition-all duration-300 bg-white/80 backdrop-blur-sm active:scale-[0.97]">
            카카오톡 문의
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
          className="pt-10 border-t border-n-200/60 flex flex-wrap gap-x-14 gap-y-6">
          {[
            { n: "5.0", sub: "당근마켓 평점", icon: "★" },
            { n: "75+", sub: "누적 고객 후기", icon: "♥" },
            { n: "257+", sub: "단골 고객", icon: "◆" },
            { n: "전국 1위", sub: "당근 정리 검색", icon: "▲" },
          ].map((s, i) => (
            <motion.div key={s.sub} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 + i * 0.09 }}
              className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-500 text-xs">
                {s.icon}
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-n-900 tracking-tight leading-none">{s.n}</p>
                <p className="text-[11px] text-n-400 tracking-wide mt-0.5">{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.3, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 opacity-25">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-n-400" />
          <svg width="10" height="7" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
