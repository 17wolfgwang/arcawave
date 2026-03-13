import React from 'react'
import { motion } from 'framer-motion'

const decorations = [
  { emoji: "✨", top: "10%", left: "5%", delay: 0 },
  { emoji: "🎨", top: "20%", right: "8%", delay: 0.5 },
  { emoji: "⭐", top: "40%", left: "3%", delay: 1 },
  { emoji: "🖌️", top: "60%", right: "5%", delay: 1.5 },
  { emoji: "💫", top: "75%", left: "7%", delay: 2 },
  { emoji: "🌟", top: "85%", right: "10%", delay: 2.5 },
]

const confettiDots = [
  { top: "5%", left: "12%" },
  { top: "15%", left: "78%" },
  { top: "8%", left: "45%" },
  { top: "25%", left: "88%" },
  { top: "35%", left: "8%" },
  { top: "42%", left: "92%" },
  { top: "55%", left: "15%" },
  { top: "62%", left: "85%" },
  { top: "72%", left: "22%" },
  { top: "78%", left: "75%" },
  { top: "85%", left: "5%" },
  { top: "92%", left: "68%" },
  { top: "18%", left: "32%" },
  { top: "48%", left: "55%" },
  { top: "65%", left: "42%" },
  { top: "88%", left: "95%" },
  { top: "12%", left: "65%" },
  { top: "38%", left: "28%" },
  { top: "58%", left: "72%" },
  { top: "95%", left: "38%" },
]

const colors = ["#7C3AED", "#F97316", "#F472B6", "#10B981"]

const FloatingDecorations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {decorations.map((deco, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl md:text-3xl opacity-20"
          style={{
            top: deco.top,
            left: deco.left,
            right: deco.right,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: deco.delay,
            ease: "easeInOut",
          }}
        >
          {deco.emoji}
        </motion.span>
      ))}
      
      {confettiDots.map((dot, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            top: dot.top,
            left: dot.left,
            backgroundColor: colors[i % 4],
            opacity: 0.1,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingDecorations

