"use client";
import React from "react";
import bannerImg from "../../app/assets/banner_image.jpeg";
import { motion } from "motion/react";

const usageData = [
  {
    title: "Online Spending",
    desc: "Make purchases with USFC at online merchants accepting the cryptocurrency.",
    side: -50,
  },
  {
    title: "Store of Value",
    desc: "Buy and hold USFC as a store of value, exchanging to other crypto when desired.",
    side: 50,
  },
  {
    title: "Secure Purchases",
    desc: "Utilize the optional escrow feature for added security in transactions.",
    side: -50,
  },
  {
    title: "Money Transfer",
    desc: "Transact USFC to other users for delivery globally and for withdrawal to traditional currency.",
    side: 50,
  },
];

const Usage = () => {
  return (
    <div
      className="bg-cover bg-center rounded-2xl mt-32 overflow-hidden"
      style={{ backgroundImage: `url(${bannerImg.src})` }}>
      <div className="bg-white/80 backdrop-blur-sm h-full w-full py-12 px-6">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Built for Trust, Powered by Purpose
          </h2>
          <p className="mt-5 mx-auto font-medium md:text-xl text-primary max-w-2xl">
            Recommended Usage of USFC (Usage may differ according to crypto
            users’ country regulations. Apply the appropriate use for your
            purpose).
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {usageData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: item.side, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="font-bold text-xl md:text-2xl mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Usage;
