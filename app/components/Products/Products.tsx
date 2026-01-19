"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { getFirebaseDB } from "../../lib/firebaseClient";
import { FaAngleRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  Details: string;
  Quality?: string;
};

export default function ProductsCarousel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const db = getFirebaseDB();
        const snapshot = await getDocs(collection(db, "products"));

        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Product, "id">),
        }));

        console.log("Fetched products:", list.length);
        setProducts(list);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  if (products.length === 0) {
    return <div className="text-center py-10">No products available.</div>;
  }

  return (
    <div className="relative w-full mt-10 px-2 sm:px-6">
      <div
        ref={sliderRef}
        className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth no-scrollbar py-4 snap-x snap-mandatory"
      >
        {products.map((p) => (
          <div
            key={p.id}
            className="flex-shrink-0 w-[80%] sm:w-[45%] md:w-[32%] lg:w-[26%] xl:w-[30%] flex flex-col items-center text-center snap-start"
          >
            <div className="relative w-full h-[250px]">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover rounded-3xl"
              />
            </div>

            {p.Quality && (
              <p className="text-orange-600 text-xs mt-2">{p.Quality}</p>
            )}

            <h2 className="text-lg font-semibold mt-1">{p.name}</h2>

            <p className="text-sm text-gray-600 mt-1 px-2">{p.Details}</p>

            <p className="font-semibold mt-2">From ₹{p.price}</p>

            <div className="flex gap-3 mt-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                Learn more
              </button>
              <button className="text-blue-600 text-sm inline-flex items-center gap-1">
                Buy <FaAngleRight />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() =>
          sliderRef.current?.scrollBy({
            left: -sliderRef.current.offsetWidth * 0.8,
            behavior: "smooth",
          })
        }
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() =>
          sliderRef.current?.scrollBy({
            left: sliderRef.current.offsetWidth * 0.8,
            behavior: "smooth",
          })
        }
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}









