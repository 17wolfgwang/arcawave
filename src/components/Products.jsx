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
            <div className="inline-flex items-center gap-2 bg-pink/10 px-6 py-3 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-4 h-4 text-pink">
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
                <path d="M4 17v2"></path>
                <path d="M5 18H3"></path>
              </svg>
              <span className="text-pink font-semibold">{t.products.badge1}</span>
            </div>
            <h2 className="mb-4">{t.products.title1}<br />{t.products.title1Br}</h2>
            <p className="text-lg max-w-[700px] mx-auto leading-relaxed" style={{color: 'rgb(100, 116, 139)'}}>
              {t.products.desc1}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative" style={{opacity: 1, transform: 'none'}}>
              <div className="relative bg-gradient-to-br from-[#F5F0FF] to-[#FFF7ED] rounded-[20px] p-8 aspect-[4/3] flex flex-col items-center justify-center border-4 border-dashed border-primary/20" style={{boxShadow: 'rgba(124, 58, 237, 0.12) 0px 8px 24px'}}>
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play w-10 h-10 text-primary">
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">{t.products.videoTitle}</h4>
                  <p className="text-sm" style={{color: 'rgb(100, 116, 139)'}}>{t.products.videoDesc}</p>
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-secondary rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-success rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-pink rounded-br-lg"></div>
              </div>
              <div className="absolute -top-3 -right-3 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">{t.products.ageTag}</div>
            </div>
            <div className="space-y-4" style={{opacity: 1, transform: 'none'}}>
              <h3 className="mb-6 text-foreground" style={{fontSize: '24px'}}>{t.products.contentTitle}</h3>
              <div className="bg-[#F5F0FF] rounded-[20px] p-6 border border-primary/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-[12px] flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette w-6 h-6 text-primary">
                      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{t.products.card1Title}</h4>
                    <p className="text-sm" style={{color: 'rgb(100, 116, 139)'}}>{t.products.card1Desc}</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFF7ED] rounded-[20px] p-6 border border-secondary/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-[12px] flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb w-6 h-6 text-secondary">
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                      <path d="M9 18h6"></path>
                      <path d="M10 22h4"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{t.products.card2Title}</h4>
                    <p className="text-sm" style={{color: 'rgb(100, 116, 139)'}}>{t.products.card2Desc}</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#ECFDF5] rounded-[20px] p-6 border border-success/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success/10 rounded-[12px] flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image w-6 h-6 text-success">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                      <circle cx="9" cy="9" r="2"></circle>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{t.products.card3Title}</h4>
                    <p className="text-sm" style={{color: 'rgb(100, 116, 139)'}}>{t.products.card3Desc}</p>
                  </div>
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
