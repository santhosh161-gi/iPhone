"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Page = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {});
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white flex items-center justify-center">

      {/* ================= MOBILE IMAGE ================= */}
      <div className="absolute inset-0 block md:hidden">
        <Image
          src="/iphone_16esm.jpg" // 👈 mobile image
          alt="iPhone 16e"
          width={1200}
          height={1600}
          priority
          className="w-full h-full object-contain"
        />
      </div>

      {/* ================= DESKTOP VIDEO ================= */}
      <video
        ref={videoRef}
        className="hidden md:block absolute inset-0 w-[70vw] h-[70vh] object-contain pointer-events-none mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        muted
        playsInline
        autoPlay
        preload="none"
      >
        <source src="/large_2xx.mp4" type="video/mp4" />
      </video>

      {/* ================= TOP TEXT ================= */}
      <div className="absolute top-15 md:top-20 z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-xl sm:text-2xl font-semibold">
          iPhone 16{" "}
          <span className="bg-gradient-to-r from-[#7979f4] to-[#ea6044] bg-clip-text text-transparent">
            e
          </span>
        </h1>

        <p className="mt-3 text-3xl sm:text-4xl md:text-6xl font-semibold text-black leading-tight">
          Supersized battery life.
        </p>
      </div>

      {/* ================= BOTTOM CONTENT ================= */}
      <div className="absolute bottom-5 md:bottom-10 z-10 flex flex-col items-center text-center px-4 -py-20 ">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#7979f4] to-[#ea6044] bg-clip-text text-transparent">
          Built for Apple Intelligence.
        </h2>

        <div className="mt-6 flex flex-col items-center gap-4">
          <button className="bg-[#0071e3] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
            Buy
          </button>

          <p className="text-sm sm:text-base font-semibold text-black">
            From ₹59900.00* or ₹9317.00/mo. for 6 mo.‡
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
