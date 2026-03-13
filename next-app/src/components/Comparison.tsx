"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeIn from "./FadeIn";

const rows = [
  { label: "정리 방식", other: "업체 기준 획일적 정리", us: "생활 패턴 맞춤 정리" },
  { label: "인원", other: "다수 인원 투입", us: "1~2인 전문가, 대화하며 진행" },
  { label: "결과물", other: "보기 좋은 칼각 정리", us: "실용적이고 유지 가능한 구조" },
  { label: "수납용품", other: "추가 구매 필요", us: "있는 것 최대 활용" },
  { label: "유지력", other: "시간이 지나면 원래대로", us: "유지관리 코칭으로 오래 유지" },
  { label: "사후 관리", other: "없음", us: "무료 카톡 케어 제공" },
];

function CompRow({ row, index }: { row: typeof rows[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-[1.2fr_1fr_1fr] gap-2 md:gap-3 items-center"
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="py-3 px-3 md:px-4 text-right">
        <p className="text-[13px] md:text-sm text-n-400 font-medium">{row.label}</p>
      </div>
      <div className="py-3.5 md:py-4 px-3 md:px-5 rounded-xl bg-n-50 text-center">
        <p className="text-[12px] md:text-[15px] text-n-400 leading-relaxed">{row.other}</p>
      </div>
      <div className="py-3.5 md:py-4 px-3 md:px-5 rounded-xl bg-primary-50/50 border border-primary-100/60 text-center">
        <p className="text-[12px] md:text-[15px] text-primary-700 font-medium leading-relaxed">{row.us}</p>
      </div>
    </motion.div>
  );
}

export default function Comparison() {
  const summaryRef = useRef<HTMLDivElement>(null);
  const summaryInView = useInView(summaryRef, { once: true, margin: "-5% 0px" });

  return (
    <section id="difference" className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-n-400 font-medium mb-6">Why Us</p>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-n-900 tracking-tight leading-[1.15]">
              일반 정리대행과는<br />이렇게 다릅니다
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <FadeIn>
            <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-2 md:gap-3 mb-3 px-2">
              <div />
              <div className="text-center">
                <span className="text-[11px] md:text-xs font-medium text-n-300 uppercase tracking-wider">일반 정리대행</span>
              </div>
              <div className="text-center">
                <span className="text-[11px] md:text-xs font-semibold text-primary-600 uppercase tracking-wider">공간토리</span>
              </div>
            </div>
          </FadeIn>

          {/* Rows - staggered reveal */}
          <div className="space-y-1.5">
            {rows.map((row, i) => (
              <CompRow key={i} row={row} index={i} />
            ))}
          </div>

          {/* Summary */}
          <motion.div
            ref={summaryRef}
            className="mt-8 p-4 md:p-5 rounded-2xl bg-n-50 border border-n-100"
            initial={{ opacity: 0, y: 15 }}
            animate={summaryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-2 md:gap-3 items-center">
              <div className="text-right px-3 md:px-4">
                <p className="text-xs text-n-400 font-medium">결론</p>
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm text-n-300 line-through">예쁜데 유지 안됨</p>
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm text-primary-600 font-bold">예쁘고 유지도 됨 ✓</p>
              </div>
            </div>
          </motion.div>

          <FadeIn>
            <div className="mt-14 text-center">
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-n-900 text-white text-[15px] font-semibold hover:bg-n-800 transition-colors active:scale-[0.97]">
                공간토리 무료 상담 신청
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
