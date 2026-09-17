import { waLink } from '../lib/constants'
import { ArrowIcon, Reveal } from './ui'

export function Cta() {
  return (
    <section id="contact" className="relative border-b border-line bg-ink-2">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-2">08 / Contact</p>
          <h2 className="mt-8 font-sans text-6xl font-semibold leading-[0.92] tracking-[-0.04em] text-paper md:text-[7.5rem]">
            Have a project?
            <br />
            <span className="text-accent-2">Let's build it.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted">
            Tell us what you're building. We'll figure out the best way to
            bring it to life.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={waLink('Hi, I have a project in mind. Let\'s discuss.')}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-accent px-8 py-4 font-mono text-sm uppercase tracking-[0.16em] text-on-accent transition-transform duration-200 hover:-translate-y-px active:translate-y-0"
            >
              Start a project
              <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={waLink('Hi, I have a project in mind. Let\'s discuss.')}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.16em] text-paper transition-colors hover:text-accent-2"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-[#25d366]" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}