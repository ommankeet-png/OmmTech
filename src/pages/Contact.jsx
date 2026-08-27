import { useState } from 'react'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  interest: 'Buying a property',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire this up to your Express API, e.g. POST /api/enquiries
    console.log('Enquiry submitted:', form)
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section className="py-16 bg-void-900 relative overflow-hidden">
      <div className="sf-grid opacity-25" />
      <div className="max-w-wrap mx-auto px-7 relative z-10">
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-signal-400 block mb-3.5">
          // Open Channel
        </span>
        <h2 className="font-display text-[24px] md:text-[36px] leading-tight mb-11 max-w-[560px] text-frost-50">
          Tell us what you&rsquo;re looking for — we&rsquo;ll bring the specifics.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-14">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
              <Field label="Full name">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="font-sans w-full border border-signal-500/20 bg-void-950 text-frost-50 px-3.5 py-3 text-[14.5px] outline-none focus:border-signal-400 transition-colors placeholder:text-haze-600"
                />
              </Field>
              <Field label="Phone">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="font-sans w-full border border-signal-500/20 bg-void-950 text-frost-50 px-3.5 py-3 text-[14.5px] outline-none focus:border-signal-400 transition-colors placeholder:text-haze-600"
                />
              </Field>
            </div>

            <Field label="Email">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="font-sans w-full border border-signal-500/20 bg-void-950 text-frost-50 px-3.5 py-3 text-[14.5px] outline-none focus:border-signal-400 transition-colors placeholder:text-haze-600"
              />
            </Field>

            <Field label="I'm interested in">
              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                className="font-sans w-full border border-signal-500/20 bg-void-950 text-frost-50 px-3.5 py-3 text-[14.5px] outline-none focus:border-signal-400 transition-colors"
              >
                <option>Buying a property</option>
                <option>Renting a property</option>
                <option>Listing my property</option>
                <option>General enquiry</option>
              </select>
            </Field>

            <Field label="Message">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Budget, location, timeline — whatever helps us get you the right match."
                className="font-sans w-full border border-signal-500/20 bg-void-950 text-frost-50 px-3.5 py-3 text-[14.5px] outline-none focus:border-signal-400 transition-colors placeholder:text-haze-600"
              />
            </Field>

            <button
              type="submit"
              className="font-sans inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium tracking-[0.08em] uppercase bg-signal-500 text-void-950 hover:bg-signal-400 hover:shadow-[0_0_24px_rgba(76,243,255,0.45)] transition-all hover:-translate-y-0.5"
            >
              Send Enquiry
            </button>

            {submitted && (
              <p className="font-sans text-sm text-haze-600 mt-4">
                Thanks — this is wired to a local handler for now. Point <code className="text-signal-400">handleSubmit</code> at
                your Express API to receive enquiries for real.
              </p>
            )}
          </form>

          <div>
            <div className="bg-void-950 text-frost-50 p-9 relative overflow-hidden border border-signal-500/15">
              <div className="sf-grid opacity-20" />
              <div className="relative z-10">
                <InfoRow label="Office" value="4th Floor, Blueprint House, Bhubaneswar, Odisha 751001">
                  <path d="M12 22s8-4.5 8-11a8 8 0 1 0-16 0c0 6.5 8 11 8 11Z" />
                  <circle cx="12" cy="11" r="2.5" />
                </InfoRow>
                <InfoRow label="Phone" value="+91 674 000 0000">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
                </InfoRow>
                <InfoRow label="Email" value="hello@ommtechproperties.example">
                  <path d="M4 4h16v16H4V4Z" />
                  <path d="m4 6 8 7 8-7" />
                </InfoRow>
                <InfoRow label="Hours" value="Mon–Sat, 10:00–19:00 IST" last>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </InfoRow>
              </div>
              <div className="mt-6 h-[130px] relative border border-signal-500/25 flex items-center justify-center sf-corner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-6.5 h-6.5 text-signal-400">
                  <path d="M12 22s8-4.5 8-11a8 8 0 1 0-16 0c0 6.5 8 11 8 11Z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <div className="mb-5">
      <label className="font-mono block text-xs tracking-[0.1em] uppercase text-haze-600 mb-2">{label}</label>
      {children}
    </div>
  )
}

function InfoRow({ label, value, children, last = false }) {
  return (
    <div className={`flex gap-3.5 py-4 ${last ? '' : 'border-b border-frost-50/10'}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-[19px] h-[19px] text-signal-400 flex-shrink-0 mt-0.5">
        {children}
      </svg>
      <div>
        <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-frost-50/55">{label}</div>
        <div className="font-sans text-[14.5px] mt-0.5">{value}</div>
      </div>
    </div>
  )
}
