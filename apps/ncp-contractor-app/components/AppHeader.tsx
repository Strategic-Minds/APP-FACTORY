'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NCPLogo } from './NCPLogo'

const NAV_LINKS = [
  { href: '/',           label: 'Home'         },
  { href: '/systems',   label: 'Floor Systems' },
  { href: '/finishes',  label: 'Colors'        },
  { href: '/projects',  label: 'Projects'      },
  { href: '/reviews',   label: 'Reviews'       },
  { href: '/company',   label: 'About'         },
]

export function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-[#C09030] text-black text-center text-xs font-semibold py-1.5 px-4 tracking-wide">
        ★ PREMIUM COMMERCIAL & INDUSTRIAL FLOOR SYSTEMS — NATIONWIDE ★
      </div>

      {/* Main nav */}
      <header className="bg-black border-b border-[#443F38] sticky top-0 z-50">
        <div className="flex items-center justify-between h-16 px-4 max-w-7xl mx-auto">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <NCPLogo size="sm" priority />
            <div className="hidden sm:block">
              <p className="text-white font-bold text-sm leading-tight tracking-wider uppercase">
                National Concrete
              </p>
              <p className="text-[#C09030] text-xs tracking-widest uppercase">
                Polishing
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#C09030] text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/quote"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-[#C09030] hover:bg-[#D4AF37] text-black text-sm font-bold rounded-md transition-colors"
            >
              REQUEST BID
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Menu"
            >
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black z-40 md:hidden flex flex-col">
          <div className="flex items-center justify-between h-16 px-4 border-b border-[#443F38]">
            <NCPLogo size="sm" />
            <button onClick={() => setMenuOpen(false)} className="text-white text-2xl">✕</button>
          </div>
          <nav className="flex flex-col p-6 gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl font-bold uppercase tracking-wider hover:text-[#C09030] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-6 py-4 bg-[#C09030] text-black text-xl font-bold text-center rounded-lg"
            >
              REQUEST BID
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
