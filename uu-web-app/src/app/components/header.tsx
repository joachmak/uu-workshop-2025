"use client"
import React, {PropsWithChildren} from "react";
import Link from "next/link";
import SectionWrapper from "@/app/components/section-wrapper";

export default function Header() {
  return (
    <header className="w-full bg-gray-100 py-4 shadow-sm mb-6">
      <SectionWrapper>
        <div className="mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
          <h1 className="text-2xl font-bold text-gray-800">
            A11y Marketplace
          </h1>
          <nav className="mt-2 flex gap-8">
            <Link href={"/"} className="hover:underline">Home</Link>
            <Link href={"/new"} className="hover:underline">+ New ad</Link>
          </nav>
        </div>
      </SectionWrapper>
    </header>
  );
}