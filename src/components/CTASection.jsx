import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="relative bg-[#020617] text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{fontFamily:'Geist, Inter, system-ui'}}>
              Ready to own your automation?
            </h2>
            <p className="mt-4 text-slate-300/80">
              Tell us what you want to build. We’ll make it happen — on your terms.
            </p>
            <div className="mt-8 mx-auto max-w-2xl flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur px-2 py-2">
              <input
                type="text"
                placeholder="Describe your system..."
                className="flex-1 bg-transparent px-4 py-4 text-white placeholder:text-white/50 focus:outline-none"
              />
              <a href="/contact" className="ml-2 inline-flex items-center rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-3 text-sm font-medium transition-colors">
                Start Building
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
