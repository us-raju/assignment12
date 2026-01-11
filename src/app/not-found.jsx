"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../../public/Animation/error404.json";
export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="w-full flex justify-center">
          <div className="w-35 sm:w-70 md:w-85 lg:w-100">
            <Lottie animationData={animationData} loop />
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral">
          404 – Page Not Found
        </h1>

        <p className="text-base sm:text-lg text-base-content">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <div className="flex justify-center">
          <Link
            href="/"
            className="bg-primary text-base-100 px-6 py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-primary transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}
