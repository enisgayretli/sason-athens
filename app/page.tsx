import { SiteNav } from '@/components/site-nav'
import { Reveal } from '@/components/reveal'
import { ParallaxImage } from '@/components/parallax-image'

const kitchenRoles = [
  'Cooks',
  'Prep cooks',
  'Kitchen assistants',
  'Dishwashing / kitchen support',
]

const floorRoles = [
  'Head waiter',
  'Waiters',
  'Commis waiters',
  'Floor support',
]

const collaborators = [
  'Growers',
  'Winemakers',
  'Olive oil producers',
  'Ceramicists',
  'Textile makers',
  'Craftspeople',
  'Small suppliers',
]

const dayNightHours = [
  {
    days: 'Tuesday — Friday',
    rows: [
      { service: 'Wine & sake bar', time: 'Until 18:30' },
      { service: 'Dinner', time: 'From 18:30' },
    ],
  },
  {
    days: 'Saturday — Sunday',
    rows: [
      { service: 'Full food menu', time: 'From 14:00' },
      { service: 'Bar menu', time: 'Until 18:30' },
    ],
  },
]

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="relative flex min-h-screen items-end overflow-hidden">
        <ParallaxImage
          src="/images/hero.png"
          alt="A candlelit table set with handmade ceramics at SASON"
          className="absolute inset-0"
          priority
          strength={80}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/40" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 md:pb-24">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.45em] text-background/80">
              Pangrati, Athens — Opening November 2026
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif text-[18vw] leading-[0.85] tracking-[0.04em] text-background md:text-[12rem]">
              SASON
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl font-serif text-2xl italic leading-snug text-background/90 md:text-3xl">
              The Table as Archive
            </p>
          </Reveal>
          <Reveal delay={340}>
            <p className="mt-6 max-w-lg text-pretty text-sm leading-relaxed text-background/85 md:text-base">
              A new restaurant in Athens by Ralph Sason. Rooted in Istanbul,
              shaped by Anatolia, Mesopotamia and the Mediterranean — built
              around memory, seasonality and the shared rituals of the table.
            </p>
          </Reveal>
          <Reveal delay={440}>
            <a
              href="#about"
              className="mt-10 inline-flex items-center gap-3 border border-background/50 px-8 py-4 text-xs uppercase tracking-[0.25em] text-background transition-colors duration-300 hover:bg-background hover:text-foreground"
            >
              The Story
              <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>

        <span className="absolute bottom-8 right-6 z-10 hidden text-[0.65rem] uppercase tracking-[0.3em] text-background/60 md:right-10 md:block">
          Scroll
        </span>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-44">
        <Reveal>
          <p className="mb-10 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            About
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-balance font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
            A multilayered cuisine, carried by memory
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-12 font-serif text-3xl italic leading-snug md:mt-16 md:text-4xl">
            SASON begins with Istanbul.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-8 text-base leading-relaxed text-muted-foreground md:grid-cols-2 md:gap-16 md:text-lg">
          <Reveal delay={200}>
            <div className="space-y-6">
              <p>
                Not the city as a postcard, but as a living archive — a place
                shaped by Ottoman, Greek, Armenian, Jewish-Sephardic, Balkan,
                Georgian, Anatolian and Mesopotamian memories.
              </p>
              <p>
                Ralph Sason’s cooking carries these layers into the present
                through his own language as a chef. The aim is not to recreate
                old recipes as museum pieces, nor to present a nostalgic
                version of “Turkish cuisine”.
              </p>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <div className="space-y-6">
              <p>
                Instead, SASON brings together the multilayered food cultures
                of these lands. Different traditions, ingredients and memories
                may meet on the same plate — not as separate references, but
                as layers that blend, transform and speak to one another.
              </p>
              <p>
                At its heart, SASON is a bridge: between Istanbul and Athens,
                between Anatolia and the Aegean, between memory and the future.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="concept" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-0 md:grid-cols-2">
          <Reveal className="relative h-full min-h-[70vh]">
            <ParallaxImage
              src="/images/pide-hands.png"
              alt="Hands filling flatbread dough in the kitchen"
              className="absolute inset-0 h-full w-full"
              zoom={1}
              strength={0}
              fit="cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </Reveal>

          <div className="flex flex-col justify-center px-6 py-20 md:px-16 md:py-32">
            <Reveal>
              <p className="mb-10 text-xs uppercase tracking-[0.35em] text-muted-foreground">
                Concept
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-balance font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
                The table as archive
              </h2>
            </Reveal>
            <div className="mt-10 max-w-md space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <Reveal delay={160}>
                <p>
                  A table can hold more history than a wall full of decoration.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p>
                  It can carry recipes, family stories, migrations, habits,
                  arguments, songs, silences and the simple pleasure of
                  deciding who gets the last piece of bread.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <p>
                  At SASON, the table is not an object of display. It is alive,
                  used, touched, stained, shared and remembered.
                </p>
              </Reveal>
              <Reveal delay={340}>
                <p>
                  The restaurant is built around this idea: food as a living
                  archive. Not something frozen in the past, but something
                  cooked, questioned, transformed and shared again.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-4">
              <Reveal delay={380} className="col-span-2 h-full">
                <ParallaxImage
                  src="/images/pide-close.jpg"
                  alt="Artichoke, leek and cheese laid onto flatbread dough"
                  className="aspect-[3/2] w-full"
                  strength={40}
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </Reveal>
              <Reveal delay={440} className="h-full">
                <ParallaxImage
                  src="/images/door-ceramics.jpg"
                  alt="Handmade ceramics set outside a wooden door painted with wine bottles"
                  className="aspect-[4/5] w-full"
                  strength={40}
                  sizes="(min-width: 768px) 20vw, 50vw"
                />
              </Reveal>
              <Reveal delay={500} className="h-full">
                <ParallaxImage
                  src="/images/plate-stone.jpg"
                  alt="A ceramic plate with bread, olives and oil on stone"
                  className="aspect-[4/5] w-full"
                  strength={40}
                  sizes="(min-width: 768px) 20vw, 50vw"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="day-night" className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-40">
          <Reveal>
            <p className="mb-10 text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Day / Night
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="max-w-3xl text-balance font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Wine &amp; sake bar by day, dining by night
            </h2>
          </Reveal>
          <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <Reveal delay={140}>
              <p>
                From Tuesday to Sunday, SASON opens in the afternoon with its
                wine &amp; sake bar.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p>
                The bar menu is available until 18:30 every day: smaller
                plates, wine-friendly food, sake pairings and seasonal
                preparations from the kitchen.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 divide-y divide-border border-y border-border">
            {dayNightHours.map((block, i) => (
              <Reveal key={block.days} delay={i * 80}>
                <div className="grid gap-4 py-8 md:grid-cols-[12rem_1fr] md:items-start md:gap-8 md:py-10">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground md:pt-4">
                    {block.days}
                  </p>
                  <div>
                    {block.rows.map((row) => (
                      <div
                        key={row.service}
                        className="flex items-baseline justify-between gap-6 border-b border-border/70 py-3 last:border-b-0"
                      >
                        <p className="font-serif text-2xl leading-tight md:text-3xl">
                          {row.service}
                        </p>
                        <p className="shrink-0 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                          {row.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180}>
            <p className="mt-14 max-w-xl font-serif text-2xl italic leading-snug md:text-3xl">
              Afternoons at SASON are relaxed, built around wine, sake, small
              plates and conversation. As the evening begins, the room moves
              into a fuller dinner experience.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="food" className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-44">
        <Reveal>
          <p className="mb-10 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Food
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-balance font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
            Product-driven, seasonal, personal
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 text-base leading-relaxed text-muted-foreground md:mt-16 md:grid-cols-2 md:gap-16 md:text-lg">
          <Reveal delay={140}>
            <div className="space-y-6">
              <p>SASON’s kitchen is product-driven.</p>
              <p>
                The menu follows the seasons, the soil, nature and the rhythm
                of the kitchen. Ingredients are chosen for their origin,
                integrity and expressive quality.
              </p>
              <p>
                The cooking moves through old Istanbul, Anatolia, Mesopotamia,
                the Aegean, the Caucasus, the Levant and the wider
                Mediterranean. Spices, medicinal and aromatic herbs are used
                not as decoration, but as carriers of history, memory and
                cultural exchange.
              </p>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <div className="space-y-6">
              <p>Some dishes may feel familiar.</p>
              <p>
                Others may feel like they belong somewhere between Istanbul,
                Athens, Mesopotamia, Georgia, Tunisia and the Aegean.
              </p>
              <p className="font-serif text-2xl italic leading-snug text-foreground md:text-3xl">
                The idea is not to copy the past. It is to cook from it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="wine" className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-44">
        <Reveal>
          <p className="mb-10 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Wine &amp; Sake
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="max-w-3xl text-balance font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
            An eclectic list, made for the table
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 text-base leading-relaxed text-muted-foreground md:mt-16 md:grid-cols-2 md:gap-16 md:text-lg">
          <Reveal delay={140}>
            <p>
              SASON’s wine list is eclectic, personal and food-driven. It moves
              between Mediterranean, Anatolian, Aegean, Caucasian and Levantine
              references, with a focus on native grapes, small producers and
              bottles that carry a clear sense of place.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p>
              Turkish, Greek, Italian, Lebanese and Georgian wines sit naturally
              alongside a small sake selection, chosen for pairing, texture and
              quiet complexity.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="producers" className="border-y border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-28 md:px-10 md:py-40">
          <Reveal>
            <p className="mb-10 text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Producers / Friends
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="max-w-3xl text-balance font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              The people behind the table
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              SASON is built with people, not only products. We work with
              growers, winemakers, olive oil producers, ceramicists, textile
              makers, craftspeople and small suppliers whose work we respect.
            </p>
          </Reveal>
          <ul className="mt-16 grid md:grid-cols-2 md:gap-x-16">
            {collaborators.map((name, i) => (
              <Reveal
                key={name}
                delay={i * 40}
                as="li"
                className="flex items-baseline gap-5 border-b border-border py-5 md:py-6"
              >
                <span className="w-6 shrink-0 font-serif text-sm tabular-nums text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-serif text-2xl leading-tight md:text-3xl">
                  {name}
                </span>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200}>
            <p className="mt-14 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              This page will become an archive of those relationships — a place
              to share the people, materials and stories behind what appears on
              the table.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        id="careers"
        className="mx-auto max-w-4xl px-6 py-28 md:px-10 md:py-44"
      >
        <Reveal>
          <p className="mb-10 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Careers
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-balance font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
            Join us from the beginning
          </h2>
        </Reveal>
        <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          <Reveal delay={140}>
            <p>
              SASON is looking for people who care about food, hospitality,
              teamwork and detail.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p>
              We are building a small restaurant with a strong identity, and we
              want to work with people who are curious, kind, disciplined and
              open to learning.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p>Experience matters, but attitude matters more.</p>
          </Reveal>
        </div>

        <p className="mt-16 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          We are currently interested in hearing from
        </p>

        <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border text-left md:grid-cols-2">
          <Reveal className="bg-background">
            <div className="flex h-full flex-col p-10 md:p-14">
              <h3 className="font-serif text-2xl tracking-wide md:text-3xl">
                Kitchen
              </h3>
              <ul className="mt-8 space-y-4">
                {kitchenRoles.map((role) => (
                  <li
                    key={role}
                    className="flex items-center gap-4 border-b border-border/70 pb-4 text-sm uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    <span aria-hidden="true" className="h-px w-6 bg-accent" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120} className="bg-background">
            <div className="flex h-full flex-col p-10 md:p-14">
              <h3 className="font-serif text-2xl tracking-wide md:text-3xl">
                Front of House
              </h3>
              <ul className="mt-8 space-y-4">
                {floorRoles.map((role) => (
                  <li
                    key={role}
                    className="flex items-center gap-4 border-b border-border/70 pb-4 text-sm uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    <span aria-hidden="true" className="h-px w-6 bg-accent" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="mt-16">
            <p className="text-base leading-relaxed text-muted-foreground">
              To apply, please send your CV and a short note about yourself.
            </p>
            <a
              href="mailto:info@sasonathens.com"
              className="mt-8 inline-flex items-center gap-3 bg-primary px-10 py-5 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-opacity duration-300 hover:opacity-80"
            >
              info@sasonathens.com
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
      </section>

      <section
        id="contact"
        className="border-t border-border bg-card px-6 py-28 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-10 text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Contact
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Opening soon in Athens
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              For collaborations, producers, press, hiring or general
              enquiries.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
              <div className="bg-background p-10">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Address
                </p>
                <p className="mt-6 font-serif text-2xl tracking-tight md:text-3xl">
                  SASON
                </p>
                <p className="mt-2 text-base text-muted-foreground">
                  Pangrati, Athens
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Opening November 2026
                </p>
              </div>
              <div className="bg-background p-10">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Email
                </p>
                <a
                  href="mailto:info@sasonathens.com"
                  className="mt-6 block break-all font-serif text-2xl tracking-tight transition-opacity hover:opacity-60"
                >
                  info@sasonathens.com
                </a>
              </div>
              <div className="bg-background p-10">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Instagram
                </p>
                <a
                  href="https://instagram.com/sason_athens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block font-serif text-2xl tracking-tight transition-opacity hover:opacity-60"
                >
                  @sason_athens
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-primary px-6 py-20 text-primary-foreground md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 text-center">
          <p className="font-serif text-6xl tracking-[0.3em] md:text-8xl">
            SASON
          </p>
          <p className="font-serif text-lg italic text-primary-foreground/80">
            The Table as Archive
          </p>
          <div className="flex flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
            <span>Pangrati, Athens</span>
            <span>Opening November 2026</span>
            <a
              href="https://instagram.com/sason_athens"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
            >
              @sason_athens
            </a>
          </div>
          <p className="mt-6 text-[0.65rem] uppercase tracking-[0.25em] text-primary-foreground/50">
            © {new Date().getFullYear()} SASON — Athens, Greece
          </p>
        </div>
      </footer>
    </div>
  )
}
