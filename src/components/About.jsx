import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  return (
    <>
      <div style={{height: '120px'}}></div>
      <section id="about" className="relative py-20 px-4 bg-background">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">{t.about.title}<br />{t.about.titleBr}</h2>
            <p className="text-lg max-w-[700px] mx-auto leading-relaxed" style={{color: 'rgb(100, 116, 139)'}}>
              {t.about.desc}
            </p>
          </div>
          <div className="mb-12">
            <div className="relative mx-auto" style={{width: '320px'}}>
              <div className="relative bg-[#1E1B4B] rounded-[40px] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1E1B4B] rounded-b-3xl z-10"></div>
                <div className="relative bg-white rounded-[32px] overflow-hidden" style={{height: '560px'}}>
                  <div className="h-full flex flex-col">
                    {/* Tabs */}
                    <div className="flex border-b border-primary/10 px-2 overflow-x-auto">
                      <button className="flex items-center gap-1.5 px-3 py-3 text-xs font-semibold whitespace-nowrap transition-colors text-primary border-b-2 border-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                          <path d="M7 16l4-8 4 4 4-4"></path>
                        </svg>
                        {t.about.tabSummary}
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-3 text-xs font-semibold whitespace-nowrap transition-colors text-body-text border-b-2 border-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        {t.about.tabSteam}
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-3 text-xs font-semibold whitespace-nowrap transition-colors text-body-text border-b-2 border-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                        </svg>
                        포트폴리오
                      </button>
                    </div>
                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-4">
                      <div className="space-y-4">
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-[#F5F0FF] rounded-xl p-3 text-center">
                            <div className="text-xl font-bold text-primary mb-0.5" style={{fontFamily: 'var(--font-display)'}}>{t.about.statWorks}</div>
                            <div className="text-[10px] text-body-text">{t.about.statWorksLabel}</div>
                          </div>
                          <div className="bg-[#FFF7ED] rounded-xl p-3 text-center">
                            <div className="text-xl font-bold text-secondary mb-0.5" style={{fontFamily: 'var(--font-display)'}}>{t.about.statExplore}</div>
                            <div className="text-[10px] text-body-text">{t.about.statExploreLabel}</div>
                          </div>
                          <div className="bg-[#ECFDF5] rounded-xl p-3 text-center">
                            <div className="text-xl font-bold text-success mb-0.5" style={{fontFamily: 'var(--font-display)'}}>{t.about.statTime}</div>
                            <div className="text-[10px] text-body-text">{t.about.statTimeLabel}</div>
                          </div>
                        </div>
                        {/* AI Insight */}
                        <div className="relative">
                          <div className="absolute -left-1 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-sm">🤖</span>
                          </div>
                          <div className="ml-10 bg-primary/5 rounded-2xl rounded-tl-none p-4 border border-primary/10">
                            <p className="text-sm text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.aiInsight }}>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-5 h-5 text-success">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-sm font-semibold text-foreground">{t.about.check1}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-5 h-5 text-success">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-sm font-semibold text-foreground">{t.about.check2}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-5 h-5 text-success">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-sm font-semibold text-foreground">{t.about.check3}</span>
            </div>
          </div>
          <p className="text-center text-sm" style={{color: 'rgb(100, 116, 139)'}}>{t.about.note}</p>
        </div>
      </section>
    </>
  )
}

export default About
