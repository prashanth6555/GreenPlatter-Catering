import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="relative w-full bg-cream text-ink">
      <div className="grid w-full lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[720px]">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80"
            alt="Chef plating a dish"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
          />
          <div className="absolute bottom-8 left-8 rounded-2xl bg-ink/80 px-6 py-5 text-cream backdrop-blur-md">
            <p className="font-display text-5xl text-gold">14</p>
            <p className="text-xs uppercase tracking-[0.24em] text-cream/70">Years of craft</p>
          </div>
        </div>

        <div className="section-pad flex flex-col justify-center py-16 lg:py-24">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.36em] text-bronze">About Us</p>
            <h2 className="font-display mt-4 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              We don’t just cater events.
              <span className="italic text-bronze"> We stage them.</span>
            </h2>
          </Reveal>
          <Reveal className="mt-6" delay="delay-2">
            <p className="max-w-xl text-base leading-relaxed text-ink/70">
              GreenPlatter   is a chef-led catering atelier. Our kitchen sources from nearby farms at dawn, writes menus around the season, and trains every captain to host as if the celebration were their own.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
              Whether you need an intimate tasting dinner for twelve or a thousand-guest reception, we design the food, the flow, and the feeling — so you can be fully present.
            </p>
          </Reveal>
          <Reveal className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3" delay="delay-3">
            {[
              ['Seasonal', 'Menus rewritten four times a year'],
              ['Bespoke', 'Dietary needs styled, never sidelined'],
              ['On-site', 'Live stations, bars & pastry carts'],
            ].map(([title, copy]) => (
              <div key={title} className="border-t border-ink/15 pt-4">
                <p className="font-display text-2xl">{title}</p>
                <p className="mt-2 text-sm text-ink/60">{copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
