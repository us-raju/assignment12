import React from "react";

import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative w-full h-100">
      <Image
        src="/bannerImg.jpg"
        alt="Care service banner"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-base-100 px-4 max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Trusted Care for Your Loved Ones
          </h1>

          <p className="text-base-100 md:text-lg mb-6">
            Professional baby sitting, elderly care, and special home care
            services — safe, reliable, and compassionate.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="#services"
              className="bg-primary text-[14px] md:text-[16px] hover:bg-teal-600 text-white px-2 md:px-6  py-2 md:py-3 rounded-md transition"
            >
              Explore Services
            </Link>

            <Link
              href="/login"
              className="bg-base-100 text-[14px] md:text-[16px] text-teal-600 hover:bg-gray-300 px-6  py-2 md:py-3 rounded-md transition"
            >
              Book a Caregiver
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
