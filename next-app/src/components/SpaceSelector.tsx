"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

type SpaceKey = "living" | "kitchen" | "dressroom" | "kids" | "study" | "bedroom" | "bathroom";

interface Space {
  key: SpaceKey;
  label: string;
  emoji: string;
  desc: string;
  gridArea: string;
  popular?: boolean;
}

const spaces: Space[] = [
  { key: "dressroom", label: "드레스룸", emoji: "👗", desc: "계절 옷·액세서리 수납", gridArea: "1 / 1 / 3 / 2", popular: true },
  { key: "kitchen", label: "주방", emoji: "🍳", desc: "식기·식품·소도구 정리", gridArea: "1 / 2 / 3 / 3" },
  { key: "study", label: "서재", emoji: "📚", desc: "책·서류·작업 공간", gridArea: "1 / 3 / 3 / 4" },
  { key: "living", label: "거실", emoji: "🛋️", desc: "가족 물건이 모이는 중심", gridArea: "3 / 1 / 5 / 3", popular: true },
  { key: "kids", label: "아이방", emoji: "🧸", desc: "장난감·책·학용품", gridArea: "3 / 3 / 5 / 4" },
  { key: "bedroom", label: "침실", emoji: "🛏️", desc: "옷장·서랍·침구류", gridArea: "5 / 1 / 6 / 3" },
  { key: "bathroom", label: "욕실·현관", emoji: "🚿", desc: "세면용품·신발장", gridArea: "5 / 3 / 6 / 4" },
];

export default function SpaceSelector() {
  const [selected, setSelected] = useState<Set<SpaceKey>>(new Set(["living", "dressroom"]));
  const [isFullMode, setIsFullMode] = useState(false);

  const toggleSpace = (key: SpaceKey) => {
    if (isFullMode) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <section className="relative py-24 md:py-36 bg-n-50 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-n-400 font-medium mb-6">Custom Service</p>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-n-900 tracking-tight leading-[1.15] mb-4">
              원하는 공간만 골라<br />정리할 수 있어요
            </h2>
            <p className="text-n-500 text-[15px]">전체가 아니어도 괜찮아요. 가장 급한 곳부터 시작하세요.</p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {/* Toggle */}
          <FadeIn>
            <div className="flex justify-center gap-2 mb-10">
              <button
                onClick={() => setIsFullMode(false)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  !isFullMode ? "bg-n-900 text-white shadow-md" : "bg-white border border-n-200 text-n-500 hover:border-n-300"
                }`}
              >
                부분 정리
              </button>
              <button
                onClick={() => setIsFullMode(true)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  isFullMode ? "bg-n-900 text-white shadow-md" : "bg-white border border-n-200 text-n-500 hover:border-n-300"
                }`}
              >
                전체 정리
              </button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-8 md:gap-12 items-start">
            {/* Floor plan */}
            <FadeIn>
              <div className="bg-white rounded-2xl border border-n-100 p-4 md:p-5 shadow-sm">
                <div className="grid grid-rows-[repeat(5,1fr)] grid-cols-3 gap-1.5 aspect-square">
                  {spaces.map((space) => {
                    const isActive = isFullMode || selected.has(space.key);
                    return (
                      <motion.button
                        key={space.key}
                        onClick={() => toggleSpace(space.key)}
                        className={`relative rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center gap-1 ${
                          isActive
                            ? "bg-primary-50 border-primary-300"
                            : "bg-n-50/50 border-n-200/60 hover:border-n-300"
                        } ${isFullMode ? "cursor-default" : "cursor-pointer"}`}
                        style={{ gridArea: space.gridArea }}
                        whileTap={!isFullMode ? { scale: 0.97 } : {}}
                      >
                        <span className="text-lg md:text-xl">{space.emoji}</span>
                        <span className={`text-[11px] md:text-xs font-semibold transition-colors ${isActive ? "text-primary-700" : "text-n-400"}`}>
                          {space.label}
                        </span>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-primary-500 flex items-center justify-center"
                          >
                            <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </motion.div>
                        )}
                        {space.popular && !isFullMode && !isActive && (
                          <span className="absolute bottom-1 text-[8px] text-primary-400 font-bold">인기</span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
                {!isFullMode && (
                  <p className="text-center text-[11px] text-n-400 mt-3">공간을 탭해서 선택 / 해제하세요</p>
                )}
              </div>
            </FadeIn>

            {/* Right side info */}
            <FadeIn delay={0.1}>
              <div>
                <AnimatePresence mode="wait">
                  {isFullMode ? (
                    <motion.div
                      key="full"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-6 rounded-2xl bg-white border border-n-100 mb-6">
                        <p className="text-lg font-bold text-n-900 mb-2">집 전체 정리</p>
                        <p className="text-[15px] text-n-500 leading-relaxed mb-4">
                          거실·주방·침실·드레스룸 등 모든 공간을 한 번에.
                          평수와 짐의 양에 따라 맞춤 견적을 안내드려요.
                        </p>
                        <div className="flex items-center gap-4 py-3 border-t border-n-100">
                          <div>
                            <p className="text-xs text-n-400">예상 시간</p>
                            <p className="text-sm font-semibold text-n-800">6~8시간</p>
                          </div>
                          <div className="w-px h-8 bg-n-100" />
                          <div>
                            <p className="text-xs text-n-400">가격</p>
                            <p className="text-sm font-semibold text-n-800">견적 상담</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="partial"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-sm text-n-400 mb-4">
                        선택된 공간 <span className="text-primary-600 font-bold text-base">{selected.size}</span>
                      </p>
                      <div className="space-y-2 mb-6 min-h-[120px]">
                        <AnimatePresence>
                          {spaces
                            .filter((s) => selected.has(s.key))
                            .map((s) => (
                              <motion.div
                                key={s.key}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-n-100"
                              >
                                <span className="text-lg">{s.emoji}</span>
                                <div className="flex-1">
                                  <p className="text-sm font-semibold text-n-800">{s.label}</p>
                                  <p className="text-xs text-n-400">{s.desc}</p>
                                </div>
                                <button onClick={() => toggleSpace(s.key)} className="text-n-300 hover:text-n-500 transition-colors">
                                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M3 3L11 11M11 3L3 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                  </svg>
                                </button>
                              </motion.div>
                            ))}
                        </AnimatePresence>
                        {selected.size === 0 && (
                          <p className="text-sm text-n-400 py-8 text-center">배치도에서 공간을 선택해보세요</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Customer quote */}
                <div className="p-4 rounded-xl bg-primary-50/50 border border-primary-100/50 mb-6">
                  <p className="text-[13px] text-n-600 italic leading-relaxed">
                    &ldquo;전체 다 할 엄두가 안 나서 드레스룸만 먼저 했는데,
                    결과를 보니 바로 거실도 부탁드렸어요!&rdquo;
                  </p>
                  <p className="text-[11px] text-n-400 mt-1.5">— 서울 강남구 고객님</p>
                </div>

                <a href="#contact" className="block w-full py-4 rounded-full bg-n-900 text-white text-[15px] font-semibold text-center hover:bg-n-800 transition-colors active:scale-[0.98]">
                  {!isFullMode && selected.size > 0
                    ? `선택한 ${selected.size}개 공간 상담 신청`
                    : "무료 상담 신청하기"
                  }
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
