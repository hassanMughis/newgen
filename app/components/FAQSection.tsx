'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is included in a full brand identity project?',
      answer:
        'A complete brand identity includes logo systems, typography, color palettes, visual elements, messaging frameworks, & detailed brand guidelines — all designed to ensure clarity, consistency, & recognition across every digital and physical platform your brand appears on.',
    },
    {
      question: 'How long does a brand identity project take?',
      answer:
        'A comprehensive brand sprint typically spans 3 to 6 weeks from initial discovery audit to final asset handoff, depending on the scope of deliverables, custom 3D elements, and iteration rounds.',
    },
    {
      question: 'Can you help with rebranding an existing business?',
      answer:
        'Yes. We specialize in strategic repositioning and modern brand overhauls. We audit what currently works, refine your value proposition, and re-engineer your visual and digital presence for high-growth scalability.',
    },
    {
      question: 'Do you provide brand strategy as well as design?',
      answer:
        'Absolutely. Authentic design is built on solid strategy. We analyze your competitive landscape, define audience personas, craft messaging pillars, and align creative execution directly with your revenue and market goals.',
    },
    {
      question: 'Will my brand system scale as my business grows?',
      answer:
        'Every design system, code architecture, and brand asset we build is engineered with modular scalability. You receive future-proof component guidelines, export kits, and design files built to expand seamlessly with new products and channels.',
    },
    {
      question: 'Is my data and project confidentiality secure?',
      answer:
        'We uphold strict confidentiality and NDA agreements for all client roadmaps, proprietary data, and unreleased product strategies, with enterprise-grade data handling practices.',
    },
  ];


  return (
    <section
      id="faq"
      className="
        relative 
        bg-black 
        text-white 
        py-24 
        sm:py-32 
        overflow-hidden
      "
    >

      <div className="
        absolute 
        inset-0 
        bg-[radial-gradient(ellipse_at_bottom,_rgba(173,245,49,0.05),_transparent_70%)] 
        pointer-events-none
      "/>


      <div className="
        mx-auto 
        w-full 
        max-w-[1920px] 
        px-4 
        sm:px-6 
        lg:px-8 
        xl:px-10
      ">


        {/* TOP IMAGES */}
        <div data-reveal="zoom" data-reveal-stagger className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-6 
          sm:gap-8 
          mb-20 
          sm:mb-28
        ">

          <div className="
            relative 
            aspect-[4/3] 
            sm:aspect-[16/10] 
            rounded-[24px] 
            overflow-hidden 
            bg-[#121316] 
            border 
            border-white/10 
            shadow-2xl 
            group
          ">
            <img
              src="/liquid-chrome.jpg"
              alt="Design Sprint"
              className="
                w-full 
                h-full 
                object-cover 
                transition-transform 
                duration-700 
                group-hover:scale-105
              "
            />

            <div className="
              absolute 
              inset-0 
              bg-gradient-to-t 
              from-black/60 
              via-transparent 
              to-transparent
            "/>

          </div>


          <div className="
            relative 
            aspect-[4/3] 
            sm:aspect-[16/10] 
            rounded-[24px] 
            overflow-hidden 
            bg-[#121316] 
            border 
            border-white/10 
            shadow-2xl 
            group
          ">

            <img
              src="/do-something.jpg"
              alt="Creative Strategy"
              className="
                w-full 
                h-full 
                object-cover 
                transition-transform 
                duration-700 
                group-hover:scale-105
              "
            />

            <div className="
              absolute 
              inset-0 
              bg-gradient-to-t 
              from-black/60 
              via-transparent 
              to-transparent
            "/>

          </div>

        </div>



        {/* FAQ GRID */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.85fr_1.25fr]
            gap-10
            lg:gap-16
            items-start
          "
        >


          {/* LEFT CONTENT */}

          <div data-reveal="left" className="lg:sticky lg:top-20">


            <div className="
              mb-4 
              inline-flex 
              items-center 
              gap-2.5 
              rounded-full 
              bg-[#ADF531]/10 
              border 
              border-[#ADF531]/30 
              px-4 
              py-1.5
            ">

              <span className="relative flex h-2 w-2">
                <span className="
                  animate-ping 
                  absolute 
                  inline-flex 
                  h-full 
                  w-full 
                  rounded-full 
                  bg-[#ADF531] 
                  opacity-75
                "/>

                <span className="
                  relative 
                  inline-flex 
                  rounded-full 
                  h-2 
                  w-2 
                  bg-[#ADF531]
                "/>

              </span>


              <span className="
                font-mono 
                text-[11px] 
                font-bold 
                uppercase 
                tracking-[2px] 
                text-[#ADF531]
              ">
                GOT QUESTIONS?
              </span>

            </div>


            <h2 className="
              font-[family-name:var(--font-syne)] 
              font-semibold
              text-white 
              text-[1.95rem] 
              sm:text-[2.4rem] 
              md:text-[3.8rem] 
              lg:text-[4.5rem] 
              xl:text-[5.4rem] 
              tracking-tight 
              leading-[0.9]
            ">
              Frequently
              Asked
              Questions
            </h2>


            <p className="
              mt-6 
              max-w-md 
              text-white/50 
              text-sm 
              sm:text-base 
              leading-relaxed
            ">
              Everything you need to know about our end-to-end design sprints,
              technical frameworks, and digital scalability.
            </p>


          </div>





          {/* RIGHT ACCORDION */}

          <div data-reveal="right" className="space-y-3 sm:space-y-3.5">

          {faqs.map((faq,index)=>{

            const number = String(index+1).padStart(2,'0');
            const isOpen = openIndex === index;


            return (

              <div
                key={faq.question}
                className={`
                  overflow-hidden 
                  rounded-[6px] 
                  border-2 
                  transition-colors 
                  duration-300 
                  ${
                  isOpen
                  ?
                  'border-[#ADF531] bg-[#0d0f0a]'
                  :
                  'border-[#ADF531]/55 bg-[#080a05]'
                  }
                `}
              >


                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(
                      openIndex === index ? null : index
                    )
                  }
                  className="flex w-full text-left"
                >


                  <div className="
                    flex-1 
                    flex 
                    items-center 
                    gap-5 
                    px-5 
                    sm:px-7 
                    py-5
                  ">


                    <span className="
                      font-[family-name:var(--font-syne)]
                      text-[#ADF531]
                      font-black
                    ">
                      {number}
                    </span>


                    <h3 className="
                      font-[family-name:var(--font-syne)]
                      font-bold
                      text-[15px]
                      sm:text-[17px]
                    ">
                      {faq.question}
                    </h3>


                  </div>


                  <span className="
                    w-16 
                    flex 
                    items-center 
                    justify-center 
                    bg-[#ADF531]
                    text-black
                    text-3xl
                  ">
                    {isOpen ? '−':'+'}
                  </span>


                </button>


                <AnimatePresence>

                {isOpen && (

                  <motion.div
                    initial={{
                      height:0,
                      opacity:0
                    }}
                    animate={{
                      height:'auto',
                      opacity:1
                    }}
                    exit={{
                      height:0,
                      opacity:0
                    }}
                  >

                   <p className="
  px-5
  sm:px-7
  pt-5
  pb-7
  pl-[4.5rem]
  sm:pl-[5.5rem]
  max-w-[90%]
  text-white/60
  text-sm
  sm:text-[15px]
  leading-[1.75]
">
  {faq.answer}
</p>


                  </motion.div>

                )}

                </AnimatePresence>


              </div>

            )

          })}


          </div>


        </div>


      </div>

    </section>
  );
}
