import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-void-950 text-frost-50/65 py-14 pb-7 relative overflow-hidden">
      <div className="sf-grid sf-grid-fade-top opacity-40" />
      <div className="max-w-wrap mx-auto px-7 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 pb-10 border-b border-frost-50/10">
          <div>
            <div className="flex items-center gap-2.5 text-frost-50 mb-3.5">
             <img
            src="../../image/logo.png"
            alt="OMM Tech Properties Logo"
            className="w-[80px] h-[80px] object-contain"
          />
              <span className="font-display text-base">OMM TECH PROPERTIES</span>
            </div>
            <p className="font-sans text-[13.5px] max-w-[280px] leading-relaxed">
              Real estate, rendered in signal — field-verified listings and a technology-first process across
              Odisha.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.12em] uppercase text-signal-400 mb-4">// Navigate</h4>
            {[
              ['Home', '/'],
              ['Properties', '/properties'],
              ['About', '/about'],
              ['Contact', '/contact'],
            ].map(([label, to]) => (
              <Link key={to} to={to} className="font-sans block text-sm mb-2.5 hover:text-signal-300 transition-colors">
                {label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-[0.12em] uppercase text-signal-400 mb-4">// Contact</h4>
            <a href="tel:+919827832424" className="font-sans block text-sm mb-2.5 hover:text-signal-300 transition-colors">
              +91   9827832424
            </a>
            <a href="tel:+917008058453" className="font-sans block text-sm mb-2.5 hover:text-signal-300 transition-colors">
              +91  7008058453
            </a>
            <a
              href="mailto:hello@ommtechproperties.example"
              className="font-sans block text-sm mb-2.5 hover:text-signal-300 transition-colors"
            >
              manmath.otp@gmail.com
            </a>
            <span className="font-sans block text-sm mb-2.5">Bhubaneswar, Odisha</span>
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 text-[12.5px] flex-wrap gap-3">
          <span className="font-sans">© 2026 Omm Tech Properties. All rights reserved.</span>
          {/* <span className="font-mono text-signal-400/60">SIGNAL LOCKED · SINCE 2019</span> */}
          <span className="font-sans" >Design by TOTAL TECHNOLOGY SYSTEM </span>
        </div>
      </div>
    </footer>
  )
}
