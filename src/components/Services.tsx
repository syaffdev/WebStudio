import { ArrowIcon, Reveal } from './ui'

const SERVICES = [
  {
    n: '01',
    name: 'Websites',
    desc: 'Landing pages, portfolios and company websites.',
  },
  {
    n: '02',
    name: 'Web Applications',
    desc: 'Dashboards, management systems and custom web apps.',
  },
  {
    n: '03',
    name: 'MVP Development',
    desc: 'Turn startup ideas into functional products.',
  },
  {
    n: '04',
    name: 'Academic Development',
    desc: 'Web development assistance, debugging, database and deployment support for students.',
  },
  {
    n: '05',
    name: 'Maintenance',
    desc: 'Bug fixing, updates and ongoing improvements.',
  },
]

export function Services() {
  return (
    <section id="services" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-2">01 / Services</p>
          <h2 className="mt-6 font-sans text-5xl font-semibold leading-[0.95] tracking-[-0.035em] text-paper md:text-7xl">
            What we build
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-line md:mt-24">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <a
                href="#pricing"
                className="group grid grid-cols-12 items-center gap-2 border-b border-line py-8 transition-colors duration-300 hover:bg-ink-2 md:py-10"
              >
                <span className="col-span-2 font-mono text-sm transition-colors group-hover:text-accent md:col-span-1">
                  <span className="text-faint">{s.n}</span>
                  <span className="text-line-2"> — </span>
                </span>
                <span className="col-span-10 flex items-baseline md:col-span-7">
                  <span className="font-sans text-3xl font-semibold uppercase tracking-[-0.02em] text-paper transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent-2 md:text-5xl">
                    {s.name}
                  </span>
                </span>
                <span className="col-span-10 col-start-3 max-w-md text-sm leading-relaxed text-muted md:col-span-4 md:col-start-9 md:pl-8 md:text-right">
                  {s.desc}
                </span>
                <ArrowIcon className="hidden h-6 w-6 text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent md:col-span-1 md:block" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}