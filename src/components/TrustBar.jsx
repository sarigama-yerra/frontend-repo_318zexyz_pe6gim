export default function TrustBar() {
  const logos = ['Stripe', 'Vercel', 'Notion', 'Shopify', 'Linear', 'Retool']
  return (
    <section className="bg-[#F8FAFC] dark:bg-[#0B1220]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-center text-slate-600 dark:text-slate-300 text-sm">Used by scaling startups • agencies • Fortune 1000 teams</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((logo) => (
            <div key={logo} className="text-center text-slate-400 dark:text-slate-500 text-sm py-2 border border-slate-900/5 dark:border-white/5 rounded-lg">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
