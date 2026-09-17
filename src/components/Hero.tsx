import { motion, useReducedMotion } from 'motion/react'
import { Dashboard } from './artifacts'
import { waLink } from '../lib/constants'
import { ArrowIcon } from './ui'

const EASE = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const reduce = useReducedMotion()
  const anim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        }

  return (
    <section id="top" className="relative border-b border-line">
      <div className="mx-auto max-w-[1400px] px-5 pt-28 pb-8 md:px-10 md:pt-32">
        <motion.div {...anim(0)} className="flex items-center justify-between border-b border-line pb-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            Independent Web Development Studio
          </p>
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-faint sm:block">
            Est. 2026 — Indonesia
          </p>
        </motion.div>

        <h1 className="mt-10 font-sans font-semibold uppercase leading-[0.88] tracking-[-0.03em] text-paper text-[clamp(3.25rem,9.5vw,8.25rem)] md:mt-14">
          <motion.span {...anim(0.08)} className="block">We build</motion.span>
          <motion.span {...anim(0.16)} className="block">digital</motion.span>
          <motion.span {...anim(0.24)} className="block text-accent-2">
            Experiences<span className="text-paper">.</span>
          </motion.span>
        </h1>

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-20 lg:grid-cols-12 lg:gap-8">
          <div className="border-l border-line pl-6 md:pl-8 lg:col-span-7">
            <motion.p {...anim(0.32)} className="max-w-lg text-pretty text-base leading-relaxed text-muted md:text-lg">
              Websites, web applications, and digital products built for
              students, startups, and growing businesses.
            </motion.p>

            <motion.div {...anim(0.4)} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={waLink('Hi, I want to start a project.')}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 bg-accent px-6 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-on-accent transition-transform duration-200 hover:-translate-y-px active:translate-y-0"
              >
                Start a project
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 px-3 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-paper transition-colors hover:text-accent-2"
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-faint transition-colors group-hover:bg-accent" aria-hidden="true" />
                View work
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <motion.div {...anim(0.46)} className="relative border-t border-line pt-10">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 right-0 select-none font-mono text-[9rem] font-semibold leading-none text-line md:-top-20 md:text-[11rem]"
              >
                01
              </span>
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-paper">
                Available for projects
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                Web / UI / Development
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-faint">
                2026
              </p>
              <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                Remote — Worldwide
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 items-end gap-6 md:mt-20 lg:grid-cols-12 lg:gap-8">
          <motion.div {...anim(0.52)} className="flex items-end gap-4 pb-3 lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
              Selected work — 03 / Inventory Dashboard
            </p>
          </motion.div>
          <motion.div {...anim(0.56)} className="lg:col-span-9">
            <div className="relative h-40 overflow-hidden border border-line-2 bg-ink-2 md:h-56 lg:h-64">
              <div className="absolute inset-0 scale-125 lg:-translate-x-[8%]">
                <Dashboard />
              </div>
              <div className="pointer-events-none absolute inset-0 border-b border-line" />
            </div>
            <div className="flex items-center justify-between border-x border-b border-line px-4 py-2.5">
              <span className="font-mono text-[11px] text-muted">app.inventory.dev</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                Laravel / MySQL
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...anim(0.6)}
          className="mt-14 flex flex-col gap-2 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between md:mt-16"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
            Human-designed · Code-built
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
            Page 01 / Portfolio system 2026
          </p>
        </motion.div>
      </div>
    </section>
  )
}