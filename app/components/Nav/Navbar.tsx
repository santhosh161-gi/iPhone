"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaApple } from "react-icons/fa";
import { IoSearch, IoBagOutline, IoMenu, IoClose } from "react-icons/io5";

type MenuType = "store" | "mac" | null;

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // GSAP dropdown animation
  useEffect(() => {
    if (!dropdownRef.current || !activeMenu) return;

    gsap.fromTo(
      dropdownRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
    );

    gsap.from(dropdownRef.current.querySelectorAll("li"), {
      opacity: 0,
      y: 10,
      stagger: 0.05,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [activeMenu]);

  return (
    <nav className="relative bg-[#fafafc]">
      {/* ================= TOP BAR ================= */}
      <div className="flex items-center justify-between px-4 lg:px-0 lg:justify-center gap-10 py-3 max-w-7xl mx-auto">
        <FaApple size={24} />

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-14 text-[12px] cursor-pointer">
          <div onMouseEnter={() => setActiveMenu("store")}>Store</div>
          <div onMouseEnter={() => setActiveMenu("mac")}>Mac</div>
          <div>iPhone</div>
          <div>Watch</div>
          <div>TV</div>
          <div>Entertainment</div>
          <div>Music</div>
          <div>Support</div>
        </div>

        {/* ICONS */}
        <div className="flex gap-4">
          <IoSearch size={20} />
          <IoBagOutline size={20} />

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>
        </div>
      </div>

      {/* ================= DESKTOP DROPDOWN ================= */}
      {activeMenu && (
        <div
          ref={dropdownRef}
          onMouseLeave={() => setActiveMenu(null)}
          className="hidden lg:block absolute left-0 top-full w-full bg-white/80 backdrop-blur-xl shadow-md z-50"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12 px-12 py-10">
            {activeMenu === "store" && (
              <>
                <MenuColumn title="Shop" items={["Mac","iPad","iPhone","Apple Watch","AirPods","Accessories"]} />
                <MenuColumn title="Quick Links" items={["Find a Store","Order Status","Apple Trade In","Ways to Buy"]} />
                <MenuColumn title="Shop Special Stores" items={["Education","Business"]} />
              </>
            )}

            {activeMenu === "mac" && (
              <>
                <MenuColumn title="Explore Mac" items={["MacBook Air","MacBook Pro","iMac","Mac mini","Mac Studio"]} />
                <MenuColumn title="Shop Mac" items={["Shop Mac","Mac Accessories","Apple Trade In"]} />
                <MenuColumn title="More from Mac" items={["Mac Support","macOS Sequoia","iCloud"]} />
              </>
            )}
          </div>
        </div>
      )}

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 p-6">
          <button onClick={() => setMobileOpen(false)} className="absolute top-4 right-4">
            <IoClose size={24} />
          </button> 
          <ul className="space-y-6 text-xl font-semibold">
            <li>Store</li>
            <li>Mac</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>TV</li>
            <li>Entertainment</li>
            <li>Music</li>
            <li>Support</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const MenuColumn = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <div>
    <p className="text-gray-400 text-sm mb-4">{title}</p>
    <ul className="space-y-3 text-lg font-semibold">
      {items.map((item) => (
        <li key={item} className="cursor-pointer hover:opacity-70">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Navbar;

