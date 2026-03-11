"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";
import { YOUTUBE_LINK, INSTAGRAM_LINK, BLOG_LINK, THREADS_LINK } from "@/lib/data";

const channels = [
  { href: YOUTUBE_LINK, label: "유튜브" },
  { href: INSTAGRAM_LINK, label: "인스타그램" },
  { href: BLOG_LINK, label: "블로그" },
  { href: THREADS_LINK, label: "쓰레드" },
];

const credentials = [
  "전직 간호사 출신 정리 전문가",
  "10가구 무료 정리로 커리어 시작",
  "당근마켓 정리 검색 전국 1위",
  "누적 고객 257명 이상",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 bg-n-50 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-n-200 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary-200/40 to-primary-100/20 blur-sm" />
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10 ring-1 ring-white/50">
                  <Image src="/images/profile/tory.jpg" alt="토리쌤 프로필" width={288} height={288} className="w-full h-full object-cover" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-5 py-3 shadow-xl shadow-n-900/[0.08] border border-n-100">
                  <p className="text-xs text-n-500 font-medium">당근마켓 평점</p>
                  <p className="text-xl font-bold text-n-900">5.0 <span className="text-amber-400">★</span></p>
                </div>
                {/* Decorative circle */}
                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full border-2 border-primary-200/50" />
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary-600 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-6 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                About
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-n-900 mb-6 leading-snug tracking-tight">
                안녕하세요,<br />토리쌤이에요
              </h2>
              <p className="text-n-500 leading-relaxed mb-6 text-[15px]">
                간호사를 그만두고, 무작정 10가구를 무료로 정리해주면서 이 일을 시작했어요.
              </p>

              <blockquote className="border-l-[3px] border-primary-500 pl-5 mb-8 py-1">
                <p className="text-n-700 leading-relaxed italic text-[15px]">
                  &ldquo;정리를 못 하는 이유는 물건이 많아서가 아니었어요.<br />
                  심리적인 문제, 습관, 그 사람의 삶 때문이었어요.&rdquo;
                </p>
              </blockquote>

              <p className="text-n-600 font-medium leading-relaxed mb-8 text-[15px]">
                정리는 물건을 치우는 게 아니라,<br />
                그 사람의 일상을 찾아가는 과정이에요.
              </p>

              <div className="space-y-2.5 mb-8">
                {credentials.map((c, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-n-600">
                    <div className="w-5 h-5 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 14 14" fill="none" className="text-primary-500">
                        <path d="M2 7L5.5 10.5L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {c}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {channels.map((ch) => (
                  <a key={ch.label} href={ch.href} target="_blank" rel="noopener"
                    className="text-xs px-4 py-2 rounded-full border border-n-200 text-n-500 bg-white hover:text-primary-600 hover:border-primary-200 hover:bg-primary-50 transition-all">
                    {ch.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
