import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Pricing() {
  return (
    <div className="bg-[#FAF7F5] dark:bg-[#020617] text-slate-900 dark:text-white">
      <Header />
      <main>
        <section className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight" style={{fontFamily:'Geist, Inter, system-ui'}}>
            Simple, transparent, no‑fluff.
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
            You always own the assets. Pay once, keep forever.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-8">
              <h3 className="text-xl font-medium">Project-based</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">Fixed-price delivery — average 80k depending on scope.</p>
            </div>
            <div className="rounded-3xl border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-8">
              <h3 className="text-xl font-medium">Consulting</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">$500/hour or $15k/day retainer.</p>
            </div>
            <div className="rounded-3xl border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-8">
              <h3 className="text-xl font-medium">Ongoing Automation Care</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">$8k/month (optional maintenance, new features).</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
