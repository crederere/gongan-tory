"use client";

import FadeIn from "./FadeIn";
import { painPoints, recommendTags } from "@/lib/data";

export default function PainSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-900 leading-snug mb-14 text-center">
            혹시 이런 고민,
            <br />
            하고 계신가요?
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
          {painPoints.map((p, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="group relative p-6 rounded-2xl bg-white border border-warm-200/60 hover:border-warm-300 transition-all hover:shadow-lg hover:shadow-warm-900/[0.03]">
                <span className="text-2xl mb-3 block">{p.emoji}</span>
                <p className="text-sm leading-relaxed text-warm-600">
                  {p.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="text-center max-w-lg mx-auto mb-16">
            <p className="text-warm-500 mb-3">
              <strong className="text-warm-800">
                나에게 맞지 않는 방식
              </strong>
              으로 정리했기 때문이에요.
            </p>
            <p className="text-warm-400 text-sm leading-relaxed">
              공간토리는 고객님의{" "}
              <strong className="text-warm-600">생활 패턴에 맞춰</strong>
              <br />
              스스로 유지할 수 있는 구조를 만들어드립니다.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center">
            <p className="text-xs text-warm-400 uppercase tracking-wider mb-4">
              특히 이런 분들이 많이 찾으세요
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {recommendTags.map((tag, i) => (
                <span
                  key={i}
                  className="text-sm px-4 py-2 rounded-full bg-sage-50 text-sage-700 border border-sage-200/60"
                >
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
