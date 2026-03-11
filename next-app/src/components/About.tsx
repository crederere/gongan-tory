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
    <section id="about" className="py-20 md:py-32 bg-warm-50">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-2xl shadow-warm-900/12 ring-1 ring-warm-200/60">
                  <Image src="/images/profile/tory.jpg" alt="토리쌤 프로필" width={288} height={288} className="w-full h-full object-cover" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-warm-900/8 border border-warm-100">
                  <p className="text-xs text-warm-500">당근마켓 평점</p>
                  <p className="text-xl font-bold text-warm-900">5.0 ★</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-xs text-warm-400 uppercase tracking-widest mb-4">About</p>
              <h2 className="text-3xl md:text-4xl font-bold text-warm-900 mb-6 leading-snug tracking-tight">
                안녕하세요,
                <br />토리쌤이에요
              </h2>
              <p className="text-warm-500 leading-relaxed mb-6">
                간호사를 그만두고, 무작정 10가구를 무료로 정리해주면서 이 일을 시작했어요.
              </p>

              <blockquote className="border-l-2 border-accent pl-5 mb-8">
                <p className="text-warm-700 leading-relaxed italic">
                  &ldquo;정리를 못 하는 이유는 물건이 많아서가 아니었어요.<br />
                  심리적인 문제, 습관, 그 사람의 삶 때문이었어요.&rdquo;
                </p>
              </blockquote>

              <p className="text-warm-600 font-medium leading-relaxed mb-8">
                정리는 물건을 치우는 게 아니라,<br />
                그 사람의 일상을 찾아가는 과정이에요.
              </p>

              {/* Credentials */}
              <div className="space-y-2 mb-8">
                {credentials.map((c, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-warm-600">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent flex-shrink-0">
                      <path d="M2 7L5.5 10.5L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {c}
                  </div>
                ))}
              </div>

              {/* Channels */}
              <div className="flex flex-wrap gap-2">
                {channels.map((ch) => (
                  <a key={ch.label} href={ch.href} target="_blank" rel="noopener"
                    className="text-xs px-4 py-2 rounded-full border border-warm-200 text-warm-500 hover:text-warm-800 hover:border-warm-300 hover:bg-white transition-all">
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
