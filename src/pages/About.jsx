import Reveal from '../components/Reveal.jsx'

const pillars = [
  {
    title: 'Transparency',
    body: 'Every fee, document, and title check is visible to you before you sign anything.',
    icon: <path d="M12 2 3 6v6c0 5 4 8 9 10 5-2 9-5 9-10V6l-9-4Z" />,
  },
  {
    title: 'Technology',
    body: 'A shared dashboard replaces the usual scramble of calls, PDFs, and lost WhatsApp threads.',
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </>
    ),
  },
  {
    title: 'Trust',
    body: 'Agents stay assigned to your deal end-to-end — no handoffs once the tour is booked.',
    icon: <path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11Z" />,
  },
  {
    title: 'Turnaround',
    body: 'Average time from shortlist to signed paperwork: 14 days, tracked and reported openly.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
  },
]

const team = [
  ['AP', 'Aditya Panda', 'Founder & Principal Broker'],
  ['MR', 'Meera Rout', 'Head of Operations'],
  ['SB', 'Sourav Behera', 'Lead, Technology'],
  ['TN', 'Tanvi Nayak', 'Senior Property Consultant'],
]

export default function About() {
  return (
    <>
      <section className="py-16 bg-void-900 relative overflow-hidden">
        <div className="sf-grid opacity-30" />
        <div className="max-w-wrap mx-auto px-7 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-signal-400 block mb-3.5">
                // Origin Log
              </span>
              <h2 className="font-display text-[24px] md:text-[36px] leading-tight mb-5 text-frost-50">
                Started with a frustration, not a business plan.
              </h2>
              <p className="font-sans text-[17px] leading-relaxed text-haze-600">
                Omm Tech Properties began when our founders spent four months and three broken deals trying to
                buy a single flat — bad measurements, missing paperwork, agents who vanished after the first
                visit. We built the process we wished we&rsquo;d had: field-verified listings, a shared document
                dashboard, and agents who stay on the deal until keys change hands.
              </p>
            </div>
            <div className="relative sf-corner border border-signal-500/15 p-6">
              <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <rect x="30" y="30" width="340" height="260" stroke="#4CF3FF" strokeWidth="0.6" opacity="0.35" />
                <path d="M70 250 V140 L200 70 L330 140 V250" stroke="#9C6BFF" strokeWidth="1.6" />
                <line x1="70" y1="250" x2="330" y2="250" stroke="#4CF3FF" strokeWidth="1.4" />
                <line x1="200" y1="70" x2="200" y2="250" stroke="#4CF3FF" strokeWidth="0.6" strokeDasharray="4 4" opacity="0.6" />
                <circle cx="200" cy="70" r="3" fill="#4CF3FF" />
                <text x="205" y="60" fontFamily="IBM Plex Mono" fontSize="10" fill="#4CF3FF" opacity="0.8">
                  SIG.2019
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-void-950 relative overflow-hidden">
        <div className="sf-grid sf-grid-fade" />
        <div className="max-w-wrap mx-auto px-7 relative z-10">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-pulse-400 block mb-3.5">
            // What We Hold To
          </span>
          <h2 className="font-display text-[24px] md:text-[36px] leading-tight mb-10 text-frost-50">
            Four things we don&rsquo;t compromise on
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="sf-corner p-6 border border-signal-500/15 bg-void-900/60">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-7 h-7 mb-4 text-signal-400">
                  {p.icon}
                </svg>
                <h3 className="font-display text-[16px] mb-2 text-frost-50">{p.title}</h3>
                <p className="font-sans text-[13.5px] leading-relaxed text-haze-600">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-void-900">
        <div className="max-w-wrap mx-auto px-7">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-signal-400 block mb-3.5">
            // Crew Roster
          </span>
          <h2 className="font-display text-[24px] md:text-[36px] leading-tight mb-10 text-frost-50">
            Who&rsquo;s on your file
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map(([initials, name, role], i) => (
              <Reveal key={name} delay={i * 80} className="text-center">
                <div className="w-[88px] h-[88px] rounded-full mx-auto mb-4 bg-void-950 text-signal-400 flex items-center justify-center font-display text-xl border border-signal-500/30">
                  {initials}
                </div>
                <div className="font-sans text-[15.5px] font-medium text-frost-50">{name}</div>
                <div className="font-mono text-[11.5px] text-haze-600 mt-0.5">{role}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
