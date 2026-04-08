"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  ShieldCheck,
  MapPin,
  FileText,
  AlertCircle,
  Mail,
  ChevronRight,
  Landmark,
} from "lucide-react";

const Compliance = () => {
  const [activeTab, setActiveTab] = useState("global");
  const primaryColor = "#7b5e00";

  const fadeIn = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.3 },
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-slate-900 font-sans selection:bg-[#7b5e00] selection:text-white">
      <div className="bg-white border-b border-slate-200 pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
                Regulatory{" "}
                <span style={{ color: primaryColor }}>Framework</span>
              </h1>
              <p className="text-slate-500 max-w-xl text-lg">
                Transparency and legal clarity across global jurisdictions.
                Updated April 2025.
              </p>
            </div>

            <div className="flex p-1 bg-slate-100 rounded-xl w-fit border border-slate-200">
              <button
                onClick={() => setActiveTab("global")}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeTab === "global"
                    ? "bg-white shadow-sm text-[#7b5e00]"
                    : "text-slate-500 hover:text-slate-800"
                }`}>
                Global (EN)
              </button>
              <button
                onClick={() => setActiveTab("franc")}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeTab === "franc"
                    ? "bg-white shadow-sm text-[#7b5e00]"
                    : "text-slate-500 hover:text-slate-800"
                }`}>
                Franc (FR)
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          {activeTab === "global" ? (
            <motion.div key="global" {...fadeIn} className="space-y-16">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-[#7b5e00] font-bold uppercase tracking-widest text-xs mb-4">
                    Introduction
                  </h3>
                  <p className="text-xl leading-relaxed text-slate-700">
                    USFRANC (USFC) is a decentralized cryptocurrency coin
                    designed for worldwide use as a payment instrument. Built on
                    a hybrid{" "}
                    <span className="font-bold text-slate-900">
                      PoW and PoS blockchain
                    </span>
                    , facilitating secure and transparent transactions.
                  </p>
                </div>
                <div className="p-8 bg-[#7b5e00] text-white rounded-3xl shadow-xl shadow-[#7b5e00]/20">
                  <AlertCircle className="mb-4 opacity-80" />
                  <h4 className="font-bold mb-2">Notice</h4>
                  <p className="text-sm opacity-90 leading-relaxed">
                    USFRANC is not a stablecoin, not a security, and does not
                    offer any investment return or income rights.
                  </p>
                </div>
              </div>

              <section>
                <div className="flex items-center gap-4 mb-8">
                  <Globe size={20} className="text-[#7b5e00]" />
                  <h2 className="text-2xl font-black uppercase tracking-tighter">
                    Regional Overview
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      region: "European Union",
                      meta: "MiCA Compliant",
                      text: "Utility coin status. Complies with consumer disclosure and technical audit guidelines.",
                    },
                    {
                      region: "United States",
                      meta: "SEC / FinCEN",
                      text: "Not a security under the Howey Test. Operations align with FinCEN guidance.",
                    },
                    {
                      region: "United Kingdom",
                      meta: "FCA",
                      text: "Complies with promotional restrictions. No custody or investments offered.",
                    },
                    {
                      region: "France",
                      meta: "AMF / ACPR",
                      text: "Full French documentation and capital reserve policy available for review.",
                    },
                    {
                      region: "Turkey",
                      meta: "MASAK",
                      text: "Holding and trading is lawful. Payment use subject to local restrictions.",
                    },
                    {
                      region: "Asia-Pacific",
                      meta: "Multi-Region",
                      text: "Authorized for payments in Japan, Singapore, Vietnam, and South Korea.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-[#7b5e00] transition-colors group">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-bold text-lg">{item.region}</h4>
                        <span className="text-[10px] font-black px-2 py-1 bg-slate-100 rounded-md text-slate-500 uppercase">
                          {item.meta}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#7b5e00] blur-[120px] opacity-20" />
                <div className="max-w-3xl relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-[#7b5e00] rounded-lg">
                      <Landmark size={20} />
                    </div>
                    <h2 className="text-2xl font-bold">
                      Capital Reserve & Ownership
                    </h2>
                  </div>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    All listed investments are fully held and controlled by
                    USFRANC corporate entities. These reserves are allocated for
                    internal project stability and operational continuity.
                  </p>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-sm italic text-white/70">
                    USFRANC cryptocurrency holders have no ownership, legal
                    right, security interest, or financial claim to these
                    assets.
                  </div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div key="franc" {...fadeIn} className="space-y-12">
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 space-y-4">
                  <h2 className="text-3xl font-black leading-none">
                    01.
                    <br />
                    Classification Juridique
                  </h2>
                  <div className="h-1 w-12 bg-[#7b5e00]" />
                  <p className="text-slate-500 text-sm">
                    Dernière mise à jour : Avril 2025
                  </p>
                </div>
                <div className="lg:col-span-8 bg-white p-8 rounded-3xl border border-slate-200">
                  <p className="text-lg text-slate-700 mb-6">
                    USFRANC n’est ni un titre financier, ni une monnaie
                    électronique. Il s’agit d’une{" "}
                    <span className="text-slate-900 font-bold underline decoration-[#7b5e00]">
                      cryptomonnaie décentralisée
                    </span>{" "}
                    destinée aux paiements.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Aucun droit à des profits",
                      "Aucun dividende distribué",
                      "Aucun droit sur les actifs",
                      "Non adossé à une monnaie fiduciaire",
                    ].map((text, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-sm text-slate-600">
                        <ChevronRight size={16} className="text-[#7b5e00]" />
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <ShieldCheck className="text-[#7b5e00] mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-4">
                    Union Européenne (MiCA)
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Classé comme une cryptomonnaie utilitaire. Livre blanc
                    publié selon les exigences de MiCA. Respect strict du RGPD
                    pour la protection des données.
                  </p>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <MapPin className="text-[#7b5e00] mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-4">
                    Juridictions Restreintes
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    USFRANC n’est pas proposé aux États-Unis, au Royaume-Uni,
                    dans l’État de New York, ou dans les pays sous sanctions
                    internationales.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-12 flex flex-col md:flex-row gap-6 justify-between items-center">
                <div className="flex items-center gap-4">
                  <Mail className="text-[#7b5e00]" />
                  <span className="font-bold">compliance@usfranc.com</span>
                </div>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold shadow-sm">
                    Livre Blanc (PDF)
                  </div>
                  <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold shadow-sm">
                    Architecture PoW+PoS
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <section className="mt-24 pt-12 border-t border-slate-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-black mb-4">
                Transparency & Documents
              </h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                We maintain an open-access repository for our detailed
                whitepaper, capital reserve policy, and compliance briefs.
              </p>
              <div className="flex items-center gap-3 text-[#7b5e00] font-bold">
                <Mail size={18} />
                <a href="mailto:usfranc@bobosohomail.com">
                  usfranc@bobosohomail.com
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 flex gap-4 items-center">
              <div className="h-12 w-12 rounded-xl bg-[#7b5e00]/10 flex items-center justify-center text-[#7b5e00]">
                <FileText />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">
                  Compliance Brief
                </p>
                <p className="text-sm font-medium text-slate-700 underline cursor-pointer">
                  Download Regional Briefing 2025
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Compliance;
