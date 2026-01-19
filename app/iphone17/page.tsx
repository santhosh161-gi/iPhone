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
    <section className="relative w-full h-screen overflow-hidden bg-white">

      {/* ================= MOBILE IMAGE ================= */}
      <div className="block md:hidden absolute inset-0">
        <Image
          src="/iphone_17sm.jpg" // 👈 replace later
          alt="iPhone 17"
          width={1200}
          height={1600}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* ================= DESKTOP VIDEO ================= */}
      <video
        ref={videoRef}
        className="hidden md:block absolute inset-0 w-[110vw] h-[110vh] object-contain"
        muted
        playsInline
        autoPlay
        preload="none"
      >
        <source src="/large_2x.mp4" type="video/mp4" />
      </video>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between h-full px-6 sm:px-10 md:px-16 lg:px-24 pt-32 md:pt-0">

        {/* LEFT TEXT */}
        <div className="flex flex-col items-start mt-10 md:mt-40">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            iPhone 17
          </h1>

          <p className="mt-4 text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#a778c8] to-[#649857] leading-tight">
            Magichromatic.
          </p>
        </div>

        {/* RIGHT CTA */}
        <div className="mt-10 md:mt-40 flex items-center gap-4 bg-slate-200 rounded-full px-5 py-3 max-w-full md:max-w-md">
          <p className="text-sm sm:text-base font-medium leading-tight">
            From ₹82900.00*
            <br />
            or ₹13650.00/mo. for 6 mo.‡
          </p>

          <button className="bg-blue-600 text-white px-5 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
            Buy
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page;