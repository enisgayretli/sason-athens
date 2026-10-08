'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Concept', href: '#concept' },
  { label: 'Day / Night', href: '#day-night' },
  { label: 'Food', href: '#food' },
  { label: 'Wine', href: '#wine' },
  { label: 'Producers', href: '#producers' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
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
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border/60'
          : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10"
      >
        <a
          href="#top"
          className={cn(
            'font-serif text-xl tracking-[0.35em] transition-colors',
            scrolled || open ? 'text-foreground' : 'text-background',
          )}
        >
          SASON
        </a>

        <ul
          className={cn(
            'hidden items-center gap-5 text-[0.65rem] font-medium uppercase tracking-[0.16em] xl:flex',
            scrolled ? 'text-foreground' : 'text-background',
          )}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={cn(
            'flex h-8 w-8 flex-col items-center justify-center gap-1.5 xl:hidden',
            scrolled || open ? 'text-foreground' : 'text-background',
          )}
        >
          <span
            className={cn(
              'block h-px w-6 bg-current transition-transform duration-300',
              open && 'translate-y-[3.5px] rotate-45',
            )}
          />
          <span
            className={cn(
              'block h-px w-6 bg-current transition-transform duration-300',
              open && '-translate-y-[3.5px] -rotate-45',
            )}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={cn(
          'fixed inset-0 top-0 z-[-1] flex flex-col items-center justify-center gap-5 overflow-y-auto bg-background py-24 transition-opacity duration-500 xl:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-serif text-2xl tracking-wide text-foreground sm:text-3xl"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
