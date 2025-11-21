import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-[#FAF7F5] dark:bg-[#020617] text-slate-900 dark:text-white">
      <Header />
      <main>
        <section className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight" style={{fontFamily:'Geist, Inter, system-ui'}}>
            We only build things that feel like a perfect fit — no compromise.
          </h1>
          <div className="mt-6 max-w-3xl space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              We obsess over crafting systems that amplify what your business is truly great at and loves doing — what your customers need — and that make serious money. No filler features. No bloat.
            </p>
            <p>
              Calm authority over hype. We design, automate, and build with care, and we hand you the keys when we’re done.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1,2,3,4].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
                <div className="aspect-square bg-gradient-to-br from-[#0F172A] to-[#7C3AED]" />
                <div className="p-4">
                  <div className="font-medium">Team Member {i}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Short bio about the person and their calm superpowers.</div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-16 text-slate-600 dark:text-slate-300">
            We succeed only when your automation feels like it was built by your future self.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
