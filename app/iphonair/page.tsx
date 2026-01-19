"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import Image from "next/image";

const slides = [
  { img: "/airendframe.jpg" },
  { img: "/airendframe2.jpg" },
  { img: "/airendframe3.jpg" },
  {
    img: "/airendframe4.jpg",
    text: "A19 Pro chip and all-day battery life. Pro within thin.",
  },
];

const AUTOPLAY_DELAY = 4000;
const GAP = 40;

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);


  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [cardWidth, setCardWidth] = useState(1200);
  const [viewportWidth, setViewportWidth] = useState(0);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

const setTextRef = (index: number) => (el: HTMLParagraphElement | null) => {
  if (el) textRefs.current[index] = el;
};


  /* ▶️ VIDEO AUTOPLAY */
  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  /* 📐 RESPONSIVE WIDTH + VIEWPORT */
  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;
      setViewportWidth(w);

      if (w < 640) setCardWidth(w - 40);
      else if (w < 1024) setCardWidth(700);
      else setCardWidth(1200);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  /* 🔄 AUTOPLAY */
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      AUTOPLAY_DELAY
    );
    return () => clearInterval(timer);
  }, [isPlaying]);

  /* 🎥 SLIDE ANIMATION (GSAP SAFE) */
  useEffect(() => {
    if (!trackRef.current || viewportWidth === 0) return;

    (async () => {
      const gsap = (await import("gsap")).default;

      gsap.to(trackRef.current!, {
        x:
          -(index * (cardWidth + GAP)) +
          viewportWidth / 2 -
          cardWidth / 2,
        duration: 0.9,
        ease: "power3.out",
      });
    })();
  }, [index, cardWidth, viewportWidth]);

  /* 📝 TEXT ANIMATION (GSAP SAFE) */
  useEffect(() => {
    const text = textRefs.current[index];
    if (!text) return;

    (async () => {
      const gsap = (await import("gsap")).default;

      gsap.fromTo(
        text,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    })();
  }, [index]);

  return (
    <div className="bg-[#f5f5f7] overflow-hidden">
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* MOBILE IMAGE */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/iphone_airsm.jpg"
            alt="iPhone Air"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* VIDEO */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          muted
          playsInline
          autoPlay
          loop
        >
          <source src="/medium_2x.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-between text-center py-16">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-black">
              iPhone Air
            </h1>
            <p className="mt-3 text-lg sm:text-2xl text-black/80 max-w-xl mx-auto px-4">
              The thinnest iPhone ever. With the power of Pro inside.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <button className="bg-black text-white px-8 py-3 rounded-full">
              Shop Now
            </button>
            <p className="text-black/70 text-sm">
              From ₹119900.00* or ₹19150.00/mo‡
            </p>
          </div>
        </div>
      </section>

      {/* TITLE */}
      <div className="px-6 sm:px-12 lg:px-20 mt-20 flex justify-between items-center">
        <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold">
          Get the highlights.
        </h2>
        <span className="text-blue-500 underline cursor-pointer hidden sm:block">
          Watch the film
        </span>
      </div>

      {/* CAROUSEL */}
      <div className="mt-14 overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-10 px-[5vw]"
          style={{ width: slides.length * (cardWidth + GAP) }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              style={{ width: cardWidth }}
              className={`relative rounded-3xl bg-white transition-all ${
                i === index ? "opacity-100 scale-100" : "opacity-40 scale-95"
              }`}
            >
              {slide.text && (
                <p
                  ref={setTextRef(i)}
                  className="absolute top-6 left-1/2 -translate-x-1/2 text-center text-lg sm:text-xl lg:text-2xl font-bold px-6"
                >
                  {slide.text}
                </p>
              )}

              <div className="h-[300px] sm:h-[450px] lg:h-[600px] flex justify-center items-center">
                <Image
                  src={slide.img}
                  alt=""
                  width={1200}
                  height={600}
                  priority
                  className="h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex justify-center items-center gap-6 mt-10 mb-20">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full cursor-pointer transition-all ${
                i === index ? "w-6 bg-black" : "w-2 bg-black/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-black/10 p-3 rounded-full"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
}

