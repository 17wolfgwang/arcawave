import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const Products = () => {
  const { t } = useLanguage()

  return (
    <>
      <div style={{height: '120px'}}></div>
      <section className="relative py-20 px-4 bg-background">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-6 py-3 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-4 h-4 text-secondary">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span className="text-secondary font-semibold">{t.products.badge2}</span>
            </div>
            <h2 className="mb-4">{t.products.title2}</h2>
            <p className="text-lg max-w-[700px] mx-auto leading-relaxed" style={{color: 'rgb(100, 116, 139)'}}>
              {t.products.desc2}
            </p>
          </div>
          {/* Team - 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-[1100px] mx-auto">
            {t.products.team.map((member, index) => (
              <div key={index} className="bg-white rounded-[20px] p-6 text-center relative" style={{boxShadow: 'rgba(124, 58, 237, 0.08) 0px 2px 8px, rgba(0, 0, 0, 0.05) 0px 1px 3px'}}>
                <div className="relative mx-auto mb-4 w-20 h-20">
                  <div className="w-full h-full rounded-full border-4 border-dashed border-primary/20 flex items-center justify-center bg-primary/5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-8 h-8 text-primary/30">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 text-secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path>
                    </svg>
                  </div>
                </div>
                <h4 className="mb-1.5 text-foreground font-bold" style={{fontSize: '16px'}}>{member.name}</h4>
                <div className="mb-0.5 text-xs font-semibold text-primary">{member.school}</div>
                <div className="mb-3 text-xs font-semibold text-secondary">{member.role}</div>
                <p className="text-xs leading-relaxed" style={{color: 'rgb(100, 116, 139)'}}>{member.desc}</p>
              </div>
            ))}
          </div>
          {/* Advisory Board with tags */}
          <div className="max-w-[900px] mx-auto">
            <div className="bg-[#F5F0FF] rounded-[20px] p-8 border border-primary/10 text-center">
              <h4 className="mb-4 text-foreground font-bold" style={{fontSize: '18px'}}>{t.products.advisorTitle}</h4>
              <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                {t.products.advisorTags.map((tag, index) => (
                  <span key={index} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-foreground border border-primary/10">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm" style={{color: 'rgb(100, 116, 139)'}}>{t.products.advisorNote}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
