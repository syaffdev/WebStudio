import { Reveal } from './ui'

export function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-2">06 / About</p>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal delay={0.06}>
              <h2 className="max-w-3xl font-sans text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-paper md:text-5xl">
                An independent web developer focused on building clean,
                functional and scalable digital experiences.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-10 grid grid-cols-1 gap-8 border-t border-line pt-10 sm:grid-cols-2">
                <p className="max-w-sm text-sm leading-relaxed text-muted">
                  One person behind the code, no middlemen. You talk directly
                  to the developer who builds your project. That means clear
                  communication, honest timelines and work that matches the
                  brief.
                </p>
                <p className="max-w-sm text-sm leading-relaxed text-muted">
                  Everything ships with source code and clear documentation.
                  The goal is a product you own, understand and can keep
                  improving beyond delivery.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}