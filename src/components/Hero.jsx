import { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onStart }) {
  const formRef = useRef(null)

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0F172A]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/60 via-[#0F172A]/40 to-[#020617] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-white tracking-tight"
          style={{ fontFamily: 'Geist, Inter, system-ui' }}
        >
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">
            What do you want to build today?
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
          className="mt-6 text-slate-200/80 max-w-3xl mx-auto text-base sm:text-lg"
        >
          Describe your ideal automation, AI system, or AI feature. We’ll build it perfectly — and hand you the keys.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
          className="mt-10"
        >
          <div className="mx-auto max-w-3xl flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur px-2 py-2 shadow-2xl">
            <input
              type="text"
              placeholder="e.g. AI agent that qualifies leads from my inbox and books meetings"
              className="flex-1 bg-transparent px-4 py-4 text-white placeholder:text-white/50 focus:outline-none text-base sm:text-lg"
            />
            <button
              onClick={onStart}
              className="ml-2 inline-flex items-center rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-3 text-sm sm:text-base font-medium transition-colors"
            >
              Start Building
            </button>
          </div>
          <p className="mt-6 text-slate-300/70 text-xs sm:text-sm">Self-hosted n8n • Your data never leaves your environment • Full export & ownership • No lock-in, ever.</p>
        </motion.div>
      </div>
    </section>
  )
}
