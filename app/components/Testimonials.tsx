'use client';

import React from 'react';

type Review = {
  name: string;
  role: string;
  avatar: string;
  testimonial: string;
};

const reviewsRow1: Review[] = [
  {
    name: 'Michael Turner',
    role: 'Owner, Urban Apparel',
    avatar: 'https://i.pravatar.cc/150?img=12',
    testimonial:
      'Our digital store feels smoother, cleaner, and far more professional after the redesign. Sales increased within weeks, and customer engagement improved. NextGen truly knows what they\'re doing.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Founder, Bloom Avenue',
    avatar: 'https://i.pravatar.cc/150?img=47',
    testimonial:
      'Our brand finally feels modern, consistent, and polished. The redesign brought clarity to our message, and customers are responding better than ever. NextGen exceeded every expectation.',
  },
  {
    name: 'Daniel Roberts',
    role: 'CEO, PeakTech Solutions',
    avatar: 'https://i.pravatar.cc/150?img=60',
    testimonial:
      'Our new website is faster, sharper, and much easier for users to navigate. We saw immediate improvement in leads and overall engagement. NextGen delivered exceptional quality from start to finish.',
  },
  {
    name: 'Laura Mitchell',
    role: 'Managing Director, Veloce Studio',
    avatar: 'https://i.pravatar.cc/150?img=32',
    testimonial:
      'We got a complete high-performance platform, and it works flawlessly with custom animations and an incredible user experience for our global audience.',
  },
  {
    name: 'Jason Clarke',
    role: 'VP Product, Synthetix Media',
    avatar: 'https://i.pravatar.cc/150?img=68',
    testimonial:
      'Branding and 3D visual work was outstanding; they captured our vision with sharp precision and engineered an identity that commands authority in our industry.',
  },
];

const reviewsRow2: Review[] = [
  {
    name: 'Carlos Ramirez',
    role: 'E-Commerce Owner',
    avatar: 'https://i.pravatar.cc/150?img=11',
    testimonial:
      'The redesign improved our website speed, structure, and overall user experience. Customers are staying longer and converting more. NextGen gave our business a fresh, premium feel.',
  },
  {
    name: 'Alicia Gomez',
    role: 'Owner, Radiant Beauty Co.',
    avatar: 'https://i.pravatar.cc/150?img=26',
    testimonial:
      'Our website looks cleaner, faster, and far more polished after the redesign. Customers find it easier to explore our products, and sales have noticeably increased. NextGen delivered exceptional work.',
  },
  {
    name: 'Kevin Lawson',
    role: 'Head of Growth, Strata Dynamics',
    avatar: 'https://i.pravatar.cc/150?img=53',
    testimonial:
      'Digital strategy and sprint velocity were top-tier. Their custom interactive coding and clean design system made scaling across multiple channels seamless.',
  },
  {
    name: 'Emily Harper',
    role: 'Creative Lead, Nexus Studio',
    avatar: 'https://i.pravatar.cc/150?img=44',
    testimonial:
      'From kickoff to deployment, everything felt rigorous, fluid, and result-driven. The 3D elements and snappy Next.js performance blew our leadership team away.',
  },
  {
    name: 'Andrew Cole',
    role: 'Founder, Apex Labs',
    avatar: 'https://i.pravatar.cc/150?img=15',
    testimonial:
      'Our online positioning improved massively after the brand relaunch. Engagement metrics have broken all internal records month over month.',
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className="
        w-[340px] sm:w-[380px] md:w-[420px]
        shrink-0
        bg-[#ADF531]
        rounded-[20px] sm:rounded-[24px]
        p-6 sm:p-7
        flex flex-col gap-4
        shadow-[0_8px_32px_rgba(173,245,49,0.18)]
        border border-[#c8ff3e]/30
      "
    >
      {/* Top Row: Avatar + Name/Role + Quote Icon */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-black/15 flex-shrink-0"
          />
          <div>
            <p className="font-sans font-bold text-black text-[15px] sm:text-[17px] leading-tight">
              {review.name}
            </p>
            <p className="font-sans text-black/70 text-[12px] sm:text-[13px] leading-tight mt-0.5">
              {review.role}
            </p>
          </div>
        </div>

        {/* Quote SVG icon – black version */}
        <img
          src="/quote-icon.svg"
          alt="quote"
          className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 opacity-80"
          style={{ filter: 'brightness(0)' }}
        />
      </div>

      {/* Testimonial Text */}
      <p className="font-sans text-black/90 text-[13.5px] sm:text-[14.5px] leading-[1.65] font-normal">
        {review.testimonial}
      </p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative bg-black text-white py-24 sm:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(173,245,49,0.06),_transparent_70%)] pointer-events-none" />

      {/* Section Header */}
      <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-8 xl:px-10 text-center mb-14 sm:mb-16">
        <h2 className="font-syne font-black text-white text-[2.4rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[5rem] tracking-tight leading-none mb-4">
          Built With Care. <span className="text-[#ADF531]">Trusted By</span> Brands.
        </h2>
        <p className="font-sans text-[#a0a0a0] text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal">
          Our clients share their real experiences partnering with NextGen Digital — driving measurable ROI, avant-garde design, and high-impact digital growth.
        </p>
      </div>

      {/* Marquee Row 1 — Left */}
      <div className="relative overflow-hidden w-full mb-5 sm:mb-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-black via-black/80 to-transparent" />

        <div className="flex w-max animate-marquee-left gap-4 sm:gap-5">
          <div className="flex gap-4 sm:gap-5 shrink-0">
            {reviewsRow1.map((rev, i) => (
              <ReviewCard key={`r1-a-${i}`} review={rev} />
            ))}
          </div>
          <div className="flex gap-4 sm:gap-5 shrink-0">
            {reviewsRow1.map((rev, i) => (
              <ReviewCard key={`r1-b-${i}`} review={rev} />
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Row 2 — Right */}
      <div className="relative overflow-hidden w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-black via-black/80 to-transparent" />

        <div className="flex w-max animate-marquee-right gap-4 sm:gap-5">
          <div className="flex gap-4 sm:gap-5 shrink-0">
            {reviewsRow2.map((rev, i) => (
              <ReviewCard key={`r2-a-${i}`} review={rev} />
            ))}
          </div>
          <div className="flex gap-4 sm:gap-5 shrink-0">
            {reviewsRow2.map((rev, i) => (
              <ReviewCard key={`r2-b-${i}`} review={rev} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}