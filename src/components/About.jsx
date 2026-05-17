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
            <div className="inline-flex items-center gap-2 bg-success/10 px-6 py-3 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-4 h-4 text-success">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
              <span className="text-success font-semibold">{t.about.badge}</span>
            </div>
            <h2 className="mb-4">{t.about.title}<br />{t.about.titleBr}</h2>
            <p className="text-lg max-w-[700px] mx-auto leading-relaxed" style={{color: 'rgb(100, 116, 139)'}}>
              {t.about.desc}
            </p>
          </div>
          <div className="mb-12">
            <div className="relative mx-auto" style={{width: '320px'}}>
              <div className="relative bg-[#1E1B4B] rounded-[40px] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1E1B4B] rounded-b-3xl z-10"></div>
                <div className="relative bg-white rounded-[32px] overflow-hidden" style={{height: '640px'}}>
                  <div className="h-full flex flex-col">
                    <div className="px-5 py-4 border-b border-primary/10">
                      <h3 className="text-lg font-bold text-foreground mb-1" style={{fontSize: '18px'}}>{t.about.reportTitle}</h3>
                      <p className="text-xs text-body-text">{t.about.reportDate}</p>
                    </div>
                    <div className="flex border-b border-primary/10 px-2 overflow-x-auto">
                      <button className="flex items-center gap-1.5 px-3 py-3 text-xs font-semibold whitespace-nowrap transition-colors text-primary border-b-2 border-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-3.5 h-3.5">
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                          <path d="M10 9H8"></path>
                          <path d="M16 13H8"></path>
                          <path d="M16 17H8"></path>
                        </svg>
                        {t.about.tabSummary}
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-3 text-xs font-semibold whitespace-nowrap transition-colors text-body-text border-b-2 border-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-3.5 h-3.5">
                          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                          <path d="M20 3v4"></path>
                          <path d="M22 5h-4"></path>
                          <path d="M4 17v2"></path>
                          <path d="M5 18H3"></path>
                        </svg>
                        {t.about.tabSteam}
                      </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4">
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-[#F5F0FF] rounded-xl p-3 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette w-5 h-5 text-primary mx-auto mb-1">
                              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                            </svg>
                            <div className="text-xl font-bold text-primary mb-0.5" style={{fontFamily: 'var(--font-display)'}}>{t.about.statWorks}</div>
                            <div className="text-[10px] text-body-text">{t.about.statWorksLabel}</div>
                          </div>
                          <div className="bg-[#FFF7ED] rounded-xl p-3 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-5 h-5 text-secondary mx-auto mb-1">
                              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                              <path d="M20 3v4"></path>
                              <path d="M22 5h-4"></path>
                              <path d="M4 17v2"></path>
                              <path d="M5 18H3"></path>
                            </svg>
                            <div className="text-xl font-bold text-secondary mb-0.5" style={{fontFamily: 'var(--font-display)'}}>{t.about.statExplore}</div>
                            <div className="text-[10px] text-body-text">{t.about.statExploreLabel}</div>
                          </div>
                          <div className="bg-[#ECFDF5] rounded-xl p-3 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-5 h-5 text-success mx-auto mb-1">
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <div className="text-xl font-bold text-success mb-0.5" style={{fontFamily: 'var(--font-display)'}}>{t.about.statTime}</div>
                            <div className="text-[10px] text-body-text">{t.about.statTimeLabel}</div>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-1 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-white">
                              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                              <path d="M20 3v4"></path>
                              <path d="M22 5h-4"></path>
                              <path d="M4 17v2"></path>
                              <path d="M5 18H3"></path>
                            </svg>
                          </div>
                          <div className="ml-10 bg-primary/5 rounded-2xl rounded-tl-none p-4 border border-primary/10">
                            <p className="text-sm text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.aiInsight }}>
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-xs font-semibold text-foreground">{t.about.highlightTitle}</h4>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2 text-xs">
                              <span className="text-base">🎨</span>
                              <span className="text-body-text pt-0.5">{t.about.highlights[0]}</span>
                            </div>
                            <div className="flex items-start gap-2 text-xs">
                              <span className="text-base">💡</span>
                              <span className="text-body-text pt-0.5">{t.about.highlights[1]}</span>
                            </div>
                            <div className="flex items-start gap-2 text-xs">
                              <span className="text-base">⭐</span>
                              <span className="text-body-text pt-0.5">{t.about.highlights[2]}</span>
                            </div>
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
