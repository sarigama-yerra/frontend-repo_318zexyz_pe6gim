import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ServiceDetail({ title, description }) {
  return (
    <div className="bg-[#FAF7F5] dark:bg-[#020617] text-slate-900 dark:text-white">
      <Header />
      <main>
        <section className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight" style={{fontFamily:'Geist, Inter, system-ui'}}>
            {title}
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">{description}</p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-3xl border border-slate-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-8">
                <div className="text-[#7C3AED]">Example {i}</div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Short description of a representative project.</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
