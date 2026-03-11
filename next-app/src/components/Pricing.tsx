"use client";

import FadeIn from "./FadeIn";

const features = [
  "무료 사전 상담",
  "생활 패턴 분석",
  "맞춤 수납 배치",
  "유지관리 코칭",
  "무료 사후 카톡 케어",
  "추가 비용 없음",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-36 bg-n-50 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-n-200 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary-600 bg-primary-50 border border-primary-100 rounded-full px-4 py-1.5 mb-6 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              Pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-n-900 tracking-tight leading-snug mb-4">
              투명한 가격 안내
            </h2>
            <p className="text-n-500">6시간 먼저 체험해보시고 결정하세요</p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* Half day */}
            <FadeIn delay={0}>
              <div className="relative p-8 rounded-2xl bg-white border border-n-200/60 h-full card-hover hover:border-primary-200">
                <span className="absolute -top-3 left-6 text-[11px] font-bold text-primary-600 bg-primary-50 border border-primary-100 px-3 py-1 rounded-full tracking-wide">POPULAR</span>
                <h4 className="text-lg font-bold text-n-800 mb-1">반나절 정리 컨설팅</h4>
                <p className="text-sm text-n-400 mb-8">6시간</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-n-900 tracking-tighter">329,000</span>
                  <span className="text-base text-n-400 font-normal">원~</span>
                </div>
                <p className="text-xs text-n-400 leading-relaxed mb-8">
                  처음이라면 6시간부터 체험해보세요.<br />
                  추가는 원하실 때, 원하시는 만큼!
                </p>
                <a href="#contact" className="block w-full py-3.5 rounded-full border-2 border-n-200 text-n-700 text-sm font-semibold text-center hover:border-primary-300 hover:text-primary-700 transition-all active:scale-[0.98]">
                  상담 신청하기
                </a>
              </div>
            </FadeIn>

            {/* Full day */}
            <FadeIn delay={0.1}>
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 h-full overflow-hidden shadow-xl shadow-primary-600/20">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full border border-white/10" />
                <span className="relative z-10 inline-block -mt-1 mb-4 text-[11px] font-bold text-primary-600 bg-white px-3 py-1 rounded-full tracking-wide shadow-sm">RECOMMENDED</span>
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-white mb-1">종일 정리 컨설팅</h4>
                  <p className="text-sm text-white/60 mb-8">8시간</p>
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold text-white tracking-tighter">429,000</span>
                    <span className="text-base text-white/70 font-normal">원~</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed mb-8">
                    오늘 확실하게 끝내고 싶으신 분께<br />
                    추천드립니다.
                  </p>
                  <a href="#contact" className="block w-full py-3.5 rounded-full bg-white text-primary-600 text-sm font-bold text-center hover:bg-white/90 transition-all active:scale-[0.98] shadow-lg shadow-black/10">
                    상담 신청하기
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Add-on */}
          <FadeIn>
            <div className="flex items-center justify-between p-5 rounded-2xl bg-white border border-n-200/60 mb-8">
              <div>
                <p className="text-sm font-semibold text-n-800">추가 정리</p>
                <p className="text-xs text-n-400 mt-0.5">정리 컨설팅 후, 당일 최대 2시간 추가 가능</p>
              </div>
              <p className="text-sm font-bold text-n-700 whitespace-nowrap ml-4">시간당 50,000원~</p>
            </div>
          </FadeIn>

          {/* All plans include */}
          <FadeIn>
            <div className="p-6 rounded-2xl bg-white border border-n-200/40 mb-8">
              <p className="text-xs text-n-500 uppercase tracking-wide font-bold mb-4">모든 서비스에 포함</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-n-600">
                    <div className="w-5 h-5 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 14 14" fill="none" className="text-primary-500">
                        <path d="M2 7L5.5 10.5L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="text-center space-y-3">
              <p className="text-xs text-n-400">* 공간 사진과 원하는 정리를 말씀해주시면 정확한 견적을 안내해 드립니다</p>
              <div className="inline-flex items-center gap-2 text-xs text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-full font-medium">
                후기 작성 시 <strong>할인 쿠폰</strong> 드려요!
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
