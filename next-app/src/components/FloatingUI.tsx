"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { KAKAO_LINK } from "@/lib/data";

export default function FloatingUI() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [couponOpen, setCouponOpen] = useState(false);
  const [couponDismissed, setCouponDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!couponDismissed) setCouponOpen(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, [couponDismissed]);

  return (
    <>
      {/* Coupon toast - compact pill style */}
      <AnimatePresence>
        {couponOpen && !couponDismissed && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed bottom-24 left-4 md:left-8 z-50"
          >
            <div className="flex items-center gap-3 bg-white rounded-2xl shadow-xl shadow-n-900/10 border border-n-100 p-3 pr-4 max-w-[260px]">
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">🎁</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-bold text-n-900 leading-tight">후기 쓰면 2만원 할인</p>
                <p className="text-[11px] text-n-400 mt-0.5">다음 이용 시 적용</p>
              </div>
              <button
                onClick={() => { setCouponOpen(false); setCouponDismissed(true); }}
                className="text-n-300 hover:text-n-500 transition-colors flex-shrink-0"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 3L11 11M11 3L3 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reservation badge */}
      <AnimatePresence>
        {visible && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-20 right-4 md:right-8 z-40"
          >
            <div className="relative glass-strong rounded-full px-5 py-2.5 border border-n-100 shadow-lg shadow-black/[0.06] flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              <span className="text-[13px] font-medium text-n-700">
                3월 마감 임박 · <span className="text-primary-600 font-semibold">잔여 8건</span>
              </span>
              <button
                onClick={() => setDismissed(true)}
                className="ml-1 text-n-300 hover:text-n-500 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M3 3L11 11M11 3L3 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
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
              <p className="text-center mt-1.5 text-xs text-n-400">
                3월 잔여 <span className="text-n-600 font-medium">8건</span> · 후기 시 <span className="text-primary-500 font-medium">최대 2만원 할인</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Kakao FAB */}
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
            className="fixed bottom-20 right-4 z-40 w-[52px] h-[52px] rounded-full bg-[#FEE500] shadow-lg shadow-black/10 flex items-center justify-center hover:scale-105 transition-transform active:scale-95"
            aria-label="카카오톡 상담"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#3C1E1E">
              <path d="M12 3C6.5 3 2 6.58 2 11c0 2.83 1.82 5.32 4.56 6.73l-1.12 4.16c-.08.3.25.55.52.39l4.82-3.01c.4.04.81.07 1.22.07 5.5 0 10-3.58 10-8s-4.5-8-10-8z"/>
            </svg>
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}
