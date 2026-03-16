import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function PainSolution() {
  const { t } = useLanguage()
  const s = t.painSolution

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Pain Points Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-red-100 bg-gradient-to-br from-red-50/60 via-orange-50/40 to-pink-50/30 p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-lg">
              ⚠️
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              {s.painTitle}
            </h3>
          </div>
          <ul className="space-y-4 ml-2">
            {s.pains.map((pain, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-400 flex-shrink-0"></span>
                <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {pain}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex justify-center py-6"
        >
          <span className="text-3xl text-gray-400">↓</span>
        </motion.div>

        {/* Solution Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50/60 via-violet-50/30 to-blue-50/20 p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-lg">
              ✓
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-purple-700">
              {s.solutionTitle}
            </h3>
          </div>
          <div className="space-y-4">
            {s.solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 md:p-6"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{sol.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg md:text-xl mb-1">
                      {sol.title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: sol.desc }}></p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
