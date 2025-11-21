import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)

  const toggleTheme = () => {
    setDark(!dark)
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark')
      document.body.classList.toggle('bg-slate-50')
      document.body.classList.toggle('bg-[#020617]')
    }
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/60 dark:bg-[#020617]/60 border-b border-slate-900/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight text-slate-900 dark:text-white text-xl">
            <span className="sr-only">Inigai</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold" style={{fontFamily:'Geist, Inter, system-ui'}}>
                Inigai
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-300">“in-ee-guy”</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => classNames(
                  'text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors',
                  isActive && 'text-[#7C3AED] dark:text-[#A78BFA] font-medium'
                )}
              >
                {item.label}
              </NavLink>
            ))}
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="rounded-full p-2 hover:bg-slate-900/5 dark:hover:bg-white/5 text-slate-600 dark:text-slate-200"
            >
              {dark ? <Moon size={18}/> : <Sun size={18}/>}
            </button>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-900/5 dark:hover:bg-white/5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => classNames(
                    'px-3 py-2 rounded-md text-slate-800 dark:text-slate-100 hover:bg-slate-900/5 dark:hover:bg-white/5',
                    isActive && 'bg-[#7C3AED]/10 text-[#7C3AED]'
                  )}
                >
                  {item.label}
                </NavLink>
              ))}
              <button
                onClick={() => { toggleTheme(); setOpen(false) }}
                className="px-3 py-2 rounded-md text-left text-slate-800 dark:text-slate-100 hover:bg-slate-900/5 dark:hover:bg-white/5"
              >
                Toggle theme
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
