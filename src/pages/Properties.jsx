import { useState } from 'react'
import { properties } from '../data/properties.js'
import PropertyCard from '../components/PropertyCard.jsx'

const FILTERS = ['all', 'For Sale', 'For Rent']

export default function Properties() {
  const [filter, setFilter] = useState('all')

  const list = filter === 'all' ? properties : properties.filter((p) => p.status === filter)

  return (
    <section className="py-14 bg-void-900 min-h-[60vh] relative overflow-hidden">
      <div className="sf-grid opacity-30" />
      <div className="max-w-wrap mx-auto px-7 relative z-10">
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-signal-400 block mb-3.5">
          // Listings
        </span>
        <h2 className="font-display text-[24px] md:text-[36px] leading-tight mb-9 text-frost-50">
          Every property, precisely specced
        </h2>

        <div className="flex gap-3 flex-wrap mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-sans px-5 py-2.5 border text-[12.5px] font-medium tracking-[0.08em] uppercase transition-all ${
                filter === f
                  ? 'bg-signal-500 text-void-950 border-signal-500'
                  : 'border-signal-500/25 text-haze-600 hover:border-signal-400 hover:text-signal-400'
              }`}
            >
              {f === 'all' ? 'All' : f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {list.map((p, i) => (
            <PropertyCard key={p.id} property={p} delay={i * 80} />
          ))}
        </div>

        {list.length === 0 && (
          <p className="font-sans text-haze-600 text-sm mt-10">No properties match this filter right now.</p>
        )}
      </div>
    </section>
  )
}
