"use client";

import { KAKAO_LINK } from "@/lib/data";

export default function FloatingUI() {
  return (
    <>
      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-gradient-to-t from-warm-50 via-warm-50/95 to-warm-50/0 pointer-events-none">
        <div className="mx-auto max-w-lg flex items-center gap-3 pointer-events-auto">
          <div className="flex-1 text-center">
            <a
              href="#contact"
              className="block py-3.5 rounded-full bg-warm-900 text-warm-50 text-sm font-medium hover:bg-warm-800 transition-all shadow-lg shadow-warm-900/20 active:scale-[0.98]"
            >
              무료 상담 신청하기
            </a>
          </div>
        </div>
        <p className="text-center mt-1.5 text-[10px] text-warm-400">
          3월 예약 30건 중 <strong className="text-warm-600">22건 마감</strong>
        </p>
      </div>

      {/* Floating KakaoTalk */}
      <a
        href={KAKAO_LINK}
        target="_blank"
        rel="noopener"
        className="fixed bottom-24 right-4 z-40 w-14 h-14 rounded-full bg-[#FEE500] shadow-lg shadow-black/10 flex items-center justify-center hover:scale-105 transition-transform active:scale-95"
        aria-label="카카오톡 상담"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#3C1E1E">
          <path d="M12 3C6.5 3 2 6.58 2 11c0 2.83 1.82 5.32 4.56 6.73l-1.12 4.16c-.08.3.25.55.52.39l4.82-3.01c.4.04.81.07 1.22.07 5.5 0 10-3.58 10-8s-4.5-8-10-8z" />
        </svg>
      </a>
    </>
  );
}
