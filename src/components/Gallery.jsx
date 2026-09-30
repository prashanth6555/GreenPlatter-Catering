import Reveal from './Reveal'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    label: 'Garden reception',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    label: 'Seared scallops',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80',
    label: 'Signature cocktails',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
    label: 'Plated mains',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80',
    label: 'Seasonal brunch',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
    label: 'Long-table dinner',
    span: 'md:col-span-2',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="w-full bg-cream py-20 text-ink lg:py-28">
      <div className="section-pad mb-10 w-full">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.36em] text-bronze">Gallery</p>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl lg:text-6xl">Moments from the table.</h2>
        </Reveal>
      </div>

      <div className="grid w-full grid-cols-2 gap-1 md:grid-cols-4 md:grid-rows-2 md:gap-1">
        {images.map((img, i) => (
          <figure
            key={img.label}
            className={`gallery-item relative min-h-[220px] overflow-hidden md:min-h-[280px] ${img.span} ${
              i === 0 ? 'min-h-[320px] md:min-h-[560px]' : ''
            }`}
          >
            <img src={img.src} alt={img.label} className="absolute inset-0 h-full w-full object-cover" />
            <figcaption className="gallery-caption absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-2xl text-cream md:text-3xl">{img.label}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
