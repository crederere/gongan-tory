"use client";

import FadeIn from "./FadeIn";

const rows = [
  { label: "정리 방식", other: "업체 기준 획일적 정리", us: "생활 패턴 맞춤 정리" },
  { label: "인원", other: "다수 인원 투입", us: "1~2인 전문가, 대화하며 진행" },
  { label: "결과물", other: "보기 좋은 칼각 정리", us: "실용적이고 유지 가능한 구조" },
  { label: "수납용품", other: "추가 구매 필요", us: "있는 것 최대 활용" },
  { label: "유지력", other: "시간이 지나면 원래대로", us: "유지관리 코칭으로 오래 유지" },
  { label: "사후 관리", other: "없음", us: "무료 카톡 케어 제공" },
];

export default function Comparison() {
  return (
    <section id="difference" className="py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs text-warm-400 uppercase tracking-widest mb-4">Why Us</p>
            <h2 className="text-3xl md:text-5xl font-bold text-warm-900 tracking-tight leading-snug">
              일반 정리대행과는
              <br />이렇게 다릅니다
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="max-w-3xl mx-auto">
            {/* Header row */}
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-3 mb-3 px-4">
              <div />
              <div className="text-center text-xs font-semibold text-warm-400 uppercase tracking-wide">일반 정리대행</div>
              <div className="text-center text-xs font-semibold text-sage-600 uppercase tracking-wide">공간토리</div>
            </div>

            {/* Rows */}
            <div className="space-y-2">
              {rows.map((row, i) => (
                <div key={i} className="grid grid-cols-[1fr_1fr_1fr] gap-3 items-center">
                  <div className="text-xs text-warm-400 font-medium py-3 px-4 text-right">{row.label}</div>
                  <div className="py-4 px-4 rounded-xl bg-warm-100/60 border border-warm-200/40 text-center">
                    <p className="text-sm text-warm-400 leading-relaxed">{row.other}</p>
                  </div>
                  <div className="py-4 px-4 rounded-xl bg-sage-50 border border-sage-200/60 text-center">
                    <p className="text-sm text-sage-700 font-medium leading-relaxed">{row.us}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 text-center">
              <a href="#contact" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-warm-900 text-warm-50 text-sm font-semibold hover:bg-warm-800 transition-all duration-300 shadow-lg shadow-warm-900/10 active:scale-[0.97]">
                공간토리 무료 상담 신청
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                  <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
