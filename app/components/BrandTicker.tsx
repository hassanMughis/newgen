const brands = [
  "Alvigha",
  "Laktoza",
  "Glacierdrop",
  "Onedropwater",
  "Fresh Meat Shop",
  "Israr & Sons",
  "Karachi Emerging Youth",
  "Masjid Umar Bin Abdul Aziz",
];

function TickerRow() {
  return (
    <>
      {brands.map((brand) => (
        <span
          key={brand}
          className="flex items-center whitespace-nowrap font-mono text-[14px] uppercase tracking-[3px] text-[#f6f6f4] md:text-[15px]"
        >
          {brand}
          <span aria-hidden="true" className="mx-6 text-[#8cc63f]">
            •
          </span>
        </span>
      ))}
    </>
  );
}

export default function BrandTicker() {
  return (
    <section
      data-reveal="clip"
      aria-label="Selected brands"
      className="w-full overflow-hidden border-y border-black bg-[#17181a] py-5"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1, 2, 3].map((copy) => (
          <div key={copy} aria-hidden={copy > 0} className="flex shrink-0">
            <TickerRow />
          </div>
        ))}
      </div>
    </section>
  );
}
