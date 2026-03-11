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
    <section id="difference" className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-n-200 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary-600 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-6 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              Why Us
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-n-900 tracking-tight leading-snug">
              일반 정리대행과는<br />이렇게 다릅니다
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-3 mb-3 px-4">
              <div />
              <div className="text-center text-xs font-semibold text-n-400 uppercase tracking-wide">일반 정리대행</div>
              <div className="text-center">
                <span className="text-xs font-bold text-primary-600 bg-primary-50 border border-primary-100 px-3 py-1 rounded-full">공간토리</span>
              </div>
            </div>

            <div className="space-y-2">
              {rows.map((row, i) => (
                <div key={i} className="grid grid-cols-[1fr_1fr_1fr] gap-3 items-center">
                  <div className="text-xs text-n-400 font-medium py-3 px-4 text-right">{row.label}</div>
                  <div className="py-4 px-4 rounded-xl bg-n-50 border border-n-200/40 text-center">
                    <p className="text-sm text-n-400 leading-relaxed">{row.other}</p>
                  </div>
                  <div className="py-4 px-4 rounded-xl bg-primary-50 border border-primary-100 text-center">
                    <p className="text-sm text-primary-700 font-medium leading-relaxed">{row.us}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="#contact" className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-n-900 to-n-800 text-white text-sm font-bold hover:from-n-800 hover:to-n-700 transition-all duration-300 shadow-xl shadow-n-900/15 active:scale-[0.97]">
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
