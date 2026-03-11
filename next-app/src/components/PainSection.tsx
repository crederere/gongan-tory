"use client";

import FadeIn from "./FadeIn";
import { painPoints, recommendTags } from "@/lib/data";

export default function PainSection() {
  return (
    <section className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-n-200 to-transparent" />
      <div className="absolute top-20 right-[-5%] w-[400px] h-[400px] rounded-full bg-primary-50/50 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary-600 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-6 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              Pain Points
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-n-900 leading-snug tracking-tight mb-6">
              혹시 이런 고민,<br />하고 계신가요?
            </h2>
            <p className="text-n-500 leading-relaxed text-lg">
              정리해도 금방 다시 어질러지는 건 당신 탓이 아니에요.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-16">
          {painPoints.map((p, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="group relative p-7 rounded-2xl bg-white border border-n-200/60 hover:border-primary-200 transition-all duration-300 card-hover cursor-default overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-400 to-primary-200 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-3xl mb-5 block">{p.emoji}</span>
                <p className="text-n-700 font-semibold leading-relaxed text-[15px]">{p.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 text-center overflow-hidden shadow-xl shadow-primary-600/20">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
              <div className="absolute top-4 right-4 w-24 h-24 rounded-full border border-white/10" />
              <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full border border-white/10" />
              <div className="relative z-10">
                <p className="text-primary-200 text-sm mb-3 font-medium">왜 계속 반복될까요?</p>
                <p className="text-white text-xl md:text-2xl font-bold leading-snug mb-4">
                  <span className="text-amber-400">나에게 맞지 않는 방식</span>으로<br />
                  정리했기 때문이에요.
                </p>
                <p className="text-primary-100 text-sm leading-relaxed">
                  공간토리는 고객님의 생활 패턴을 먼저 파악하고,<br />
                  <strong className="text-white font-semibold">스스로 유지할 수 있는 구조</strong>를 만들어드립니다.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center">
            <p className="text-xs text-n-400 uppercase tracking-wider mb-5 font-medium">특히 이런 분들이 많이 찾으세요</p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {recommendTags.map((tag, i) => (
                <span key={i} className="text-sm px-5 py-2.5 rounded-full bg-n-50 border border-n-200/60 text-n-600 hover:border-primary-200 hover:text-primary-700 hover:bg-primary-50 transition-all cursor-default">
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
