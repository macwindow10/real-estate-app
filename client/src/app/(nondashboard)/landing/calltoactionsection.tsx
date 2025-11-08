"use client";

import React, { use } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/dist/client/link";

const CallToActionSection = () => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <Image
        src="/landing-call-to-action.jpg"
        alt="HomeIO Search Section Background"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Black overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full text-center"
        >
          <div className="max-w-4xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find Your Dream Rental Property
            </h2>
            <div>
              <p className="text-white mb-3">
                Discover a wide range of rental properties in your desired
                location.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="inline-block text-primary-700 bg-white rounded-lg px-6 py-3 font-semibold hover:bg-primary-500 hover:text-primary-50"
                >
                  Search
                </button>
                <Link
                  href="/signup"
                  className="inline-block text-white bg-secondary-500 rounded-lg px-6 py-3 font-semibold hover:bg-secondary-600"
                  scroll={false}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToActionSection;
