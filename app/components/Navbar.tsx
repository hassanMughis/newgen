'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <div
        className={`
          fixed
          z-[100]
          left-0
          right-0
          mx-auto
          transition-all
          duration-700
          ease-[cubic-bezier(.4,0,.2,1)]
          ${
            scrolled
            ?
            `top-0 max-w-full`
            :
            `top-3 sm:top-5 md:top-7 max-w-[92%] sm:max-w-[620px] md:max-w-[760px] lg:max-w-[880px] xl:max-w-[960px] px-3 sm:px-4`
          }
        `}
      >
        <header
          className={`
            flex
            items-center
            justify-between
            transition-all
            duration-700
            ease-[cubic-bezier(.4,0,.2,1)]
            border
            ${
              scrolled
              ?
              `
              h-[56px]
              sm:h-[64px]
              md:h-[72px]
              lg:h-[80px]
              rounded-none
              px-4
              sm:px-8
              md:px-14
              lg:px-20
              xl:px-28
              bg-[#050505]
              border-[#111]
              border-b-white/20
              shadow-[0_12px_35px_rgba(189,254,0,0.08)]
              `
              :
              `
              h-[50px]
              sm:h-[58px]
              md:h-[66px]
              lg:h-[74px]
              rounded-full
              px-4
              sm:px-7
              md:px-9
              lg:px-12
              bg-[rgba(5,5,5,0.92)]
              border-[#171717]
              backdrop-blur-[14px]
              shadow-[0_20px_45px_rgba(189,254,0,0.12)]
              `
            }
          `}
        >

          {/* Logo */}
          <a href="#" className="flex items-center h-full">
            <img
              src="/ngt-logo-cropped.png"
              alt="NGD Logo"
              className="
                h-[58%]
                sm:h-[60%]
                md:h-[62%]
                max-h-[38px]
                sm:max-h-[42px]
                md:max-h-[46px]
                lg:max-h-[48px]
                w-auto
                object-contain
                transition-all
                duration-700
              "
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-9 xl:gap-11">
            {
              navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="
                    relative
                    text-[#999]
                    text-[11px]
                    md:text-[11.5px]
                    lg:text-[12.5px]
                    font-medium
                    tracking-[2px]
                    lg:tracking-[2.5px]
                    uppercase
                    transition-colors
                    duration-500
                    ease-out
                    hover:text-[#BDFE00]
                    after:absolute
                    after:left-0
                    after:-bottom-[7px]
                    after:h-[1.5px]
                    after:w-0
                    after:bg-[#BDFE00]
                    after:shadow-[0_0_10px_#BDFE00]
                    after:transition-all
                    after:duration-500
                    after:ease-out
                    hover:after:w-full
                  "
                >
                  {item.name}
                </a>
              ))
            }
          </nav>

          {/* Hamburger Button (mobile only) */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="
              md:hidden
              flex flex-col
              justify-center
              items-center
              gap-[5px]
              w-9 h-9
              rounded-lg
              border border-[#222]
              bg-transparent
              transition-colors duration-300
              hover:border-[#BDFE00]/40
              focus:outline-none
            "
          >
            <span
              className={`
                block w-5 h-[1.5px] bg-[#ccc]
                transition-all duration-300 ease-in-out origin-center
                ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}
              `}
            />
            <span
              className={`
                block w-5 h-[1.5px] bg-[#ccc]
                transition-all duration-300 ease-in-out
                ${menuOpen ? 'opacity-0 scale-x-0' : ''}
              `}
            />
            <span
              className={`
                block w-5 h-[1.5px] bg-[#ccc]
                transition-all duration-300 ease-in-out origin-center
                ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}
              `}
            />
          </button>

        </header>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
          fixed
          z-[99]
          top-0
          left-0
          w-full
          md:hidden
          transition-all
          duration-500
          ease-[cubic-bezier(.4,0,.2,1)]
          ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}
        `}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`
            absolute inset-0
            bg-black/60
            backdrop-blur-sm
            transition-opacity duration-500
            ${menuOpen ? 'opacity-100' : 'opacity-0'}
          `}
        />

        {/* Menu Panel */}
        <nav
          className={`
            relative
            bg-[#080808]
            border-b border-[#1a1a1a]
            shadow-[0_20px_60px_rgba(0,0,0,0.8)]
            flex flex-col
            px-6 pt-[85px] pb-8
            gap-1
            transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]
            ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
          `}
        >
          {navItems.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleNavClick}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
              className={`
                text-[#888]
                text-[11px]
                tracking-[3px]
                uppercase
                py-4
                border-b border-[#111]
                last:border-none
                transition-all duration-400
                hover:text-[#BDFE00]
                hover:pl-2
                ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}
              `}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );

}