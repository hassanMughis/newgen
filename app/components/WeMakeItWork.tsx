'use client';

import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";

import {
  useEffect,
  useRef,
  useState
} from "react";

export default function WeMakeItWork() {
  const NAV_HEIGHT = 68;

  const words = [
    "WHAT'S NEXT",
    "BUILD WHAT'S NEXT",
    "NEXT GEN"
  ];

  const [index, setIndex] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  const videoSectionRef = useRef(null);

  /* =========================
     VIEWPORT HEIGHT
  ========================== */

  useEffect(() => {
    const updateViewport = () => {
      setViewportHeight(window.innerHeight);
    };

    updateViewport();

    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  /* =========================
     TEXT ROTATION
  ========================== */

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const renderText = (text: string) => {
    return text.split(/(NEXT)/g).map((part: string, i: number) =>
      part === "NEXT" ? (
        <span
          key={i}
          className="text-[#ADF531]"
        >
          {part}
        </span>
      ) : (
        <span key={i}>
          {part}
        </span>
      )
    );
  };

  /* =========================
     SCROLL PROGRESS
  ========================== */

  const { scrollYProgress } = useScroll({
    target: videoSectionRef,
    offset: ["start start", "end end"]
  });

  // Smooth out abrupt wheel and trackpad input before it reaches the video.
  // A softer spring lets the card expand steadily even when scroll progress
  // changes by a large amount in a single frame.
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 18,
    mass: 0.9,
    restDelta: 0.0005
  });

  /* =========================
     VIDEO WIDTH
  ========================== */

  const width = useTransform(
    smoothScrollProgress,
    [0, 0.78],
    ["38vw", "100vw"]
  );

  /* =========================
     VIDEO HEIGHT
  ========================== */

  const smallHeight =
    viewportHeight > 0
      ? viewportHeight * 0.38
      : 300;

  const fullHeight =
    viewportHeight > 0
      ? viewportHeight - NAV_HEIGHT
      : 700;

  const height = useTransform(
    smoothScrollProgress,
    [0, 0.78],
    [smallHeight, fullHeight]
  );

  /* =========================
     NAVBAR ADJUSTMENT
  ========================== */

  const videoY = useTransform(
    smoothScrollProgress,
    [0, 0.78],
    [0, NAV_HEIGHT / 2]
  );

  /* =========================
     ORIGINAL TILT
  ========================== */

  const rotateZ = useTransform(
    smoothScrollProgress,
    [0, 0.7],
    [11, 0]
  );

  const rotateX = useTransform(
    smoothScrollProgress,
    [0, 0.7],
    [8, 0]
  );

  const rotateY = useTransform(
    smoothScrollProgress,
    [0, 0.7],
    [-18, 0]
  );

  return (
    <>
      {/* =========================
          TEXT SECTION
      ========================== */}

      <section
        className="
          relative
          z-20
          bg-black
          min-h-[24vh]
          flex
          items-center
          px-6
          md:px-[60px]
          overflow-visible
        "
      >
        <AnimatePresence mode="wait">
          <motion.h2
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -30
            }}
            transition={{
              duration: 0.45,
              ease: [0.76, 0, 0.24, 1]
            }}
            className="
              font-syne
              font-black
              uppercase
              leading-[1.05]
              tracking-[-0.06em]
              text-[#E2E2E2]
            "
            style={{
              fontSize:
                "clamp(1.4rem, 7vw, 4.8rem)"
            }}
          >
            {renderText(words[index])}
          </motion.h2>
        </AnimatePresence>
      </section>

      {/* =========================
          VIDEO SCROLL SECTION
      ========================== */}

      <section
        ref={videoSectionRef}
        className="
          relative
          h-[240vh]
          bg-black
          -mt-[10vh]
        "
      >
        {/* =========================
            PINNED VIEWPORT
        ========================== */}

        <div
          className="
            sticky
            top-0
            h-screen
            w-full
            overflow-hidden
            flex
            items-center
            justify-center
          "
          style={{
            perspective: "900px"
          }}
        >
          {/* =========================
              VIDEO CARD
          ========================== */}

          <motion.div
            style={{
              width,
              height,

              y: videoY,

              rotateZ,
              rotateX,
              rotateY,

              transformStyle: "preserve-3d",
              transformOrigin: "center center"
            }}
            className="
              relative
              overflow-hidden
              bg-[#111]
              shadow-2xl
              will-change-transform
            "
          >
            <video
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
              "
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src="/your-video.mp4"
                type="video/mp4"
              />
            </video>

            <div
              className="
                absolute
                inset-0
                bg-black/10
                pointer-events-none
              "
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
