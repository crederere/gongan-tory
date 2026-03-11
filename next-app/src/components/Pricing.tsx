"use client";

import FadeIn from "./FadeIn";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="text-xs text-warm-400 uppercase tracking-widest mb-3 text-center">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-warm-900 leading-snug mb-4 text-center">
            투명한 가격 안내
          </h2>
          <p className="text-warm-400 text-center mb-14">
            6시간 먼저 체험해보시고 결정하세요!
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-6">
          {/* 반나절 */}
          <FadeIn delay={0}>
            <div className="relative p-8 rounded-2xl bg-white border border-warm-200/60 h-full">
              <span className="absolute -top-3 left-6 text-xs font-semibold text-accent-dark bg-accent-light/50 px-3 py-1 rounded-full">
                인기
              </span>
              <h4 className="text-lg font-bold text-warm-800 mb-1">
                반나절 정리 컨설팅
              </h4>
              <p className="text-sm text-warm-400 mb-6">6시간</p>
              <p className="text-3xl font-bold text-warm-900 mb-1">
                329,000
                <span className="text-base font-normal text-warm-400">
                  원~
                </span>
              </p>
              <p className="text-xs text-warm-400 leading-relaxed mt-4">
                6시간 먼저 체험해보시고 결정하세요.
                <br />
                추가는 원하실 때, 원하시는 만큼만!
              </p>
            </div>
          </FadeIn>

          {/* 종일 */}
          <FadeIn delay={0.1}>
            <div className="relative p-8 rounded-2xl bg-warm-900 text-warm-50 h-full">
              <span className="absolute -top-3 left-6 text-xs font-semibold text-warm-900 bg-warm-100 px-3 py-1 rounded-full">
                추천
              </span>
              <h4 className="text-lg font-bold mb-1">종일 정리 컨설팅</h4>
              <p className="text-sm text-warm-400 mb-6">8시간</p>
              <p className="text-3xl font-bold mb-1">
                429,000
                <span className="text-base font-normal text-warm-400">
                  원~
                </span>
              </p>
              <p className="text-xs text-warm-400 leading-relaxed mt-4">
                오늘 확실하게 끝내고 싶으실 때
                <br />
                추천드립니다
              </p>
            </div>
          </FadeIn>
        </div>

        {/* 추가 정리 */}
        <FadeIn>
          <div className="max-w-3xl mx-auto mb-10">
            <div className="flex items-center justify-between p-5 rounded-xl bg-white border border-warm-200/60">
              <div>
                <p className="text-sm font-semibold text-warm-800">추가 정리</p>
                <p className="text-xs text-warm-400">
                  정리 컨설팅(6시간) 후, 당일 최대 2시간 추가 가능
                </p>
              </div>
              <p className="text-sm font-bold text-warm-700 whitespace-nowrap ml-4">
                시간당 50,000원~
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs text-warm-400 text-center mb-4">
              * 공간 사진과 원하는 정리를 말씀해주시면 정확한 견적을 안내해
              드립니다
            </p>

            <div className="text-center mb-8">
              <span className="inline-block text-xs text-accent-dark bg-accent-light/30 px-4 py-2 rounded-full">
                🎫 당근마켓 후기 작성 시 <strong>할인 쿠폰</strong> 드려요!
              </span>
            </div>

            {/* Promises */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
              {[
                { icon: "🤝", title: "무료 사전 상담", desc: "필요한 서비스만 정확히 안내" },
                { icon: "🔒", title: "추가 비용 없음", desc: "안내드린 금액 외 추가 비용 없어요" },
                { icon: "📱", title: "정리 후 무료 케어", desc: "유지 중 궁금한 점은 언제든 카톡 문의" },
              ].map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-warm-100/50 border border-warm-200/40"
                >
                  <span className="text-lg">{p.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-warm-700">{p.title}</p>
                    <p className="text-xs text-warm-400">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="#contact"
                className="inline-block px-8 py-4 rounded-full bg-warm-900 text-warm-50 text-sm font-medium hover:bg-warm-800 transition-all hover:shadow-lg hover:shadow-warm-900/10 active:scale-[0.98]"
              >
                상담 신청하기
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
