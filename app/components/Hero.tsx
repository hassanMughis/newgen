import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#f6f6f4]">
      <Image
        src="/hero-home-mobile.png"
        alt=""
        fill
        priority
        sizes="(max-width: 639px) 100vw, 1px"
        className="object-cover object-center opacity-40 sm:hidden"
      />
      <Image
        src="/nextgen-light-hero.png"
        alt=""
        fill
        priority
        sizes="(min-width: 640px) 100vw, 1px"
        className="hidden object-cover object-center sm:block"
      />

      {/* Soft veil keeps the centered headline readable over the studio artwork. */}
      <div className="absolute inset-0 bg-[#f6f6f4]/45 sm:bg-white/10" />


      {/* Hero Content (Centered below navbar) */}
      <div
        className="
          absolute
          left-0
          right-0
          top-[78px]
          bottom-0
          flex
          items-center
          justify-center
          z-10
        "
      >

        <div className="w-full px-4 text-center sm:px-6">


          {/* Main Heading */}
          <h1
            className="
              font-syne
              font-black
              leading-[0.9]
              tracking-[-0.06em]
              text-[clamp(2.35rem,10.5vw,4.5rem)]
              sm:text-[clamp(3.5rem,8.2vw,7.5rem)]
            "
          >

            <span className="hero-glitch-line block whitespace-nowrap text-[#17181a]" data-text="Creativity Meets">
              Creativity Meets
            </span>

            <span className="hero-glitch-line block text-[#8cc63f]" data-text="Results.">
              Results.
            </span>

          </h1>



          {/* Description */}
          <p
            className="hero-support-copy
              mx-auto
              mt-5
              max-w-[750px]
              font-sans
              text-[#6b6f76]
              text-sm
              sm:text-base
              md:text-lg
              leading-relaxed
              tracking-wide
            "
          >
            We engineer digital experiences that merge raw technical precision
            with avant-garde artistry. High-fashion aesthetics powered by
            next-gen technology.
          </p>



          {/* Buttons */}
          {/* Buttons */}
<div
  className="hero-actions
    mt-8
    flex
    justify-center
    items-center
    gap-3
    flex-col
    sm:mt-12
    sm:flex-row
    sm:gap-6
  "
>

  {/* Primary Button */}
  <Link
    href="/work"
    className="
      inline-flex
      items-center
      justify-center
      w-[174px]
      h-[52px]
      bg-[#17181a]
      text-[#f6f6f4]
      font-mono
      text-[12px]
      tracking-[2px]
      uppercase
      transition-all
      duration-300
      hover:bg-[#2b2d30]
      hover:shadow-[0_12px_28px_rgba(23,24,26,0.18)]
    "
  >
    Explore Work
  </Link>



  {/* Outline Button */}
  <Link
    href="/contact"
    className="
      inline-flex
      items-center
      justify-center
      w-[184px]
      h-[52px]
      bg-transparent
      border
      border-[#8cc63f]
      text-[#1d2a0a]
      font-mono
      text-[12px]
      tracking-[2px]
      uppercase
      transition-all
      duration-300
      hover:border-[#7eb238]
      hover:bg-[#8cc63f]
    "
  >
    Start Project
  </Link>

</div>


        </div>

      </div>


    </section>
  );
}
