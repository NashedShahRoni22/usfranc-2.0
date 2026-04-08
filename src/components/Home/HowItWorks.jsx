"use client";
import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import Image from "next/image";
import logoBanner from "../../app/assets/logo_banner.png";
import investors from "../../app/assets/investors.png";
import Link from "next/link";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <section className="max-w-11/12 mx-auto">
      <div className="mt-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">How It Works</h2>

            <div className="w-full max-w-xl mx-auto">
              <div className="flex border-b">
                <button
                  onClick={() => setActiveTab("tab1")}
                  className={`px-4 py-2 font-medium cursor-pointer hover:text-[#7b5e00] transition duration-500 ${
                    activeTab === "tab1"
                      ? "border-b-2 border-[#7b5e00] text-[#7b5e00]"
                      : "text-gray-800"
                  }`}>
                  Buyer Confidence
                </button>
                <button
                  onClick={() => setActiveTab("tab2")}
                  className={`px-4 py-2 font-medium cursor-pointer hover:text-[#7b5e00] transition duration-500 ${
                    activeTab === "tab2"
                      ? "border-b-2 border-[#7b5e00] text-[#7b5e00]"
                      : "text-gray-800"
                  }`}>
                  Merchant Reliability
                </button>
                <button
                  onClick={() => setActiveTab("tab3")}
                  className={`px-4 py-2 font-medium cursor-pointer hover:text-[#7b5e00] transition duration-500 ${
                    activeTab === "tab3"
                      ? "border-b-2 border-[#7b5e00] text-[#7b5e00]"
                      : "text-gray-800"
                  }`}>
                  Mutual Trust
                </button>
              </div>
              <div className="p-4">
                {activeTab === "tab1" && (
                  <div className="space-y-3 text-gray-700 text-sm">
                    <p>
                      ✔ Payments are securely held in escrow until delivery is
                      confirmed.
                    </p>
                    <p>
                      ✔ Buyers are protected with a 7-day return window before
                      final fund release.
                    </p>
                  </div>
                )}
                {activeTab === "tab2" && (
                  <div className="space-y-3 text-gray-700 text-sm">
                    <p>
                      ✔ Merchants hold payments in USFC wallet until delivery is
                      fulfilled.
                    </p>
                    <p>
                      ✔ Builds trust and improves reputation for future
                      transactions.
                    </p>
                  </div>
                )}
                {activeTab === "tab3" && (
                  <div className="space-y-3 text-gray-700">
                    <p>
                      ✔ System encourages ongoing buyer-merchant relationships
                      through transparency and reliability.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-10 bg-[#7b5e00] border p-6 rounded-2xl shadow-lg">
              <p className="text-gray-100 leading-relaxed">
                <span className="font-bold">USFRANC</span> is a cryptocurrency
                with multiple purposes. Its use is subject to your country’s
                regulations. <span className="font-bold">USFRANC</span> is not
                intended to constitute, nor should it be considered, an
                investment opportunity, investment contract, or any form of
                security.
              </p>
            </div>
            <div>
              <Image
                src={logoBanner}
                alt="logo banner"
                width={600}
                height={120}
                className="mt-10"
              />
            </div>
            <div className="mt-10 text-center">
              <Link href="/difference">
                <button className="px-6 py-3 rounded-lg text-white bg-[#7b5e00] cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-500/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/20 blur-3xl rounded-full"></div>

            <div className="">
              <Image
                src={investors}
                alt="investors"
                width={500}
                height={400}
                className="mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
