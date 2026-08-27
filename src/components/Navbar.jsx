import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  // lock body scroll while drawer is open, and allow Escape to close it
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `relative py-1.5 font-mono text-[13px] tracking-[0.09em] uppercase transition-colors ${
      isActive ? 'text-signal-400' : 'text-frost-50/70 hover:text-frost-50'
    } after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-signal-500 after:origin-left after:transition-transform after:duration-300 ${
      isActive ? 'after:scale-x-100' : 'after:scale-x-0'
    }`

  return (
    <header className="sticky top-0 z-[100] bg-void-950/95 backdrop-blur-sm border-b border-signal-500/20">
      <div className="max-w-wrap mx-auto px-7 flex items-center justify-between h-[78px]">
        <NavLink to="/" className="flex items-center gap-2.5 text-frost-50" onClick={() => setOpen(false)}>
          <img
            src="../../image/logo.png"
            alt="OMM Tech Properties Logo"
            className="w-[70px] h-[70px] object-contain"
          />
          <span className="font-display text-lg tracking-wide">
            OMM TECH <span className="text-signal-400">PROPERTIES</span>
          </span>
        </NavLink>

        {/* desktop nav */}
        <nav className="hidden md:flex md:items-center md:gap-9">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button
            onClick={() => navigate('/contact')}
            className="hidden md:inline-flex items-center gap-2.5 px-7 py-3.5 text-[14px] font-medium font-sans tracking-[0.08em] uppercase bg-signal-500 text-void-950 hover:bg-signal-400 hover:shadow-[0_0_20px_rgba(76,243,255,0.4)] transition-all hover:-translate-y-0.5"
          >
            Get In Touch
          </button>

          {/* animated hamburger */}
          <button
            className="md:hidden relative z-[110] flex flex-col justify-center gap-[5px] w-9 h-9 p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`w-6 h-0.5 bg-frost-50 transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`w-6 h-0.5 bg-frost-50 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-frost-50 transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* backdrop */}
      <div
        className={`fixed inset-0 top-[78px] bg-black/55 z-[90] transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* mobile drawer */}
      <nav
        className={`fixed top-[78px] right-0 bottom-0 w-[min(100vw,3200px)] h-[min(100vh,3200px)] bg-[#0b0f16] border-l border-signal-500/20 z-[95] px-7 pt-2 pb-7 overflow-y-auto
          transition-transform duration-300 ease-out md:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `block w-full py-4 border-b border-frost-50/10 font-mono text-[13px] tracking-[0.09em] uppercase ${
                isActive ? 'text-signal-400' : 'text-frost-50/70'
              }`
            }
            onClick={() => setOpen(false)}
            end={l.to === '/'}
          >
            {l.label}
          </NavLink>
        ))}
        <button
          onClick={() => { setOpen(false); navigate('/contact') }}
          className="w-full mt-5 flex items-center justify-center gap-2.5 px-7 py-3.5 text-[14px] font-medium font-sans tracking-[0.08em] uppercase bg-signal-500 text-void-950 hover:bg-signal-400 transition-all"
        >
          Get In Touch
        </button>
      </nav>
    </header>
  )
}