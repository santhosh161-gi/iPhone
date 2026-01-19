"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getFirebaseDB, getFirebaseAuth } from "../../lib/firebaseClient";
import { collection, getDocs } from "firebase/firestore";
import { FaAngleRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  Quality: string;
  Details: string;
};

export default function ProductsCarousel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const auth = getFirebaseAuth();
  const db = getFirebaseDB();

  // Fetch products from Firebase when auth is ready
  useEffect(() => {
    const fetchProducts = async () => {
      if (!auth) return;
      try {
        const snapshot = await getDocs(collection(db, "products"));
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Product, "id">),
        }));
        setProducts(list);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    // Wait for auth to be ready
    const unsubscribe = auth?.onAuthStateChanged((user) => {
      if (user) fetchProducts();
    });

    return () => unsubscribe && unsubscribe();
  }, [auth, db]);

  // Scroll slider left/right
  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.offsetWidth * 0.8;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (loading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  if (products.length === 0) {
    return <div className="text-center py-10">No products available.</div>;
  }

  return (
    <div className="relative w-full mt-10 px-2 sm:px-6">
      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth no-scrollbar py-4 snap-x snap-mandatory"
      >
        {products.map((p) => (
          <div
            key={p.id}
            className="flex-shrink-0 w-[80%] sm:w-[45%] md:w-[32%] lg:w-[26%] xl:w-[30%] bg-transparent rounded-3xl flex flex-col items-center text-center snap-start"
          >
            {/* IMAGE */}
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] xl:h-[350px]">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover rounded-3xl"
              />
            </div>

            {/* COLOR DOTS */}
            <div className="flex gap-2 mt-3">
              <span className="w-3 h-3 bg-gray-300 rounded-full" />
              <span className="w-3 h-3 bg-gray-400 rounded-full" />
              <span className="w-3 h-3 bg-black rounded-full" />
            </div>

            {/* QUALITY */}
            <p className="text-orange-600 text-xs sm:text-sm mt-2">{p.Quality}</p>

            {/* NAME */}
            <h2 className="text-sm sm:text-lg md:text-xl font-semibold mt-1">
              {p.name}
            </h2>

            {/* DETAILS */}
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1 px-2">
              {p.Details}
            </p>

            {/* PRICE */}
            <p className="font-semibold mt-2 text-sm sm:text-base">From ₹{p.price}</p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm hover:bg-blue-700 transition">
                Learn more
              </button>
              <button className="text-blue-600 text-xs sm:text-sm hover:underline inline-flex items-center gap-1">
                Buy <FaAngleRight />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP NAVIGATION */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:scale-110 transition z-10"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:scale-110 transition z-10"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}






