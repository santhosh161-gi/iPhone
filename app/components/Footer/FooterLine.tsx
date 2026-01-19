import React from "react";

const FooterLine = () => {
  return (
    <footer className="bg-[#f5f5f7] text-gray-700">
      {/* ================= DISCLAIMER SECTION ================= */}
      <div className="px-4 sm:px-6 md:px-12 py-8 flex justify-center">
        <div className="w-full max-w-4xl text-[10px] sm:text-[11px] md:text-[12px] text-slate-500 border-b border-slate-300 pb-6 leading-relaxed">
          *Listed pricing is Maximum Retail Price (inclusive of all taxes).<br /><br />
          ‡Includes instant cashback and No Cost EMI.<br /><br />
          No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3- or 6-month tenures from most leading card issuers. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply.<br /><br />
          Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001 applies. Offer may be revised or withdrawn at any time without any prior notice.<br /><br />
          **Mac, iPad and Apple Watch trade-in is available only in-store in India.<br /><br />
          1. Compared with previous-generation iPhone.<br /><br />
          2. iPhone models are splash, water and dust resistant and were tested under controlled laboratory conditions.<br /><br />
          3. Apple Intelligence is available in beta.<br /><br />
          4. Live Translation is available when Apple Intelligence is enabled.<br /><br />
          5. Visual intelligence is available on Apple Intelligence-enabled devices.<br /><br />
          6. Clean Up is available in beta.<br /><br />
          7. Action mode is available on selected models.<br /><br />
          8. On a mass balance allocation.<br /><br />
          9. iPhone can detect a severe car crash and call for help.<br /><br />
          10. Testing conducted by Apple in July 2025.<br /><br />
          11. Data plan is required. 5G available in selected markets.<br /><br />
          12. Accessories are sold separately.<br /><br />
          13. Ultra Wideband availability varies by region.<br /><br />
          14. Features are subject to change.<br /><br />
          15. Arknights: Endfield coming to iOS, release date subject to change.
        </div>
      </div>

      {/* ================= FOOTER LINKS ================= */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 py-10 text-[10px] sm:text-[11px] md:text-[12px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Shop and Learn</h4>
            <ul className="space-y-1">
              <li>Store</li><li>Mac</li><li>iPad</li><li>iPhone</li>
              <li>Watch</li><li>AirPods</li><li>TV & Home</li>
              <li>AirTag</li><li>Accessories</li><li>Gift Cards</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Account</h4>
            <ul className="space-y-1 mb-4">
              <li>Manage Your Apple Account</li>
              <li>Apple Store Account</li>
              <li>iCloud.com</li>
            </ul>
            <h4 className="font-semibold mb-2">Entertainment</h4>
            <ul className="space-y-1">
              <li>Apple One</li><li>Apple TV+</li><li>Apple Music</li>
              <li>Apple Arcade</li><li>Apple Podcasts</li>
              <li>Apple Books</li><li>App Store</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Apple Store</h4>
            <ul className="space-y-1">
              <li>Find a Store</li><li>Genius Bar</li><li>Today at Apple</li>
              <li>Group Reservations</li><li>Apple Camp</li>
              <li>Apple Trade In</li><li>Ways to Buy</li>
              <li>Recycling Programme</li><li>Order Status</li><li>Shopping Help</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">For Business</h4>
            <ul className="space-y-1 mb-4">
              <li>Apple and Business</li>
              <li>Shop for Business</li>
            </ul>
            <h4 className="font-semibold mb-2">For Education</h4>
            <ul className="space-y-1 mb-4">
              <li>Apple and Education</li>
              <li>Shop for Education</li>
              <li>Shop for University</li>
            </ul>
            <h4 className="font-semibold mb-2">For Healthcare</h4>
            <ul className="space-y-1">
              <li>Apple and Healthcare</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Apple Values</h4>
            <ul className="space-y-1 mb-4">
              <li>Accessibility</li><li>Education</li>
              <li>Environment</li><li>Privacy</li>
              <li>Supply Chain Innovation</li>
            </ul>
            <h4 className="font-semibold mb-2">About Apple</h4>
            <ul className="space-y-1">
              <li>Newsroom</li><li>Apple Leadership</li>
              <li>Career Opportunities</li>
              <li>Investors</li><li>Ethics & Compliance</li>
              <li>Events</li><li>Contact Apple</li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-[10px] sm:text-[11px] md:text-[12px] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <p className="sm:mb-0">
            More ways to shop:{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              Find an Apple Store
            </span>{" "}
            or{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              other retailer
            </span>{" "}
            near you. Or call 000800 040 1966.
          </p>

          <div className="flex flex-wrap gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Sales Policy</span>
            <span>Legal</span>
            <span>Site Map</span>
          </div>

          <p>India</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterLine;

