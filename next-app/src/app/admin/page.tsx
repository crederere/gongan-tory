"use client";

import { useState, useEffect, useCallback } from "react";

const ADMIN_PW = "gongtori2026";

interface Contact { id: number; type: string; date: string; name: string; phone: string; address: string; message: string; }
interface Survey { id: number; type: string; date: string; name: string; phone: string; address: string; howfound: string; whygongtori: string; sqft: string; rooms: string; residents: string; spaces: string[]; spaceuse: string; service: string; prevexp: string; whyorganize: string[]; hometime: string; homeactivity: string; job: string; hobby: string; interest: string; wantdiscard: string; precious: string; concern: string; rootcause: string; }
interface Payment { id: number; date: string; name: string; phone: string; service: string; amount: number; memo: string; status: string; paidDate?: string; paymentMethod?: string; }

function esc(str: string | undefined | null) { return str || ""; }

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [tab, setTab] = useState("all");
  const [refresh, setRefresh] = useState(0);

  // Payment form
  const [payName, setPayName] = useState("");
  const [payPhone, setPayPhone] = useState("");
  const [payService, setPayService] = useState("");
  const [payAmount, setPayAmount] = useState("");
  const [payMemo, setPayMemo] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalLink, setModalLink] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("admin_logged_in") === "true") setLoggedIn(true);
  }, []);

  const tryLogin = () => {
    if (pw === ADMIN_PW) {
      sessionStorage.setItem("admin_logged_in", "true");
      setLoggedIn(true);
    } else {
      setPwError(true);
    }
  };

  const logout = () => { sessionStorage.removeItem("admin_logged_in"); setLoggedIn(false); };

  const getContacts = useCallback((): Contact[] => JSON.parse(localStorage.getItem("gongantori_contacts") || "[]"), []);
  const getSurveys = useCallback((): Survey[] => JSON.parse(localStorage.getItem("gongantori_surveys") || "[]"), []);
  const getPayments = useCallback((): Payment[] => JSON.parse(localStorage.getItem("gongantori_payments") || "[]"), []);

  const deleteContact = (id: number) => { if (!confirm("삭제할까요?")) return; localStorage.setItem("gongantori_contacts", JSON.stringify(getContacts().filter(c => c.id !== id))); setRefresh(r => r + 1); };
  const deleteSurvey = (id: number) => { if (!confirm("삭제할까요?")) return; localStorage.setItem("gongantori_surveys", JSON.stringify(getSurveys().filter(s => s.id !== id))); setRefresh(r => r + 1); };
  const deletePayment = (id: number) => { if (!confirm("삭제할까요?")) return; localStorage.setItem("gongantori_payments", JSON.stringify(getPayments().filter(p => p.id !== id))); setRefresh(r => r + 1); };
  const markPaid = (id: number) => { const payments = getPayments(); const p = payments.find(x => x.id === id); if (p) { p.status = "paid"; p.paidDate = new Date().toLocaleString("ko-KR"); } localStorage.setItem("gongantori_payments", JSON.stringify(payments)); setRefresh(r => r + 1); };
  const cancelPayment = (id: number) => { const payments = getPayments(); const p = payments.find(x => x.id === id); if (p) p.status = "cancelled"; localStorage.setItem("gongantori_payments", JSON.stringify(payments)); setRefresh(r => r + 1); };
  const clearAll = () => { if (!confirm("모든 데이터를 삭제할까요?")) return; localStorage.removeItem("gongantori_contacts"); localStorage.removeItem("gongantori_surveys"); localStorage.removeItem("gongantori_payments"); setRefresh(r => r + 1); };

  const showPaymentLink = (id: number) => {
    const link = `${window.location.origin}/payment?pid=${id}`;
    setModalLink(link);
    setShowModal(true);
  };

  const createPayment = () => {
    if (!payName || !payAmount) { alert("이름과 금액을 입력해주세요."); return; }
    const payment: Payment = { id: Date.now(), date: new Date().toLocaleString("ko-KR"), name: payName, phone: payPhone, service: payService, amount: Number(payAmount), memo: payMemo, status: "pending" };
    const payments = getPayments(); payments.unshift(payment); localStorage.setItem("gongantori_payments", JSON.stringify(payments));
    showPaymentLink(payment.id);
    setPayName(""); setPayPhone(""); setPayService(""); setPayAmount(""); setPayMemo("");
    setRefresh(r => r + 1);
  };

  const createPaymentFor = (name: string, phone: string) => { setTab("payments"); setPayName(name); setPayPhone(phone); };
  void refresh; // Used to trigger re-render

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-5">
        <div className="bg-white rounded-2xl p-10 max-w-sm w-full shadow-lg text-center">
          <h1 className="text-xl font-bold text-warm-900 mb-2">공간토리 관리자</h1>
          <p className="text-sm text-warm-400 mb-6">비밀번호를 입력해주세요</p>
          {pwError && <p className="text-xs text-red-500 mb-3">비밀번호가 틀렸습니다</p>}
          <input type="password" value={pw} onChange={e => { setPw(e.target.value); setPwError(false); }} onKeyDown={e => e.key === "Enter" && tryLogin()}
            className="w-full px-4 py-3 rounded-xl border border-warm-200/60 text-sm mb-4 focus:outline-none focus:border-warm-400" placeholder="비밀번호" autoFocus />
          <button onClick={tryLogin} className="w-full py-3 rounded-xl bg-warm-900 text-warm-50 text-sm font-medium hover:bg-warm-800 transition-colors">로그인</button>
        </div>
      </div>
    );
  }

  const contacts = getContacts();
  const surveys = getSurveys();
  const payments = getPayments();

  const tabs = [
    { key: "all", label: "전체" },
    { key: "contacts", label: "상담 신청" },
    { key: "surveys", label: "설문지" },
    { key: "payments", label: "결제 관리" },
  ];

  const inputClass = "w-full px-3 py-2.5 rounded-lg border border-warm-200/60 text-sm focus:outline-none focus:border-warm-400";

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-warm-200/40">
        <div className="mx-auto max-w-5xl flex items-center justify-between px-6 h-14">
          <h1 className="text-base font-bold text-warm-900">공간토리 관리자</h1>
          <div className="flex gap-2">
            <button onClick={clearAll} className="text-xs px-3 py-1.5 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 transition-colors">전체 삭제</button>
            <button onClick={logout} className="text-xs px-3 py-1.5 rounded-lg border border-warm-200 text-warm-500 hover:bg-warm-100 transition-colors">로그아웃</button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-warm-200/40">
        <div className="mx-auto max-w-5xl flex px-6">
          {tabs.map(t => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors ${tab === t.key ? "text-warm-900 border-warm-900" : "text-warm-400 border-transparent hover:text-warm-600"}`}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-5xl px-6 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { num: contacts.length + surveys.length, label: "총 신청 수" },
            { num: contacts.length, label: "상담 신청" },
            { num: surveys.length, label: "설문지" },
            { num: `${payments.filter(p => p.status === "paid").length}/${payments.length}`, label: "결제 완료" },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-warm-200/40">
              <p className="text-xl font-bold text-warm-900">{s.num}</p>
              <p className="text-xs text-warm-400">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Payment form */}
        {tab === "payments" && (
          <div className="bg-white rounded-xl p-6 border border-warm-200/40 mb-6">
            <h3 className="text-sm font-semibold text-warm-800 mb-4">새 결제 링크 생성</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input value={payName} onChange={e => setPayName(e.target.value)} placeholder="고객 이름" className={inputClass} />
              <input value={payPhone} onChange={e => setPayPhone(e.target.value)} placeholder="연락처" className={inputClass} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <select value={payService} onChange={e => setPayService(e.target.value)} className={inputClass}>
                <option value="">서비스 선택</option>
                <option value="반나절 정리컨설팅 (6시간)">반나절 정리 컨설팅 (6시간)</option>
                <option value="종일 정리컨설팅 (8시간)">종일 정리 컨설팅 (8시간)</option>
              </select>
              <input type="number" value={payAmount} onChange={e => setPayAmount(e.target.value)} placeholder="금액 (원)" className={inputClass} />
            </div>
            <input value={payMemo} onChange={e => setPayMemo(e.target.value)} placeholder="메모 (선택)" className={`${inputClass} mb-3`} />
            <button onClick={createPayment} className="px-5 py-2.5 rounded-lg bg-warm-900 text-warm-50 text-sm font-medium hover:bg-warm-800 transition-colors">결제 링크 생성</button>
          </div>
        )}

        {/* Content */}
        <div className="space-y-3">
          {tab === "payments" ? (
            payments.length === 0 ? <p className="text-center text-warm-400 py-12">생성된 결제 내역이 없습니다</p> :
            payments.sort((a, b) => b.id - a.id).map(p => (
              <div key={p.id} className="bg-white rounded-xl p-5 border border-warm-200/40">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 font-medium">결제</span>
                    <span className="font-semibold text-warm-800">{esc(p.name)}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.status === "paid" ? "bg-green-50 text-green-600" : p.status === "cancelled" ? "bg-red-50 text-red-500" : "bg-amber-50 text-amber-600"}`}>
                      {p.status === "paid" ? "결제 완료" : p.status === "cancelled" ? "취소" : "대기중"}
                    </span>
                  </div>
                  <span className="text-xs text-warm-400">{esc(p.date)}</span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-warm-500 mb-2">
                  <span>연락처: <strong className="text-warm-700">{esc(p.phone)}</strong></span>
                  <span>서비스: <strong className="text-warm-700">{esc(p.service)}</strong></span>
                  <span className="text-lg font-bold text-accent-dark">{Number(p.amount).toLocaleString()}원</span>
                </div>
                {p.memo && <p className="text-xs text-warm-500 bg-warm-50 p-3 rounded-lg mb-2">{esc(p.memo)}</p>}
                <div className="flex gap-2 mt-3">
                  {p.status === "pending" && <>
                    <button onClick={() => markPaid(p.id)} className="text-xs px-3 py-1.5 rounded-lg border border-green-200 text-green-600 hover:bg-green-50">완료 처리</button>
                    <button onClick={() => showPaymentLink(p.id)} className="text-xs px-3 py-1.5 rounded-lg border border-warm-300 text-warm-600 hover:bg-warm-50">링크 보기</button>
                    <button onClick={() => cancelPayment(p.id)} className="text-xs px-3 py-1.5 rounded-lg border border-amber-200 text-amber-600 hover:bg-amber-50">취소</button>
                  </>}
                  <button onClick={() => deletePayment(p.id)} className="text-xs px-3 py-1.5 rounded-lg border border-red-200 text-red-500 hover:bg-red-50">삭제</button>
                </div>
              </div>
            ))
          ) : (
            (() => {
              type Item = (Contact & { _type: "contact" }) | (Survey & { _type: "survey" });
              let items: Item[] = [];
              if (tab === "all" || tab === "contacts") items = items.concat(contacts.map(c => ({ ...c, _type: "contact" as const })));
              if (tab === "all" || tab === "surveys") items = items.concat(surveys.map(s => ({ ...s, _type: "survey" as const })));
              items.sort((a, b) => b.id - a.id);

              if (items.length === 0) return <p className="text-center text-warm-400 py-12">아직 신청 내역이 없습니다</p>;

              return items.map(item => (
                <div key={item.id} className="bg-white rounded-xl p-5 border border-warm-200/40">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item._type === "contact" ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"}`}>
                        {item._type === "contact" ? "상담 신청" : "설문지"}
                      </span>
                      <span className="font-semibold text-warm-800">{esc(item.name)}</span>
                    </div>
                    <span className="text-xs text-warm-400">{esc(item.date)}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-warm-500">
                    <span>연락처: <strong className="text-warm-700">{esc(item.phone)}</strong></span>
                    <span>지역: <strong className="text-warm-700">{esc(item.address) || "-"}</strong></span>
                    {item._type === "survey" && <span>서비스: <strong className="text-warm-700">{esc((item as Survey).service) || "-"}</strong></span>}
                  </div>
                  {item._type === "contact" && (item as Contact).message && (
                    <p className="text-xs text-warm-500 bg-warm-50 p-3 rounded-lg mt-3">{esc((item as Contact).message)}</p>
                  )}
                  {item._type === "survey" && (
                    <div className="mt-3 text-xs text-warm-500 space-y-1 bg-warm-50 p-3 rounded-lg">
                      <p>평수: {esc((item as Survey).sqft) || "-"} | 방: {esc((item as Survey).rooms) || "-"} | 거주: {esc((item as Survey).residents) || "-"}</p>
                      <p>정리 공간: {(item as Survey).spaces?.join(", ") || "-"}</p>
                      <p>정리 이유: {(item as Survey).whyorganize?.join(", ") || "-"}</p>
                      {(item as Survey).concern && <p>걱정/요청: {esc((item as Survey).concern)}</p>}
                      {(item as Survey).rootcause && <p>근본 원인: {esc((item as Survey).rootcause)}</p>}
                    </div>
                  )}
                  <div className="flex gap-2 mt-3">
                    <button onClick={() => createPaymentFor(item.name, item.phone)} className="text-xs px-3 py-1.5 rounded-lg border border-warm-300 text-warm-600 hover:bg-warm-50">결제 링크 생성</button>
                    <button onClick={() => item._type === "contact" ? deleteContact(item.id) : deleteSurvey(item.id)}
                      className="text-xs px-3 py-1.5 rounded-lg border border-red-200 text-red-500 hover:bg-red-50">삭제</button>
                  </div>
                </div>
              ));
            })()
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 z-[200] flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full" onClick={e => e.stopPropagation()}>
            <h3 className="font-bold text-warm-900 mb-4">결제 링크 생성 완료</h3>
            <p className="text-sm text-warm-500 mb-3">아래 링크를 고객에게 보내주세요:</p>
            <div className="bg-warm-50 p-3 rounded-lg text-xs text-warm-600 break-all mb-4">{modalLink}</div>
            <div className="flex gap-2 justify-end">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg bg-warm-100 text-warm-600 text-sm">닫기</button>
              <button onClick={() => { navigator.clipboard.writeText(modalLink).then(() => alert("복사됨!")); }} className="px-4 py-2 rounded-lg bg-warm-900 text-warm-50 text-sm font-medium">링크 복사</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
