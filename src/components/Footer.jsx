import { Link } from 'react-router-dom'
import { Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-900/10 dark:border-white/10 bg-white dark:bg-[#020617]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li><Link to="/how-it-works" className="hover:text-[#7C3AED]">How It Works</Link></li>
              <li><Link to="/services" className="hover:text-[#7C3AED]">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-[#7C3AED]">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li><Link to="/services/automation" className="hover:text-[#7C3AED]">Automation</Link></li>
              <li><Link to="/services/custom-development" className="hover:text-[#7C3AED]">Custom Development</Link></li>
              <li><Link to="/services/consulting" className="hover:text-[#7C3AED]">Consulting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li><Link to="/about" className="hover:text-[#7C3AED]">About</Link></li>
              <li><Link to="/contact" className="hover:text-[#7C3AED]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li><a href="#" className="hover:text-[#7C3AED]">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#7C3AED]">Docs</a></li>
              <li><a href="#" className="hover:text-[#7C3AED]">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-slate-600 dark:text-slate-300 text-sm">© 2025 Inigai Technologies Inc. • Brooklyn & Tokyo</p>
          <div className="flex items-center gap-4">
            <a href="https://x.com" className="text-slate-600 dark:text-slate-300 hover:text-[#7C3AED]" aria-label="X / Twitter">
              <Twitter size={18} />
            </a>
            <a href="https://linkedin.com" className="text-slate-600 dark:text-slate-300 hover:text-[#7C3AED]" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
