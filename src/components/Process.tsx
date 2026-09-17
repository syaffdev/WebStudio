import { Reveal } from './ui'

const STEPS = [
  {
    n: '01',
    title: 'Discover',
    desc: 'We discuss the idea, requirements and what success looks like for your project.',
    meta: 'Brief & Goals',
  },
  {
    n: '02',
    title: 'Design',
    desc: 'Wireframes, interface and visual direction, refined before a single line of code.',
    meta: 'UI & Structure',
  },
  {
    n: '03',
    title: 'Build',
    desc: 'Front-end, back-end and integrations, developed and tested against the plan.',
    meta: 'Development',
  },
  {
    n: '04',
    title: 'Launch',
    desc: 'Deploy, hand over source code and documentation, then stay available.',
    meta: 'Deploy & Handoff',
  },
]

export function Process() {
  return (
    <section id="process" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <div className="flex items-center justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-2">
              05 / Process
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
              01 — 04
            </p>
          </div>

          <h2 className="mt-6 font-sans text-5xl font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-paper md:text-7xl">
            From idea
            <br />
            to launch.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            A defined path from first conversation to a live, working product —
            four stages, one deliverable.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="relative mt-14 border-t border-line sm:mt-20 sm:grid sm:grid-cols-2 sm:gap-px sm:border sm:border-line sm:bg-line lg:grid-cols-4">
            <span
              aria-hidden="true"
              className="absolute bottom-4 left-0 top-4 w-px bg-line sm:hidden"
            />
            {STEPS.map((s) => (
              <li
                key={s.n}
                className="group relative border-b border-line bg-ink pl-6 transition-colors duration-300 last:border-b-0 sm:border-b-0 sm:bg-ink sm:pl-8 sm:hover:bg-ink-2 lg:pl-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-6 h-2 w-2 -translate-x-1/2 rounded-full border border-line bg-ink transition-colors duration-300 group-hover:border-accent group-hover:bg-accent sm:hidden"
                />
                <div className="flex items-baseline gap-4 py-9">
                  <span className="flex-1 font-mono text-5xl font-semibold tracking-tight text-faint transition-colors duration-300 group-hover:text-accent-2 md:text-6xl">
                    {s.n}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-lg text-faint transition-colors duration-300 group-hover:text-accent"
                  >
                    →
                  </span>
                </div>
                <h3 className="max-w-[18ch] font-sans text-2xl font-semibold uppercase tracking-[-0.01em] text-paper transition-transform duration-300 group-hover:translate-x-1 md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-muted">
                  {s.desc}
                </p>
                <p className="mt-6 border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  {s.meta}
                </p>
                <span aria-hidden="true" className="block pb-10" />
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}