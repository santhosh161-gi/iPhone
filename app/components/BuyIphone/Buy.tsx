"use client";

import React, { useRef, useState } from "react";
import {
  FaAngleRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import BoxDetails from "./BoxDetails";
import Details from "./Details";

const Buy = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const details = [
    {
      title: "Apple Trade In",
      Header: "Save on a new iPhone with trade-in",
      description:
        "Get up to ₹12,000 off on iPhone 17 Pro in credit towards a new iPhone.",
      image: "/trade.jpg",
    },
    {
      title: "Easy EMI",
      Header: "Pay monthly at no extra cost",
      description: "No-cost EMI options available.",
      image: "/buy.jpg",
    },
    {
      title: "Free Delivery",
      Header: "Fast & free delivery",
      description: "Get free doorstep delivery.",
      image: "/deliver.jpg",
    },
    {
      title: "Quick Setup",
      Header: "Set up your iPhone easily",
      description: "Personalized setup assistance.",
      image: "/setup.jpg",
    },
    {
      title: "Apple Specialist",
      Header: "Shop with a Specialist",
      description: "Get help from Apple experts.",
      image: "/specialist.jpg",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (!trackRef.current) return;

    const scrollAmount = 360;
    trackRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="bg-[#f5f5f7] py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-semibold max-w-[700px]">
            Why Apple is the best place to buy iPhone.
          </h2>

          <span className="text-lg text-blue-600 hover:underline inline-flex items-center cursor-pointer">
            Shop iPhone <FaAngleRight className="ml-1" />
          </span>
        </div>

        {/* CAROUSEL */}
        <div className="relative mt-12">
          {/* LEFT BUTTON (hidden on mobile) */}
          <button
            onClick={() => scroll("left")}
            className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-3"
          >
            <FaChevronLeft />
          </button>

          {/* TRACK */}
          <div
            ref={trackRef}
            className="
              flex gap-6 sm:gap-20
              overflow-x-auto scroll-smooth sm:overflow-x-hidden no-scrollbar
              py-4
            "
          >
            {details.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setOpen(true);
                }}
                className="
                  shrink-0 cursor-pointer
                  w-[260px] sm:w-[300px]
                "
              >
                <BoxDetails {...item} />
              </div>
            ))}
          </div>

          {/* RIGHT BUTTON (hidden on mobile) */}
          <button
            onClick={() => scroll("right")}
            className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-3"
          >
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* MODAL */}
      <Details
        open={open}
        onClose={() => setOpen(false)}
        details={details[activeIndex]}
      />
    </>
  );
};

export default Buy;


