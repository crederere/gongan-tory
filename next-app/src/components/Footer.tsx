import { YOUTUBE_LINK, INSTAGRAM_LINK, BLOG_LINK, THREADS_LINK, DAANGN_LINK, SOOMGO_LINK, PHONE } from "@/lib/data";

const sns = [
  { href: YOUTUBE_LINK, label: "YouTube" },
  { href: BLOG_LINK, label: "Blog" },
  { href: INSTAGRAM_LINK, label: "Instagram" },
  { href: THREADS_LINK, label: "Threads" },
];

export default function Footer() {
  return (
    <footer className="bg-warm-950 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-10 border-b border-white/[0.07]">
          <span className="text-lg font-bold text-white tracking-tight">공간토리</span>
          <div className="flex gap-2">
            {sns.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener"
                className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[10px] text-warm-400 hover:text-white hover:bg-white/10 transition-all">
                {s.label.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1.5">
            <p className="text-xs text-warm-500">오래 유지되는 맞춤 정리 · 서울 여성 전문 집정리 수납 컨설팅</p>
            <p className="text-xs text-warm-600">서울시 강남구 역삼동 · {PHONE}</p>
          </div>
          <div className="flex gap-4">
            <a href={DAANGN_LINK} target="_blank" rel="noopener" className="text-xs text-warm-600 hover:text-warm-400 transition-colors">당근마켓</a>
            <a href={SOOMGO_LINK} target="_blank" rel="noopener" className="text-xs text-warm-600 hover:text-warm-400 transition-colors">숨고</a>
          </div>
        </div>
        <p className="text-center text-xs text-warm-700 mt-6">&copy; 2026 공간토리. All rights reserved.</p>
      </div>
    </footer>
  );
}
