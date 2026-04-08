"use client";
import React from "react";
import bannerImg from "../../app/assets/banner_image.jpeg";
import { motion } from "motion/react";

const Usage = () => {
  return (
    <section className="max-w-11/12 mx-auto">
      <div className="mt-24">
        <div
          className="h-screen bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${bannerImg.src})` }}>
          <div className="bg-white/70 backdrop-blur-xs h-full rounded-lg">
            <h2 className="text-2xl md:text-5xl text-center pt-6 md:pt-8 font-bold">
              Built for Trust, Powered by Purpose
            </h2>
            <p className="md:mx-auto mt-5 px-5 md:px-0 font-medium md:text-xl text-[#7b5e00] w-full md:w-1/2">
              Recommended Usage of USFC (Usage may differ according to crypto
              users’ country regulations. Apply the appropriate use for your
              purpose).
            </p>
            <div className="p-8 flex flex-col md:flex-row flex-wrap items-center justify-center gap-2 md:gap-5">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="w-full max-w-sm bg-white px-4 py-3 rounded-xl hover:shadow-md transition duration-300">
                <h2 className="font-semibold text-xl md:text-3xl mt-2 md:mt-4 mb-2 md:mb-3">
                  Online Spending
                </h2>
                <p className="text-gray-600">
                  Make purchases with USFC at online merchants accepting the
                  cryptocurrency.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="w-full max-w-sm bg-white px-4 py-3 rounded-xl hover:shadow-md transition duration-300">
                <h2 className="font-semibold text-xl md:text-3xl mt-2 md:mt-4 mb-2 md:mb-3">
                  Store of Value
                </h2>
                <p className="text-gray-600">
                  Buy and hold USFC as a store of value, exchanging to other
                  crypto when desired.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="w-full max-w-sm bg-white px-4 py-3 rounded-xl hover:shadow-md transition duration-300">
                <h2 className="font-semibold text-xl md:text-3xl mt-2 md:mt-4 mb-2 md:mb-3">
                  Secure Purchases
                </h2>
                <p className="text-gray-600">
                  Utilize the optional escrow feature for added security in
                  transactions.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="w-full max-w-sm bg-white px-4 py-3 rounded-xl hover:shadow-md transition duration-300">
                <h2 className="font-semibold text-xl md:text-3xl mt-2 md:mt-4 mb-2 md:mb-3">
                  Money Transfer
                </h2>
                <p className="text-gray-600">
                  Transact USFC to other users for delivery globally and for
                  withdrawal to traditional currency.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usage;
