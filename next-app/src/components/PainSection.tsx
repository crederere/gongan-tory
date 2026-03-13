"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";
import Image from "next/image";

const customerStories = [
  {
    quote: "집이 너무 좁아 보이는데 어떻게 가구 배치할지 모르겠어요",
    who: "30평 · 3인가구",
    img: "/images/ba/before_1.jpg",
    story: "아이 낳고 짐이 두 배가 됐는데, 넣을 데가 없어서 거실 바닥에 다 쌓아뒀어요. 공간토리에서 동선 맞춰 가구 재배치해주시니까 같은 집이 두 배로 넓어 보여요.",
    result: "거실 바닥이 보이기 시작했어요",
  },
  {
    quote: "옷을 어떻게 정리해야 할지 몰라 그냥 쌓아두게 돼요",
    who: "드레스룸 · 맞벌이 부부",
    img: "/images/ba/before_2.jpg",
    story: "계절 바뀔 때마다 옷을 꺼내는데 30분씩 걸렸어요. 토리쌤이 계절별·용도별로 구조를 잡아주시니까 아침에 옷 고르는 게 5분도 안 걸려요.",
    result: "아침 준비 시간 30분 → 5분",
  },
  {
    quote: "청소는 많이 맡겨봤지만, 정리는 따로 해야 되더라구요",
    who: "이사 후 3개월 · 1인가구",
    img: "/images/ba/before_3.jpg",
    story: "미*같은 곳에서 청소만 계속 시켰는데 정리가 안 되니까 청소해도 금방 지저분해졌어요. 정리 한 번 받고 나니까 청소 자체가 쉬워졌어요.",
    result: "청소 시간이 반으로 줄었어요",
  },
  {
    quote: "엄두가 안 나요. 어디서부터 시작해야 할지 모르겠어요",
    who: "육아맘 · 34평",
    img: "/images/reviews/review_1.png",
    story: "아이 셋에 물건은 점점 늘고, 남편은 바쁘고, 혼자서는 도저히 엄두가 안 났어요. 토리쌤이 하나하나 같이 분류해주시니까 마음까지 정리된 느낌이에요.",
    result: "매일 전쟁 같던 집이 평화로워졌어요",
  },
];

function StoryCard({ item, index }: { item: typeof customerStories[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <motion.div
      ref={ref}
      className="group relative rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="relative overflow-hidden">
        {/* Background image */}
        <Image
          src={item.img}
          alt=""
          width={600}
          height={400}
          className="w-full aspect-[16/9] object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-n-900/80 via-n-900/40 to-n-900/20" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
          {/* Quote - always visible */}
          <p className="text-white text-base md:text-lg font-semibold leading-snug mb-2">
            &ldquo;{item.quote}&rdquo;
          </p>
          <p className="text-white/50 text-xs font-medium mb-3">{item.who}</p>

          {/* Story - reveals on scroll */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={isInView ? { height: "auto", opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-3 border-t border-white/10">
              <p className="text-white/70 text-sm leading-relaxed mb-3">
                {item.story}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/20 backdrop-blur-sm">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-primary-300 text-xs font-medium">{item.result}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PainSection() {
  return (
    <section className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-n-400 font-medium mb-6">Real Voices</p>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-n-900 leading-[1.15] tracking-tight mb-5">
              &ldquo;저도 그랬어요&rdquo;<br />
              <span className="text-primary-600">257명</span>의 고객이 같은 고민을 했습니다
            </h2>
          </div>
        </FadeIn>

        {/* Customer story cards - expandable on scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto mb-16">
          {customerStories.map((item, i) => (
            <StoryCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* Insight - light theme */}
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <div className="relative p-8 md:p-10 rounded-2xl border border-n-100 text-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-primary-400" />

              <p className="text-n-400 text-[15px] mb-3 font-medium mt-2">왜 계속 반복될까요?</p>
              <p className="text-n-900 text-xl md:text-2xl font-bold leading-snug mb-4">
                <span className="text-primary-600">나에게 맞는 방식</span>이 아닌<br />
                남의 방식으로 정리했기 때문이에요
              </p>
              <p className="text-n-500 text-[15px] leading-relaxed mb-6">
                공간토리는 고객님의 <span className="text-n-800 font-medium">생활 패턴</span>을 먼저 파악하고,<br className="hidden sm:block" />
                스스로 유지할 수 있는 구조를 만들어드립니다.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                무료 상담으로 확인하기
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
