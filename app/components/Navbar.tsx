'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: '~/' },
  { href: '/blog', label: 'blog/' },
  { href: '/projects', label: 'projects/' },
  { href: '/quiz', label: 'quiz/' },
  { href: '/about', label: 'about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        background: '#161b22',
        borderBottom: '1px solid #30363d',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: '1.1rem',
            color: '#3fb950',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ color: '#8b949e' }}>$ </span>
          CCsphere
          <span
            style={{
              display: 'inline-block',
              width: '2px',
              height: '1.1em',
              background: '#3fb950',
              marginLeft: '3px',
              verticalAlign: 'middle',
              animation: 'blink 1.2s step-end infinite',
            }}
          />
          <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
        </Link>

        {/* 桌面版導航連結 */}
        <div className="nav-links-desktop" style={{ display: 'flex', gap: '0.25rem' }}>
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.85rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  color: isActive ? '#58a6ff' : '#8b949e',
                  background: isActive ? 'rgba(88,166,255,0.1)' : 'transparent',
                  transition: 'all 0.15s ease',
                  border: isActive ? '1px solid rgba(88,166,255,0.3)' : '1px solid transparent',
                }}
              >
                {isActive && <span style={{ color: '#58a6ff', marginRight: '2px' }}>▸ </span>}
                {label}
              </Link>
            );
          })}
        </div>

        {/* 手機版漢堡按鈕 */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid #30363d',
            borderRadius: '6px',
            padding: '0.4rem 0.5rem',
            cursor: 'pointer',
            color: '#8b949e',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '1.1rem',
            lineHeight: 1,
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* 手機版展開選單 */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            display: 'none',
            borderTop: '1px solid #30363d',
            background: '#161b22',
            padding: '0.5rem 1.5rem 1rem',
          }}
        >
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.9rem',
                  padding: '0.6rem 0.75rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  color: isActive ? '#58a6ff' : '#8b949e',
                  background: isActive ? 'rgba(88,166,255,0.1)' : 'transparent',
                  border: isActive ? '1px solid rgba(88,166,255,0.3)' : '1px solid transparent',
                  marginBottom: '0.25rem',
                }}
              >
                {isActive && <span style={{ color: '#58a6ff', marginRight: '4px' }}>▸</span>}
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
