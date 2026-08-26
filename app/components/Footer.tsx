import Link from 'next/link';

type FooterProps = {
  showCta?: boolean;
};

export default function Footer({ showCta = true }: FooterProps) {

  const navLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];


  const socials = [
    {
      name: "Social 1",
      icon: "/Vector.svg"
    },
    {
      name: "Social 2",
      icon: "/Vector-1.svg"
    },
    {
      name: "Social 3",
      icon: "/Vector-2.svg"
    },
    {
      name: "Social 4",
      icon: "/Vector-3.svg"
    }
  ];


  return (
    <footer
      className="
        relative
        bg-[#050505]
        text-white
        overflow-hidden
      "
    >

      {/* CTA SECTION */}

      {showCta && (
      <section
        className="
          relative
          min-h-[800px]
          flex
          items-center
          justify-center
        "
      >

        {/* Glow */}

        <div
          className="
            absolute
            left-1/2
            top-[120px]
            -translate-x-1/2
            w-[650px]
            h-[450px]
            rounded-full
            bg-[#0b470c]
            opacity-50
            blur-[170px]
          "
        />


        {/* Rings */}

        {[820,680,520,360,230].map((size,index)=>(
          <div
            key={size}
            className="
              absolute
              left-1/2
              -translate-x-1/2
              rounded-full
              border
              border-white/10
            "
            style={{
              width:size,
              height:size,
              top:[
                0,
                60,
                130,
                210,
                280
              ][index]
            }}
          />
        ))}



        {/* CONTENT */}

        <div
          data-reveal="zoom"
          data-reveal-stagger
          className="
            relative
            z-10
            max-w-[1200px]
            px-6
            text-center
          "
        >

          <h2
            className="
              font-[family-name:var(--font-syne)]
              font-extrabold
              text-white
              text-5xl
              sm:text-6xl
              lg:text-7xl
              leading-[1.05]
              tracking-tight
            "
          >
            Build what&apos;s next
            <br />
            with NextGen
          </h2>



          <img
            src="/Vector 2.svg"
            alt=""
            className="
              mx-auto
              mt-8
              w-[260px]
            "
          />



          <p
            className="
              mt-8
              mx-auto
              max-w-[650px]
              text-[#CAC6DD]
              text-base
              sm:text-xl
              leading-relaxed
            "
          >
            Bring us the ambitious idea. We&apos;ll turn it into a sharp,
            scalable digital experience built to move your brand forward.
          </p>



          <Link
            href="/contact"
            className="
              mt-8
              inline-flex
              items-center
              justify-center
              gap-2.5
              bg-[#ADF531]
              text-black
              font-mono
              text-[12px]
              sm:text-[13.5px]
              font-bold
              tracking-[2px]
              uppercase
              h-[54px]
              sm:h-[60px]
              px-8
              sm:px-9
              transition-all
              duration-300
              hover:bg-[#c4ff3e]
              hover:shadow-[0_0_35px_rgba(173,245,49,0.45)]
              hover:-translate-y-0.5
            "
          >
            Get Started Today

            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>

          </Link>


        </div>

      </section>
      )}







      {/* FOOTER BAR */}

      <div
        className="
          relative
          z-20
          w-full
          px-4
          sm:px-6
          lg:px-8
          xl:px-10
          pb-8
        "
      >

        <div className="w-full">


          {/* TOP BAR */}

          <div
            className="
              border-b
              border-white/10
              flex
              items-center
              justify-between
            "
          >

            <img
              src="/ngt-logo-cropped.png"
              alt="NextGen Digitals"
              className="
                h-12
                w-auto
                object-contain
              "
            />



            <nav
              className="
                hidden
                md:flex
              "
            >

              {navLinks.map((link)=>(
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                    px-6
                    py-8
                    text-xs
                    uppercase
                    tracking-[1px]
                    text-[#CAC6DD]
                    transition
                    hover:text-[#ADF531]
                  "
                >
                  {link.name}
                </Link>
              ))}

            </nav>

          </div>







          {/* LOWER BAR */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-between
              gap-6
              pt-6
            "
          >

            <p
              className="
                text-sm
                text-[#CAC6DD]
              "
            >
              © {new Date().getFullYear()} NextGen Digitals. All rights reserved
            </p>





            {/* SOCIAL ICONS */}

            <div
              className="
                flex
                gap-4
              "
            >

              {socials.map((social)=>(
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="
                    h-10
                    w-10
                    rounded-full
                    bg-[#15301E]
                    flex
                    items-center
                    justify-center
                    transition
                    hover:bg-[#ADF531]
                  "
                >

                  <img
                    src={social.icon}
                    alt={social.name}
                    className="
                      w-4
                      h-4
                      object-contain
                    "
                  />

                </a>
              ))}

            </div>


          </div>


        </div>


      </div>


    </footer>
  );
}
