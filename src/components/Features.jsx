import React from 'react'

const Features = () => {
  return (
    <>
      <div style={{height: '120px'}}></div>
      <section className="relative py-20 px-4 bg-background">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-6 py-3 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play w-4 h-4 text-secondary">
                <polygon points="6 3 20 12 6 21 6 3"></polygon>
              </svg>
              <span className="text-secondary font-semibold">What is STEAM Village</span>
            </div>
            <h2 className="mb-4">아이가 경험하는 건<br />'학습'이 아닌 '모험'입니다</h2>
            <p className="text-lg max-w-[700px] mx-auto leading-relaxed" style={{color: 'rgb(100, 116, 139)'}}>
              매주 새로운 화가를 만나 그들의 세계를 탐험하며,<br />자연스럽게 STEAM 개념을 체득하는 여정
            </p>
          </div>
          <div className="max-w-[900px] mx-auto" style={{opacity: 1, transform: 'none'}}>
            <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-[20px] overflow-hidden aspect-video border-2 border-primary/10" style={{boxShadow: 'rgba(124, 58, 237, 0.15) 0px 8px 32px'}}>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl" tabIndex="0" style={{transform: 'none'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play w-10 h-10 text-primary ml-1">
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-[12px] p-4">
                  <p className="text-sm font-semibold text-foreground">📹 서비스 소개 영상 (1분 30초)</p>
                  <p className="text-xs mt-1" style={{color: 'rgb(100, 116, 139)'}}>실제 아이들이 콘텐츠를 경험하는 모습</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{height: '120px'}}></div>
      <section className="relative py-20 px-4 bg-background">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-4 h-4 text-primary">
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              <span className="text-primary font-semibold">Competitive Advantage</span>
            </div>
            <h2 className="mb-4">단순한 교육 앱과<br />차원이 다릅니다</h2>
          </div>
          <div className="max-w-[900px] mx-auto">
            <div className="bg-white rounded-[20px] p-8 lg:p-12" style={{boxShadow: 'rgba(124, 58, 237, 0.1) 0px 4px 20px', opacity: 1, transform: 'none'}}>
              <div className="text-center mb-12">
                <h3 className="mb-3" style={{fontSize: '28px'}}>왜 <span className="text-primary">STEAM Village</span>인가요?</h3>
                <p className="text-base" style={{color: 'rgb(100, 116, 139)'}}>다른 교육 앱과의 차이점</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-5 h-5 text-gray-400">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </div>
                    일반적인 교육 앱
                  </h4>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5">
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                    <p className="text-sm" style={{color: 'rgb(148, 163, 184)'}}>단순 반복 학습과 드릴 문제</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5">
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                    <p className="text-sm" style={{color: 'rgb(148, 163, 184)'}}>점수와 등수 중심의 평가</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5">
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                    <p className="text-sm" style={{color: 'rgb(148, 163, 184)'}}>과목별로 분리된 학습</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5">
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                    <p className="text-sm" style={{color: 'rgb(148, 163, 184)'}}>수동적인 영상 시청</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5">
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                    <p className="text-sm" style={{color: 'rgb(148, 163, 184)'}}>표준화된 콘텐츠만 제공</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-5 h-5 text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    STEAM Village
                  </h4>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-5 h-5 text-success flex-shrink-0 mt-0.5">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <p className="text-sm text-foreground"><span className="font-semibold">놀이처럼 느껴지는</span> 모험 기반 학습</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-5 h-5 text-success flex-shrink-0 mt-0.5">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <p className="text-sm text-foreground"><span className="font-semibold">사고 과정을 기록하는</span> 성장 리포트</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-5 h-5 text-success flex-shrink-0 mt-0.5">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <p className="text-sm text-foreground"><span className="font-semibold">예술로 통합된</span> STEAM 융합 교육</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-5 h-5 text-success flex-shrink-0 mt-0.5">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <p className="text-sm text-foreground"><span className="font-semibold">인터랙티브한</span> 직접 참여 활동</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-5 h-5 text-success flex-shrink-0 mt-0.5">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <p className="text-sm text-foreground"><span className="font-semibold">전문가 감수받은</span> 큐레이션 콘텐츠</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-primary/10 text-center">
                <p className="text-sm font-semibold text-primary">✨ 아이의 창의성과 사고력을 동시에 키우는 유일한 방법</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
