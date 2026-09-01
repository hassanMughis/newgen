"use client";

import { useState } from "react";

export default function PartnersSection() {
  const [activeBrand, setActiveBrand] = useState<number | null>(null);

  const brands = [
    {
      name: "Partner Logo 01",
      logo: "/LOGO - 0 1 1.png",
    },
    {
      name: "Partner Logo 02",
      logo: "/LOGO (2) 1.png",
    },
    {
      name: "Partner Logo 03",
      logo: "/IMG_1981 1.png",
    },
    {
      name: "Partner Logo 04",
      logo: "/IMG_4391 (1) 1.png",
    },
    {
      name: "Fresh Meat Shop",
      logo: "/Fresh Meat Shop 1.png",
    },
    {
      name: "Partner Logo 06",
      logo: "/0034 - Copy 1.png",
    },
    {
      name: "BOYA 2025",
      logo: "/BOYA 2025  LOGO (1).pdf 1.png",
    },
    {
      name: "TAI",
      logo: "/TAI_Logo_WM1 1.png",
    },
    {
      name: "Muhammadi Masjid",
      logo: "/Muhammadi Masjid LOGO PNG 1 (1).png",
    },
    {
      name: "Masjid Abdul Rehman Makki",
      logo: "/Masjid Abdul Rehman Makki LOGO PNG 1 (1).png",
    },
    {
      name: "Partner Logo 11",
      logo: "/logo (1) 1 (1).png",
    },
    {
      name: "Key",
      logo: "/Key-01 1 (1).png",
    },
    {
      name: "Partner Logo 13",
      logo: "/IMG_2944 1 (1).png",
    },
    {
      name: "Bayat-ul-Quran",
      logo: "/Bayat-ul-quran 06 1 (1).png",
    },
    {
      name: "Al Azeez",
      logo: "/Al Azeez Logo PNG 1 (1).png",
    },
    {
      name: "Partner Logo 16",
      logo: "/2323 1 (1).png",
    },
    {
      name: "Partner Logo 17",
      logo: "/2024_04_19_13_25_IMG_2805 1 (1).png",
    },
    {
      name: "Partner Logo 18",
      logo: "/2022_09_08_00_28_IMG_8649 1 (1).png",
    },
    {
      name: "A&S Apparel",
      logo: "/A&S Apparel 1.png",
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


          {brands.map((brand, index)=>(
            <button
              type="button"
              key={brand.name}
              data-cursor="focus"
              aria-label={`Show ${brand.name} in color`}
              aria-pressed={activeBrand === index}
              onClick={() => setActiveBrand((current) => current === index ? null : index)}
              className="
                partner-logo-card
                aspect-[6/5]
                rounded-[20px]
                bg-[#0D0D0D]
                flex
                items-center
                justify-center
                p-10
                md:p-8
                group
                transition-all
                duration-300
                hover:bg-[#111111]
              "
              data-active={activeBrand === index ? "true" : "false"}
            >

              <img
                src={brand.logo}
                alt={brand.name}
                className="
                  partner-logo
                  w-full
                  h-full
                  max-w-[210px]
                  max-h-[85px]
                  md:max-w-[280px]
                  md:max-h-[120px]
                  object-contain
                  transition-all
                  duration-300
                "
              />

            </button>
          ))}


        </div>


      </div>


    </section>
  );
}
