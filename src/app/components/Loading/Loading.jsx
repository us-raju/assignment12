"use client";

import React from "react";
import Lottie from "lottie-react";

import loadingAnimation from "@/public/Animation/loading.json";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="w-40 h-40">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Loading;
