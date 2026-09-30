import { useState } from 'react'
import { Quote } from 'lucide-react'
import Reveal from './Reveal'

const stories = [
  {
    quote:
      '  made our wedding feel like a film. Every plate arrived as if it were composed just for us, and the team never missed a cue.',
    name: 'Priya & Arjun',
    event: 'Garden wedding · 180 guests',
  },
  {
    quote:
      'Our product launch needed theatre without fuss. Their live stations became the conversation of the night.',
    name: 'Elena Vos',
    event: 'Corporate gala · 420 guests',
  },
  {
    quote:
      'The chef’s table in our loft was unforgettable. Intimate, generous, and wildly seasonal.',
    name: 'Marcus Hale',
    event: 'Private dinner · 14 guests',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const story = stories[index]

  return (
    <section id="testimonials" className="w-full bg-ink py-20 lg:py-28">
      <div className="section-pad grid w-full items-center gap-12 lg:grid-cols-2">
        <Reveal variant="reveal-left">
          <p className="text-xs uppercase tracking-[0.36em] text-gold">Guest stories</p>
          <h2 className="font-display mt-3 text-4xl text-cream sm:text-5xl lg:text-6xl">
            Loved in rooms we never want to leave.
          </h2>
          <div className="mt-10 flex gap-2">
            {stories.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? 'w-12 bg-gold' : 'w-6 bg-cream/25 hover:bg-cream/50'
                }`}
              />
            ))}
          </div>
        </Reveal>

        <Reveal variant="reveal-right">
          <blockquote className="relative rounded-3xl border border-cream/10 bg-ink-soft p-8 sm:p-12">
            <Quote className="text-gold" size={36} />
            <p key={story.name} className="font-display mt-6 text-2xl leading-snug text-cream sm:text-3xl">
              {story.quote}
            </p>
            <footer className="mt-8">
              <p className="font-medium text-gold">{story.name}</p>
              <p className="mt-1 text-sm text-cream/55">{story.event}</p>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
