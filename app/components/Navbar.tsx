'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

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
    { name: 'About Us', href: '/about-us' },
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
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
          min-w-0
          transition-all
          duration-700
          ease-[cubic-bezier(.4,0,.2,1)]
          ${
            scrolled
            ?
            `top-0 w-full max-w-full`
            :
            `top-3 w-[calc(100%-24px)] max-w-[960px] sm:top-5 sm:w-[calc(100%-32px)] md:top-7`
          }
        `}
      >
        <header
          className={`
            flex
            min-w-0
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
              bg-[#f6f6f4]
              border-[#e3e4e1]
              border-b-black/10
              shadow-[0_12px_35px_rgba(23,24,26,0.08)]
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
              bg-[rgba(246,246,244,0.88)]
              border-[#e3e4e1]
              backdrop-blur-[14px]
              shadow-[0_20px_45px_rgba(23,24,26,0.10)]
              `
            }
          `}
        >

          {/* Logo */}
          <Link href="/" className="flex h-full min-w-0 shrink items-center">
            <img
              src="/ngd-logo-dark.png"
              alt="NextGen Digitals"
              className="
                h-[58%]
                sm:h-[60%]
                md:h-[62%]
                max-h-[38px]
                sm:max-h-[42px]
                md:max-h-[46px]
                lg:max-h-[48px]
                w-auto
                max-w-[190px]
                object-contain
                transition-all
                duration-700
              "
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-9 xl:gap-11">
            {
              navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative
                    text-[#6b6f76]
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
                    hover:text-[#8cc63f]
                    after:absolute
                    after:left-0
                    after:-bottom-[7px]
                    after:h-[1.5px]
                    after:w-0
                    after:bg-[#8cc63f]
                    after:shadow-[0_0_10px_#8cc63f]
                    after:transition-all
                    after:duration-500
                    after:ease-out
                    hover:after:w-full
                  
                  ${pathname === item.href ? 'text-[#8cc63f] after:w-full' : ''}
                  `}
                >
                  {item.name}
                </Link>
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
              shrink-0
              rounded-lg
              border border-[#d6d8d3]
              bg-transparent
              transition-colors duration-300
              hover:border-[#8cc63f]/40
              focus:outline-none
            "
          >
            <span
              className={`
                block w-5 h-[1.5px] bg-[#17181a]
                transition-all duration-300 ease-in-out origin-center
                ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}
              `}
            />
            <span
              className={`
                block w-5 h-[1.5px] bg-[#17181a]
                transition-all duration-300 ease-in-out
                ${menuOpen ? 'opacity-0 scale-x-0' : ''}
              `}
            />
            <span
              className={`
                block w-5 h-[1.5px] bg-[#17181a]
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
            bg-[#f6f6f4]
            border-b border-[#e3e4e1]
            shadow-[0_20px_60px_rgba(23,24,26,0.18)]
            flex flex-col
            px-6 pt-[85px] pb-8
            gap-1
            transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]
            ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
          `}
        >
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleNavClick}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
              className={`
                text-[#6b6f76]
                text-[11px]
                tracking-[3px]
                uppercase
                py-4
                border-b border-[#e3e4e1]
                last:border-none
                transition-all duration-400
                hover:text-[#8cc63f]
                hover:pl-2
                ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}
              `}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );

}
