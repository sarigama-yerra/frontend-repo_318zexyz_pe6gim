import Header from '../components/Header'
import Footer from '../components/Footer'

export default function HowItWorks() {
  const steps = [
    {
      title: 'You describe the dream system',
      desc: 'Tell us in plain English what you want to automate or build. Include examples and edge cases — we love details.'
    },
    {
      title: 'We scope & quote',
      desc: 'Fixed price for delivery or time & materials for consulting. Clear, calm, no surprises.'
    },
    {
      title: 'We build in your private cloud',
      desc: 'Self-hosted n8n + AI tools on isolated environments. Your data never leaves your control.'
    },
    {
      title: 'You own everything',
      desc: 'Workflows, data, credentials, infra. Export and leave anytime. No vendor jail. Ever.'
    }
  ]

  return (
    <div className="bg-[#FAF7F5] dark:bg-[#020617] text-slate-900 dark:text-white">
      <Header />
      <main>
        <section className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight" style={{fontFamily:'Geist, Inter, system-ui'}}>
            From idea to owned system in weeks, not months.
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
            Tell us what you want to build. We’ll make it happen — on your terms.
          </p>

          <div className="mt-16">
            <div className="hidden md:grid grid-cols-4 gap-6 relative">
              <div className="absolute left-0 right-0 top-[72px] h-0.5 bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-transparent" />
              {steps.map((s, i) => (
                <div key={i} className="relative rounded-2xl border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
                  <div className="w-10 h-10 rounded-full bg-[#7C3AED] text-white flex items-center justify-center mb-4">{i+1}</div>
                  <h3 className="font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="md:hidden space-y-4 mt-8">
              {steps.map((s, i) => (
                <div key={i} className="rounded-2xl border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
                  <div className="w-8 h-8 rounded-full bg-[#7C3AED] text-white flex items-center justify-center mb-3 text-sm">{i+1}</div>
                  <h3 className="font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            {[1,2].map((i) => (
              <div key={i} className="aspect-[16/10] rounded-2xl border border-slate-900/10 dark:border-white/10 bg-gradient-to-br from-[#0F172A] to-[#1E293B]"></div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
