"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GuidedLook = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".guided-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f5f7] py-16 px-6 sm:px-12 lg:px-24"
    >
      {/* TITLE */}
      <h2 className="guided-animate text-3xl sm:text-4xl lg:text-[50px] font-semibold mb-10">
        Take a closer look.
      </h2>

      {/* IMAGE CARD */}
      <div className="guided-animate relative group cursor-pointer">
        <div className="rounded-3xl overflow-hidden">
          {/* MOBILE IMAGE */}
          <img
            src="/guidedsm.jpg"
            alt="Guided Look Mobile"
            className="block sm:hidden w-full object-cover"
          />

          {/* DESKTOP IMAGE */}
          <img
            src="/guided.jpg"
            alt="Guided Look Desktop"
            className="hidden sm:block w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>

        {/* OVERLAY TEXT */}
        <div className="absolute inset-0 flex items-center justify-start px-6 sm:px-10">
          <p
            className="
              text-start font-semibold text-black
              text-lg sm:text-2xl lg:text-3xl
              max-w-[90%] sm:max-w-[500px] lg:max-w-[600px]
            "
          >
            A Guided Tour of iPhone&nbsp;17&nbsp;Pro, iPhone&nbsp;Air and
            iPhone&nbsp;17
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuidedLook;

