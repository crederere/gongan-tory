"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target, decimal = false }: { target: number; decimal?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <span ref={ref}>{decimal ? val.toFixed(1) : Math.floor(val)}</span>;
}

const stats = [
  { value: 5.0, label: "당근마켓 평점", decimal: true },
  { value: 75, label: "고객 후기", suffix: "+" },
  { value: 257, label: "단골 고객", suffix: "+" },
];

export default function TrustBar() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 md:gap-24"
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-warm-900 tracking-tight">
                <Counter target={s.value} decimal={s.decimal} />
                {s.suffix && <span className="text-warm-400">{s.suffix}</span>}
              </div>
              <p className="mt-2 text-sm text-warm-400">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
