"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { KAKAO_LINK, PHONE } from "@/lib/data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      id: Date.now(),
      type: "contact",
      date: new Date().toLocaleString("ko-KR"),
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const contacts = JSON.parse(localStorage.getItem("gongantori_contacts") || "[]");
    contacts.unshift(data);
    localStorage.setItem("gongantori_contacts", JSON.stringify(contacts));
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputCls = "w-full px-4 py-3.5 rounded-xl bg-warm-50 border border-warm-200/60 text-sm text-warm-800 placeholder:text-warm-300 focus:outline-none focus:border-warm-500 focus:bg-white transition-all duration-200";

  return (
    <section id="contact" className="py-20 md:py-32 bg-warm-50">
      <div className="mx-auto max-w-6xl px-6">

        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs text-warm-400 uppercase tracking-widest mb-4">Contact</p>
            <h2 className="text-3xl md:text-5xl font-bold text-warm-900 tracking-tight leading-snug mb-4">
              지금 바로
              <br />상담 신청하세요
            </h2>
            <p className="text-warm-400">무료 상담 후, 정확한 견적을 안내해 드립니다</p>
          </div>
        </FadeIn>

        {/* Quick contact */}
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-10">
            <a href={KAKAO_LINK} target="_blank" rel="noopener"
              className="flex items-center gap-4 p-5 rounded-2xl bg-[#FEE500] hover:bg-[#FDD800] transition-colors group">
              <div className="w-10 h-10 rounded-full bg-[#3C1E1E] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 3C6.5 3 2 6.58 2 11c0 2.83 1.82 5.32 4.56 6.73l-1.12 4.16c-.08.3.25.55.52.39l4.82-3.01c.4.04.81.07 1.22.07 5.5 0 10-3.58 10-8s-4.5-8-10-8z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#3C1E1E]">카카오톡 상담</p>
                <p className="text-xs text-[#3C1E1E]/60">사진과 함께 편하게 보내주세요</p>
              </div>
            </a>

            <a href={`tel:${PHONE}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-warm-200/60 hover:border-warm-300 hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-full bg-warm-100 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-warm-600">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-warm-800">전화 문의</p>
                <p className="text-xs text-warm-400">{PHONE}</p>
              </div>
            </a>
          </div>
        </FadeIn>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-xl mx-auto mb-10">
          <div className="flex-1 h-px bg-warm-200/60" />
          <span className="text-xs text-warm-300 whitespace-nowrap">또는 아래 폼으로 신청</span>
          <div className="flex-1 h-px bg-warm-200/60" />
        </div>

        {/* Form */}
        <FadeIn>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-warm-500 mb-2 font-medium">이름 *</label>
                <input type="text" name="name" required placeholder="이름" className={inputCls} />
              </div>
              <div>
                <label className="block text-xs text-warm-500 mb-2 font-medium">연락처 *</label>
                <input type="tel" name="phone" required placeholder="010-0000-0000" className={inputCls} />
              </div>
            </div>
            <div>
              <label className="block text-xs text-warm-500 mb-2 font-medium">거주 지역</label>
              <input type="text" name="address" placeholder="예: 서울시 강남구" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs text-warm-500 mb-2 font-medium">간단한 요청사항</label>
              <textarea name="message" rows={3} placeholder="정리하고 싶은 공간이나 고민을 간단히 적어주세요"
                className={`${inputCls} resize-none`} />
            </div>
            <button type="submit"
              className={`w-full py-4 rounded-full text-sm font-bold transition-all duration-300 active:scale-[0.98] ${
                submitted
                  ? "bg-sage-500 text-white"
                  : "bg-warm-900 text-white hover:bg-warm-800 shadow-lg shadow-warm-900/15"
              }`}>
              {submitted ? "✓ 신청이 완료되었습니다!" : "무료 상담 신청하기"}
            </button>
          </form>
        </FadeIn>

        {/* Survey CTA */}
        <FadeIn>
          <div className="max-w-xl mx-auto mt-8 text-center">
            <p className="text-xs text-warm-400 mb-2">더 정확한 맞춤 정리를 원하신다면?</p>
            <a href="/survey" className="group text-sm text-accent hover:text-accent-dark font-medium inline-flex items-center gap-1 transition-colors">
              맞춤 정리 설문지 작성하기
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M3 8H13M9.5 4.5L13 8L9.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
