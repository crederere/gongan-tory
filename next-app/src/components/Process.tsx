"use client";

import FadeIn from "./FadeIn";

const steps = [
  {
    num: "01",
    title: "무료 상담",
    desc: "정리가 시급한 공간 사진과 고민을 보내주세요. 상황에 맞는 맞춤 견적을 안내해 드립니다.",
  },
  {
    num: "02",
    title: "물건 분류",
    desc: "꺼낸 짐을 용도별로 분류하고, 버릴 수 있는 물건을 정리합니다. 중간중간 꼭 확인 후 진행해요.",
  },
  {
    num: "03",
    title: "맞춤 수납 & 배치",
    desc: "생활 패턴에 맞게 물건의 자리를 정하고, 쉽게 꺼내고 넣을 수 있는 방식으로 수납합니다.",
  },
  {
    num: "04",
    title: "유지관리 코칭",
    desc: "어디에 뭐가 있는지 설명드리고, 생활에 맞는 유지 방법까지 무료로 안내드립니다.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-xs text-warm-400 uppercase tracking-widest mb-3 text-center">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-900 leading-snug mb-16 text-center">
            정리는 이렇게 진행돼요
          </h2>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex gap-6 mb-12 last:mb-0">
                {/* Left: number + line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-warm-100 border border-warm-200/60 flex items-center justify-center text-sm font-semibold text-warm-600 flex-shrink-0">
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-warm-200/60 mt-3" />
                  )}
                </div>

                {/* Right: content */}
                <div className="pt-2 pb-8">
                  <h4 className="text-lg font-semibold text-warm-800 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-warm-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
