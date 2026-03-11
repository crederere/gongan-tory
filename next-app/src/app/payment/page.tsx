"use client";

import { useState, useEffect } from "react";

interface Payment {
  id: number;
  name: string;
  service?: string;
  amount: number;
  memo?: string;
  status: string;
  paidDate?: string;
  paymentMethod?: string;
}

export default function PaymentPage() {
  const [payment, setPayment] = useState<Payment | null>(null);
  const [state, setState] = useState<"loading" | "error" | "form" | "done">("loading");
  const [selectedMethod, setSelectedMethod] = useState("bank");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pid = params.get("pid");
    if (!pid) { setState("error"); return; }

    const payments: Payment[] = JSON.parse(localStorage.getItem("gongantori_payments") || "[]");
    const found = payments.find((p) => String(p.id) === pid);
    if (!found) { setState("error"); return; }

    setPayment(found);
    if (found.status === "paid") setState("done");
    else if (found.status === "cancelled") setState("error");
    else setState("form");
  }, []);

  const submitPayment = () => {
    if (!payment) return;
    if (selectedMethod !== "bank") {
      alert("카카오페이/토스 결제는 준비 중입니다.\n계좌이체로 결제해주세요!");
      return;
    }
    if (!confirm(`입금을 완료하셨나요?\n\n금액: ${Number(payment.amount).toLocaleString()}원\n계좌: 카카오뱅크 3333-00-0000000`)) return;

    const payments: Payment[] = JSON.parse(localStorage.getItem("gongantori_payments") || "[]");
    const p = payments.find((x) => x.id === payment.id);
    if (p) {
      p.status = "paid";
      p.paidDate = new Date().toLocaleString("ko-KR");
      p.paymentMethod = selectedMethod;
    }
    localStorage.setItem("gongantori_payments", JSON.stringify(payments));
    setState("done");
  };

  const copyAccount = () => {
    navigator.clipboard.writeText("3333-00-0000000").then(() => alert("계좌번호가 복사되었습니다!"));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="mx-auto max-w-md w-full px-5 py-8 flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center mb-8">
          <a href="/" className="text-lg font-bold text-warm-900 tracking-tight">공간토리</a>
          <p className="text-xs text-warm-400 mt-1">정리 컨설팅 결제</p>
        </div>

        {state === "loading" && (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-warm-400 text-sm">로딩 중...</p>
          </div>
        )}

        {state === "error" && (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <h2 className="text-lg font-bold text-warm-800 mb-2">결제 정보를 찾을 수 없습니다</h2>
            <p className="text-sm text-warm-400 mb-6">링크가 올바르지 않거나 만료되었을 수 있습니다.</p>
            <a href="/" className="text-sm text-accent-dark hover:text-warm-800 transition-colors">홈으로 돌아가기</a>
          </div>
        )}

        {state === "form" && payment && (
          <>
            <div className="bg-white rounded-2xl p-6 border border-warm-200/60 mb-4">
              <h2 className="text-base font-bold text-warm-800 mb-4 pb-4 border-b border-warm-100">결제 정보</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-warm-400">고객명</span><span className="font-medium text-warm-800">{payment.name}</span></div>
                <div className="flex justify-between"><span className="text-warm-400">서비스</span><span className="font-medium text-warm-800">{payment.service || "정리 컨설팅"}</span></div>
                {payment.memo && <div className="flex justify-between"><span className="text-warm-400">메모</span><span className="font-medium text-warm-800">{payment.memo}</span></div>}
              </div>
              <div className="mt-4 pt-4 border-t border-dashed border-warm-200 flex justify-between items-center">
                <span className="font-semibold text-warm-800">결제 금액</span>
                <span className="text-2xl font-bold text-accent-dark">{Number(payment.amount).toLocaleString()}원</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-warm-200/60 mb-4">
              <h3 className="text-sm font-semibold text-warm-800 mb-4">결제 수단</h3>
              <div className="space-y-2">
                {[
                  { value: "bank", label: "계좌이체", desc: "계좌번호로 직접 입금", icon: "🏦" },
                  { value: "kakao", label: "카카오페이", desc: "카카오페이로 간편 결제", icon: "K" },
                  { value: "toss", label: "토스", desc: "토스로 간편 송금", icon: "T" },
                ].map((m) => (
                  <button
                    key={m.value}
                    onClick={() => setSelectedMethod(m.value)}
                    className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                      selectedMethod === m.value
                        ? "border-warm-800 bg-warm-50"
                        : "border-warm-200/60 hover:border-warm-300"
                    }`}
                  >
                    <span className="w-9 h-9 rounded-lg bg-warm-100 flex items-center justify-center text-sm">{m.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-warm-800">{m.label}</p>
                      <p className="text-xs text-warm-400">{m.desc}</p>
                    </div>
                  </button>
                ))}
              </div>

              {selectedMethod === "bank" && (
                <div className="mt-4 p-4 rounded-xl bg-warm-50 border border-warm-200/40">
                  <p className="text-sm text-warm-600 leading-relaxed">
                    <strong className="text-warm-800">카카오뱅크</strong><br />
                    계좌번호: <strong className="text-warm-800">3333-00-0000000</strong><br />
                    예금주: <strong className="text-warm-800">공간토리</strong>
                  </p>
                  <button onClick={copyAccount} className="mt-3 w-full py-2.5 rounded-lg bg-warm-900 text-warm-50 text-xs font-medium hover:bg-warm-800 transition-colors">
                    계좌번호 복사하기
                  </button>
                </div>
              )}
            </div>

            <button onClick={submitPayment} className="w-full py-3.5 rounded-full bg-warm-900 text-warm-50 text-sm font-medium hover:bg-warm-800 transition-all active:scale-[0.99]">
              결제 완료 알리기
            </button>
            <p className="text-xs text-warm-400 text-center mt-3 leading-relaxed">
              결제 후 &apos;결제 완료 알리기&apos; 버튼을 눌러주시면<br />확인 후 빠르게 연락드리겠습니다.
            </p>
          </>
        )}

        {state === "done" && (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="text-5xl mb-6">✅</div>
            <h2 className="text-xl font-bold text-warm-900 mb-2">결제가 확인되었습니다!</h2>
            <p className="text-sm text-warm-400 leading-relaxed mb-8">빠른 시간 내에 연락드리겠습니다.<br />감사합니다 :)</p>
            <a href="/" className="text-sm text-accent-dark hover:text-warm-800 transition-colors">홈으로 돌아가기</a>
          </div>
        )}
      </div>
    </div>
  );
}
