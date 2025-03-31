import React from "react";
import { icons, Shield, ShieldCheck, FileEdit, LockKeyhole } from "lucide-react";
import {
  SiEthereum,
  SiPolygon,
  SiChainlink,
  SiBinance,
  SiSolana,
  SiZcash,
  SiRipple,
  SiLitecoin,
  SiStellar,
  SiDogecoin,
  SiMonero,
  SiBitcoin,
} from "react-icons/si";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 text-white">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f8ff] to-[#e8f0ff] z-0"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

      <div className="relative z-10 h-[600px] flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#032757]/10 text-[#032757] text-sm font-medium mb-6">
            <LockKeyhole className="h-4 w-4 mr-2" /> Welcome to Auditt
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-[#032757]">
            Trust in Every Transaction,
            <br />
            Transparency in Every Audit
          </h1>

          <p className="text-lg mb-10 text-gray-700 max-w-2xl mx-auto">
            Auditt is a pioneering web3 platform that allows auditors to upload
            their audits to a blockchain, creating an on-chain, transparent, and
            verifiable database.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <button
              onClick={() => window.open("/bug-bounty", "_self")}
              className="inline-flex items-center bg-black hover:bg-gray-800 text-white text-base rounded-lg transition-all px-6 py-3 cursor-pointer shadow-md"
            >
              <Shield className="h-5 w-5 mr-2" /> Explore Bug Bounties
            </button>
            <button
              onClick={() => window.open("/post-project", "_self")}
              className="inline-flex items-center bg-black hover:bg-gray-800 text-white text-base rounded-lg transition-all px-6 py-3 cursor-pointer shadow-md"
            >
              <FileEdit className="h-5 w-5 mr-2" /> Post Your Project
            </button>
            <button
              onClick={() => window.open("http://4.247.133.175:5678/", "_blank")}
              className="inline-flex items-center bg-black hover:bg-gray-800 text-white text-base rounded-lg transition-all px-6 py-3 cursor-pointer shadow-md"
            >
              <ShieldCheck className="h-5 w-5 mr-2" /> Find an Auditor
            </button>
          </div>
        </div>
      </div>

      {/* Trusted by Section */}
      <div className="bg-black py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block mb-8 px-4 py-1 bg-gray-900 border border-gray-800 rounded-full text-sm font-medium text-gray-300 animate-pulse">
              Trusted by Industry Leaders
            </div>

            {/* Marquee Slider */}
            <div className="marquee-container">
              <div className="marquee-content">
                {/* First set of logos (these are duplicated to create continuous scrolling) */}
                <div className="partner-logo-wrapper">
                  <SiEthereum className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiPolygon className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiChainlink className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiBinance className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiSolana className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiZcash className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>

                {/* Second set of logos (duplicate to make seamless loop) */}
                <div className="partner-logo-wrapper">
                  <SiEthereum className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiPolygon className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiChainlink className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiBinance className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiSolana className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiZcash className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            {/* Second row with reverse animation */}
            <div className="marquee-container mt-8">
              <div className="marquee-content-reverse">
                {/* First set of logos for second row */}
                <div className="partner-logo-wrapper">
                  <SiRipple className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiLitecoin className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiStellar className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiDogecoin className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiMonero className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiBitcoin className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>

                {/* Second set of logos for second row (duplicate) */}
                <div className="partner-logo-wrapper">
                  <SiRipple className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiLitecoin className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiStellar className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiDogecoin className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiMonero className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="partner-logo-wrapper">
                  <SiBitcoin className="h-10 w-10 text-gray-300 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
