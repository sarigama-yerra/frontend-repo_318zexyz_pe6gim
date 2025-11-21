import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      title: 'Business & AI Automation',
      desc: 'Flagship delivery. End-to-end workflows across your tools with self-hosted n8n + AI.',
      to: '/services/automation'
    },
    {
      title: 'Custom Development & AI Products',
      desc: 'Internal tools, data products, agent platforms, and everything in between.',
      to: '/services/custom-development'
    },
    {
      title: 'Consulting & Strategy',
      desc: 'Architecture, audits, and advisory when you need experienced calm hands.',
      to: '/services/consulting'
    }
  ]

  return (
    <div className="bg-[#FAF7F5] dark:bg-[#020617] text-slate-900 dark:text-white">
      <Header />
      <main>
        <section className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight" style={{fontFamily:'Geist, Inter, system-ui'}}>
            We build what others won’t.
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
            Calm, exacting delivery. Built to be owned. No lock-in, ever.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.title} to={s.to} className="group rounded-3xl border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-8 hover:border-[#7C3AED]/40 transition-colors">
                <div className="text-[#7C3AED]">→</div>
                <h3 className="mt-4 text-xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
                <span className="mt-6 inline-block text-[#7C3AED]">See examples →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
