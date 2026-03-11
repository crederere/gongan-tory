"use client";

import FadeIn from "./FadeIn";
import Image from "next/image";
import {
  YOUTUBE_LINK,
  INSTAGRAM_LINK,
  BLOG_LINK,
  THREADS_LINK,
} from "@/lib/data";

const channels = [
  { href: YOUTUBE_LINK, label: "유튜브" },
  { href: INSTAGRAM_LINK, label: "인스타그램" },
  { href: BLOG_LINK, label: "블로그" },
  { href: THREADS_LINK, label: "쓰레드" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto ring-4 ring-white shadow-xl">
                <Image
                  src="/images/profile/tory.jpg"
                  alt="토리쌤 프로필"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-6">
              안녕하세요, 토리쌤이에요
            </h2>

            <p className="text-warm-500 leading-relaxed mb-8">
              간호사를 그만두고, 무작정 10가구를 무료로 정리해주면서 이 일을
              시작했어요.
            </p>

            <blockquote className="relative px-8 py-6 mb-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-5xl text-warm-200 font-serif leading-none select-none">
                &ldquo;
              </div>
              <p className="text-warm-600 leading-relaxed italic text-sm md:text-base pt-4">
                정리를 못 하는 이유는 물건이 많아서가 아니었어요.
                <br />
                심리적인 문제, 습관, 그 사람의 삶 때문이었어요.
              </p>
            </blockquote>

            <p className="text-warm-700 font-medium leading-relaxed">
              정리는 물건을 치우는 게 아니라,
              <br />
              그 사람의 일상을 찾아가는 과정이에요.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {channels.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  target="_blank"
                  rel="noopener"
                  className="text-xs px-4 py-2 rounded-full border border-warm-200 text-warm-500 hover:text-warm-700 hover:border-warm-300 transition-all"
                >
                  {ch.label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
