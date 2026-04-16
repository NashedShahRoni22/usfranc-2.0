"use client";
import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import Image from "next/image";
import logoBanner from "../../app/assets/logo_banner.png";
import investors from "../../app/assets/investors.png";
import Link from "next/link";

const HowItWorks = () => {
  const tabData = {
    tab1: {
      label: "Buyer Confidence",
      content: [
        "Payments are securely held in escrow until delivery is confirmed.",
        "Buyers are protected with a 7-day return window before final fund release.",
      ],
    },
    tab2: {
      label: "Merchant Reliability",
      content: [
        "Merchants hold payments in USFC wallet until delivery is fulfilled.",
        "Builds trust and improves reputation for future transactions.",
      ],
    },
    tab3: {
      label: "Mutual Trust for Repeat Business",
      content: [
        "System encourages ongoing buyer-merchant relationships through transparency and reliability.",
      ],
    },
  };
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="mt-24">
      <div className=" mx-auto grid md:grid-cols-2 gap-12 items-center">
        <article>
          <h2 className="text-4xl font-bold mb-8">How It Works</h2>
          <div className="w-full max-w-xl">
            <nav className="flex border-b border-gray-200">
              {Object.keys(tabData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? "border-b-4 border-primary text-primary"
                      : "text-gray-500 hover:text-primary"
                  }`}>
                  {tabData[key].label}
                </button>
              ))}
            </nav>

            <div className="py-8 min-h-37.5">
              <ul className="space-y-4">
                {tabData[activeTab].content.map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-primary font-bold">✔</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-primary p-8 rounded-2xl shadow-lg">
            <p className="text-white/90 leading-relaxed text-sm">
              <span className="font-bold">USFRANC</span> is a cryptocurrency
              with multiple purposes. Its use is subject to your country’s
              regulations. <span className="font-bold">USFRANC</span> is not
              intended to constitute, nor should it be considered, an investment
              opportunity, investment contract, or any form of security.
            </p>
          </div>

          <Image
            src={logoBanner}
            alt="USFRANC Logo Banner"
            width={600}
            height={120}
            className="mt-12 w-full max-w-lg mx-auto h-auto"
          />

          <div className="mt-12">
            <Link href="/difference">
              <button className="px-10 py-4 rounded-xl text-white bg-primary font-bold shadow-lg hover:brightness-110 transition-all">
                Learn More
              </button>
            </Link>
          </div>
        </article>

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
  );
};

export default HowItWorks;
