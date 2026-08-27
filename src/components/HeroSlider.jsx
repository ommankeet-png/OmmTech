import { useEffect, useRef, useState, useCallback } from 'react'

const DEFAULT_SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    tag: 'Residence',
    caption: 'Jaydev Vihar, Bhubaneswar',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    tag: 'Interior',
    caption: 'Living space, verified spec',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
    tag: 'Facade',
    caption: 'Elevation, title-checked',
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    tag: 'Commercial',
    caption: 'Cuttack Road frontage',
  },
]

const AUTOPLAY_MS = 5000

export default function HeroSlider({ slides = DEFAULT_SLIDES }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = slides.length
  const timerRef = useRef(null)
  const prefersReducedMotion = useRef(false)

  useEffect(() => {
    prefersReducedMotion.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const goTo = useCallback((i) => setIndex(((i % count) + count) % count), [count])
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (paused || prefersReducedMotion.current) return
    timerRef.current = setTimeout(next, AUTOPLAY_MS)
    return () => clearTimeout(timerRef.current)
  }, [index, paused, next])

  return (
    <div
      className="relative select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Targeting brackets */}
      <div className="pointer-events-none absolute -inset-3 z-20">
        <span className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-signal-400 animate-pulse" />
        <span className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-signal-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
        <span className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 border-signal-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
        <span className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-signal-400 animate-pulse" style={{ animationDelay: '0.9s' }} />
      </div>

      {/* Viewport frame */}
      <div className="relative aspect-[4/3.6] w-full overflow-hidden border border-signal-500/25 bg-void-950">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-[1100ms] ease-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.caption}
              className="h-full w-full object-cover grayscale-[35%] contrast-125"
              style={i === index ? { animation: `otp-zoom ${AUTOPLAY_MS * 1.4}ms ease-out forwards` } : undefined}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div
              className="absolute inset-0 mix-blend-color"
              style={{ background: 'linear-gradient(160deg, #4CF3FF 0%, #9C6BFF 100%)', opacity: 0.35 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void-950/90 via-void-950/15 to-transparent" />
          </div>
        ))}

        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-16 z-10 sf-scanline"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(76,243,255,0.35), transparent)' }}
        />

        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between gap-4 p-5">
          <div>
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-signal-400 block mb-1">
              // {slides[index].tag}
            </span>
            <span className="font-sans text-frost-50 text-[15px] leading-tight">{slides[index].caption}</span>
          </div>
          <span className="font-mono text-[11px] text-haze-600 tracking-wide whitespace-nowrap">
            SIG_{String(index + 1).padStart(2, '0')}/{String(count).padStart(2, '0')} · LOCKED
          </span>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center border border-signal-500/30 bg-void-950/50 text-frost-50/80 hover:border-signal-400 hover:text-signal-400 hover:shadow-[0_0_12px_rgba(76,243,255,0.5)] transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-signal-400"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M15 4 7 12l8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center border border-signal-500/30 bg-void-950/50 text-frost-50/80 hover:border-signal-400 hover:text-signal-400 hover:shadow-[0_0_12px_rgba(76,243,255,0.5)] transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-signal-400"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-5 mt-3 px-1">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to signal ${i + 1}`}
            aria-current={i === index}
            className="group flex flex-col items-start gap-1.5"
          >
            <span
              className={`font-mono text-[11px] tracking-wide transition-colors ${
                i === index ? 'text-signal-400' : 'text-haze-600 group-hover:text-frost-50/70'
              }`}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span
              className={`h-[2px] w-6 transition-colors ${
                i === index ? 'bg-signal-400 shadow-[0_0_6px_rgba(76,243,255,0.8)]' : 'bg-haze-600/30 group-hover:bg-haze-600/60'
              }`}
            />
          </button>
        ))}
      </div>

      <style>{`
        @keyframes otp-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          img { animation: none !important; }
        }
      `}</style>
    </div>
  )
}
