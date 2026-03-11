"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { faqs } from "@/lib/data";

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b border-n-200/60 ${index === 0 ? "border-t" : ""}`}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group gap-4">
        <span className="text-sm md:text-base font-medium text-n-800 group-hover:text-n-900 transition-colors leading-relaxed">
          {q}
        </span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? "bg-primary-600 shadow-md shadow-primary-600/20" : "border border-n-200 group-hover:border-primary-300"}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
            className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
            <path d="M6 2V10M2 6H10" stroke={open ? "white" : "#94A3B8"} strokeWidth="1.5" strokeLinecap="round"/>
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
            <p className="pb-5 text-sm text-n-500 leading-relaxed pr-10">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-n-200 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary-600 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-6 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              FAQ
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-n-900 tracking-tight leading-snug">
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
          <div className="max-w-2xl mx-auto mt-10 p-6 rounded-2xl bg-primary-50 border border-primary-100 text-center">
            <p className="text-sm text-n-600 mb-3 font-medium">더 궁금한 점이 있으신가요?</p>
            <a href="#contact" className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors inline-flex items-center gap-1.5">
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
