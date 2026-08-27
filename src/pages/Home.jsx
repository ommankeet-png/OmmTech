import { Link } from 'react-router-dom'
import { properties } from '../data/properties.js'
import PropertyCard from '../components/PropertyCard.jsx'
import Reveal from '../components/Reveal.jsx'
import HeroSlider from '../components/HeroSlider.jsx'

export default function Home() {
  const featured = properties.filter((p) => p.featured)

  return (
    <>
      {/* HERO */}
      <section className="bg-void-950 text-frost-50 relative overflow-hidden pt-[88px] pb-[70px]">
        <div className="sf-grid sf-grid-fade" />
        <div className="pointer-events-none absolute -top-24 -right-24 w-[440px] h-[440px] rounded-full sf-radar blur-[2px] opacity-60" />
        <div className="max-w-wrap mx-auto px-7 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
            <div>
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-signal-400 block mb-3.5">
                // Omm Tech Properties · Grid Ref 20.27N 85.84E
              </span>
              <h1 className="font-display text-[32px] md:text-[54px] leading-[1.08]">
                Real estate,
                <br />
                <span className="sf-flicker text-pulse-400">rendered in signal.</span>
              </h1>
              <p className="font-sans text-haze-600 text-[17px] leading-relaxed max-w-[560px] my-6">
                We pair on-the-ground property expertise with a technology-first process, so every listing,
                valuation, and closing is precise, transparent, and traceable end to end.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  to="/properties"
                  className="font-sans inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium tracking-[0.08em] uppercase bg-signal-500 text-void-950 hover:bg-signal-400 transition-all hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(76,243,255,0.45)]"
                >
                  Browse Properties
                </Link>
                <Link
                  to="/contact"
                  className="font-sans inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium tracking-[0.08em] uppercase border border-pulse-500/50 text-frost-50 hover:border-pulse-500 hover:text-pulse-300 hover:shadow-[0_0_20px_rgba(156,107,255,0.35)] transition-all hover:-translate-y-0.5"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>

            <HeroSlider />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-[72px] pt-9 border-t border-signal-500/15 relative z-10">
            {[
              ['240+', 'Properties Listed'],
              ['18', 'Cities Covered'],
              ['96%', 'Client Satisfaction'],
              ['7 yrs', 'On the Ground'],
            ].map(([num, label]) => (
              <div key={label} className="sf-corner px-4 py-3 border border-signal-500/15 bg-void-900/60">
                <div className="font-display text-2xl md:text-[28px] text-signal-400" style={{ textShadow: '0 0 16px rgba(76,243,255,0.35)' }}>
                  {num}
                </div>
                <div className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-haze-600 mt-1.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-24 bg-void-900 relative">
        <div className="max-w-wrap mx-auto px-7">
          <div className="flex justify-between items-end gap-6 flex-wrap mb-12">
            <div>
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-pulse-400 block mb-3.5">
                // Featured Signals
              </span>
              <h2 className="font-display text-[24px] md:text-[36px] leading-tight text-frost-50">
                Currently online
              </h2>
            </div>
            <Link
              to="/properties"
              className="font-sans inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium tracking-[0.08em] uppercase border border-signal-500/30 text-frost-50 hover:border-signal-400 hover:text-signal-400 transition-all hover:-translate-y-0.5"
            >
              View All Properties
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {featured.map((p, i) => (
              <div key={p.id} className="relative">
                <span className="absolute -top-3 left-3 z-10 font-mono text-[10px] tracking-[0.12em] uppercase text-signal-400 bg-void-900 px-1.5">
                  SPEC_{String(i + 1).padStart(2, '0')}
                </span>
                <PropertyCard property={p} delay={i * 100} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-void-950 text-frost-50 relative overflow-hidden">
        <div className="sf-grid sf-grid-fade opacity-70" />
        <div className="max-w-wrap mx-auto px-7 relative z-10">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-signal-400 block mb-3.5">
            // Operation Sequence
          </span>
          <h2 className="font-display text-[24px] md:text-[36px] leading-tight max-w-[560px] mb-14">
            Three steps, no static in the signal.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              [
                'SEQ.01',
                'Search & shortlist',
                'Filter by budget, location, and verified specs — our data is field-checked, not scraped, so what you see matches what\u2019s there.',
              ],
              [
                'SEQ.02',
                'Tour & verify',
                'A dedicated agent walks the property with you and hands over title, tax, and inspection documents before you decide.',
              ],
              [
                'SEQ.03',
                'Close with confidence',
                'Paperwork, registration, and handover tracked in one dashboard, so nothing stalls in someone\u2019s inbox.',
              ],
            ].map(([num, title, body]) => (
              <Reveal key={num}>
                <div className="h-full border-l-2 border-signal-500/60 bg-void-900/50 pl-6 pr-5 py-6">
                  <span className="font-mono text-xs text-signal-400 tracking-[0.14em]">{num}</span>
                  <h3 className="font-display text-lg mt-3 mb-2.5 text-frost-50">{title}</h3>
                  <p className="font-sans text-[14.5px] leading-relaxed text-haze-600">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-void-900">
        <div className="max-w-wrap mx-auto px-7">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-pulse-400 block mb-3.5">
            // Transmission Log
          </span>
          <h2 className="font-display text-[24px] md:text-[36px] leading-tight mb-12 text-frost-50">
            What people say after closing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              [
                'Every document I needed was already in the dashboard before I asked for it. Closing took twelve days, not twelve weeks.',
                'Ritu Padhi',
                'Bought a 3BHK in Bhubaneswar',
                'bg-signal-400',
              ],
              [
                'They flagged a title issue on a property I nearly bought elsewhere. That alone paid for the service.',
                'Ansh Mohanty',
                'Investor, commercial portfolio',
                'bg-pulse-400',
              ],
              [
                'Renting through their platform meant I actually knew what I\u2019d pay in fees upfront. No surprises at signing.',
                'Sneha Das',
                'Rented in Cuttack',
                'bg-signal-400',
              ],
            ].map(([quote, name, role, dotClass]) => (
              <Reveal key={name} className="bg-void-950 border border-signal-500/12 p-7">
                <div className="flex items-center gap-2 mb-5">
                  <span className={`sf-pulse-dot w-1.5 h-1.5 rounded-full ${dotClass}`} />
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-haze-600">
                    LOG_{name.length}{quote.length % 100}
                  </span>
                </div>
                <p className="font-sans italic text-lg leading-snug text-frost-50">&ldquo;{quote}&rdquo;</p>
                <div className="mt-5 font-mono text-[12px] text-haze-600">
                  <strong className="font-sans not-italic text-signal-400 tracking-wide uppercase">{name}</strong>
                  <br />
                  {role}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-void-950 text-frost-50 py-16 text-center relative overflow-hidden">
        <div className="sf-grid sf-grid-fade" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full sf-radar opacity-40" />
        <div className="max-w-wrap mx-auto px-7 relative z-10">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-signal-400 block mb-4">
            // End Transmission
          </span>
          <h2 className="font-display text-[22px] md:text-[32px] mb-6">Ready to see the full grid?</h2>
          <Link
            to="/contact"
            className="font-sans inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium tracking-[0.08em] uppercase bg-signal-500 text-void-950 hover:bg-signal-400 transition-all hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(76,243,255,0.45)]"
          >
            Talk to an Agent
          </Link>
        </div>
      </section>
    </>
  )
}
