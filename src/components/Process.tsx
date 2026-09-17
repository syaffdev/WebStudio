import { Reveal } from './ui'

const STEPS = [
  { n: '01', title: 'Discuss', desc: 'Understand the idea, requirements and goals.' },
  { n: '02', title: 'Plan', desc: 'Define scope, technology and timeline.' },
  { n: '03', title: 'Build', desc: 'Design and develop the product.' },
  { n: '04', title: 'Review', desc: 'Testing, feedback and revisions.' },
  { n: '05', title: 'Launch', desc: 'Deploy and hand over the project.' },
]

export function Process() {
  return (
    <section id="process" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-2">05 / Process</p>
          <h2 className="mt-6 font-sans text-5xl font-semibold leading-[0.95] tracking-[-0.035em] text-paper md:text-7xl">
            From idea to launch.
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24">
          <div className="grid grid-cols-[auto_1fr] gap-x-6 md:grid-cols-[8rem_1fr] md:gap-x-12">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="grid grid-cols-subgrid gap-x-6 md:gap-x-12">
                  <span
                    className={`border-l py-8 pl-4 font-mono text-sm text-faint md:pl-8 ${
                      i > 0 ? 'border-faint/30' : 'border-accent'
                    } relative`}
                  >
                    <span
                      className={`absolute -left-[3px] top-8 h-[5px] w-[5px] rounded-full ${
                        i === 0 ? 'bg-accent' : 'bg-faint'
                      }`}
                      style={{ top: i === 0 ? '7.2rem' : '3.6rem' }}
                    />
                    {s.n}
                  </span>
                  <div className="border-b border-line py-8">
                    <h3 className="font-sans text-2xl font-semibold tracking-[-0.02em] text-paper md:text-3xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}