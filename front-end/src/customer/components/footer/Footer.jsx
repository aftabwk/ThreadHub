import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 bg-black text-white p-8">
        {/* --- COLUMN 1 --- */}
        {/* This is a "Grid Item". It will be placed automatically. */}
        <div className="footer-column flex flex-col items-center">
          <h4 className="text-lg font-bold mb-4">Company</h4>
          <a href="#" className="block text-gray-400 hover:text-white py-1">
            About
          </a>
          <a href="#" className="block text-gray-400 hover:text-white py-1">
            Blog
          </a>
          <a href="#" className="block text-gray-400 hover:text-white py-1">
            Jobs
          </a>
          <a href="#" className="block text-gray-400 hover:text-white py-1">
            Partners
          </a>
        </div>

        {/* --- COLUMN 2 --- */}
        <div className="footer-column flex flex-col items-center">
          <h4 className="text-lg font-bold mb-4">Solutions</h4>
          <a href="#" className="block text-gray-400 hover:text-white py-1">
            Marketing
          </a>
          <a href="#" className="block text-gray-400 hover:text-white py-1">
            Analytics
          </a>
          <a href="#" className="block text-gray-400 hover:text-white py-1">
            Commerce
          </a>
          <a href="#" className="block text-gray-400 hover:text-white py-1">
            Insights
          </a>
        </div>

        {/* --- COLUMN 3 --- */}
        <div className="footer-column flex flex-col items-center">
          <h4 className="text-lg font-bold mb-4">Legal</h4>
          <a href="#" className="block text-gray-400 hover:text-white py-1">
            Claim
          </a>
          <a href="#" className="block text-gray-400 hover:text-white py-1">
            Privacy
          </a>
          <a href="#" className="block text-gray-400 hover:text-white py-1">
            Terms
          </a>
        </div>

        {/* --- COLUMN 4 --- */}
        <div className="footer-column flex flex-col items-center">
          <h4 className="text-lg font-bold mb-4">Connect</h4>
          <a href="#" className="block text-gray-400 hover:text-white py-1">
            Facebook
          </a>
          <a href="#" className="block text-gray-400 hover:text-white py-1">
            Instagram
          </a>
          <a href="#" className="block text-gray-400 hover:text-white py-1">
            X (Twitter)
          </a>
        </div>
        <div className="sm:col-span-2 md:col-span-4 text-center text-gray-500 pt-8 mt-8 border-t border-gray-700">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
