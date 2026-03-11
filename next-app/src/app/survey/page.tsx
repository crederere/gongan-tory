"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

export default function SurveyPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const getChecked = (name: string) =>
      [...form.querySelectorAll<HTMLInputElement>(`input[name="${name}"]:checked`)].map(
        (c) => c.value
      );

    const data = {
      id: Date.now(),
      type: "survey",
      date: new Date().toLocaleString("ko-KR"),
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      howfound: (form.elements.namedItem("howfound") as HTMLSelectElement).value,
      whygongtori: (form.elements.namedItem("whygongtori") as HTMLTextAreaElement).value,
      sqft: (form.elements.namedItem("sqft") as HTMLInputElement).value,
      rooms: (form.elements.namedItem("rooms") as HTMLInputElement).value,
      residents: (form.elements.namedItem("residents") as HTMLInputElement).value,
      spaces: getChecked("spaces"),
      spaceuse: (form.elements.namedItem("spaceuse") as HTMLTextAreaElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      prevexp: (form.elements.namedItem("prevexp") as HTMLSelectElement).value,
      whyorganize: getChecked("whyorganize"),
      hometime: (form.elements.namedItem("hometime") as HTMLInputElement).value,
      homeactivity: (form.elements.namedItem("homeactivity") as HTMLInputElement).value,
      job: (form.elements.namedItem("job") as HTMLInputElement).value,
      hobby: (form.elements.namedItem("hobby") as HTMLInputElement).value,
      interest: (form.elements.namedItem("interest") as HTMLInputElement).value,
      wantdiscard: (form.elements.namedItem("wantdiscard") as HTMLInputElement).value,
      precious: (form.elements.namedItem("precious") as HTMLInputElement).value,
      concern: (form.elements.namedItem("concern") as HTMLTextAreaElement).value,
      rootcause: (form.elements.namedItem("rootcause") as HTMLTextAreaElement).value,
    };

    const surveys = JSON.parse(localStorage.getItem("gongantori_surveys") || "[]");
    surveys.unshift(data);
    localStorage.setItem("gongantori_surveys", JSON.stringify(surveys));
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white border border-warm-200/60 text-sm text-warm-800 placeholder:text-warm-300 focus:outline-none focus:border-warm-400 transition-colors";
  const labelClass = "block text-xs text-warm-500 mb-2";
  const checkClass =
    "flex items-center gap-2 text-sm text-warm-600 cursor-pointer select-none";

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-6">✨</div>
          <h1 className="text-2xl font-bold text-warm-900 mb-4">
            설문지가 제출되었습니다!
          </h1>
          <p className="text-warm-500 mb-8 leading-relaxed">
            작성해주신 내용을 바탕으로 더 정확한 맞춤 상담을 해드릴게요.
            <br />
            빠른 시간 내에 연락드리겠습니다 :)
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 rounded-full bg-warm-900 text-warm-50 text-sm font-medium hover:bg-warm-800 transition-all"
          >
            홈으로 돌아가기
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-warm-50/80 backdrop-blur-xl border-b border-warm-200/40">
        <div className="mx-auto max-w-3xl flex items-center justify-between px-6 h-14">
          <a href="/" className="text-lg font-bold text-warm-900 tracking-tight">
            공간토리
          </a>
          <a href="/" className="text-sm text-warm-500 hover:text-warm-700 transition-colors">
            메인으로
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <p className="text-xs text-warm-400 uppercase tracking-widest mb-4">
              맞춤 정리 설문지
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-warm-900 leading-snug mb-6">
              진짜 정리는
              <br />
              <span className="text-accent-dark">&lsquo;나&rsquo;를 아는 것</span>에서
              시작돼요
            </h1>
            <p className="text-warm-500 leading-relaxed">
              이 설문지를 작성해주시면, 공간토리가 당신에게 딱 맞는 정리를
              해드릴 수 있어요.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why section - condensed */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-2xl px-6">
          <FadeIn>
            <div className="space-y-8 text-center">
              <div>
                <h2 className="text-xl font-bold text-warm-800 mb-4 leading-snug">
                  정리를 맡기는 분들에게서 발견한 공통점이 있어요
                </h2>
                <div className="space-y-2 text-sm text-warm-500 leading-relaxed">
                  <p>바쁘다. 물건이 어디 있는지 모른다. 혼자서는 엄두가 안 난다.</p>
                  <p>이전에도 정리 서비스를 받았지만, 금방 원래대로 돌아갔다.</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-warm-100/50 border border-warm-200/40">
                <p className="text-sm text-warm-600 leading-relaxed">
                  근본적인 원인이 해결되지 않은 채 표면적인 정리만 이루어진다면,
                  <br />
                  <strong className="text-warm-800">
                    장기적인 변화를 기대할 수 없습니다.
                  </strong>
                </p>
              </div>
              <div>
                <p className="text-sm text-warm-500 leading-relaxed">
                  모든 변화의 시작은 &lsquo;나&rsquo;를 아는 것이에요.
                  <br />
                  그래서 이 설문지를 만들었습니다.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-2xl px-6">
          <FadeIn>
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Section 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-warm-900 text-warm-50 text-xs font-semibold flex items-center justify-center">
                    1
                  </span>
                  <h3 className="text-lg font-bold text-warm-800">기본 정보</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>이름 *</label>
                    <input type="text" name="name" required placeholder="이름" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>연락처 *</label>
                    <input type="tel" name="phone" required placeholder="010-0000-0000" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>거주 지역 *</label>
                  <input type="text" name="address" required placeholder="예: 서울시 강남구 역삼동" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>공간토리를 어디서 처음 발견하셨나요?</label>
                  <select name="howfound" className={inputClass}>
                    <option value="">선택해주세요</option>
                    <option value="당근마켓">당근마켓</option>
                    <option value="네이버 검색">네이버 검색</option>
                    <option value="Threads/인스타그램">Threads / 인스타그램</option>
                    <option value="지인 추천">지인 추천</option>
                    <option value="블로그/카페">블로그 / 맘카페</option>
                    <option value="기타">기타</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>공간토리에 의뢰하시려는 이유가 있다면?</label>
                  <textarea name="whygongtori" rows={2} placeholder="예: 후기를 보고 신뢰가 갔어요" className={inputClass} />
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-warm-900 text-warm-50 text-xs font-semibold flex items-center justify-center">
                    2
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-warm-800">공간에 대해 알려주세요</h3>
                    <p className="text-xs text-warm-400">정확한 견적과 맞춤 정리를 위해 필요해요</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>평수</label>
                    <input type="text" name="sqft" placeholder="예: 24평" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>방 개수</label>
                    <input type="text" name="rooms" placeholder="예: 3개" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>함께 사는 사람</label>
                  <input type="text" name="residents" placeholder="예: 남편 + 아이 2명 (4인 가족)" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>정리하고 싶은 공간</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["거실", "주방", "침실", "옷방/드레스룸", "아이방/놀이방", "서재/작업실", "현관", "화장실", "팬트리/창고", "전체"].map((s) => (
                      <label key={s} className={checkClass}>
                        <input type="checkbox" name="spaces" value={s} className="rounded border-warm-300 text-warm-700 focus:ring-warm-400" />
                        {s}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>이 공간을 어떤 용도로 사용하고 싶으세요?</label>
                  <textarea name="spaceuse" rows={2} placeholder="예: 서재를 유튜브 촬영 공간으로" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>원하시는 서비스</label>
                  <select name="service" className={inputClass}>
                    <option value="">서비스를 선택해주세요</option>
                    <option value="반나절 정리컨설팅 (6시간)">반나절 정리 컨설팅 (6시간) - 329,000원~</option>
                    <option value="종일 정리컨설팅 (8시간)">종일 정리 컨설팅 (8시간) - 429,000원~</option>
                    <option value="잘 모르겠어요">잘 모르겠어요 (상담 후 결정)</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>이전에 정리 업체를 이용해보신 적 있나요?</label>
                  <select name="prevexp" className={inputClass}>
                    <option value="">선택해주세요</option>
                    <option value="없음">없어요, 처음이에요</option>
                    <option value="있음-만족">있어요, 만족했어요</option>
                    <option value="있음-불만족">있어요, 아쉬웠어요</option>
                  </select>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-warm-900 text-warm-50 text-xs font-semibold flex items-center justify-center">
                    3
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-warm-800">당신의 생활에 대해 알려주세요</h3>
                    <p className="text-xs text-warm-400">생활 패턴에 맞춰야 오래 유지되는 진짜 정리가 가능해요</p>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>정리를 맡기시려는 이유는?</label>
                  <div className="space-y-2">
                    {[
                      "이사 후 정리가 필요해서",
                      "공간이 부족해서",
                      "편하게 쉴 수 있는 공간을 만들고 싶어서",
                      "아이가 생겨서 / 아이 공간이 필요해서",
                      "혼자서는 엄두가 안 나서",
                      "정리해도 금방 다시 어질러져서",
                      "공간 대여 / 촬영용 정리",
                      "기타",
                    ].map((r) => (
                      <label key={r} className={checkClass}>
                        <input type="checkbox" name="whyorganize" value={r} className="rounded border-warm-300 text-warm-700 focus:ring-warm-400" />
                        {r}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>주로 집에 있는 시간대는?</label>
                  <input type="text" name="hometime" placeholder="예: 퇴근 후 저녁 7시~, 주말 종일" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>집에서 주로 어떻게 시간을 보내세요?</label>
                  <input type="text" name="homeactivity" placeholder="예: 넷플릭스, 요리, 재택근무, 육아" className={inputClass} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>직업</label>
                    <input type="text" name="job" placeholder="예: 회사원" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>취미</label>
                    <input type="text" name="hobby" placeholder="예: 독서, 운동" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>요즘 가장 관심 있는 것은?</label>
                  <input type="text" name="interest" placeholder="예: 인테리어, 미니멀라이프" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>가장 버리고 싶은 것은?</label>
                  <input type="text" name="wantdiscard" placeholder="예: 안 입는 옷, 쌓인 택배 상자" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>가장 소중한 것은? (절대 버리면 안 되는 것)</label>
                  <input type="text" name="precious" placeholder="예: 아이 작품, 앨범, 수집품" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>걱정되는 점이나 꼭 반영해주셨으면 하는 점</label>
                  <textarea name="concern" rows={3} placeholder="예: 물건을 못 버리는 성격이에요" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>집정리가 안 되는 근본적 원인이 뭐라고 생각하세요?</label>
                  <textarea name="rootcause" rows={3} placeholder="자유롭게 적어주세요" className={inputClass} />
                </div>
              </div>

              <div className="text-center">
                <p className="text-xs text-warm-400 mb-6 leading-relaxed">
                  작성해주신 내용은 오직 맞춤 정리를 위해서만 사용됩니다.
                  <br />
                  모든 항목을 채우지 않아도 괜찮아요. 편하게 적어주세요.
                </p>
                <button
                  type="submit"
                  className="w-full max-w-md py-3.5 rounded-full bg-warm-900 text-warm-50 text-sm font-medium hover:bg-warm-800 transition-all active:scale-[0.99]"
                >
                  설문지 제출하기
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-warm-200/40">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs text-warm-400">오래 유지되는 맞춤 정리 · 서울 여성 전문 집정리 수납 컨설팅</p>
          <p className="text-xs text-warm-300 mt-1">&copy; 2026 공간토리. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
