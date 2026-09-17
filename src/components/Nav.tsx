import { useEffect, useState } from 'react'
import { NAV, waLink } from '../lib/constants'
import { ArrowIcon, LiveDot, Mark } from './ui'

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? 'border-line bg-ink/85 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-[72px] md:px-10">
        <a href="#top" className="transition-opacity hover:opacity-80" aria-label="MONO/DEV home">
          <Mark />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-paper"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <LiveDot label="Available for projects" />
          <a
            href={waLink('Hi, I want to discuss a project.')}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 border border-line-2 bg-ink-2 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-all hover:border-accent hover:bg-accent hover:text-on-accent"
          >
            Start a project
            <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center border border-line text-paper lg:hidden"
        >
          <span className="font-mono text-sm">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-ink lg:hidden">
          <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
            {NAV.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line py-4 font-mono text-sm uppercase tracking-[0.14em] text-paper last:border-b-0"
              >
                <span>0{i + 1} — {item.label}</span>
                <ArrowIcon className="text-muted" />
              </a>
            ))}
            <div className="flex items-center justify-between py-5">
              <LiveDot label="Available" />
              <a
                href={waLink('Hi, I want to discuss a project.')}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 border border-line-2 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-paper"
              >
                Start a project <ArrowIcon />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}