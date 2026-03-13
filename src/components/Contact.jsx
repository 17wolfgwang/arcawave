import React from 'react'

const Contact = () => {
  return (
    <>
      <div style={{height: '120px'}}></div>
      <section className="relative py-20 px-4 bg-primary overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute rounded-full opacity-40" style={{backgroundColor: 'rgb(124, 58, 237)', width: '8px', height: '8px', top: '10%', left: '15%'}}></div>
          <div className="absolute rounded-full opacity-40" style={{backgroundColor: 'rgb(249, 115, 22)', width: '12px', height: '12px', top: '25%', left: '85%'}}></div>
          <div className="absolute rounded-full opacity-40" style={{backgroundColor: 'rgb(244, 114, 182)', width: '10px', height: '10px', top: '60%', left: '10%'}}></div>
          <div className="absolute rounded-full opacity-40" style={{backgroundColor: 'rgb(16, 185, 129)', width: '8px', height: '8px', top: '75%', left: '90%'}}></div>
          <div className="absolute rounded-full opacity-40" style={{backgroundColor: 'rgb(124, 58, 237)', width: '6px', height: '6px', top: '40%', left: '5%'}}></div>
          <div className="absolute rounded-full opacity-40" style={{backgroundColor: 'rgb(249, 115, 22)', width: '10px', height: '10px', top: '85%', left: '20%'}}></div>
        </div>
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <h2 className="mb-6 text-white">아이의 창의성이 피어나는<br />첫 모험을 시작하세요</h2>
          <p className="text-xl mb-10 text-white/90">
            7일 무료 체험으로 STEAM Village를 경험해보세요.<br />신용카드 등록 없이 바로 시작할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-primary px-8 py-4 rounded-[12px] flex items-center gap-2 text-lg font-semibold" tabIndex="0" style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 16px'}}>
              무료 체험 시작하기
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <button className="bg-transparent text-white px-8 py-4 rounded-[12px] border-2 border-white/30 text-lg font-semibold" tabIndex="0">얼리버드 혜택 보기</button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-5 h-5 text-secondary fill-secondary">
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-5 h-5 text-secondary fill-secondary">
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-5 h-5 text-secondary fill-secondary">
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-5 h-5 text-secondary fill-secondary">
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-5 h-5 text-secondary fill-secondary">
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <span className="ml-2 text-white/90">베타 참여 가족 만족도 4.9/5</span>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/80 text-sm">📧 궁금한 점이 있으신가요? hello@steamvillage.com</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
