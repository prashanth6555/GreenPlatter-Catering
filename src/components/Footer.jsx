import { ArrowUpRight } from 'lucide-react'

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1Z" />
    </svg>
  )
}

function YoutubeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6ZM9.8 15.5V8.9l6.2 3.3-6.2 3.3Z" />
    </svg>
  )
}

const socials = [
  { href: 'https://instagram.com', icon: InstagramIcon, label: 'Instagram' },
  { href: 'https://facebook.com', icon: FacebookIcon, label: 'Facebook' },
  { href: 'https://youtube.com', icon: YoutubeIcon, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-ink text-cream">
      <div className="overflow-hidden border-y border-gold/20 py-4">
        <div className="marquee-track flex gap-16 whitespace-nowrap font-display text-4xl text-gold/80 sm:text-6xl">
          {Array.from({ length: 2 }).map((_, loop) => (
            <span key={loop} className="flex gap-16 px-8">
              {['Weddings', 'Galas', 'Chef’s Table', 'Corporate', 'Mixology', 'Patisserie'].map((item) => (
                <span key={`${loop}-${item}`} className="italic">
                  {item} ·
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="section-pad grid w-full gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-4xl">Maison Aurelia</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/60">
            Luxury catering for weddings, private dinners, and celebrations that deserve a kitchen with a point of view.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Visit</p>
          <p className="mt-3 text-sm text-cream/70">
            18 Orchard Lane
            <br />
            Brooklyn, NY 11201
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Follow</p>
          <div className="mt-3 flex gap-3">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-cream/15 text-cream transition hover:border-gold hover:bg-gold hover:text-ink"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="section-pad flex w-full flex-col gap-4 border-t border-cream/10 py-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Maison Aurelia. All rights reserved.</p>
        <a href="#home" className="inline-flex items-center gap-1 hover:text-gold">
          Back to top <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  )
}
