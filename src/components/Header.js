'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="w-full pl-6 pr-4 sm:pl-8 sm:pr-6 pt-3 pb-0 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 ml-4">
          <Image
            src="/PSI_logo.svg"
            alt="PSI Logo"
            width={220}
            height={66}
            priority
            className="w-[160px] sm:w-[190px] lg:w-[220px] h-auto"
          />
        </Link>

        {/* Desktop Navigation + Button (grouped right) */}
        <div className="hidden md:flex items-center gap-6 shrink-0 mr-2">
          <nav className="flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-970 font-light text-lg hover:text-black transition-colors" style={{ fontFamily: 'var(--font-rubik)', fontWeight: 400 }}
            >
              בית
            </Link>
            <Link
              href="/about"
              className="text-gray-970 font-light text-lg hover:text-black transition-colors" style={{ fontFamily: 'var(--font-rubik)', fontWeight: 400 }}
            >
              אודות
            </Link>
            <Link
              href="/hadpasat-midadim"
              className="text-gray-970 font-light text-lg hover:text-black transition-colors" style={{ fontFamily: 'var(--font-rubik)', fontWeight: 400 }}
            >
              הדפסת מדידים
            </Link>
          </nav>

          {/* Contact Button (desktop) */}
          <a
            href="https://wa.me/972525745773"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg font-light px-6 py-2.5 rounded-full flex items-center justify-center gap-2 min-w-[180px] h-[46px] transition-all duration-300 tracking-wide"
            style={{ background: 'linear-gradient(to right, #8BC34A, #5E9F3D)' }}
            onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(to right, #7aad3a, #4e8f2d)'}
            onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(to right, #8BC34A, #5E9F3D)'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            דברו איתנו
          </a>
        </div>

        {/* Hamburger Button (mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <Link
            href="/"
            className="text-gray-900 font-light text-lg hover:text-black transition-colors" style={{ fontFamily: 'var(--font-rubik)', fontWeight: 300 }}
            onClick={() => setMenuOpen(false)}
          >
            בית
          </Link>
          <Link
            href="/about"
            className="text-gray-900 font-light text-lg hover:text-black transition-colors" style={{ fontFamily: 'var(--font-rubik)', fontWeight: 300 }}
            onClick={() => setMenuOpen(false)}
          >
            אודות
          </Link>
          <Link
            href="/hadpasat-midadim"
            className="text-gray-900 font-light text-lg hover:text-black transition-colors" style={{ fontFamily: 'var(--font-rubik)', fontWeight: 300 }}
            onClick={() => setMenuOpen(false)}
          >
            הדפסת מדידים
          </Link>
          <Link
            href="/contact"
            className="bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-gray-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}

    </header>
  );
}
