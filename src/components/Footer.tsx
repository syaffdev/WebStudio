import { WhatsappLogo, GithubLogo, InstagramLogo } from '@phosphor-icons/react'
import { BRAND, waLink } from '../lib/constants'
import { Mark } from './ui'

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Mark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Independent web development studio. Websites, web applications
              and digital products for students, startups and businesses.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Menu</p>
            <ul className="mt-4 space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted transition-colors hover:text-paper">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">Find us</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-paper"
                >
                  <GithubLogo size={16} aria-hidden="true" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-paper"
                >
                  <InstagramLogo size={16} aria-hidden="true" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href={waLink('Hi, I have a question.')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-paper"
                >
                  <WhatsappLogo size={16} aria-hidden="true" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-faint">
            © 2026 {BRAND}. Built with code, not templates.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
            Remote · Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}