import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full opacity-40" style={{backgroundColor: 'rgb(124, 58, 237)', width: '8px', height: '8px', top: '10%', left: '15%'}}></div>
          <div className="absolute rounded-full opacity-40" style={{backgroundColor: 'rgb(249, 115, 22)', width: '12px', height: '12px', top: '25%', left: '85%'}}></div>
          <div className="absolute rounded-full opacity-40" style={{backgroundColor: 'rgb(244, 114, 182)', width: '10px', height: '10px', top: '60%', left: '10%'}}></div>
          <div className="absolute rounded-full opacity-40" style={{backgroundColor: 'rgb(16, 185, 129)', width: '8px', height: '8px', top: '75%', left: '90%'}}></div>
          <div className="absolute rounded-full opacity-40" style={{backgroundColor: 'rgb(124, 58, 237)', width: '6px', height: '6px', top: '40%', left: '5%'}}></div>
          <div className="absolute rounded-full opacity-40" style={{backgroundColor: 'rgb(249, 115, 22)', width: '10px', height: '10px', top: '85%', left: '20%'}}></div>
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] left-[20%] text-secondary opacity-30 rotate-12">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path>
            </svg>
          </div>
          <div className="absolute top-[70%] right-[15%] text-pink opacity-30 -rotate-12">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path>
            </svg>
          </div>
          <div className="absolute top-[45%] left-[8%] text-success opacity-30 rotate-45">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path>
            </svg>
          </div>
        </div>
        <div className="absolute top-[10%] left-[5%] text-primary opacity-20" style={{transform: 'translateY(-0.134736px) rotate(0.0673678deg)'}}>
          <svg className="w-16 h-16 lg:w-20 lg:h-20" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 8C18.745 8 8 18.745 8 32c0 8.837 7.163 16 16 16 2.21 0 4-1.79 4-4 0-1.047-.402-2.002-1.058-2.714-.63-.686-.942-1.582-.942-2.286 0-2.21 1.79-4 4-4h4.667C43.955 35 52 26.955 52 17.667 52 12.373 44.627 8 32 8z" fill="currentColor" opacity="0.3"></path>
            <circle cx="20" cy="24" r="3" fill="currentColor"></circle>
            <circle cx="28" cy="18" r="3" fill="currentColor"></circle>
            <circle cx="38" cy="18" r="3" fill="currentColor"></circle>
            <circle cx="44" cy="26" r="3" fill="currentColor"></circle>
          </svg>
        </div>
        <div className="absolute top-[15%] right-[8%] text-secondary opacity-20" style={{transform: 'translateY(9.95596px) rotate(-4.97798deg)'}}>
          <svg className="w-14 h-14 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M52 8L42 18L46 22L56 12L52 8Z" fill="currentColor"></path>
            <path d="M40 20L24 36C24 36 20 42 20 46C20 50 22 54 26 54C30 54 36 50 36 50L52 34L40 20Z" fill="currentColor" opacity="0.3"></path>
          </svg>
        </div>
        <div className="absolute top-[45%] left-[3%] text-pink opacity-25" style={{transform: 'scale(1.17968) rotate(13.4757deg)'}}>
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="absolute bottom-[20%] right-[12%] text-success opacity-20" style={{transform: 'translateY(-7.44539px) rotate(-4.65337deg)'}}>
          <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 8C18.745 8 8 18.745 8 32c0 8.837 7.163 16 16 16 2.21 0 4-1.79 4-4 0-1.047-.402-2.002-1.058-2.714-.63-.686-.942-1.582-.942-2.286 0-2.21 1.79-4 4-4h4.667C43.955 35 52 26.955 52 17.667 52 12.373 44.627 8 32 8z" fill="currentColor" opacity="0.3"></path>
            <circle cx="20" cy="24" r="3" fill="currentColor"></circle>
            <circle cx="28" cy="18" r="3" fill="currentColor"></circle>
            <circle cx="38" cy="18" r="3" fill="currentColor"></circle>
            <circle cx="44" cy="26" r="3" fill="currentColor"></circle>
          </svg>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap gap-3">
              {t.hero.tags.map((tag, i) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-5 py-2.5 rounded-full border"
                  style={{
                    backgroundColor: ["#F5F0FF", "#FFF7ED", "#ECFDF5"][i],
                    borderColor: ["rgba(124, 58, 237, 0.1)", "rgba(249, 115, 22, 0.1)", "rgba(244, 114, 182, 0.1)"][i],
                  }}
                >
                  <span className="text-sm font-semibold" style={{color: ["#7C3AED", "#F97316", "#F472B6"][i]}}>{tag}</span>
                </motion.div>
              ))}
            </div>
            <h1 className="leading-tight" style={{fontSize: '42px', fontWeight: 800, background: 'linear-gradient(135deg, rgb(124, 58, 237) 0%, rgb(249, 115, 22) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              {t.hero.title}<br />{t.hero.titleBr}
            </h1>
            <p className="text-lg font-bold leading-relaxed" style={{color: 'rgb(30, 30, 30)'}}>
              {t.hero.subtitle}
            </p>
            <p className="text-base leading-relaxed" style={{color: 'rgb(100, 116, 139)'}}>
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-[12px] flex items-center justify-center gap-2 text-base font-semibold" tabIndex="0" style={{boxShadow: 'rgba(124, 58, 237, 0.2) 0px 4px 12px'}}>
                {t.hero.ctaPrimary}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-5 h-5">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              <button className="bg-transparent text-foreground px-8 py-4 rounded-[12px] border-2 border-primary/20 flex items-center justify-center gap-2 text-base font-semibold" tabIndex="0" style={{boxShadow: 'rgba(124, 58, 237, 0.08) 0px 2px 8px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play w-5 h-5">
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
                {t.hero.ctaSecondary}
              </button>
            </div>
            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-2 flex flex-wrap items-center gap-3"
            >
              {t.hero.trustBadges?.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-full px-3.5 py-1.5 shadow-sm"
                >
                  <span className="text-sm">{badge.icon}</span>
                  <span className="text-xs font-medium text-gray-600">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* App Mockup Placeholder */}
            <div className="relative rounded-[24px] border-2 border-dashed border-purple-200 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center py-24 px-8" style={{minHeight: '420px'}}>
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-purple-300 rounded-tl-lg"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-300 rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-300 rounded-bl-lg"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-purple-300 rounded-br-lg"></div>

              <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" opacity="0"/>
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" opacity="0.3"/>
                  <path d="M9 9a3 3 0 100 6 3 3 0 000-6zM15 9a3 3 0 100 6 3 3 0 000-6z" opacity="0.5"/>
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="9" cy="10" r="1.5"/>
                  <circle cx="15" cy="10" r="1.5"/>
                </svg>
              </div>
              <p className="text-xl font-bold text-gray-800 mb-2">{t.hero.mockupTitle}</p>
              <p className="text-sm text-gray-400">{t.hero.mockupDesc}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
