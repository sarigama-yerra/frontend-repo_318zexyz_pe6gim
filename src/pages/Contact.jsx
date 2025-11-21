import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="bg-[#FAF7F5] dark:bg-[#020617] text-slate-900 dark:text-white">
      <Header />
      <main>
        <section className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight" style={{fontFamily:'Geist, Inter, system-ui'}}>
            Tell us what you want to build.
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Most projects start with a 30‑min call.</p>

          <div className="mt-10 max-w-3xl flex items-center rounded-full border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-2 py-2">
            <input
              type="text"
              placeholder="e.g. Email triage agent that qualifies leads and books meetings"
              className="flex-1 bg-transparent px-4 py-4 placeholder:text-slate-500 dark:placeholder:text-slate-300 focus:outline-none"
            />
            <a href="#cal" className="ml-2 inline-flex items-center rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-3 text-sm font-medium transition-colors">
              Start Building
            </a>
          </div>

          <div id="cal" className="mt-12 rounded-2xl overflow-hidden border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5">
            <div className="aspect-[16/9] w-full flex items-center justify-center text-slate-500 dark:text-slate-400">
              Calendly embed here
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
