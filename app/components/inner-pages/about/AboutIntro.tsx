import Image from 'next/image';

const stats = [
  { index: "01", number: "40+", label: "Digital launches", tone: "lime" },
  { index: "02", number: "12", label: "Connected disciplines", tone: "dark" },
  { index: "03", number: "06", label: "Markets reached", tone: "dark" },
];

export default function AboutIntro() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f6f6f4]
        px-4
        pb-20
        pt-36
        text-[#17181a]
        sm:px-6
        sm:pb-28
        sm:pt-44
        lg:px-8
        lg:pt-48
        xl:px-10
      "
    >

      <Image
        src="/hero-about.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center] opacity-40 sm:opacity-65 lg:opacity-100"
      />
      <div className="pointer-events-none absolute inset-0 bg-[#f6f6f4]/75 sm:bg-[#f6f6f4]/60 lg:bg-[linear-gradient(90deg,rgba(246,246,244,0.98)_0%,rgba(246,246,244,0.88)_48%,rgba(246,246,244,0.28)_100%)]" />

      {/* Ambient Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-280px]
          top-[-220px]
          hidden
          h-[850px]
          w-[850px]
          bg-[radial-gradient(circle,rgba(140,198,63,.12),transparent_70%)]
          lg:block
        "
      />


      <div className="relative mx-auto max-w-[1920px]">


        {/* HERO */}
        <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_.65fr] lg:gap-8">


          <div data-reveal="left">

            <div
              className="
                flex
                items-center
                gap-3
                font-mono
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-[#8cc63f]
              "
            >

              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-[#8cc63f]
                  shadow-[0_0_16px_#8cc63f]
                "
              />

              NextGen signal / About us

            </div>



            <h1
              className="
                mt-7
                max-w-[1250px]
                text-[clamp(3.2rem,7.4vw,8.6rem)]
                font-syne
                font-semibold
                leading-[0.82]
                tracking-[-0.075em]
              "
            >
              Different minds.

              <span className="mt-2 block text-[#8cc63f]">
                One digital pulse.
              </span>

            </h1>

          </div>


        </div>





        {/* DESCRIPTION */}
        <div
          className="
            mt-12
            grid
            gap-6
            border-t
            border-[#e3e4e1]
            pt-6
            md:grid-cols-[1fr_.72fr]
            lg:mt-16
          "
        >

          <p
            className="
              max-w-[820px]
              text-base
              leading-7
              text-[#6b6f76]
              sm:text-lg
              sm:leading-8
            "
          >
            We are a creative technology studio for brands that refuse to blend in.
            Strategy, identity, interface, motion and code move together here—not as
            separate services, but as one connected system.
          </p>


          <p
            className="
              max-w-[420px]
              font-mono
              text-[10px]
              uppercase
              leading-5
              tracking-[0.16em]
              text-[#6b6f76]
              md:justify-self-end
            "
          >
            Independent in structure.
            <br />
            Collaborative by instinct.
            <br />
            Built for what comes next.
          </p>


        </div>





        {/* STATS */}
        <div
          className="
            mt-12
            grid
            gap-3
            md:grid-cols-12
            lg:mt-16
          "
        >

          {stats.map((stat, i) => (

            <article
              key={stat.label}
              className={`
                flex
                min-h-[220px]
                flex-col
                justify-between
                rounded-[18px]
                border
                p-6

                sm:min-h-[240px]
                sm:p-7

                ${
                  i === 0
                    ? "md:col-span-5"
                    : i === 1
                    ? "md:col-span-3"
                    : "md:col-span-4"
                }

                ${
                  stat.tone === "lime"
                    ? "border-[#8cc63f] bg-[#8cc63f] text-black"
                    : "border-[#e3e4e1] bg-white text-[#17181a]"
                }
              `}
            >

              <div
                className="
                  flex
                  justify-between
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  opacity-50
                "
              >
                <span>/ {stat.index}</span>
                <span>NGD</span>
              </div>



              <div className="flex items-end justify-between gap-4">

                <strong
                  className="
                    font-[family-name:var(--font-syne)]
                    text-5xl
                    font-semibold
                    tracking-[-0.07em]
                    sm:text-6xl
                  "
                >
                  {stat.number}
                </strong>


                <span
                  className="
                    max-w-[130px]
                    text-right
                    text-xs
                    leading-4
                    opacity-60
                  "
                >
                  {stat.label}
                </span>


              </div>


            </article>

          ))}

        </div>


      </div>

    </section>
  );
}
