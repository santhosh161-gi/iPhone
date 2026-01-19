"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { FaPause, FaPlay } from "react-icons/fa";

const slides = [
  {
    img: "/iphone17model.jpg",
    text: "Heat-forged aluminium unibody design for exceptional pro capability.",
  },
  {
    img: "/endframe.jpg",
    text: "A19 Pro, vapour-cooled for lightning-fast performance.",
  },
  {
    img: "/endframe2.jpg",
    text:
      "The ultimate pro camera system. All 48MP Fusion rear cameras. And the longest zoom ever on an iPhone.",
  },
  {
    img: "/endframe3.jpg",
    text:
      "New Center Stage front camera. Flexible ways to frame your shot. Smarter group selfies.",
  },
];

const CARD_WIDTH = 1200;
const GAP = 50;
const AUTOPLAY_DELAY = 4000;

export default function Page() {
  const trackRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  /* AUTOPLAY */
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(interval);
  }, [isPlaying]);

  /* SLIDE ANIMATION */
  useEffect(() => {
    if (!trackRef.current) return;

    gsap.to(trackRef.current, {
      x:
        -(index * (CARD_WIDTH + GAP)) +
        window.innerWidth / 2 -
        CARD_WIDTH / 2,
      duration: 0.9,
      ease: "power3.out",
    });
  }, [index]);

  /* TEXT ANIMATION */
  useEffect(() => {
    const el = textRefs.current[index];
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }
    );
  }, [index]);

  return (
    <div className="bg-black/90 text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative w-full">

        {/* MOBILE IMAGE */}
        <div className="block md:hidden">
          <Image
            src="/iphone_17_pro.jpg"   // 👈 replace later
            alt="iPhone 17 Pro"
            width={1200}
            height={1600}
            className="w-full h-[90vh] object-cover"
            priority
          />
        </div>

        {/* DESKTOP IMAGE */}
        <div className="hidden md:block">
          <Image
            src="/iphone17proimg1.jpg"
            alt="iPhone 17 Pro"
            width={2000}
            height={900}
            className="w-full h-[90vh] object-cover"
            priority
          />
        </div>

        {/* HERO TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 sm:pb-16 md:pb-24 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            iPhone 17 Pro
          </h1>

          <button className="bg-blue-500 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base">
            Buy
          </button>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/80">
            From ₹134900.00* or ₹21650.00/mo. for 6 mo.‡
          </p>
        </div>
      </section>

      {/* ================= HIGHLIGHTS HEADER ================= */}
      <div className="px-6 sm:px-10 md:px-20 mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <h2 className="text-3xl sm:text-4xl md:text-[50px] font-bold">
          Get the highlights.
        </h2>
        <span className="text-blue-500 text-base sm:text-lg underline cursor-pointer">
          Watch the film
        </span>
      </div>

      {/* ================= CAROUSEL ================= */}
      <div className="mt-14 overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-12 sm:gap-20 px-[8vw]"
          style={{ width: slides.length * (CARD_WIDTH + GAP) }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              style={{ width: CARD_WIDTH }}
              className={`relative rounded-3xl bg-black transition-all duration-500 ${
                i === index
                  ? "opacity-100 scale-100"
                  : "opacity-40 scale-95"
              }`}
            >
              {/* TEXT */}
              <p
                ref={(el) => {
                  textRefs.current[i] = el; // Assign the ref
                }}
                className="absolute top-4 sm:top-6  -translate-x-1/2 text-center w-full text-base sm:text-xl md:text-[28px] font-bold px-4 sm:px-10"
              >
                {slide.text}
              </p>

              {/* IMAGE */}
              <div className="h-[350px] sm:h-[450px] md:h-[500px] w-full flex justify-center items-center">
                <Image
                  src={slide.img}
                  alt=""
                  width={1000}
                  height={600}
                  className="h-full object-cover"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CONTROLS ================= */}
      <div className="flex justify-center items-center gap-6 mt-10 mb-20">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full cursor-pointer transition-all ${
                i === index ? "bg-white w-6" : "bg-white/40 w-2"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-white/10 p-3 rounded-full"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>

    </div>
  );
}

