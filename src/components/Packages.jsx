import Reveal from './Reveal'

const packages = [
  {
    name: 'Garden Soirée',
    guests: '20–60 guests',
    price: '89',
    accent: false,
    perks: ['Passed canapés', 'Two-course seated dinner', 'Non-alcoholic pairing', 'Service captain'],
  },
  {
    name: 'Gilded Wedding',
    guests: '80–250 guests',
    price: '145',
    accent: true,
    perks: ['Welcome champagne', 'Live carving & pasta', 'Four-course tasting', 'Late-night dessert bar', 'Full bar team'],
  },
  {
    name: 'Atelier Gala',
    guests: '200–800 guests',
    price: '210',
    accent: false,
    perks: ['Bespoke chef collaboration', 'Multi-station experience', 'Sommelier program', 'Styling & florals'],
  },
]

export default function Packages() {
  return (
    <section id="packages" className="relative w-full overflow-hidden bg-ink py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=70)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-ink/80" />

      <div className="section-pad relative z-10 w-full">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.36em] text-gold">Events & Packages</p>
          <h2 className="font-display mt-3 max-w-3xl text-4xl text-cream sm:text-5xl lg:text-6xl">
            Choose a canvas. We’ll paint the rest.
          </h2>
        </Reveal>

        <div className="mt-12 grid w-full gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={`delay-${i + 1}`} className="h-full">
              <article
                className={`flex h-full flex-col rounded-3xl border p-8 transition duration-500 hover:-translate-y-2 ${
                  pkg.accent
                    ? 'border-gold bg-gold text-ink shadow-2xl shadow-gold/20'
                    : 'border-cream/15 bg-ink-soft/80 text-cream backdrop-blur-md hover:border-gold/50'
                }`}
              >
                <p className={`text-xs uppercase tracking-[0.28em] ${pkg.accent ? 'text-ink/70' : 'text-gold'}`}>
                  {pkg.guests}
                </p>
                <h3 className="font-display mt-3 text-4xl">{pkg.name}</h3>
                <p className="mt-6 font-display text-5xl">
                  ${pkg.price}
                  <span className="ml-1 text-lg opacity-70">/ guest</span>
                </p>
                <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm">
                  {pkg.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3">
                      <span className={`h-1.5 w-1.5 rounded-full ${pkg.accent ? 'bg-ink' : 'bg-gold'}`} />
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-medium transition ${
                    pkg.accent
                      ? 'bg-ink text-cream hover:bg-ink-soft'
                      : 'bg-gold text-ink hover:bg-gold-bright'
                  }`}
                >
                  Request this package
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
