export default function BrandTicker() {

  const items = [
    "BRANDING",
    "UI/UX",
    "WEB DESIGN",
    "MOTION",
    "DIGITAL EXPERIENCES",
    "CREATIVE DIRECTION"
  ];


  const ticker = (
    <>
      {items.map((item, index) => (
        <span
          key={index}
          className="
            flex
            items-center
            whitespace-nowrap
            font-mono
            text-[14px]
            md:text-[15px]
            tracking-[3px]
            uppercase
            text-[#BDFE00]
          "
        >
          {item}
          <span className="mx-6">
            ✦
          </span>
        </span>
      ))}
    </>
  );


  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-black
        border-y
        border-[#1A1A1A]
        py-5
      "
    >

      <div className="flex w-max animate-marquee">

        {/* Repeat multiple times */}
        <div className="flex shrink-0">
          {ticker}
        </div>

        <div className="flex shrink-0">
          {ticker}
        </div>

        <div className="flex shrink-0">
          {ticker}
        </div>

        <div className="flex shrink-0">
          {ticker}
        </div>

      </div>

    </section>
  );
}