import { waLink } from '../lib/constants'
import { ArrowIcon, Reveal } from './ui'

const BASIC: string[] = [
  'Website development',
  'Responsive design',
  'Custom UI',
  'Source code',
  'Up to 5 sections / pages',
  '2 revisions',
  'No hosting',
  'No domain',
]

const PLUS: string[] = [
  'Everything in Basic',
  'Hosting for 1 year',
  'Domain for 1 year',
  'SSL',
  'Deployment',
  '3 revisions',
  '30 days technical support',
]

const OTHER = [
  { name: 'Landing Page Pro', price: 'From Rp1.5M', wa: 'I want a Landing Page Pro package.' },
  { name: 'Business Website', price: 'From Rp3M', wa: 'I want a Business Website package.' },
  { name: 'Web Application', price: 'From Rp5M', wa: 'I want a Web Application package.' },
  { name: 'MVP Development', price: 'From Rp10M', wa: 'I want an MVP Development package.' },
  { name: 'Custom Project', price: "Let's Talk", wa: 'I want to discuss a custom project.' },
]

function CheckDot() {
  return <span className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
}

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-2">04 / For Students</p>
          <h2 className="mt-6 max-w-4xl font-sans text-5xl font-semibold leading-[0.95] tracking-[-0.035em] text-paper md:text-7xl">
            Build your project.
            <br />
            Get it online.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px border border-line bg-line md:mt-24 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col p-8 md:p-10">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-paper">Student Basic</h3>
                <p className="font-sans text-4xl font-semibold tracking-tight text-paper md:text-5xl">
                  Rp599<span className="text-2xl text-muted">K</span>
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                {BASIC.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted">
                    <CheckDot /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={waLink('Hi, I want the Student Basic package (Rp599K).')}
                target="_blank"
                rel="noreferrer"
                className="group mt-10 inline-flex items-center justify-center gap-2 border border-line-2 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-paper transition-colors hover:border-accent hover:text-accent-2"
              >
                Choose Basic
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative flex h-full flex-col border-t-2 border-t-accent bg-ink-2 p-8 md:p-10">
              <span className="absolute right-8 top-8 border border-accent-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-2 md:right-10 md:top-10">
                Popular
              </span>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-paper">Student Plus</h3>
                <p className="font-sans text-4xl font-semibold tracking-tight text-paper md:text-5xl">
                  Rp799<span className="text-2xl text-muted">K</span>
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                {PLUS.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted">
                    <CheckDot /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={waLink('Hi, I want the Student Plus package (Rp799K).')}
                target="_blank"
                rel="noreferrer"
                className="group mt-10 inline-flex items-center justify-center gap-2 bg-accent px-6 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-on-accent transition-transform duration-200 hover:-translate-y-px active:translate-y-0"
              >
                Choose Plus
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>

        <p className="mt-6 max-w-2xl border-l-2 border-faint pl-4 font-mono text-xs leading-relaxed text-faint">
          Complex systems such as authentication, dashboards, APIs and
          database-driven applications are quoted separately.
        </p>

        <div className="mt-20 border-t border-line md:mt-28">
          <Reveal>
            <p className="mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-faint" />
              Other Packages
            </p>
          </Reveal>
          <div className="mt-2">
            {OTHER.map((o, i) => (
              <Reveal key={o.name} delay={i * 0.04}>
                <a
                  href={waLink(o.wa)}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-1 items-baseline gap-2 border-b border-line py-7 transition-colors duration-300 hover:bg-ink-2 sm:grid-cols-12"
                >
                  <span className="font-sans text-2xl font-semibold uppercase tracking-[-0.02em] text-paper transition-colors group-hover:text-accent-2 sm:col-span-7 md:text-3xl">
                    {o.name}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted sm:col-span-4 sm:text-right">
                    {o.price}
                  </span>
                  <ArrowIcon className="hidden h-5 w-5 justify-self-end text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent sm:col-span-1 sm:block" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}