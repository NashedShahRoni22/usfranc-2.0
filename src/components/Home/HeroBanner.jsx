"use client";
import bannerImg from "../../app/assets/banner_image.webp";
import { motion } from "motion/react";

const HeroBanner = () => {
  return (
    <section className="max-w-11/12 mx-auto">
      <div className="relative overflow-visible">
        <div
          className="h-[80vh] bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${bannerImg.src})` }}>
          <div className="max-w-7xl px-4 py-10 bg-white/70 backdrop-blur-sm h-screen">
            <div className="text-center justify-items-center flex items-center justify-center flex-col">
              <motion.div
                initial={{ y: -10, opacity: 0.1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: false }}
                className="flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-6xl font-bold leading-tight md:w-2/3">
                  The Capital-Backed Utility Crypto Coin Built for
                  <span className="text-[#7b5e00]">Trust</span>
                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
                  USFRANC is a decentralized cryptocurrency, using its own
                  capital as a hedge fund to build trust and deliver real-world
                  utility for crypto users.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 10, opacity: 0.1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: false }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-6 py-3 rounded-lg bg-[#7b5e00] text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
                  Get USFC Now
                </button>

                <button className="px-6 py-3 rounded-lg border border-gray-300 bg-white/60 backdrop-blur-md font-semibold hover:bg-[#7b5e00] hover:text-white transition-all duration-300">
                  Read Lite White Paper
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 bg-linear-to-br from-white/90 via-white/70 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroBanner;
