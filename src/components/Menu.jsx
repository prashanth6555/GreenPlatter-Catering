import { useState } from 'react'
import Reveal from './Reveal'

const categories = [
  {
    id: 'canapes',
    name: 'Canapés',
    blurb: 'First bites, passed warm.',
    dishes: [
      {
        name: 'Oyster leaf & caviar',
        note: 'Yuzu · crème fraîche',
        price: '18',
        image: 'https://images.unsplash.com/photo-1729269524124-1645db0b0ff5?q=80&w=712&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Truffle gougères',
        note: 'Comté · black garlic',
        price: '14',
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Tuna tartare cones',
        note: 'Sesame · lime',
        price: '16',
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Beetroot tartlet',
        note: 'Goat cheese · honey',
        price: '13',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    id: 'mains',
    name: 'Mains',
    blurb: 'The heart of the table.',
    dishes: [
      {
        name: 'Herb-crusted lamb',
        note: 'Saffron jus · charred fennel',
        price: '48',
        image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Miso black cod',
        note: 'Baby leeks · dashi butter',
        price: '44',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Wild mushroom pithivier',
        note: 'Madeira · thyme',
        price: '36',
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Citrus-brined chicken',
        note: 'Preserved lemon · farro',
        price: '34',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    id: 'plants',
    name: 'Garden',
    blurb: 'From nearby farms at dawn.',
    dishes: [
      {
        name: 'Charred brassicas',
        note: 'Tahini · pomegranate',
        price: '22',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Heirloom tomato carpaccio',
        note: 'Basil oil · burrata',
        price: '24',
        image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Saffron risotto',
        note: 'Peas · aged parmesan',
        price: '28',
        image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Grilled peach salad',
        note: 'Fennel · pistachio',
        price: '20',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  {
    id: 'sweets',
    name: 'Patisserie',
    blurb: 'A last, lingering course.',
    dishes: [
      {
        name: 'Dark chocolate délice',
        note: 'Olive oil · sea salt',
        price: '16',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80',
      },
      {
        name: 'Vanilla bean panna cotta',
        note: 'Passionfruit · mint',
        price: '14',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Lemon thyme tart',
        note: 'Italian meringue',
        price: '15',
        image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Petit four garden',
        note: 'Seasonal assortment',
        price: '18',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
]

function onTilt(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width
  const y = (e.clientY - rect.top) / rect.height
  const rx = (0.5 - y) * 10
  const ry = (x - 0.5) * 12
  card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`
}

function resetTilt(e) {
  e.currentTarget.style.transform = ''
}

export default function Menu() {
  const [tab, setTab] = useState('canapes')
  const current = categories.find((c) => c.id === tab)
  const [featured, ...rest] = current.dishes

  return (
    <section id="menu" className="w-full overflow-hidden bg-[#f3eadc] py-20 text-ink lg:py-28">
      <div className="section-pad w-full">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.36em] text-bronze">Menu & Categories</p>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl lg:text-6xl">A living, seasonal kitchen.</h2>
        </Reveal>

        <div className="mt-10 flex w-full flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setTab(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm transition duration-300 ${
                tab === cat.id
                  ? 'bg-ink text-cream shadow-lg shadow-ink/20'
                  : 'bg-white/60 text-ink/70 hover:bg-ink hover:text-cream'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div key={tab} className="menu-stage section-pad mt-10 w-full">
        <p className="menu-enter mb-6 text-sm tracking-[0.2em] uppercase text-bronze">{current.blurb}</p>

        <div className="grid w-full gap-4 lg:grid-cols-2 lg:grid-rows-2 lg:gap-5">
          <article
            className="menu-card group relative min-h-[340px] overflow-hidden rounded-3xl lg:row-span-2 lg:min-h-[640px]"
            onMouseMove={onTilt}
            onMouseLeave={resetTilt}
          >
            <img
              src={featured.image}
              alt={featured.name}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-medium text-ink">
                Chef’s signature
              </span>
              <h3 className="font-display mt-3 text-3xl text-cream sm:text-5xl">{featured.name}</h3>
              <p className="mt-2 text-sm text-cream/75">{featured.note}</p>
              <p className="font-display mt-4 text-3xl text-gold">${featured.price}</p>
            </div>
          </article>

          {rest.map((dish, i) => (
            <article
              key={dish.name}
              className="menu-card group relative min-h-[220px] overflow-hidden rounded-3xl sm:min-h-[250px]"
              style={{ animationDelay: `${0.12 * (i + 1)}s` }}
              onMouseMove={onTilt}
              onMouseLeave={resetTilt}
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div>
                  <h3 className="font-display text-2xl text-cream">{dish.name}</h3>
                  <p className="mt-1 text-xs text-cream/70">{dish.note}</p>
                </div>
                <p className="font-display text-2xl text-gold transition duration-300 group-hover:scale-110">${dish.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
