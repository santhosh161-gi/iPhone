"use client";
import Image from "next/image";
import React     from "react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const MainPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("#products", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  
  return (
    <div>
      {/* Top Offer Bar */}
      <div className="flex items-center justify-center px-4 py-3 bg-[#f5f5f7] text-[11px] sm:text-[12px] md:text-[13px] text-center">
        Get up to ₹5000 instant cashback on iPhone with eligible cards. Plus up to
        6 months of No Cost EMI.‡
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
        {/* Title */}
        <h1 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] font-bold">
          iPhone
        </h1>

        {/* Product Navigation */}
        <div className="mt-10" id="products">
          <ul className="flex gap-6 sm:gap-10 md:gap-12 items-start overflow-x-auto scrollbar-hide pb-4">
            {/* iPhone 17 Pro */}
            <Link href="/iphone17pro">
              <li className="flex flex-col items-center gap-3 min-w-[90px] hover:cursor-pointer transition-transform duration-300 hover:scale-105">
                <Image src="/iphone17.png" alt="iPhone 17 Pro" width={50} height={50} />
                <div className="text-center">
                  <p className="text-[12px] sm:text-[14px] font-semibold">
                    iPhone 17 Pro
                  </p>
                  <p className="text-red-600 text-xs">New</p>
                </div>
              </li>
            </Link>

            {/* iPhone Air */}
            <Link href="/iphonair">
              <li className="flex flex-col items-center gap-3 min-w-[90px] hover:cursor-pointer transition-transform duration-300 hover:scale-105">
                <Image src="/iphoneair.png" alt="iPhone Air" width={50} height={50} />
                <div className="text-center">
                  <p className="text-[12px] sm:text-[14px] font-semibold">
                    iPhone Air
                  </p>
                  <p className="text-red-600 text-xs">New</p>
                </div>
              </li>
            </Link>

            {/* iPhone 17 */}
            <Link href="/iphone17">
              <li className="flex flex-col items-center gap-3 min-w-[90px] hover:cursor-pointer transition-transform duration-300 hover:scale-105">
                <Image src="/iphone17_.png" alt="iPhone 17" width={50} height={50} />
                <div className="text-center">
                  <p className="text-[12px] sm:text-[14px] font-semibold">
                    iPhone 17
                  </p>
                  <p className="text-red-600 text-xs">New</p>
                </div>
              </li>
            </Link>

            {/* iPhone 16 */}
            <li className="flex flex-col items-center gap-3 min-w-[90px] hover:cursor-pointer transition-transform duration-300 hover:scale-105">
              <Image src="/iphone16.png" alt="iPhone 16" width={50} height={50} />
              <p className="text-[12px] sm:text-[14px] font-semibold">iPhone 16</p>
            </li>

            {/* iPhone 16e */}
            <Link href="/iphone16e">
              <li className="flex flex-col items-center gap-3 min-w-[90px] hover:cursor-pointer transition-transform duration-300 hover:scale-105">
                <Image src="/iphone16e.png" alt="iPhone 16e" width={55} height={55} />
                <p className="text-[12px] sm:text-[14px] font-semibold">
                  iPhone 16e
                </p>
              </li>
            </Link>

            {/* Compare */}
            <li className="flex flex-col items-center gap-3 min-w-[90px] hover:cursor-pointer transition-transform duration-300 hover:scale-105">
              <Image src="/compare.png" alt="Compare" width={70} height={70} />
              <p className="text-[12px] sm:text-[14px] font-semibold">Compare</p>
            </li>

            {/* Accessories */}
            <li className="flex flex-col items-center gap-3 min-w-[90px] hover:cursor-pointer transition-transform duration-300 hover:scale-105">
              <Image src="/access.png" alt="Accessories" width={60} height={60} />
              <p className="text-[12px] sm:text-[14px] font-semibold">
                Accessories
              </p>
            </li>

            {/* Shop */}
            <li className="flex flex-col items-center gap-3 min-w-[90px] hover:cursor-pointer transition-transform duration-300 hover:scale-105">
              <Image src="/shop.png" alt="Shop" width={55} height={55} />
              <p className="text-[12px] sm:text-[14px] font-semibold">Shop</p>
            </li>

            {/* iOS */}
            <li className="flex flex-col items-center gap-3 min-w-[90px] hover:cursor-pointer transition-transform duration-300 hover:scale-105">
              <Image src="/ios.png" alt="iOS" width={70} height={70} />
              <p className="text-[12px] sm:text-[14px] font-semibold">iOS</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
