"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { KAKAO_LINK } from "@/lib/data";

export default function FloatingUI() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed bottom-0 left-0 right-0 z-40 pb-safe"
          >
            <div className="glass-strong border-t border-n-100 px-4 py-3">
              <div className="mx-auto max-w-lg flex items-center gap-3">
                <div className="flex-1">
                  <a href="#contact"
                    className="block w-full py-3 rounded-full bg-n-900 text-white text-sm font-semibold text-center hover:bg-n-800 transition-colors active:scale-[0.98]">
                    무료 상담 신청하기
                  </a>
                </div>
              </div>
              <p className="text-center mt-1 text-[10px] text-n-400">
                3월 잔여 <span className="text-n-600 font-medium">8건</span> · 무료 상담 후 결정하셔도 됩니다
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {visible && (
          <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            href={KAKAO_LINK}
            target="_blank"
            rel="noopener"
            className="fixed bottom-20 right-4 z-40 w-[48px] h-[48px] rounded-full bg-[#FEE500] shadow-lg shadow-black/10 flex items-center justify-center hover:scale-105 transition-transform active:scale-95"
            aria-label="카카오톡 상담"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#3C1E1E">
              <path d="M12 3C6.5 3 2 6.58 2 11c0 2.83 1.82 5.32 4.56 6.73l-1.12 4.16c-.08.3.25.55.52.39l4.82-3.01c.4.04.81.07 1.22.07 5.5 0 10-3.58 10-8s-4.5-8-10-8z"/>
            </svg>
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}
