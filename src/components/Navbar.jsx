import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#menu', label: 'Menu' },
  { href: '#packages', label: 'Packages' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Stories' },
  { href: '#contact', label: 'Book' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled || open ? 'nav-scrolled py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="section-pad flex w-full items-center justify-between">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/60 text-gold">
            <span className="font-display text-xl leading-none">A</span>
          </span>
          <span>
            <span className="font-display block text-2xl leading-none tracking-wide text-cream">
              Maison Aurelia
            </span>
            <span className="text-[10px] uppercase tracking-[0.32em] text-gold/80">
              Luxury Catering
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm tracking-wide text-cream/80 transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="gold-btn hidden rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-gold-bright lg:inline-flex"
        >
          Reserve a Date
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-cream lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="section-pad flex flex-col gap-4 pb-6 pt-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-gold/15 py-3 font-display text-3xl text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
