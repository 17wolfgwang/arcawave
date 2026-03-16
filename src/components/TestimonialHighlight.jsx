import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const TestimonialHighlight = () => {
  const { t } = useLanguage()
  const d = t.testimonialHighlight

  return (
    <>
      <div style={{height: '120px'}}></div>
      <section className="relative py-20 px-4 bg-background">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-white rounded-[24px] p-10 lg:p-16" style={{boxShadow: '0 4px 40px rgba(124, 58, 237, 0.08)'}}>
            <div className="text-center">
              {/* Quote icon */}
              <div className="w-16 h-16 rounded-full mx-auto mb-8 flex items-center justify-center" style={{background: 'linear-gradient(135deg, #7C3AED, #A855F7)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                </svg>
              </div>

              {/* Quote */}
              <h2 className="text-foreground mb-6" style={{fontSize: 'clamp(22px, 3.5vw, 32px)', fontWeight: 800, lineHeight: 1.4}}>
                {d.quote}
              </h2>

              {/* Subtitle */}
              <p className="text-base mb-8" style={{color: 'rgb(100, 116, 139)', lineHeight: 1.7}}>
                {d.subtitle1}<br />{d.subtitle2}
              </p>

              {/* Person */}
              <div className="flex items-center justify-center gap-3 mb-0">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold text-sm" style={{background: 'linear-gradient(135deg, #E57373, #EF5350)'}}>
                  {d.initial}
                </div>
                <div className="text-left">
                  <div className="font-bold text-foreground text-sm">{d.name}</div>
                  <div className="text-xs" style={{color: 'rgb(148, 163, 184)'}}>{d.role}</div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 mt-10 pt-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                {d.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl lg:text-3xl font-extrabold mb-1" style={{background: stat.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{stat.value}</div>
                    <div className="text-xs" style={{color: 'rgb(148, 163, 184)'}}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialHighlight
