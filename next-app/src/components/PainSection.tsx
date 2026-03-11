"use client";

import FadeIn from "./FadeIn";
import { painPoints, recommendTags } from "@/lib/data";

export default function PainSection() {
  return (
    <section className="py-20 md:py-32 bg-warm-50">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs text-warm-400 uppercase tracking-widest mb-4">Pain Points</p>
            <h2 className="text-3xl md:text-5xl font-bold text-warm-900 leading-snug tracking-tight mb-6">
              혹시 이런 고민,
              <br />하고 계신가요?
            </h2>
            <p className="text-warm-400 leading-relaxed">
              정리해도 금방 다시 어질러지는 건 당신 탓이 아니에요.
            </p>
          </div>
        </FadeIn>

        {/* Pain cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-16">
          {painPoints.map((p, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="group relative p-7 rounded-3xl bg-white border border-warm-200/60 card-hover cursor-default">
                <span className="text-3xl mb-5 block">{p.emoji}</span>
                <p className="text-warm-700 font-medium leading-relaxed">{p.text}</p>
                <div className="absolute top-0 left-0 right-0 h-px rounded-t-3xl bg-gradient-to-r from-transparent via-warm-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Insight block */}
        <FadeIn>
          <div className="max-w-2xl mx-auto mb-16">
            <div className="p-8 md:p-10 rounded-3xl bg-warm-900 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-30 grain" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(196,149,106,0.15),transparent)]" />
              <div className="relative z-10">
                <p className="text-warm-400 text-sm mb-3">왜 계속 반복될까요?</p>
                <p className="text-white text-xl md:text-2xl font-bold leading-snug mb-4">
                  <span className="text-accent">나에게 맞지 않는 방식</span>으로<br />
                  정리했기 때문이에요.
                </p>
                <p className="text-warm-400 text-sm leading-relaxed">
                  공간토리는 고객님의 생활 패턴을 먼저 파악하고,<br />
                  <strong className="text-warm-200">스스로 유지할 수 있는 구조</strong>를 만들어드립니다.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Tags */}
        <FadeIn>
          <div className="text-center">
            <p className="text-xs text-warm-400 uppercase tracking-wider mb-5">특히 이런 분들이 많이 찾으세요</p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {recommendTags.map((tag, i) => (
                <span key={i} className="text-sm px-5 py-2.5 rounded-full bg-white border border-warm-200/60 text-warm-600 hover:border-warm-300 hover:text-warm-800 transition-all cursor-default">
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
