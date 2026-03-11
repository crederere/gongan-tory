"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target, decimal = false }: { target: number; decimal?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <span ref={ref}>{decimal ? val.toFixed(1) : Math.floor(val)}</span>;
}

const marqueeItems = [
  "당근 전국 1위", "서울 여성 전문", "평점 5.0", "요요없는 정리",
  "생활 패턴 맞춤", "유지관리 코칭", "75개 이상 후기", "257명 단골",
  "무료 사전 상담", "추가 비용 없음", "당근 전국 1위", "서울 여성 전문",
  "평점 5.0", "요요없는 정리", "생활 패턴 맞춤", "유지관리 코칭",
];

export default function TrustBar() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-n-50 to-n-50" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-3 gap-6 sm:gap-12 justify-items-center mb-16"
        >
          {[
            { value: 5.0, label: "당근마켓 평점", suffix: "", decimal: true },
            { value: 75, label: "고객 후기", suffix: "+", decimal: false },
            { value: 257, label: "단골 고객", suffix: "+", decimal: false },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-n-900 tracking-tighter leading-none mb-3">
                <Counter target={s.value} decimal={s.decimal} />
                {s.suffix && <span className="gradient-text">{s.suffix}</span>}
              </div>
              <p className="text-xs md:text-sm text-n-400 tracking-wide font-medium">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee */}
        <div className="relative overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-n-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-n-50 to-transparent z-10" />
          <div className="flex gap-6 w-max animate-marquee">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-xs text-n-400 whitespace-nowrap font-medium">
                <span className="w-1 h-1 rounded-full bg-primary-400" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
