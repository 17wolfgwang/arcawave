import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const stepColors = {
  red: { bg: 'bg-red-50', circle: 'bg-red-500', text: 'text-red-600' },
  amber: { bg: 'bg-amber-50', circle: 'bg-amber-500', text: 'text-amber-600' },
  green: { bg: 'bg-green-50', circle: 'bg-green-500', text: 'text-green-600' },
  purple: { bg: 'bg-purple-50', circle: 'bg-purple-500', text: 'text-purple-600' },
}

const LearningProcess = () => {
  const { t } = useLanguage()

  return (
    <>
      <div style={{ height: '120px' }}></div>
      <section className="relative py-20 px-4 bg-background">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">{t.learningProcess.title}</h2>
            <p className="text-lg" style={{ color: 'rgb(100, 116, 139)' }}>
              {t.learningProcess.desc}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto mb-10">
            {t.learningProcess.steps.map((step, index) => {
              const colors = stepColors[step.color]
              return (
                <div
                  key={index}
                  className={`${colors.bg} rounded-[20px] p-6 relative`}
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 2px 8px' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${colors.circle} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">{step.letter}</span>
                    </div>
                    <div>
                      <div className={`font-bold ${colors.text}`}>{step.label}</div>
                      <div className="text-xs text-gray-500">{step.time}</div>
                    </div>
                  </div>
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <p className={`text-sm font-semibold ${colors.text}`}>{step.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-primary text-2xl">→</span>
            <span className="text-primary text-2xl">→</span>
            <span className="text-primary text-2xl">→</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default LearningProcess
