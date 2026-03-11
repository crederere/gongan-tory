"use client";

import FadeIn from "./FadeIn";
import { painPoints, recommendTags } from "@/lib/data";

export default function PainSection() {
  return (
    <section className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="max-w-2xl mx-auto mb-16">
            <p className="text-[11px] uppercase tracking-[0.2em] text-n-400 font-medium mb-6">Pain Points</p>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-n-900 leading-[1.15] tracking-tight mb-5">
              혹시 이런 고민,<br />하고 계신가요?
            </h2>
            <p className="text-n-500 leading-relaxed">
              정리해도 금방 다시 어질러지는 건 당신 탓이 아니에요.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto mb-16">
          {painPoints.map((p, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="p-6 rounded-2xl bg-white border border-n-100 card-hover cursor-default">
                <span className="text-2xl mb-4 block">{p.emoji}</span>
                <p className="text-n-700 font-medium leading-relaxed text-[15px]">{p.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative p-8 md:p-10 rounded-2xl bg-n-900 text-center overflow-hidden">
              <p className="text-n-400 text-sm mb-3 font-medium">왜 계속 반복될까요?</p>
              <p className="text-white text-xl md:text-2xl font-bold leading-snug mb-4">
                <span className="text-primary-400">나에게 맞지 않는 방식</span>으로<br />
                정리했기 때문이에요.
              </p>
              <p className="text-n-400 text-sm leading-relaxed">
                공간토리는 고객님의 생활 패턴을 먼저 파악하고,<br />
                <span className="text-white font-medium">스스로 유지할 수 있는 구조</span>를 만들어드립니다.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center">
            <p className="text-[11px] text-n-400 uppercase tracking-[0.15em] mb-5 font-medium">특히 이런 분들이 많이 찾으세요</p>
            <div className="flex flex-wrap justify-center gap-2">
              {recommendTags.map((tag, i) => (
                <span key={i} className="text-sm px-4 py-2 rounded-full border border-n-200 text-n-500 hover:text-n-700 hover:border-n-300 transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
