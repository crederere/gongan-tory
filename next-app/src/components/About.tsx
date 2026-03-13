"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import Image from "next/image";
import { YOUTUBE_LINK, INSTAGRAM_LINK, BLOG_LINK, THREADS_LINK } from "@/lib/data";

const channels = [
  { href: YOUTUBE_LINK, label: "YouTube", icon: "▶" },
  { href: INSTAGRAM_LINK, label: "Instagram", icon: "◎" },
  { href: BLOG_LINK, label: "Blog", icon: "✎" },
  { href: THREADS_LINK, label: "Threads", icon: "@" },
];

const stats = [
  { value: "257+", label: "누적 고객" },
  { value: "5.0", label: "당근 평점" },
  { value: "1위", label: "전국 검색" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 bg-n-50 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-center">
            {/* Left: Photo */}
            <div className="flex justify-center md:justify-start">
              <motion.div
                className="relative"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden ring-1 ring-n-200/50 shadow-xl shadow-n-900/[0.06]">
                  <Image src="/images/profile/tory.jpg" alt="토리쌤 프로필" width={320} height={320} className="w-full h-full object-cover" />
                </div>

                {/* Floating stats card */}
                <div className="absolute -bottom-4 -right-4 md:-right-8 bg-white rounded-2xl p-4 shadow-xl shadow-n-900/[0.08] border border-n-100">
                  <div className="flex gap-5">
                    {stats.map((s) => (
                      <div key={s.label} className="text-center">
                        <p className="text-lg font-bold text-n-900 leading-none">{s.value}</p>
                        <p className="text-[10px] text-n-400 mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute -top-3 -left-3 bg-primary-500 text-white rounded-xl px-3 py-1.5 shadow-lg">
                  <p className="text-[11px] font-bold">전직 간호사 출신</p>
                </div>
              </motion.div>
            </div>

            {/* Right: Content */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-n-400 font-medium mb-4">About</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-n-900 mb-3 leading-snug tracking-tight">
                안녕하세요,<br />토리쌤이에요
              </h2>
              <p className="text-primary-500 text-sm font-medium mb-6">정리 전문가 · 공간토리 대표</p>

              <p className="text-n-600 leading-relaxed mb-6 text-base">
                간호사를 그만두고, <span className="text-n-800 font-semibold">무작정 10가구를 무료로 정리</span>해주면서 이 일을 시작했어요.
                그때 알게 됐어요 — 정리 못 하는 건 게으른 게 아니라,
                <span className="text-n-800 font-semibold"> 방법을 몰랐던 거</span>라는 걸.
              </p>

              <blockquote className="relative pl-5 mb-8 py-2">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-primary-400" />
                <p className="text-n-700 leading-relaxed text-base italic">
                  &ldquo;정리를 못 하는 이유는 물건이 많아서가 아니에요.<br />
                  심리적인 문제, 습관, 그 사람의 삶 때문이에요.&rdquo;
                </p>
              </blockquote>

              <p className="text-n-800 font-semibold leading-relaxed mb-8 text-lg">
                정리는 물건을 치우는 게 아니라,<br />
                그 사람의 일상을 찾아가는 과정이에요.
              </p>

              {/* Channel links */}
              <div className="flex flex-wrap gap-2">
                {channels.map((ch) => (
                  <a key={ch.label} href={ch.href} target="_blank" rel="noopener"
                    className="group inline-flex items-center gap-2 text-[13px] px-4 py-2.5 rounded-full bg-white border border-n-200 text-n-500 hover:text-n-800 hover:border-n-300 hover:shadow-sm transition-all">
                    <span className="text-xs opacity-50 group-hover:opacity-100 transition-opacity">{ch.icon}</span>
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
