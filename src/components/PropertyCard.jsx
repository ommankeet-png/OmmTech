import BuildingIcon from './BuildingIcon.jsx'
import Reveal from './Reveal.jsx'

const BedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[15px] h-[15px] opacity-70">
    <path d="M2 18v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6" />
    <path d="M2 18v2M22 18v2M4 10V6a2 2 0 0 1 2-2h4" />
    <rect x="4" y="10" width="7" height="4" rx="1" />
  </svg>
)
const BathIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[15px] h-[15px] opacity-70">
    <path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Z" />
    <path d="M7 12V6a2 2 0 0 1 3-1.7M4 19v1M18 19v1" />
  </svg>
)
const AreaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[15px] h-[15px] opacity-70">
    <path d="M3 8V3h5M21 8V3h-5M3 16v5h5M21 16v5h-5" />
  </svg>
)

export default function PropertyCard({ property, delay = 0 }) {
  const { name, loc, status, price, beds, baths, area, type } = property

  return (
    <Reveal delay={delay} className="sf-corner bg-void-900 border border-signal-500/15 flex flex-col">
      <div className="h-[190px] bg-gradient-to-br from-void-800 to-void-950 relative overflow-hidden flex items-end">
        <div className="sf-grid opacity-40" />
        <div className="absolute top-3.5 left-3.5 z-10 bg-signal-500 text-void-950 font-mono text-[11px] tracking-wide uppercase px-2.5 py-1">
          {status}
        </div>
        <span className="absolute top-3.5 right-3.5 z-10 font-mono text-[10px] tracking-wide text-signal-400/70">
          {type.toUpperCase()}
        </span>
        <BuildingIcon type={type} className="relative z-10 w-2/3 mx-auto mb-3.5 opacity-90" />
      </div>
      <div className="p-5 pt-5 pb-6 flex flex-col gap-2.5 flex-1">
        <div className="font-mono text-xs tracking-wide uppercase text-haze-600">{loc}</div>
        <div className="font-display text-lg text-frost-50">{name}</div>
        <div className="font-mono text-signal-400 text-[17px] mt-0.5">{price}</div>
        <div className="flex gap-4 mt-auto pt-3.5 border-t border-frost-50/10">
          {beds > 0 && (
            <div className="flex items-center gap-1.5 text-[12.5px] text-haze-600 font-sans">
              <BedIcon /> {beds} Bed
            </div>
          )}
          <div className="flex items-center gap-1.5 text-[12.5px] text-haze-600 font-sans">
            <BathIcon /> {baths} Bath
          </div>
          <div className="flex items-center gap-1.5 text-[12.5px] text-haze-600 font-sans">
            <AreaIcon /> {area}
          </div>
        </div>
      </div>
    </Reveal>
  )
}
