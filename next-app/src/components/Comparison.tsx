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
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-n-400 font-medium mb-6">Why Us</p>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-n-900 tracking-tight leading-[1.15]">
              일반 정리대행과는<br />이렇게 다릅니다
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-3 mb-3 px-4">
              <div />
              <div className="text-center text-[11px] font-medium text-n-300 uppercase tracking-wider">일반 정리대행</div>
              <div className="text-center text-[11px] font-semibold text-n-900 uppercase tracking-wider">공간토리</div>
            </div>

            <div className="space-y-1.5">
              {rows.map((row, i) => (
                <div key={i} className="grid grid-cols-[1fr_1fr_1fr] gap-3 items-center">
                  <div className="text-[12px] text-n-400 font-medium py-3 px-4 text-right">{row.label}</div>
                  <div className="py-3.5 px-4 rounded-xl bg-n-50 text-center">
                    <p className="text-sm text-n-400 leading-relaxed">{row.other}</p>
                  </div>
                  <div className="py-3.5 px-4 rounded-xl bg-white border border-n-100 text-center">
                    <p className="text-sm text-n-800 font-medium leading-relaxed">{row.us}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-n-900 text-white text-sm font-semibold hover:bg-n-800 transition-colors active:scale-[0.97]">
                공간토리 무료 상담 신청
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
