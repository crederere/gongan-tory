import { YOUTUBE_LINK, INSTAGRAM_LINK, BLOG_LINK, THREADS_LINK, DAANGN_LINK, SOOMGO_LINK, PHONE } from "@/lib/data";

const sns = [
  { href: YOUTUBE_LINK, label: "YouTube" },
  { href: BLOG_LINK, label: "Blog" },
  { href: INSTAGRAM_LINK, label: "Instagram" },
  { href: THREADS_LINK, label: "Threads" },
];

export default function Footer() {
  return (
    <footer className="bg-n-900 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-10 border-b border-n-800">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">G</span>
            </div>
            <span className="text-lg font-bold text-white tracking-tight">공간토리</span>
          </div>
          <div className="flex gap-2">
            {sns.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener"
                className="w-9 h-9 rounded-full bg-n-800 border border-n-700 flex items-center justify-center text-[10px] text-n-400 hover:text-white hover:border-n-600 hover:bg-n-700 transition-all">
                {s.label.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1.5">
            <p className="text-xs text-n-400">오래 유지되는 맞춤 정리 · 서울 여성 전문 집정리 수납 컨설팅</p>
            <p className="text-xs text-n-500">서울시 강남구 역삼동 · {PHONE}</p>
          </div>
          <div className="flex gap-4">
            <a href={DAANGN_LINK} target="_blank" rel="noopener" className="text-xs text-n-500 hover:text-n-300 transition-colors">당근마켓</a>
            <a href={SOOMGO_LINK} target="_blank" rel="noopener" className="text-xs text-n-500 hover:text-n-300 transition-colors">숨고</a>
          </div>
        </div>
        <p className="text-center text-xs text-n-600 mt-6">&copy; 2026 공간토리. All rights reserved.</p>
      </div>
    </footer>
  );
}
