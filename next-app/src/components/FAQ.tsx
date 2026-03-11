"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { faqs } from "@/lib/data";

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b border-warm-200/60 ${index === 0 ? "border-t" : ""}`}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group gap-4">
        <span className="text-sm md:text-base font-medium text-warm-800 group-hover:text-warm-900 transition-colors leading-relaxed">
          {q}
        </span>
        <div className={`w-7 h-7 rounded-full border border-warm-200 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? "bg-warm-900 border-warm-900" : "group-hover:border-warm-400"}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
            className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
            <path d="M6 2V10M2 6H10" stroke={open ? "white" : "#9c8670"} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-warm-500 leading-relaxed pr-10">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs text-warm-400 uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold text-warm-900 tracking-tight leading-snug">
              자주 묻는 질문
            </h2>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq, i) => (
              <FAQItem key={i} index={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="max-w-2xl mx-auto mt-10 p-5 rounded-2xl bg-warm-50 border border-warm-200/40 text-center">
            <p className="text-sm text-warm-500 mb-3">더 궁금한 점이 있으신가요?</p>
            <a href="#contact" className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors inline-flex items-center gap-1">
              편하게 상담 신청해주세요
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
