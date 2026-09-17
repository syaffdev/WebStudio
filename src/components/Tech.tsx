import { Reveal } from './ui'

const TECH = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Node.js',
  'Laravel',
  'PHP',
  'MySQL',
  'PostgreSQL',
  'Git',
  'Figma',
]

const DETAIL: Record<string, string> = {
  HTML: 'Semantic, accessible markup',
  CSS: 'Responsive, modern layout',
  JavaScript: 'Interactive front-end logic',
  React: 'Component-driven UIs',
  'Next.js': 'React frameworks & SSR',
  'Node.js': 'Server & API runtime',
  Laravel: 'PHP application framework',
  PHP: 'Backend scripting',
  MySQL: 'Relational database',
  PostgreSQL: 'Relational database',
  Git: 'Version control & workflow',
  Figma: 'Design & prototyping',
}

export function Tech() {
  return (
    <section id="tech" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-2">03 / Technology</p>
          <h2 className="mt-6 font-sans text-5xl font-semibold leading-[0.95] tracking-[-0.035em] text-paper md:text-7xl">
            The toolkit
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            A practical stack, chosen per project. No bloated frameworks where
            plain HTML and CSS will do.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 border-t border-line sm:grid-cols-3 md:mt-20 lg:grid-cols-4">
          {TECH.map((t, i) => (
            <Reveal key={t} delay={i * 0.03}>
              <div className="group border-b border-r border-line p-6 transition-colors duration-300 hover:bg-ink-2 md:p-8">
                <p className="font-sans text-xl font-medium tracking-tight text-paper transition-colors duration-300 group-hover:text-accent-2 md:text-2xl">
                  {t}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                  {DETAIL[t]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}