"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { KAKAO_LINK } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const op = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center bg-white">
      <motion.div style={{ y, opacity: op }} className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-24 w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 text-[11px] text-n-400 tracking-wide font-medium mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            3월 예약 마감 임박 · 잔여 8건
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-extrabold leading-[1.05] tracking-[-0.03em] text-n-900 mb-8"
          style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
        >
          정리해도<br />
          또 어질러지는 집,<br />
          <span className="text-primary-600">이제 끝내드릴게요</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
          className="text-n-500 text-base md:text-lg leading-relaxed max-w-md mb-12">
          보여주기식 칼각 정리가 아닌,{" "}
          <span className="text-n-700 font-medium">생활 패턴에 맞는 맞춤 정리</span>로
          다시 어질러지지 않는 공간을 만들어드립니다.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap gap-3 mb-20">
          <a href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-n-900 text-white text-sm font-semibold hover:bg-n-800 transition-colors active:scale-[0.98]">
            무료 상담 신청하기
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href={KAKAO_LINK} target="_blank" rel="noopener"
            className="px-7 py-3.5 rounded-full border border-n-200 text-n-600 text-sm font-medium hover:border-n-300 hover:bg-n-50 transition-all active:scale-[0.98]">
            카카오톡 문의
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-10 pt-10 border-t border-n-100">
          {[
            { n: "5.0", label: "당근마켓 평점" },
            { n: "75+", label: "누적 후기" },
            { n: "257+", label: "단골 고객" },
            { n: "전국 1위", label: "당근 정리 검색" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-n-900 tracking-tight">{s.n}</p>
              <p className="text-[11px] text-n-400 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 opacity-20">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-n-400" />
          <svg width="10" height="7" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
