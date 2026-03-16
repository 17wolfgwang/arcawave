import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const Features = () => {
  const { t } = useLanguage()

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
              <span className="text-secondary font-semibold">{t.features.badge1}</span>
            </div>
            <h2 className="mb-4">{t.features.title1}<br />{t.features.title1Br}</h2>
            <p className="text-lg max-w-[700px] mx-auto leading-relaxed" style={{color: 'rgb(100, 116, 139)'}}>
              {t.features.desc1}<br />{t.features.desc1Br}
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
                  <p className="text-sm font-semibold text-foreground">{t.features.videoLabel}</p>
                  <p className="text-xs mt-1" style={{color: 'rgb(100, 116, 139)'}}>{t.features.videoDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{height: '120px'}}></div>
      <section className="relative py-20 px-4" style={{background: 'linear-gradient(to bottom, #FFF9F0, #FFF5E6)'}}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
              <span className="text-primary font-semibold">{t.features.badge2}</span>
            </div>
            <h2 className="mb-4 text-foreground" style={{fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, lineHeight: 1.3}}>
              {t.features.title2}<br />{t.features.title2Br}
            </h2>
          </div>
          <div className="max-w-[900px] mx-auto">
            <div className="bg-white rounded-[24px] p-8 lg:p-12" style={{boxShadow: '0 4px 30px rgba(0,0,0,0.06)'}}>
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  <span style={{color: 'rgb(100, 116, 139)'}}>{"왜 "}</span>
                  <span className="text-primary">STEAM Village</span>
                  <span style={{color: 'rgb(100, 116, 139)'}}>{"인가요?"}</span>
                </h3>
                <p className="text-sm" style={{color: 'rgb(148, 163, 184)'}}>{t.features.cardDesc}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {/* Others */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-foreground">{t.features.othersLabel}</h4>
                  </div>
                  <div className="space-y-5">
                    {t.features.others.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 flex-shrink-0 mt-0.5">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                        <span className="text-sm" style={{color: 'rgb(148, 163, 184)'}}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* STEAM Village */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <h4 className="font-bold text-lg text-primary">{t.features.usLabel}</h4>
                  </div>
                  <div className="space-y-5">
                    {t.features.us.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0 mt-0.5">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span className="text-sm text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center mt-8 text-primary font-medium text-sm">{t.features.bottomTagline}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
