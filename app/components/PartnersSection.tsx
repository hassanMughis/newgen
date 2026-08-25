export default function PartnersSection() {

  const brands = [
    {
      name: "Iron Claw Revenue",
      logo: "/brands/iron-claw.svg",
    },
    {
      name: "Anglatin Travel",
      logo: "/brands/anglatin.svg",
    },
    {
      name: "Instinctive Health",
      logo: "/brands/instinctive-health.svg",
    },
    {
      name: "Marquis Jewelers",
      logo: "/brands/marquis.svg",
    },
    {
      name: "French 75 Apparel",
      logo: "/brands/french75.svg",
    },
    {
      name: "Vytis Tours",
      logo: "/brands/vytis.svg",
    },
    {
      name: "Broward Housing Solutions",
      logo: "/brands/broward.svg",
    },
    {
      name: "Shey's Laser",
      logo: "/brands/sheys.svg",
    },
  ];


  return (
    <section
      className="
        bg-[#050505]
        overflow-hidden
      "
    >


      {/* TITLE STRIP */}

      <div
        className="
          relative
          h-[220px]
          overflow-hidden
          flex
          items-center
        "
      >

        <div
          className="
            absolute
            flex
            w-max
            items-center
            animate-marquee
            whitespace-nowrap
            text-[#3A3A3A]
            font-[family-name:var(--font-syne)]
            font-light
            uppercase
            text-[80px]
            sm:text-[100px]
            lg:text-[120px]
          "
        >

          {[0, 1, 2, 3].map((copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center gap-12 pr-12"
              aria-hidden={copy > 0}
            >
              <span>{"\u2726"}</span>
              <span>Our Partners</span>
              <span>{"\u2726"}</span>
              <span>Our Partners</span>
            </div>
          ))}

        </div>


      </div>





      {/* LOGO GRID */}

      <div
        className="
          w-full
          px-4
          sm:px-6
          lg:px-8
          xl:px-10
          pb-32
        "
      >

        <div
          data-reveal="zoom"
          data-reveal-stagger
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            xl:grid-cols-4
            gap-5
            lg:gap-6
          "
        >


          {brands.map((brand)=>(
            <div
              key={brand.name}
              className="
                h-[200px]
                sm:h-[220px]
                rounded-[20px]
                bg-[#0D0D0D]
                flex
                items-center
                justify-center
                p-10
                group
                transition-all
                duration-300
                hover:bg-[#111111]
              "
            >

              <img
                src={brand.logo}
                alt={brand.name}
                className="
                  max-w-[220px]
                  max-h-[90px]
                  object-contain
                  opacity-60
                  grayscale
                  transition-all
                  duration-300
                  group-hover:opacity-100
                  group-hover:grayscale-0
                  group-hover:scale-105
                "
              />

            </div>
          ))}


        </div>


      </div>


    </section>
  );
}
