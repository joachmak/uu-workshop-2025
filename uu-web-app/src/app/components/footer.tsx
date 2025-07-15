import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-4 mt-10 border-t border-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 text-sm text-gray-600">
        <div>
          &copy; {new Date().getFullYear()} A11y Marketplace. All rights reserved.
        </div>
        <div className="flex gap-4 mt-2 sm:mt-0">
          {/* Add footer links here */}
          <Link href="/#faq" className="hover:underline">FAQ</Link>
          <Link href="#" className="hover:underline">Contact</Link>
          <Link href="#" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
} 