"use client";

import FadeIn from "./FadeIn";

const otherItems = [
  "다수 인원이 업체 기준대로 정리",
  "보기에만 좋은 칼각 정리",
  "수납용품 추가 구매 필요",
  "시간이 지나면 다시 어질러짐",
];

const usItems = [
  "1~2인 전문가가 대화하며 맞춤 정리",
  "생활 패턴에 맞는 실용적 정리",
  "있는 것 활용, 추가 구매 없음",
  "유지 방법 코칭으로 오래 유지",
];

export default function Comparison() {
  return (
    <section id="difference" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-900 leading-snug mb-14 text-center">
            일반 정리대행과는
            <br />
            이렇게 다릅니다
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {/* Other */}
            <div className="p-8 rounded-2xl bg-warm-100/50 border border-warm-200/40">
              <h4 className="text-sm font-semibold text-warm-400 mb-6 uppercase tracking-wide">
                일반 정리대행
              </h4>
              <ul className="space-y-4">
                {otherItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-warm-400">
                    <span className="mt-1 w-1 h-1 rounded-full bg-warm-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Us */}
            <div className="p-8 rounded-2xl bg-sage-50 border border-sage-200/60">
              <h4 className="text-sm font-semibold text-sage-700 mb-6 uppercase tracking-wide">
                공간토리
              </h4>
              <ul className="space-y-4">
                {usItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-sage-700">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-0.5 flex-shrink-0 text-sage-500"
                    >
                      <path
                        d="M3 8L6.5 11.5L13 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
