import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#090a0a]">
      <Image
        src="/hero-home-dark-mobile.png"
        alt=""
        fill
        priority
        sizes="(max-width: 639px) 100vw, 1px"
        className="object-cover object-center sm:hidden"
      />
      <Image
        src="/hero-home-dark-desktop.png"
        alt=""
        fill
        priority
        sizes="(min-width: 640px) 100vw, 1px"
        className="hidden object-cover object-center sm:block"
      />

      {/* A restrained veil keeps the centered copy crisp over the dark artwork. */}
      <div className="absolute inset-0 bg-black/10" />


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

            <span className="hero-glitch-line block whitespace-nowrap text-[#f6f6f4]" data-text="Creativity Meets">
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
              text-white/65
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
      bg-[#f6f6f4]
      text-[#17181a]
      font-mono
      text-[12px]
      tracking-[2px]
      uppercase
      transition-all
      duration-300
      hover:bg-white
      hover:shadow-[0_0_30px_rgba(246,246,244,0.18)]
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
      text-[#8cc63f]
      font-mono
      text-[12px]
      tracking-[2px]
      uppercase
      transition-all
      duration-300
      hover:border-[#7eb238]
      hover:bg-[#8cc63f]
      hover:text-[#090a0a]
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
