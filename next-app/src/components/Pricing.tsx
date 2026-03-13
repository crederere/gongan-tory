"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const allIncluded = [
  "무료 사전 상담",
  "생활 패턴 분석",
  "맞춤 수납 배치",
  "유지관리 코칭",
  "사후 카톡 케어",
  "추가 비용 없음",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-36 bg-n-50 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-n-400 font-medium mb-6">Pricing</p>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-n-900 tracking-tight leading-[1.15] mb-4">
              투명한 가격 안내
            </h2>
            <p className="text-n-500 text-[15px]">처음이라면 반나절부터 부담 없이 시작하세요</p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            {/* 반나절 - Recommended */}
            <FadeIn delay={0}>
              <motion.div
                className="relative bg-white rounded-2xl overflow-hidden h-full"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="h-1 bg-primary-500" />
                <div className="p-6 md:p-7 flex flex-col h-full">
                  <span className="self-start text-[10px] font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full tracking-wider uppercase mb-4">추천</span>

                  <h4 className="text-xl font-bold text-n-900 mb-0.5">반나절 정리</h4>
                  <p className="text-sm text-n-400 mb-5">6시간 · 1~2인 방문</p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-extrabold text-n-900 tracking-tight">329,000</span>
                    <span className="text-base text-n-400">원~</span>
                  </div>

                  <div className="space-y-2 mb-6 flex-1">
                    {["처음이라면 부담 없는 6시간", "생활 패턴 분석 맞춤 정리", "당일 추가 가능 (시간당 5만원)"].map((t, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-n-600">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5 text-primary-400">
                          <path d="M3 7L5.5 9.5L11 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {t}
                      </div>
                    ))}
                  </div>

                  <a href="#contact" className="block w-full py-3.5 rounded-full bg-primary-500 text-white text-sm font-semibold text-center hover:bg-primary-600 transition-colors active:scale-[0.98]">
                    이 플랜으로 상담하기
                  </a>
                </div>
              </motion.div>
            </FadeIn>

            {/* 종일 */}
            <FadeIn delay={0.06}>
              <motion.div
                className="relative bg-n-900 rounded-2xl overflow-hidden h-full"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="p-6 md:p-7 flex flex-col h-full">
                  <span className="self-start text-[10px] font-semibold text-n-400 bg-n-800 px-3 py-1 rounded-full tracking-wider uppercase mb-4">종일</span>

                  <h4 className="text-xl font-bold text-white mb-0.5">종일 정리</h4>
                  <p className="text-sm text-n-500 mb-5">8시간 · 1~2인 방문</p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-extrabold text-white tracking-tight">429,000</span>
                    <span className="text-base text-n-500">원~</span>
                  </div>

                  <div className="space-y-2 mb-6 flex-1">
                    {["하루에 확실하게 끝내고 싶은 분", "넓은 공간·짐이 많은 경우", "여유로운 시간으로 꼼꼼 정리"].map((t, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-n-400">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5 text-n-500">
                          <path d="M3 7L5.5 9.5L11 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {t}
                      </div>
                    ))}
                  </div>

                  <a href="#contact" className="block w-full py-3.5 rounded-full bg-white text-n-900 text-sm font-semibold text-center hover:bg-n-100 transition-colors active:scale-[0.98]">
                    이 플랜으로 상담하기
                  </a>
                </div>
              </motion.div>
            </FadeIn>
          </div>

          {/* Coupon banner */}
          <FadeIn>
            <div className="flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-primary-50 border border-primary-100/60 mb-5">
              <span className="text-2xl">🎁</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-primary-800">후기 작성 시 최대 2만원 할인</p>
                <p className="text-xs text-primary-600/70">서비스 이용 후 후기를 남겨주시면 다음 이용 시 할인 적용</p>
              </div>
            </div>
          </FadeIn>

          {/* Extra */}
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 md:p-5 rounded-2xl bg-white border border-n-100 mb-6">
              <div>
                <p className="text-sm font-semibold text-n-800">추가 정리</p>
                <p className="text-xs text-n-400">당일 최대 2시간 추가 가능</p>
              </div>
              <p className="text-sm font-bold text-n-700">시간당 50,000원~</p>
            </div>
          </FadeIn>

          {/* All included */}
          <FadeIn>
            <div className="p-5 rounded-2xl bg-white border border-n-100 mb-6">
              <p className="text-xs text-n-400 uppercase tracking-[0.15em] font-medium mb-4">모든 서비스에 포함</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4">
                {allIncluded.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-n-600">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-primary-400 flex-shrink-0">
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="text-center text-[13px] text-n-400">
              * 공간 사진과 함께 문의하시면 더 정확한 견적을 안내드립니다
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
