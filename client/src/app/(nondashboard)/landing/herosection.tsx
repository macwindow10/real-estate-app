"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image with transparency */}
      <Image
        src="/landing-splash.jpg"
        alt="Rentifull Rental Platform"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Black overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center"
        >
          <div className="max-w-4xl mx-auto px-16 sm:px-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Start your journey to find the perfect place to call home
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
