import {
  YOUTUBE_LINK,
  INSTAGRAM_LINK,
  BLOG_LINK,
  THREADS_LINK,
  DAANGN_LINK,
  SOOMGO_LINK,
} from "@/lib/data";

const sns = [
  { href: YOUTUBE_LINK, label: "YT" },
  { href: BLOG_LINK, label: "Blog" },
  { href: INSTAGRAM_LINK, label: "IG" },
  { href: THREADS_LINK, label: "TH" },
];

export default function Footer() {
  return (
    <footer className="py-12 border-t border-warm-200/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <span className="text-lg font-bold text-warm-900 tracking-tight">
            공간토리
          </span>
          <div className="flex gap-3">
            {sns.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                className="w-9 h-9 rounded-full bg-warm-100 flex items-center justify-center text-xs text-warm-500 hover:text-warm-700 hover:bg-warm-200 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center space-y-2 mb-6">
          <p className="text-xs text-warm-400">
            오래 유지되는 맞춤 정리 · 서울 여성 전문 집정리 수납 컨설팅
          </p>
          <p className="text-xs text-warm-300">
            서울시 강남구 역삼동 · 050-4313-4767
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <a
            href={DAANGN_LINK}
            target="_blank"
            rel="noopener"
            className="text-xs text-warm-400 hover:text-warm-600 transition-colors"
          >
            당근마켓
          </a>
          <a
            href={SOOMGO_LINK}
            target="_blank"
            rel="noopener"
            className="text-xs text-warm-400 hover:text-warm-600 transition-colors"
          >
            숨고
          </a>
        </div>

        <p className="text-center text-xs text-warm-300">
          &copy; 2026 공간토리. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
