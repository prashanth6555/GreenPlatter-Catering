import { useState } from 'react'
import Reveal from './Reveal'

const initial = {
  name: '',
  email: '',
  phone: '',
  date: '',
  guests: '',
  event: 'Wedding',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="w-full bg-[#f3eadc] py-20 text-ink lg:py-28">
      <div className="section-pad grid w-full gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal variant="reveal-left">
          <p className="text-xs uppercase tracking-[0.36em] text-bronze">Contact & Booking</p>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl lg:text-6xl">Let’s begin the tasting.</h2>
          <p className="mt-5 max-w-md text-ink/65">
            Share a few details and our events atelier will reply within one business day with availability, a sample menu, and next steps.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <p>
              <span className="block text-xs uppercase tracking-[0.22em] text-bronze">Studio</span>
              18 Orchard Lane, Brooklyn, NY
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.22em] text-bronze">Enquire</span>
              hello@GreenPlatter .com · +1 (718) 555-0142
            </p>
          </div>
        </Reveal>

        <Reveal variant="reveal-right">
          {sent ? (
            <div className="rounded-3xl bg-ink p-10 text-cream">
              <p className="font-display text-4xl text-gold">Received.</p>
              <p className="mt-4 text-cream/75">
                Thank you, {form.name || 'friend'}. A producer from GreenPlatter   will be in touch shortly.
              </p>
              <button
                type="button"
                className="mt-8 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink"
                onClick={() => {
                  setSent(false)
                  setForm(initial)
                }}
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 shadow-xl sm:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm">
                  Full name
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border border-ink/10 bg-cream/40 px-4 py-3"
                  />
                </label>
                <label className="text-sm">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border border-ink/10 bg-cream/40 px-4 py-3"
                  />
                </label>
                <label className="text-sm">
                  Phone
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border border-ink/10 bg-cream/40 px-4 py-3"
                  />
                </label>
                <label className="text-sm">
                  Event date
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border border-ink/10 bg-cream/40 px-4 py-3"
                  />
                </label>
                <label className="text-sm">
                  Guest count
                  <input
                    name="guests"
                    value={form.guests}
                    onChange={onChange}
                    placeholder="e.g. 120"
                    className="mt-2 w-full rounded-xl border border-ink/10 bg-cream/40 px-4 py-3"
                  />
                </label>
                <label className="text-sm">
                  Occasion
                  <select
                    name="event"
                    value={form.event}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border border-ink/10 bg-cream/40 px-4 py-3"
                  >
                    <option>Wedding</option>
                    <option>Corporate</option>
                    <option>Private party</option>
                    <option>Chef’s table</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>
              <label className="mt-4 block text-sm">
                Tell us about the celebration
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-ink/10 bg-cream/40 px-4 py-3"
                />
              </label>
              <button
                type="submit"
                className="gold-btn mt-6 w-full rounded-full bg-gold py-3.5 text-sm font-semibold text-ink transition hover:bg-gold-bright"
              >
                Request a tasting
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
