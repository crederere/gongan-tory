"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "무료 상담",
    desc: "사진과 고민을 보내주시면\n맞춤 견적을 안내드려요",
    badge: "카톡 · 전화 · 폼",
    img: "/images/reviews/review_1.png",
  },
  {
    num: "02",
    title: "물건 분류",
    desc: "용도별로 꼼꼼하게 분류하고\n확인 후 함께 정리해요",
    badge: "동의 없이 버리지 않아요",
    img: "/images/reviews/review_2.png",
  },
  {
    num: "03",
    title: "맞춤 수납",
    desc: "꺼내기 쉽고 넣기 쉬운\n생활 패턴 맞춤 구조",
    badge: "있는 용품 최대 활용",
    img: "/images/reviews/review_3.png",
  },
  {
    num: "04",
    title: "유지 코칭",
    desc: "물건 위치 설명부터\n유지 방법까지 무료 안내",
    badge: "이후 카톡 케어 OK",
    img: "/images/reviews/review_4.png",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-n-400 font-medium mb-6">Process</p>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-n-900 tracking-tight leading-[1.15]">
              정리는 이렇게<br />진행돼요
            </h2>
          </div>
        </FadeIn>

        {/* Horizontal scroll on mobile, 4-col on desktop */}
        <div className="relative -mx-6 px-6 md:mx-0 md:px-0 overflow-x-auto scrollbar-hide mb-10">
          <div className="flex gap-3 md:gap-4 w-max md:w-full md:grid md:grid-cols-4">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <motion.div
                  className="w-[260px] md:w-auto group relative rounded-2xl overflow-hidden flex-shrink-0"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  {/* Photo */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 260px, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-n-900/90 via-n-900/30 to-n-900/10" />

                    {/* Step number */}
                    <div className="absolute top-4 left-4">
                      <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/10">
                        <span className="text-white text-[11px] font-bold">{step.num}</span>
                      </div>
                    </div>

                    {/* Arrow connector (not on last) */}
                    {i < 3 && (
                      <div className="hidden md:flex absolute top-1/2 -right-3 z-10 w-6 h-6 rounded-full bg-white shadow-md items-center justify-center border border-n-100">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M3 5H7M5.5 3L7 5L5.5 7" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-white/75 text-sm leading-relaxed whitespace-pre-line mb-3">{step.desc}</p>
                      <span className="inline-block text-[11px] text-white/60 font-medium px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                        {step.badge}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
        <p className="md:hidden text-[11px] text-n-300 text-center mb-8">← 옆으로 밀어서 더 보기</p>

        <FadeIn>
          <div className="text-center">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-n-900 text-white text-[15px] font-semibold hover:bg-n-800 transition-colors active:scale-[0.97]">
              지금 바로 상담 신청하기
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
