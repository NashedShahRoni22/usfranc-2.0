"use client";

import React from "react";
import { motion } from "motion/react";

const InvestorsPolicy = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false }}
        className="pt-16 text-center justify-items-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter w-full md:w-2/3  leading-tight">
          <span className="text-[#7b5e00]">USFranc</span> Deferred Utility
          Distribution Policy
        </h1>
        <p className="w-full md:w-1/2 mt-6">
          This policy outlines the conditions and structure of the Deferred
          Utility Distribution made available to eligible pre-launch
          participants of the USFranc cryptocurrency project.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: false }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-16">
        <div className="p-8 rounded-lg bg-white shadow-sm hover:shadow-md transition duration-500">
          <h3 className="text-2xl text-[#7b5e00] font-bold mb-4">Purpose</h3>
          <p className="text-gray-600">
            The Deferred Utility Distribution is a structured allocation
            mechanism designed to support long-term commitment, ecosystem
            engagement, and market stability for the USFranc cryptocurrency. It
            is not a form of return on investment, interest, or profit-sharing.
          </p>
        </div>
        <div className="p-8 rounded-lg bg-white shadow-sm hover:shadow-md transition duration-500">
          <h3 className="text-2xl text-[#7b5e00] font-bold mb-4">
            Eligibility
          </h3>
          <p className="text-gray-600">
            All participants who purchase USFranc (USFC) coins during the
            official pre-launch phase and comply with the applicable
            participation terms may be eligible for a Deferred Utility
            Distribution.
          </p>
        </div>
        <div className="p-8 rounded-lg bg-white shadow-sm hover:shadow-md transition duration-500">
          <h3 className="text-2xl text-[#7b5e00] font-bold mb-4">
            Distribution Schedule
          </h3>
          <div className="text-gray-600">
            Participants may receive up to 60% additional USFC coins over a
            three-year period following the official launch of USFranc, subject
            to compliance and continued engagement. The release schedule is as
            follows:
            <ul className="list-disc pl-4 space-y-1 mt-3">
              <li> 20% after 12 months</li>
              <li> 20% after 24 months</li>
              <li> 20% after 36 months</li>
            </ul>
          </div>
        </div>
        <div className="p-8 rounded-lg bg-white shadow-sm hover:shadow-md transition duration-500">
          <h3 className="text-2xl text-[#7b5e00] font-bold mb-4">
            Vesting & Release Conditions
          </h3>
          <p className="text-gray-600">
            Each annual allocation is subject to vesting terms that ensure
            responsible usage. The release may be withheld or adjusted if the
            participant engages in behavior contrary to the principles of the
            USFranc ecosystem or violates the pre-sale terms.
          </p>
        </div>
        <div className="p-8 rounded-lg bg-white shadow-sm hover:shadow-md transition duration-500">
          <h3 className="text-2xl text-[#7b5e00] font-bold mb-4">
            Resale Limitations
          </h3>
          <p className="text-gray-600">
            To protect price integrity, participants may not sell more than
            one-third (1/3) of their original USFC purchase per year, starting
            from the second year post-launch. This condition does not apply to
            Deferred Utility Distributions.
          </p>
        </div>
        <div className="p-8 rounded-lg bg-white shadow-sm hover:shadow-md transition duration-500">
          <h3 className="text-2xl text-[#7b5e00] font-bold mb-4">
            Legal & Regulatory Position
          </h3>
          <p className="text-gray-600">
            This policy does not constitute an offer of securities or financial
            products. USFranc is a utility-based cryptocurrency. The Deferred
            Utility Distribution is not guaranteed and is offered solely as an
            ecosystem-based allocation under a usage and vesting framework. It
            is subject to ongoing compliance with applicable laws and
            regulations under the jurisdiction of the United Kingdom.
          </p>
        </div>
        <div className="p-8 rounded-lg bg-white shadow-sm hover:shadow-md transition duration-500">
          <h3 className="text-2xl text-[#7b5e00] font-bold mb-4">
            Contact Information
          </h3>
          <p className="text-gray-600">
            USFranc Ltd <br /> Email: usfranc@bobosohomail.com <br />{" "}
            Jurisdiction: United Kingdom
          </p>
        </div>
      </motion.div>
      <p className="text-gray-400">Date: May 15, 2025</p>
    </div>
  );
};

export default InvestorsPolicy;
