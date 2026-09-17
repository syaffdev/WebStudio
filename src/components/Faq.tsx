import { useState } from 'react'
import { Reveal } from './ui'

const FAQS = [
  {
    q: 'How long does development take?',
    a: 'A landing page typically takes 2–5 days. A business website takes 1–2 weeks. Web applications and MVPs depend on scope; we agree on a timeline before work starts.',
  },
  {
    q: 'Can I request a custom design?',
    a: 'Yes. Every project starts from a fresh design direction. I can work from your references, brand colors, or just a rough idea, and translate it into a custom interface.',
  },
  {
    q: 'Can you work with an existing Figma design?',
    a: 'Yes. If you have a Figma file, I can build it pixel-tight. I can also audit the design for feasibility and suggest adjustments before development.',
  },
  {
    q: 'Do you provide hosting and domain?',
    a: 'Yes, through the Student Plus package (1 year hosting + domain + SSL). Other packages include optional deployment and hosting setup quoted separately.',
  },
  {
    q: 'Can you build backend systems?',
    a: 'Yes. I build APIs, authentication, dashboards, databases and admin systems with Laravel, PHP and MySQL, plus Node.js for server-side work.',
  },
  {
    q: 'Do you provide maintenance?',
    a: 'Yes. Ongoing maintenance covers bug fixes, security updates, content changes and performance improvements. Plans are quoted based on project size.',
  },
  {
    q: 'How does the project process work?',
    a: 'It starts with a discussion about your idea and goals, then a plan, development, review rounds and launch. You see progress at every step. See the process section above.',
  },
]

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-2">07 / FAQ</p>
          <h2 className="mt-6 font-sans text-5xl font-semibold leading-[0.95] tracking-[-0.035em] text-paper md:text-7xl">
            Questions
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-line md:mt-20">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={i * 0.03}>
                <div className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-baseline justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="font-mono text-xs text-faint transition-colors group-hover:text-accent-2">
                        0{i + 1}
                      </span>
                      <span
                        className={`font-sans text-lg font-medium tracking-[-0.01em] transition-colors md:text-xl ${
                          isOpen ? 'text-paper' : 'text-muted group-hover:text-paper'
                        }`}
                      >
                        {f.q}
                      </span>
                    </span>
                    <span
                      className={`font-mono text-lg leading-none text-faint transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pl-9 text-sm leading-relaxed text-muted md:pl-12">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}