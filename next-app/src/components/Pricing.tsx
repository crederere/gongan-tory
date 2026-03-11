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
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-n-400 font-medium mb-6">Pricing</p>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-n-900 tracking-tight leading-[1.15] mb-4">
              투명한 가격 안내
            </h2>
            <p className="text-n-500 text-sm">6시간 먼저 체험해보시고 결정하세요</p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <FadeIn delay={0}>
              <div className="relative p-8 rounded-2xl bg-white border border-n-100 h-full card-hover">
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
                <a href="#contact" className="block w-full py-3.5 rounded-full border border-n-200 text-n-700 text-sm font-semibold text-center hover:border-n-300 hover:bg-n-50 transition-all active:scale-[0.98]">
                  상담 신청하기
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="relative p-8 rounded-2xl bg-n-900 h-full">
                <span className="inline-block mb-4 text-[10px] font-semibold text-n-900 bg-white px-3 py-1 rounded-full tracking-wider uppercase">Recommended</span>
                <h4 className="text-lg font-bold text-white mb-1">종일 정리 컨설팅</h4>
                <p className="text-sm text-n-400 mb-8">8시간</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-white tracking-tighter">429,000</span>
                  <span className="text-base text-n-500 font-normal">원~</span>
                </div>
                <p className="text-xs text-n-500 leading-relaxed mb-8">
                  오늘 확실하게 끝내고 싶으신 분께<br />
                  추천드립니다.
                </p>
                <a href="#contact" className="block w-full py-3.5 rounded-full bg-white text-n-900 text-sm font-semibold text-center hover:bg-n-100 transition-colors active:scale-[0.98]">
                  상담 신청하기
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="flex items-center justify-between p-5 rounded-2xl bg-white border border-n-100 mb-8">
              <div>
                <p className="text-sm font-semibold text-n-800">추가 정리</p>
                <p className="text-xs text-n-400 mt-0.5">정리 컨설팅 후, 당일 최대 2시간 추가 가능</p>
              </div>
              <p className="text-sm font-bold text-n-700 whitespace-nowrap ml-4">시간당 50,000원~</p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="p-6 rounded-2xl bg-white border border-n-100 mb-8">
              <p className="text-[11px] text-n-400 uppercase tracking-[0.15em] font-medium mb-4">모든 서비스에 포함</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-n-600">
                    <span className="w-1 h-1 rounded-full bg-n-300 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="text-center space-y-2">
              <p className="text-xs text-n-400">* 공간 사진과 원하는 정리를 말씀해주시면 정확한 견적을 안내해 드립니다</p>
              <p className="text-xs text-n-500 font-medium">후기 작성 시 할인 쿠폰 드려요!</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
