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
  const [windowWidth, setWindowWidth] = useState(0); // ✅ SAFE

const setTextRef = (index: number) => (el: HTMLParagraphElement | null) => {
  if (el) textRefs.current[index] = el;
};


  /* ✅ WINDOW WIDTH (SAFE) */
  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  /* ▶ AUTOPLAY */
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      AUTOPLAY_DELAY
    );
    return () => clearInterval(interval);
  }, [isPlaying]);

  /* 🎞 SLIDE ANIMATION (NO window) */
  useEffect(() => {
    if (!trackRef.current || windowWidth === 0) return;

    gsap.to(trackRef.current, {
      x:
        -(index * (CARD_WIDTH + GAP)) +
        windowWidth / 2 -
        CARD_WIDTH / 2,
      duration: 0.9,
      ease: "power3.out",
    });
  }, [index, windowWidth]);

  /* 📝 TEXT ANIMATION */
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
        <div className="block md:hidden">
          <Image
            src="/iphone_17_pro.jpg"
            alt="iPhone 17 Pro"
            width={1200}
            height={1600}
            className="w-full h-[90vh] object-cover"
            priority
          />
        </div>

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

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            iPhone 17 Pro
          </h1>
          <button className="bg-blue-500 px-8 py-3 rounded-full font-semibold">
            Buy
          </button>
          <p className="mt-4 text-white/80">
            From ₹134900.00* or ₹21650.00/mo.‡
          </p>
        </div>
      </section>

      {/* ================= CAROUSEL ================= */}
      <div className="mt-20 overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-20 px-[8vw]"
          style={{ width: slides.length * (CARD_WIDTH + GAP) }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              style={{ width: CARD_WIDTH }}
              className={`relative rounded-3xl transition-all ${
                i === index ? "opacity-100 scale-100" : "opacity-40 scale-95"
              }`}
            >
              <p
                ref={setTextRef(i)}
                className="absolute top-6 w-full text-center text-xl md:text-2xl font-bold px-8"
              >
                {slide.text}
              </p>

              <div className="h-[500px] flex justify-center items-center">
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
      <div className="flex justify-center items-center gap-6 mt-12 mb-20">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full cursor-pointer ${
                i === index ? "w-6 bg-white" : "w-2 bg-white/40"
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


