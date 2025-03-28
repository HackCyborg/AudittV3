import React from "react";
import { useLocation } from "wouter";
import { Shield, ShieldCheck, Fingerprint, ExternalLink, FileEdit, ArrowRight } from "lucide-react";
import PartnerLogo1 from "../../assets/partner-logo1.svg";
import PartnerLogo2 from "../../assets/partner-logo2.svg";
import PartnerLogo3 from "../../assets/partner-logo3.svg";
import PartnerLogo4 from "../../assets/partner-logo4.svg";
import PartnerLogo5 from "../../assets/partner-logo5.svg";

const HeroSection: React.FC = () => {
  const [_, navigate] = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <section className="relative overflow-hidden bg-gray-50">
      {/* Minimalist Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-100 to-transparent"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-gray-300 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-gray-300 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 min-h-[650px] flex flex-col items-center justify-center py-16 lg:py-24">
        <div className="w-full max-w-5xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-sm font-medium mb-8">
            <Shield className="h-4 w-4 mr-2" /> Web3 Security Platform
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900">
            Trust in Every Transaction,
            <br />
            <span className="text-black">Transparency in Every Audit</span>
          </h1>

          <p className="text-lg mb-12 text-gray-700 max-w-2xl mx-auto">
            Auditt is a pioneering platform that brings transparency to blockchain security 
            by storing audit results on-chain, creating a verifiable and immutable database.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center">
            <button 
              onClick={() => handleNavigation("/bug-bounty")}
              className="inline-flex items-center bg-gray-900 hover:bg-black text-white text-base font-medium rounded-md shadow-sm transition-all px-8 py-4 cursor-pointer"
            >
              <Shield className="h-5 w-5 mr-3" /> Explore Bug Bounties
            </button>
            <button 
              onClick={() => handleNavigation("/post-project")}
              className="inline-flex items-center bg-[#ff6b35] hover:bg-[#ff6b35]/90 text-white text-base font-medium rounded-md shadow-sm transition-all px-8 py-4 cursor-pointer"
            >
              <FileEdit className="h-5 w-5 mr-3" /> Post Your Project
            </button>
            <button 
              onClick={() => handleNavigation("/verified-auditors")}
              className="inline-flex items-center bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 text-base font-medium rounded-md shadow-sm transition-all px-8 py-4 cursor-pointer"
            >
              <ShieldCheck className="h-5 w-5 mr-3" /> Verified Auditor Network
            </button>
          </div>

          <div className="flex items-center justify-center space-x-4 text-gray-600">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 text-xs font-medium ring-2 ring-white">
                S1
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-800 text-xs font-medium ring-2 ring-white">
                A2
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-medium ring-2 ring-white">
                B3
              </div>
            </div>
            <span className="text-sm font-medium">500+ Verified Auditors</span>
          </div>
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="absolute top-1/3 right-10 w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-gray-300 rounded-full"></div>
          
          <div className="absolute top-1/2 right-1/4 w-8 h-8 border border-gray-300 rounded-lg transform rotate-12"></div>
          <div className="absolute bottom-1/3 left-1/4 w-4 h-4 border border-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Trusted by Section */}
      <div className="bg-gray-900 py-16 lg:py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block mb-10 px-4 py-1 bg-gray-800 rounded-full text-sm font-medium text-gray-200">
              Trusted by Industry Leaders
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              <img
                src={PartnerLogo1}
                alt="Partner logo"
                className="h-10 opacity-60 hover:opacity-100 transition-opacity"
              />
              <img
                src={PartnerLogo2}
                alt="Partner logo"
                className="h-10 opacity-60 hover:opacity-100 transition-opacity"
              />
              <img
                src={PartnerLogo3}
                alt="Partner logo"
                className="h-10 opacity-60 hover:opacity-100 transition-opacity"
              />
              <img
                src={PartnerLogo4}
                alt="Partner logo"
                className="h-10 opacity-60 hover:opacity-100 transition-opacity"
              />
              <img
                src={PartnerLogo5}
                alt="Partner logo"
                className="h-10 opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;