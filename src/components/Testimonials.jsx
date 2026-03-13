import React from 'react'

const Testimonials = () => {
  return (
    <>
      <div style={{height: '120px'}}></div>
      <section className="relative py-20 px-4 bg-card-sub">
        <div className="w-full absolute top-0 left-0 rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-20" style={{display: 'block'}}>
            <path d="M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z" fill="#F5F0FF"></path>
          </svg>
        </div>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">실제 사용자 후기</h2>
            <p className="text-lg" style={{color: 'rgb(100, 116, 139)'}}>베타 테스트 참여 가족들의 솔직한 이야기</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[20px] p-8 relative" style={{boxShadow: 'rgba(124, 58, 237, 0.08) 0px 2px 12px', opacity: 1, transform: 'none'}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{backgroundColor: 'rgba(124, 58, 237, 0.082)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote w-6 h-6" style={{color: 'rgb(124, 58, 237)'}}>
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                </svg>
              </div>
              <p className="text-base leading-relaxed mb-6" style={{color: 'rgb(30, 27, 75)'}}>
                "6살 아들이 처음으로 '과학이 재밌어!'라고 했어요. 색깔 섞는 게 화학 반응이라는 걸 모험하면서 자연스럽게 알게 됐어요."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold" style={{backgroundColor: 'rgb(124, 58, 237)'}}>박</div>
                <div>
                  <div className="font-semibold text-foreground text-sm">박수진</div>
                  <div className="text-xs" style={{color: 'rgb(100, 116, 139)'}}>6세 아이 엄마</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[20px] p-8 relative" style={{boxShadow: 'rgba(124, 58, 237, 0.08) 0px 2px 12px', opacity: 1, transform: 'none'}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{backgroundColor: 'rgba(249, 115, 22, 0.082)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote w-6 h-6" style={{color: 'rgb(249, 115, 22)'}}>
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                </svg>
              </div>
              <p className="text-base leading-relaxed mb-6" style={{color: 'rgb(30, 27, 75)'}}>
                "점수 매기지 않고 아이의 생각 과정을 보여주는 리포트가 정말 좋아요. '왜 이 색을 골랐어?'라는 질문에 대한 답변을 보니 아이를 더 이해하게 됐어요."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold" style={{backgroundColor: 'rgb(249, 115, 22)'}}>김</div>
                <div>
                  <div className="font-semibold text-foreground text-sm">김민호</div>
                  <div className="text-xs" style={{color: 'rgb(100, 116, 139)'}}>7세 아이 아빠</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[20px] p-8 relative" style={{boxShadow: 'rgba(124, 58, 237, 0.08) 0px 2px 12px', opacity: 1, transform: 'none'}}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{backgroundColor: 'rgba(16, 185, 129, 0.082)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote w-6 h-6" style={{color: 'rgb(16, 185, 129)'}}>
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                </svg>
              </div>
              <p className="text-base leading-relaxed mb-6" style={{color: 'rgb(30, 27, 75)'}}>
                "미술 학원은 그림만, 과학 교구는 실험만 했는데 STEAM Village는 둘이 자연스럽게 연결돼요. 아이가 모네 그림 보며 '빛이 반사돼!'라고 하더라구요."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold" style={{backgroundColor: 'rgb(16, 185, 129)'}}>이</div>
                <div>
                  <div className="font-semibold text-foreground text-sm">이지혜</div>
                  <div className="text-xs" style={{color: 'rgb(100, 116, 139)'}}>5세 아이 엄마</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full absolute bottom-0 left-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-20" style={{display: 'block'}}>
            <path d="M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z" fill="#FFFBF5"></path>
          </svg>
        </div>
      </section>
    </>
  )
}

export default Testimonials

