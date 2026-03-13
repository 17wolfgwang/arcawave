import React from 'react'

const Pricing = () => {
  return (
    <>
      <div style={{height: '120px'}}></div>
      <section className="relative py-20 px-4 bg-white">
        <div className="w-full absolute top-0 left-0 rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-20" style={{display: 'block'}}>
            <path d="M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z" fill="#FFFFFF"></path>
          </svg>
        </div>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="mb-4">왜 STEAM Village를 선택해야 할까요?</h2>
              <p className="text-xl" style={{color: 'rgb(100, 116, 139)'}}>아이의 미래를 위한 확실한 투자</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-[20px] p-8 relative overflow-hidden" style={{boxShadow: 'rgba(124, 58, 237, 0.08) 0px 2px 8px, rgba(0, 0, 0, 0.05) 0px 1px 3px'}}>
                <div className="w-16 h-16 rounded-[12px] flex items-center justify-center mb-6" style={{backgroundColor: 'rgb(245, 240, 255)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette w-8 h-8" style={{color: 'rgb(124, 58, 237)'}}>
                    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                  </svg>
                </div>
                <h3 className="mb-3" style={{color: 'rgb(30, 27, 75)'}}>예술로 시작하는 STEAM</h3>
                <p className="text-[#64748B] leading-relaxed">그림과 창작으로 시작해 과학·수학·공학을 자연스럽게 익혀요</p>
              </div>
              <div className="bg-white rounded-[20px] p-8 relative overflow-hidden" style={{boxShadow: 'rgba(124, 58, 237, 0.08) 0px 2px 8px, rgba(0, 0, 0, 0.05) 0px 1px 3px'}}>
                <div className="w-16 h-16 rounded-[12px] flex items-center justify-center mb-6" style={{backgroundColor: 'rgb(255, 247, 237)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-8 h-8" style={{color: 'rgb(249, 115, 22)'}}>
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                    <path d="M20 3v4"></path>
                    <path d="M22 5h-4"></path>
                    <path d="M4 17v2"></path>
                    <path d="M5 18H3"></path>
                  </svg>
                </div>
                <h3 className="mb-3" style={{color: 'rgb(30, 27, 75)'}}>4~8세 최적화 콘텐츠</h3>
                <p className="text-[#64748B] leading-relaxed">발달 단계에 맞춘 커리큘럼으로 아이와 함께 성장해요</p>
              </div>
              <div className="bg-white rounded-[20px] p-8 relative overflow-hidden" style={{boxShadow: 'rgba(124, 58, 237, 0.08) 0px 2px 8px, rgba(0, 0, 0, 0.05) 0px 1px 3px'}}>
                <div className="w-16 h-16 rounded-[12px] flex items-center justify-center mb-6" style={{backgroundColor: 'rgb(236, 253, 245)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-8 h-8" style={{color: 'rgb(16, 185, 129)'}}>
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="mb-3" style={{color: 'rgb(30, 27, 75)'}}>점수 없는 성장 기록</h3>
                <p className="text-[#64748B] leading-relaxed">아이의 사고 과정과 창의성을 존중하는 평가 방식</p>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center mb-16">
              <h2 className="mb-4">시작은 정말 쉬워요</h2>
              <p className="text-xl" style={{color: 'rgb(100, 116, 139)'}}>복잡한 준비 없이 바로 시작하는 STEAM 모험</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative" style={{opacity: 1, transform: 'none'}}>
                <div className="text-7xl font-extrabold mb-4 opacity-10" style={{color: 'rgb(124, 58, 237)', fontFamily: 'var(--font-display)'}}>01</div>
                <div className="w-16 h-16 rounded-[12px] flex items-center justify-center mb-6" style={{backgroundColor: 'rgb(245, 240, 255)'}}>
                  <div className="text-3xl font-bold" style={{color: 'rgb(124, 58, 237)'}}>01</div>
                </div>
                <h4 className="mb-3" style={{color: 'rgb(30, 27, 75)'}}>앱 다운로드</h4>
                <p style={{color: 'rgb(100, 116, 139)'}}>무료 체험으로 시작하세요. 신용카드 등록 불필요.</p>
              </div>
              <div className="relative" style={{opacity: 1, transform: 'none'}}>
                <div className="text-7xl font-extrabold mb-4 opacity-10" style={{color: 'rgb(249, 115, 22)', fontFamily: 'var(--font-display)'}}>02</div>
                <div className="w-16 h-16 rounded-[12px] flex items-center justify-center mb-6" style={{backgroundColor: 'rgb(255, 247, 237)'}}>
                  <div className="text-3xl font-bold" style={{color: 'rgb(249, 115, 22)'}}>02</div>
                </div>
                <h4 className="mb-3" style={{color: 'rgb(30, 27, 75)'}}>첫 모험 선택</h4>
                <p style={{color: 'rgb(100, 116, 139)'}}>아이가 좋아하는 화가나 테마를 골라 바로 시작.</p>
              </div>
              <div className="relative" style={{opacity: 1, transform: 'none'}}>
                <div className="text-7xl font-extrabold mb-4 opacity-10" style={{color: 'rgb(16, 185, 129)', fontFamily: 'var(--font-display)'}}>03</div>
                <div className="w-16 h-16 rounded-[12px] flex items-center justify-center mb-6" style={{backgroundColor: 'rgb(236, 253, 245)'}}>
                  <div className="text-3xl font-bold" style={{color: 'rgb(16, 185, 129)'}}>03</div>
                </div>
                <h4 className="mb-3" style={{color: 'rgb(30, 27, 75)'}}>함께 성장</h4>
                <p style={{color: 'rgb(100, 116, 139)'}}>아이는 창작하고, 부모는 성장 리포트를 받아요.</p>
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
      <div style={{height: '120px'}}></div>
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-success/10 px-6 py-3 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-4 h-4 text-success">
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
              <span className="text-success font-semibold">Pricing Plans</span>
            </div>
            <h2 className="mb-4">우리 가족에 맞는 플랜을 선택하세요</h2>
            <p className="text-xl max-w-[600px] mx-auto" style={{color: 'rgb(100, 116, 139)'}}>7일 무료 체험으로 먼저 경험해보세요</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
            <div className="relative rounded-[20px] p-8 bg-white" style={{boxShadow: 'rgba(124, 58, 237, 0.08) 0px 2px 8px, rgba(0, 0, 0, 0.05) 0px 1px 3px'}}>
              <div className="text-center mb-8 text-foreground">
                <h3 className="mb-2">무료 체험</h3>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-5xl" style={{fontFamily: 'var(--font-display)', fontWeight: 800}}>₩0</span>
                  <span className="text-body-text">/7일</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-success/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-success">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-body-text">기본 모험 3개 체험</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-success/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-success">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-body-text">간단한 성장 리포트</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-success/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-success">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-body-text">모바일 앱 접근</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-success/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-success">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-body-text">기본 STEAM 활동</span>
                </li>
              </ul>
              <button className="w-full py-4 rounded-[12px] font-semibold transition-all bg-primary text-white hover:bg-primary/90">무료로 시작하기</button>
            </div>
            <div className="relative rounded-[20px] p-8 bg-primary" style={{boxShadow: 'rgba(124, 58, 237, 0) 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px', transform: 'none'}}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary px-6 py-2 rounded-full">
                <span className="text-white text-sm font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-8 text-white">
                <h3 className="mb-2 text-white">프리미엄</h3>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-5xl" style={{fontFamily: 'var(--font-display)', fontWeight: 800}}>₩29,000</span>
                  <span className="text-white/80">/월</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-white/90">모든 모험 무제한</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-white/90">상세 성장 리포트</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-white/90">모든 디바이스 접근</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-white/90">전문가 감수 콘텐츠</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-white/90">인쇄 가능한 워크시트</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-white/90">우선 고객 지원</span>
                </li>
              </ul>
              <button className="w-full py-4 rounded-[12px] font-semibold transition-all bg-white text-primary hover:bg-white/90">얼리버드 신청</button>
            </div>
            <div className="relative rounded-[20px] p-8 bg-white" style={{boxShadow: 'rgba(124, 58, 237, 0.08) 0px 2px 8px, rgba(0, 0, 0, 0.05) 0px 1px 3px'}}>
              <div className="text-center mb-8 text-foreground">
                <h3 className="mb-2">패밀리</h3>
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-5xl" style={{fontFamily: 'var(--font-display)', fontWeight: 800}}>₩49,000</span>
                  <span className="text-body-text">/월</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-success/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-success">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-body-text">프리미엄 모든 기능</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-success/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-success">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-body-text">최대 3명 아이 프로필</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-success/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-success">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-body-text">월 1회 라이브 워크샵</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-success/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-success">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-body-text">전용 학습 매니저</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-success/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-success">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-body-text">한정판 굿즈 증정</span>
                </li>
              </ul>
              <button className="w-full py-4 rounded-[12px] font-semibold transition-all bg-primary text-white hover:bg-primary/90">얼리버드 신청</button>
            </div>
          </div>
          <p className="text-center mt-12" style={{color: 'rgb(100, 116, 139)'}}>✨ 얼리버드 특별가: 정식 출시 후 30% 할인된 가격으로 평생 이용</p>
        </div>
      </section>
    </>
  )
}

export default Pricing

