const faqItems = [
  {
    question: "교재는 어떻게 제공되나요?",
    answers: [
      "종이 + 디지털 학습지: 일본어, 스페인어, 독일어, 프랑스어, 중국어, 영어, 베트남어, 포르투갈어, 이탈리아어",
      "디지털 학습지 전용: 러시아어, 아랍어, 인도네시아어",
      "디지털 학습지는 '미니학습지 더노트' 앱에서 이용할 수 있으며, 강의는 모든 언어에 제공됩니다.",
    ],
  },
  {
    question: "강의는 언제까지 수강할 수 있나요?",
    answers: [
      "구매 후 제공되는 강의는 기간 제한 없이 평생 이용할 수 있습니다.",
      "원하는 시기에 자유롭게 학습을 시작하고 이어갈 수 있습니다.",
    ],
  },
  {
    question: "배송은 언제 시작되나요?",
    answers: [
      "종이 교재가 포함된 상품은 결제 확인 후 순차적으로 출고됩니다.",
      "배송 일정은 지역 및 물류 상황에 따라 달라질 수 있습니다.",
    ],
  },
  {
    question: "환불은 어떻게 진행되나요?",
    answers: [
      "교재 발송 전 취소 및 환불 : 전액 환불이 가능합니다.",
      "구입한 강좌의 디지털 학습지 다운로드한 경우 디지털콘텐츠 사용으로 간주하여 7일 이내라도 환불이 불가합니다(학습콘텐츠 다운로드 하지 않은 경우에만 환불).",
      "교재 발송 후 환불 : 교재 재판매 가능 상태를 확인 후 왕복 배송비 등 차감 후 부분 환불이 가능합니다.",
      "교재 및 사은품이 새 상태인 경우에는 결제일로부터 7일 이내 환불 신청 시 전액 환불이 가능합니다. 단 7일이 초과한 경우 환불 접수가 불가합니다.",
      "교재 및 사은품은 사용감이 있는 경우 7일 이내라도 환불이 불가합니다.",
      "그 외 제공되는 콘텐츠, mp3나 강의, 학습문답시스템 등은 실결제금액에 포함되지 않으므로(무상지원) 환불 대상이 아닙니다.",
    ],
  },
];

export default function Section13() {
  return (
    <section className="section13" aria-labelledby="section13-title">
      <div className="section13-inner">
        <div className="section13-header">
          <div className="section13-alert-icon" aria-hidden="true">!</div>
          <h2 id="section13-title" className="section13-title">꼭 확인해 주세요</h2>
        </div>

        <div className="section13-faq-list">
          {faqItems.map((item) => (
            <article key={item.question} className="section13-faq-item">
              <h3 className="section13-question">{item.question}</h3>
              <ul className="section13-answer-list">
                {item.answers.map((answer) => (
                  <li key={answer}>{answer}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
