"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#reviews", label: "후기" },
    { href: "#about", label: "토리쌤" },
    { href: "#pricing", label: "가격" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "glass-strong border-b border-n-200/60 shadow-[0_1px_24px_-6px_rgba(0,0,0,0.06)]"
        : "bg-transparent"
    }`}>
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-[68px]">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center shadow-md shadow-primary-600/20">
            <span className="text-white text-xs font-bold tracking-tight">G</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-n-900">공간토리</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-sm text-n-500 hover:text-n-900 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-n-100/70">
              {l.label}
            </a>
          ))}
          <a href="/survey"
            className="text-sm text-n-500 hover:text-n-900 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-n-100/70">
            설문지
          </a>
          <a href="#contact"
            className="ml-3 text-sm font-semibold px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-700 hover:to-primary-600 transition-all duration-300 btn-glow active:scale-[0.97]">
            상담 신청
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-xl hover:bg-n-100/60 transition-colors" aria-label="메뉴">
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} className="block w-5 h-[1.5px] bg-n-800 rounded-full" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="block w-5 h-[1.5px] bg-n-800 rounded-full" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} className="block w-5 h-[1.5px] bg-n-800 rounded-full" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass-strong border-t border-n-200/50 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="text-base text-n-700 hover:text-n-900 hover:bg-n-100/60 transition-all px-4 py-3 rounded-xl">
                  {l.label}
                </a>
              ))}
              <a href="/survey" onClick={() => setOpen(false)} className="text-base text-n-700 hover:text-n-900 hover:bg-n-100/60 transition-all px-4 py-3 rounded-xl">설문지</a>
              <a href="#contact" onClick={() => setOpen(false)}
                className="mt-3 text-center text-sm font-semibold px-5 py-3.5 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white btn-glow">
                상담 신청
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
