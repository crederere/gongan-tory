"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const videos = [
  {
    id: "m0ja72aSDWM",
    title: "정리 받고 나서 삶의 질이 바뀌었어요",
    who: "서울 강남구 · 30평 · 3인가구",
    quote: "집이 넓어진 게 아니라, 마음이 넓어진 느낌이에요",
  },
  {
    id: "m0ja72aSDWM",
    title: "이사 후 정리를 미루다 한번에 해결!",
    who: "서울 송파구 · 24평 · 2인가구",
    quote: "엄두가 안 났는데 하루 만에 끝나니까 허탈할 정도",
  },
  {
    id: "m0ja72aSDWM",
    title: "육아맘의 드레스룸이 이렇게 바뀌었어요",
    who: "경기 분당구 · 34평 · 4인가구",
    quote: "아이 옷 찾는 시간이 사라졌어요",
  },
];

export default function VideoReviews() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-36 bg-n-50 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-n-400 font-medium mb-6">Video Reviews</p>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-n-900 tracking-tight leading-[1.15] mb-4">
              고객님이 직접<br />이야기해주셨어요
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {videos.map((v, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <motion.div
                className="group rounded-2xl overflow-hidden bg-white border border-n-100 cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={() => setPlaying(i)}
              >
                {/* Video thumbnail / player */}
                <div className="relative aspect-[9/16] max-h-[320px] bg-n-100 overflow-hidden">
                  {playing === i ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                      className="absolute inset-0 w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                        alt={v.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-n-900/30 group-hover:bg-n-900/20 transition-colors" />
                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M6 4L16 10L6 16V4Z" fill="#1e293b"/>
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="text-sm font-semibold text-n-800 mb-1">{v.title}</p>
                  <p className="text-[11px] text-n-400 mb-2">{v.who}</p>
                  <p className="text-xs text-n-500 italic">&ldquo;{v.quote}&rdquo;</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Fullscreen video modal */}
      <AnimatePresence>
        {playing !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-n-900/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setPlaying(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-sm aspect-[9/16] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videos[playing].id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              <button
                onClick={() => setPlaying(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-n-900/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-n-900/80 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 3L11 11M11 3L3 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
