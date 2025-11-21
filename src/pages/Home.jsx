import { useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import CTASection from '../components/CTASection'

export default function Home() {
  const contactRef = useRef(null)
  const onStart = () => {
    const el = document.getElementById('contact-shortcut')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="bg-[#FAF7F5] dark:bg-[#020617] text-slate-900 dark:text-white">
      <Header />
      <main>
        <Hero onStart={onStart} />

        <section className="bg-[#FAF7F5] dark:bg-[#0B1220]">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid md:grid-cols-4 gap-6">
              {["Custom AI Agents","End-to-End Automations","Legacy System Modernization","AI-Powered Products"].map((title) => (
                <div key={title} className="rounded-2xl border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
                  <h3 className="font-medium">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Calm, exacting delivery. Built to be owned. No lock-in, ever.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TrustBar />

        <div id="contact-shortcut">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
