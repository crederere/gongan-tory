"use client";

import FadeIn from "./FadeIn";

const steps = [
  {
    num: "01",
    title: "무료 상담",
    desc: "정리가 시급한 공간 사진과 고민을 보내주세요. 상황에 맞는 맞춤 견적을 안내해 드립니다.",
    detail: "카카오톡 또는 전화로 편하게 연락주세요",
  },
  {
    num: "02",
    title: "물건 분류",
    desc: "꺼낸 짐을 용도별로 분류하고, 버릴 수 있는 물건을 정리합니다. 중간중간 꼭 확인 후 진행해요.",
    detail: "고객님의 동의 없이 버리는 물건은 없어요",
  },
  {
    num: "03",
    title: "맞춤 수납 & 배치",
    desc: "생활 패턴에 맞게 물건의 자리를 정하고, 쉽게 꺼내고 넣을 수 있는 방식으로 수납합니다.",
    detail: "있는 수납용품을 최대한 활용해요",
  },
  {
    num: "04",
    title: "유지관리 코칭",
    desc: "어디에 뭐가 있는지 설명드리고, 생활에 맞는 유지 방법까지 무료로 안내드립니다.",
    detail: "이후에도 카톡으로 궁금한 점 언제든 OK",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-n-200 to-transparent" />
      <div className="absolute bottom-20 left-[-5%] w-[400px] h-[400px] rounded-full bg-primary-50/40 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary-600 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-6 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              Process
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-n-900 tracking-tight leading-snug">
              정리는 이렇게<br />진행돼요
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-500 text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-primary-600/20 tracking-wider">
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-3 bg-gradient-to-b from-primary-200 to-transparent" />
                  )}
                </div>

                <div className="pt-2 pb-10">
                  <h4 className="text-lg font-bold text-n-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-n-500 leading-relaxed mb-2">{step.desc}</p>
                  <p className="text-xs text-primary-600 font-medium bg-primary-50 inline-block px-3 py-1 rounded-full">{step.detail}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-4 text-center">
            <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 bg-white rounded-full px-6 py-3 border border-primary-200 hover:border-primary-300 shadow-sm hover:shadow-md transition-all duration-300">
              지금 바로 상담 신청하기
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
