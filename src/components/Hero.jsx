import { ArrowDownRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=80"
        alt="Fine dining table setting"
        className="kenburns absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/35 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      <div className="grain absolute inset-0" />

      <div className="section-pad relative z-10 flex h-full w-full flex-col justify-end pb-16 pt-32 sm:pb-20">
        <p className="mb-4 text-xs uppercase tracking-[0.42em] text-gold">Est. 2012 · Signature Hospitality</p>
        <h1 className="font-display max-w-5xl text-5xl leading-[0.95] text-cream sm:text-7xl lg:text-8xl xl:text-[7.5rem]">
          Culinary theatre
          <span className="gold-shimmer italic"> for every occasion.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
          From candlelit weddings to rooftop galas, Maison Aurelia composes seasonal menus, impeccable service, and atmospheres guests remember for years.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="gold-btn inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-gold-bright"
          >
            Plan Your Event
            <ArrowDownRight size={18} />
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm text-cream transition hover:border-gold hover:text-gold"
          >
            Explore the Menu
          </a>
        </div>

        <div className="mt-14 hidden grid-cols-3 gap-8 border-t border-cream/15 pt-8 md:grid lg:max-w-3xl">
          {[
            ['1,200+', 'Events hosted'],
            ['48 hrs', 'Custom tasting'],
            ['4.9★', 'Guest rating'],
          ].map(([stat, label]) => (
            <div key={label}>
              <p className="font-display text-4xl text-gold">{stat}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-cream/60">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 text-xs uppercase tracking-[0.28em] text-cream/70 md:flex lg:right-12"
      >
        Scroll
        <span className="relative grid h-12 w-12 place-items-center rounded-full border border-cream/30">
          <span className="pulse-ring absolute inset-0 rounded-full border border-gold/50" />
          <ArrowDownRight size={16} className="text-gold" />
        </span>
      </a>
    </section>
  )
}
