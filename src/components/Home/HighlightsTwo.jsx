"use client";
import React from "react";
import highlightImage from "../../app/assets/highlights_two.png";
import { motion } from "motion/react";

const HighlightsTwo = () => {
  return (
    <section className="max-w-11/12 mx-auto">
      <div className=" mt-24">
        <div
          className="h-screen bg-cover bg-center bg-fixed rounded-lg"
          style={{ backgroundImage: `url(${highlightImage.src})` }}>
          <div className=" flex flex-col md:flex-row justify-between items-center gap-5 h-screen w-full px-4 py-10">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="bg-white p-4 rounded-xl shadow-lg w-full h-83 md:h-63">
              <span className="text-6xl text-[#7b5e00]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z" />
                </svg>
              </span>
              <h2 className="font-bold text-2xl mt-5 mb-4">
                <span className="text-[#7b5e00]">USFRANC</span> OWN CAPITAL
                HEDGE FUND
              </h2>
              <p className="text-sm">
                USFRANC OWN CAPITAL HEDGE FUND A portion (67%) of all First
                sales by USFC to a crypto Buyer is securely invested into
                low-risk reserves ( gov bonds or simular Investments ), this
                capital is entirely the financial property of USFRANC, its
                hedging purpose is to ensure trust, stability for USFC users.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="bg-white p-4 rounded-xl shadow-lg w-full h-70 md:h-63">
              <span className="text-6xl text-[#7b5e00]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" />
                </svg>
              </span>
              <h2 className="font-bold text-2xl mt-5 mb-4">
                Wallet-Based Escrow Security
              </h2>
              <p className="text-sm">
                Funds are securely held in a wallet-based escrow, protecting
                both buyers and merchants by ensuring safe and verified
                transactions. Note Merchants must opte in to USFC wallet. USFC
                can be paid to any wallet by crypto holder.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsTwo;
