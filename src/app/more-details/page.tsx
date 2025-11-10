"use client";

// src/app/more-details/page.tsx
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function MoreDetails() {

  const searchParams = useSearchParams();
  const ref = searchParams.get("ref"); // "navbar"
  const user = searchParams.get("user"); // "123"

  useEffect(() => {
   console.log('ref =>', ref)
   console.log('user =>', user) 
  })

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-50">
      <h1 className="text-5xl font-bold mb-4">More Details Page</h1>
      <p className="text-lg text-gray-600 max-w-xl">
        This is the MoreDetails page. You can put extra info, images, or whatever you need here.
      </p>
    </section>
  );
}
