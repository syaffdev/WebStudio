import { motion, useReducedMotion } from 'motion/react'
import { waLink } from '../lib/constants'
import { ArrowIcon } from './ui'

const EASE = [0.16, 1, 0.3, 1] as const

const META = [
  { k: 'Status', v: 'Available for projects' },
  { k: 'Mode', v: 'Remote' },
  { k: 'Year', v: '2026' },
]

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
      <div className="mx-auto max-w-[1400px] px-5 pt-28 pb-16 md:px-10 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <motion.p {...anim(0)} className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Independent Web Development Studio
            </motion.p>

            <h1 className="mt-8 font-sans font-semibold uppercase leading-[0.9] tracking-[-0.03em] text-paper text-[clamp(3rem,8.5vw,7.5rem)]">
              <motion.span {...anim(0.08)} className="block">We build</motion.span>
              <motion.span {...anim(0.16)} className="block">digital</motion.span>
              <motion.span {...anim(0.24)} className="block text-accent-2">products.</motion.span>
            </h1>
          </div>

          <div className="flex flex-col justify-end lg:col-span-4 lg:pb-2">
            <motion.p {...anim(0.32)} className="max-w-md text-pretty text-base leading-relaxed text-muted md:text-lg">
              Websites, web applications and digital products for students,
              startups and businesses.
            </motion.p>

            <motion.div {...anim(0.4)} className="mt-8 flex flex-wrap items-center gap-4">
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
                className="group inline-flex items-center gap-3 border border-line-2 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-paper transition-colors hover:border-accent"
              >
                View work
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.dl
          {...anim(0.58)}
          className="mt-16 grid grid-cols-1 border-t border-line sm:grid-cols-3 md:mt-24"
        >
          {META.map((m) => (
            <div
              key={m.k}
              className="flex items-baseline gap-3 py-5 sm:border-l sm:border-line sm:px-6 sm:first:border-l-0 sm:first:pl-0"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">{m.k}</dt>
              <dd className="font-mono text-xs uppercase tracking-[0.14em] text-paper">{m.v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}