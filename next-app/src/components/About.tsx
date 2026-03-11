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
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden ring-1 ring-n-200/50">
                  <Image src="/images/profile/tory.jpg" alt="토리쌤 프로필" width={288} height={288} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-white rounded-xl px-4 py-2.5 shadow-lg shadow-n-900/[0.06] border border-n-100">
                  <p className="text-[10px] text-n-400 font-medium">당근마켓 평점</p>
                  <p className="text-lg font-bold text-n-900">5.0 <span className="text-amber-400">★</span></p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-n-400 font-medium mb-6">About</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-n-900 mb-6 leading-snug tracking-tight">
                안녕하세요,<br />토리쌤이에요
              </h2>
              <p className="text-n-500 leading-relaxed mb-6 text-[15px]">
                간호사를 그만두고, 무작정 10가구를 무료로 정리해주면서 이 일을 시작했어요.
              </p>

              <blockquote className="border-l-2 border-n-200 pl-5 mb-8 py-1">
                <p className="text-n-600 leading-relaxed italic text-[15px]">
                  &ldquo;정리를 못 하는 이유는 물건이 많아서가 아니었어요.<br />
                  심리적인 문제, 습관, 그 사람의 삶 때문이었어요.&rdquo;
                </p>
              </blockquote>

              <p className="text-n-600 font-medium leading-relaxed mb-8 text-[15px]">
                정리는 물건을 치우는 게 아니라,<br />
                그 사람의 일상을 찾아가는 과정이에요.
              </p>

              <div className="space-y-2 mb-8">
                {credentials.map((c, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-n-600">
                    <span className="w-1 h-1 rounded-full bg-n-300 flex-shrink-0" />
                    {c}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {channels.map((ch) => (
                  <a key={ch.label} href={ch.href} target="_blank" rel="noopener"
                    className="text-xs px-4 py-2 rounded-full border border-n-200 text-n-500 hover:text-n-700 hover:border-n-300 transition-all">
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
