import React from "react";
import { Shield, ShieldCheck, FileEdit } from "lucide-react";
import PartnerLogo1 from "../../assets/partner-logo1.svg";
import PartnerLogo2 from "../../assets/partner-logo2.svg";
import PartnerLogo3 from "../../assets/partner-logo3.svg";
import PartnerLogo4 from "../../assets/partner-logo4.svg";
import PartnerLogo5 from "../../assets/partner-logo5.svg";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-black opacity-90"></div>
        <div className="absolute w-full h-full bg-[url('/assets/blockchain-network.svg')] bg-cover bg-center opacity-20"></div>
      </div>

      <div className="relative z-10 h-[600px] flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6 animate-pulse">
            <Shield className="h-4 w-4 mr-2" /> Welcome to Auditt
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight animate-fade-in">
            Trust in Every Transaction,
            <br />
            Transparency in Every Audit
          </h1>

          <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto animate-fade-in delay-200">
            Auditt is a pioneering web3 platform that allows auditors to upload
            their audits to a blockchain, creating an on-chain, transparent, and
            verifiable database.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center animate-slide-up">
            <button
              onClick={() => window.open("/bug-bounty", "_self")}
              className="inline-flex items-center bg-black hover:bg-black/80 text-white text-base rounded-lg transition-all px-6 py-3 cursor-pointer shadow-md shadow-black/30 border border-gray-800"
            >
              <Shield className="h-5 w-5 mr-2" /> Explore Bug Bounties
            </button>
            <button
              onClick={() => window.open("/post-project", "_self")}
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white text-base rounded-lg transition-all px-6 py-3 cursor-pointer shadow-md shadow-black/30 border border-gray-800"
            >
              <FileEdit className="h-5 w-5 mr-2" /> Post Your Project
            </button>
            <button
              onClick={() => window.open("/verified-auditors", "_self")}
              className="inline-flex items-center bg-black hover:bg-black/80 text-white text-base rounded-lg transition-all px-6 py-3 cursor-pointer shadow-md shadow-black/30 border border-gray-800"
            >
              <ShieldCheck className="h-5 w-5 mr-2" /> Verified Auditor Network
            </button>
          </div>
        </div>
      </div>

      {/* Trusted by Section */}
      <div className="bg-black py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block mb-8 px-4 py-1 bg-gray-900 border border-gray-800 rounded-full text-sm font-medium text-gray-300 animate-pulse">
              Trusted by Industry Leaders
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center animate-fade-in">
              <img
                src={PartnerLogo1}
                alt="Partner logo"
                className="h-10 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={PartnerLogo2}
                alt="Partner logo"
                className="h-10 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={PartnerLogo3}
                alt="Partner logo"
                className="h-10 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={PartnerLogo4}
                alt="Partner logo"
                className="h-10 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={PartnerLogo5}
                alt="Partner logo"
                className="h-10 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
