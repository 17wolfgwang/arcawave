import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const AppPreview = () => {
  const { t } = useLanguage()

  return (
    <>
      <div style={{ height: '120px' }}></div>
      <section className="relative py-20 px-4 bg-background">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">{t.appPreview.title}</h2>
            <p className="text-lg" style={{ color: 'rgb(100, 116, 139)' }}>
              {t.appPreview.desc}
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
            {t.appPreview.screens.map((screen, index) => (
              <div key={index} className="text-center">
                <div
                  className="bg-white rounded-[20px] aspect-[3/4] flex flex-col items-center justify-center border-2 border-dashed border-primary/20 mb-4"
                  style={{ boxShadow: 'rgba(124, 58, 237, 0.06) 0px 2px 12px' }}
                >
                  <div className="text-5xl mb-3">{screen.emoji}</div>
                  <p className="text-sm font-medium text-foreground">{screen.label}</p>
                  <p className="text-xs text-gray-400">{screen.sub}</p>
                </div>
                <p className="font-semibold text-foreground">{screen.label}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-10">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full bg-primary/30"></div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AppPreview
