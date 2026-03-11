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
      scrolled ? "glass-strong border-b border-n-100 shadow-[0_1px_12px_-4px_rgba(0,0,0,0.05)]" : "bg-transparent"
    }`}>
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        <a href="#" className="flex items-center gap-2">
          <span className="w-1.5 h-5 rounded-full bg-primary-600" />
          <span className="text-[17px] font-bold tracking-tight text-n-900">공간토리</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-[13px] text-n-500 hover:text-n-900 transition-colors px-4 py-2 rounded-lg">
              {l.label}
            </a>
          ))}
          <a href="/survey"
            className="text-[13px] text-n-500 hover:text-n-900 transition-colors px-4 py-2 rounded-lg">
            설문지
          </a>
          <a href="#contact"
            className="ml-3 text-[13px] font-semibold px-5 py-2 rounded-full bg-n-900 text-white hover:bg-n-800 transition-colors">
            상담 신청
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg" aria-label="메뉴">
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} className="block w-5 h-[1.5px] bg-n-800 rounded-full" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="block w-5 h-[1.5px] bg-n-800 rounded-full" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} className="block w-5 h-[1.5px] bg-n-800 rounded-full" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-strong border-t border-n-100 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="text-[15px] text-n-700 hover:text-n-900 transition-colors px-3 py-2.5 rounded-lg">
                  {l.label}
                </a>
              ))}
              <a href="/survey" onClick={() => setOpen(false)} className="text-[15px] text-n-700 px-3 py-2.5 rounded-lg">설문지</a>
              <a href="#contact" onClick={() => setOpen(false)}
                className="mt-2 text-center text-[13px] font-semibold px-5 py-3 rounded-full bg-n-900 text-white">
                상담 신청
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
