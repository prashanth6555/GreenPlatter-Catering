import { useState } from 'react'
import Reveal from './Reveal'

const categories = [
  {
    id: 'canapes',
    name: 'Canapés',
    dishes: [
      { name: 'Oyster leaf & caviar', note: 'Yuzu · crème fraîche', price: '18' },
      { name: 'Truffle gougères', note: 'Comté · black garlic', price: '14' },
      { name: 'Tuna tartare cones', note: 'Sesame · lime', price: '16' },
      { name: 'Beetroot tartlet', note: 'Goat cheese · honey', price: '13' },
    ],
  },
  {
    id: 'mains',
    name: 'Mains',
    dishes: [
      { name: 'Herb-crusted lamb', note: 'Saffron jus · charred fennel', price: '48' },
      { name: 'Miso black cod', note: 'Baby leeks · dashi butter', price: '44' },
      { name: 'Wild mushroom pithivier', note: 'Madeira · thyme', price: '36' },
      { name: 'Citrus-brined chicken', note: 'Preserved lemon · farro', price: '34' },
    ],
  },
  {
    id: 'plants',
    name: 'Garden',
    dishes: [
      { name: 'Charred brassicas', note: 'Tahini · pomegranate', price: '22' },
      { name: 'Heirloom tomato carpaccio', note: 'Basil oil · burrata', price: '24' },
      { name: 'Saffron risotto', note: 'Peas · aged parmesan', price: '28' },
      { name: 'Grilled peach salad', note: 'Fennel · pistachio', price: '20' },
    ],
  },
  {
    id: 'sweets',
    name: 'Patisserie',
    dishes: [
      { name: 'Dark chocolate délice', note: 'Olive oil · sea salt', price: '16' },
      { name: 'Vanilla bean panna cotta', note: 'Passionfruit · mint', price: '14' },
      { name: 'Lemon thyme tart', note: 'Italian meringue', price: '15' },
      { name: 'Petit four garden', note: 'Seasonal assortment', price: '18' },
    ],
  },
]

export default function Menu() {
  const [tab, setTab] = useState('canapes')
  const current = categories.find((c) => c.id === tab)

  return (
    <section id="menu" className="w-full bg-[#f3eadc] py-20 text-ink lg:py-28">
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
              className={`rounded-full px-5 py-2.5 text-sm transition ${
                tab === cat.id
                  ? 'bg-ink text-cream'
                  : 'bg-white/60 text-ink/70 hover:bg-ink hover:text-cream'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid w-full gap-4 md:grid-cols-2">
          {current.dishes.map((dish, i) => (
            <Reveal key={dish.name} delay={`delay-${(i % 4) + 1}`}>
              <article className="group flex items-start justify-between gap-4 rounded-2xl bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div>
                  <h3 className="font-display text-2xl">{dish.name}</h3>
                  <p className="mt-1 text-sm text-ink/55">{dish.note}</p>
                </div>
                <p className="font-display text-2xl text-bronze transition group-hover:text-ink">${dish.price}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
