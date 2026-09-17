import { CoffeeSite, Dashboard, TravelSite } from './artifacts'
import { Reveal } from './ui'

const PROJECTS = [
  {
    id: 'Project 01',
    name: 'Nomad Travel',
    type: 'Landing Page',
    stack: 'HTML / CSS / JavaScript',
    year: '2026',
    desc: 'Editorial travel website with custom layout, sticky navigation and responsive card system.',
    artifact: <TravelSite />,
    urlLabel: 'nomad-travel.dev',
    ratio: 'aspect-[16/10]',
    imageCol: 'lg:col-span-8 lg:col-start-1',
    metaCol: 'lg:col-span-4 lg:col-start-9',
  },
  {
    id: 'Project 02',
    name: 'Brew&Co Coffee',
    type: 'Business Website',
    stack: 'HTML / CSS / JavaScript',
    year: '2026',
    desc: 'Local coffee shop website with menu system, product cards and location contact block.',
    artifact: <CoffeeSite />,
    urlLabel: 'brewnco.coffee',
    ratio: 'aspect-[16/10]',
    imageCol: 'lg:col-span-6 lg:col-start-2',
    metaCol: 'lg:col-span-4 lg:col-start-9',
  },
  {
    id: 'Project 03',
    name: 'Inventory Dashboard',
    type: 'Web Application',
    stack: 'Laravel / MySQL',
    year: '2026',
    desc: 'Management dashboard with stock tracking, reporting charts and role-based access.',
    artifact: <Dashboard />,
    urlLabel: 'app.inventory.dev',
    ratio: 'aspect-[16/9]',
    imageCol: 'lg:col-span-7 lg:col-start-6',
    metaCol: 'lg:col-span-4 lg:col-start-1',
  },
]

export function Work() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-2">02 / Selected Work</p>
          <h2 className="mt-6 font-sans text-5xl font-semibold leading-[0.95] tracking-[-0.035em] text-paper sm:text-6xl md:text-7xl">
            Projects, not
            <br />
            just screens.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
          {PROJECTS.map((p) => (
            <Reveal key={p.id}>
              <article className="group/article grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
                <div className={`${p.imageCol} overflow-hidden border border-line-2 bg-ink-2 transition-colors duration-300 group-hover/article:border-accent`}>
                  <div className={`${p.ratio} overflow-hidden transition-transform duration-500 ease-out group-hover/article:scale-[1.02]`}>
                    {p.artifact}
                  </div>
                  <div className="flex items-center justify-between border-t border-line px-4 py-2.5">
                    <span className="font-mono text-[11px] text-muted">{p.urlLabel}</span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">{p.year}</span>
                  </div>
                </div>

                <div className={`${p.metaCol} flex flex-col`}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-2">{p.id}</p>
                  <h3 className="mt-3 font-sans text-3xl font-semibold uppercase tracking-[-0.02em] text-paper md:text-4xl">
                    <a href="#work" className="relative inline-block">
                      {p.name}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover/article:w-full" aria-hidden="true" />
                    </a>
                  </h3>
                  <ul className="mt-6 space-y-3 border-t border-line pt-6 font-mono text-xs uppercase tracking-[0.12em]">
                    <li className="flex justify-between gap-4">
                      <span className="text-faint">Type</span>
                      <span className="text-right text-paper group-hover/article:text-accent-2 transition-colors">{p.type}</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span className="text-faint">Stack</span>
                      <span className="text-right text-paper">{p.stack}</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span className="text-faint">Year</span>
                      <span className="text-right text-paper">{p.year}</span>
                    </li>
                  </ul>
                  <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">{p.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}