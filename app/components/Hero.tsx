import ThreeAnimation from './ThreeAnimation';

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">

      <ThreeAnimation />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />


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

        <div className="text-center w-full px-4 sm:px-6">


          {/* Main Heading */}
          <h1
            className="
              font-syne
              font-black
              leading-[0.9]
              tracking-[-0.06em]
            "
            style={{
              fontSize: "clamp(1.9rem, 9vw, 8rem)"
            }}
          >

            <span className="hero-glitch-line block text-[#E2E2E2]" data-text="Creativity">
              Creativity
            </span>

            <span className="hero-glitch-line block text-[#E2E2E2]" data-text="Meets">
              Meets
            </span>

            <span className="hero-glitch-line block text-[#ADF531]" data-text="Results.">
              Results.
            </span>

          </h1>



          {/* Description */}
          <p
            className="hero-support-copy
              mx-auto
              mt-6
              max-w-[750px]
              font-sans
              text-[#A5A5A5]
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
    mt-12
    flex
    justify-center
    items-center
    gap-6
    flex-col
    sm:flex-row
  "
>

  {/* Primary Button */}
  <button
    className="
      w-[174px]
      h-[52px]
      bg-[#BDFE00]
      text-black
      font-mono
      text-[12px]
      tracking-[2px]
      uppercase
      transition-all
      duration-300
      hover:bg-[#a9e600]
      hover:shadow-[0_0_25px_rgba(189,254,0,0.35)]
    "
  >
    Explore Work
  </button>



  {/* Outline Button */}
  <button
    className="
      w-[184px]
      h-[52px]
      bg-transparent
      border
      border-[#252525]
      text-[#C5C5C5]
      font-mono
      text-[12px]
      tracking-[2px]
      uppercase
      transition-all
      duration-300
      hover:border-[#BDFE00]
      hover:text-[#BDFE00]
    "
  >
    Start Project
  </button>

</div>


        </div>

      </div>


    </section>
  );
}
