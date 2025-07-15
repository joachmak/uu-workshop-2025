"use client"
import React, {useEffect, useState} from "react";
import Link from "next/link";
import SectionWrapper from "@/app/components/section-wrapper";

export default function Header() {
    const colors = ["bg-blue-600", "bg-red-600", "bg-green-600", "bg-yellow-600"];
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prevIndex: number) => (prevIndex + 1) % colors.length);
        }, 100);

        return () => clearInterval(interval);
    }, []);

  return (
    <div className="w-full bg-gray-100 py-4 shadow-sm mb-6">
      <SectionWrapper>
        <div className="mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
          <p className={`${colors[colorIndex]} text-2xl font-bold text-gray-800 p-2`}>
            A11y Marketplace
          </p>
          <div className="mt-2 flex gap-8">
            <a tabIndex={4}><img onClick={() => window.location.href = "/"} width={80} className={"-translate-y-1"} src={"home-btn.png"} /></a>
            <Link tabIndex={3} href={"/new"} className="hover:underline">Click here</Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}