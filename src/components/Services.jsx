import { useState } from 'react'
import { Heart, Building2, PartyPopper, UtensilsCrossed, Wine, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

const services = [
  {
    icon: Heart,
    title: 'Weddings',
    copy: 'Ceremony sips, family-style feasts, and late-night bites choreographed to your timeline.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Building2,
    title: 'Corporate',
    copy: 'Board lunches, product launches, and gala dinners with polished, unobtrusive service.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: PartyPopper,
    title: 'Private Parties',
    copy: 'Birthdays, anniversaries, and rooftop soirées with cocktail-forward menus.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: UtensilsCrossed,
    title: 'Chef’s Table',
    copy: 'An eight-course tasting in your home, plated by our culinary team.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Wine,
    title: 'Bar & Mixology',
    copy: 'Signature cocktails, zero-proof pairings, and sommelier-led wine service.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80',
  },
  {
    icon: Sparkles,
    title: 'Styling & Rentals',
    copy: 'Tablescapes, florals, linens, and lighting coordinated with the menu.',
    image: 'https://images.unsplash.com/photo-1464366403900-d0ccad0b4ce8?auto=format&fit=crop&w=900&q=80',
  },
]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="w-full bg-ink py-20 lg:py-28">
      <div className="section-pad w-full">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.36em] text-gold">Catering Services</p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl text-cream sm:text-5xl lg:text-6xl">
            Every gathering, composed with intention.
          </h2>
        </Reveal>

        <div className="mt-12 grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((item, i) => {
            const Icon = item.icon
            const isActive = active === i
            return (
              <Reveal key={item.title} delay={`delay-${(i % 3) + 1}`} className="h-full">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group relative block h-full w-full overflow-hidden rounded-3xl text-left transition-all duration-500 ${
                    isActive ? 'ring-1 ring-gold' : 'ring-1 ring-cream/10'
                  }`}
                >
                  <img
                    src={item.image}
                    alt=""
                    className={`h-72 w-full object-cover transition duration-700 sm:h-80 ${
                      isActive ? 'scale-110 brightness-50' : 'scale-100 brightness-[0.45]'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <span className="mb-3 grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-gold backdrop-blur-md transition group-hover:bg-gold group-hover:text-ink">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-display text-3xl text-cream">{item.title}</h3>
                    <p
                      className={`mt-2 max-w-sm text-sm leading-relaxed text-cream/75 transition-all duration-500 ${
                        isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'
                      }`}
                    >
                      {item.copy}
                    </p>
                  </div>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
