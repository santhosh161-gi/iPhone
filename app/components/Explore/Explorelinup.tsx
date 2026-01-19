"use client";
import React, { useEffect, useRef } from "react";
import Products from "../Products/Products";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Explorelinup = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("#explore", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
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
    <section className="bg-[#f5f5f7] w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-12 sm:py-16">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-semibold">
            Explore the line-up.
          </h2>

          <button className="text-base sm:text-lg text-blue-500 hover:underline self-start sm:self-auto">
            Compare all models
          </button>
        </div>

        {/* PRODUCTS */}
        <div className="mt-10 sm:mt-14" id="explore">
          <Products />
        </div>

      </div>
    </section>
  );
};

export default Explorelinup;
