import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { InfoIcon, ShieldCheck, Award } from "lucide-react";

const AuditorSignUp: React.FC = () => {
  // Hide navbar and footer for this page
  useEffect(() => {
    const navbar = document.querySelector("nav");
    const footer = document.querySelector("footer");

    if (navbar) navbar.style.display = "none";
    if (footer) footer.style.display = "none";

    return () => {
      if (navbar) navbar.style.display = "";
      if (footer) footer.style.display = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Welcome Message */}
          <div
            className="flex flex-col justify-center p-8 rounded-2xl"
            style={{ backgroundColor: "#032757" }}
          >
            <div className="flex items-center mb-2">
              <div className="bg-black p-1 rounded">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="ml-2 text-lg font-semibold text-white">
                Auditt
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mt-8 mb-4">
              Join Our Verified <br />
              Auditor Network
            </h1>
            <p className="text-white mb-8">
              Connect with leading Web3 projects and apply your security expertise
              <br />
              to build a safer blockchain ecosystem.
            </p>

            <div className="flex space-x-4 my-8">
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 text-white mr-2" />
                <span className="text-sm text-white">Rigorous Vetting</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-white mr-2" />
                <span className="text-sm text-white">Premium Projects</span>
              </div>
            </div>

            <div className="mt-auto flex items-center">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white">
                ?
              </div>
              <span className="ml-2 text-sm font-medium text-white">DOCS</span>
            </div>
          </div>

          {/* Right Column - Sign Up Form */}
          <div className="p-8 bg-white rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Auditor Application</h2>
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="fullName">Full name*</Label>
                <Input
                  id="fullName"
                  placeholder="Enter full name"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email*</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  className="mt-1"
                />
              </div>

              <div className="relative">
                <Label htmlFor="password" className="flex items-center">
                  Password*
                  <InfoIcon className="h-4 w-4 ml-1 text-gray-400" />
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="specialization">Primary Security Specialization*</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your primary expertise" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="smart-contract">Smart Contract Security</SelectItem>
                    <SelectItem value="defi">DeFi Protocol Security</SelectItem>
                    <SelectItem value="zk">ZK Rollups & L2 Solutions</SelectItem>
                    <SelectItem value="nft">NFT & Marketplace Security</SelectItem>
                    <SelectItem value="cross-chain">Cross-chain Protocols</SelectItem>
                    <SelectItem value="dao">DAO Governance</SelectItem>
                    <SelectItem value="solidity">Solidity & EVM Security</SelectItem>
                    <SelectItem value="frontend">Frontend Security</SelectItem>
                    <SelectItem value="tokenomics">Tokenomics Audits</SelectItem>
                    <SelectItem value="gas">Gas Optimization</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="experience">Experience Level*</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2">1-2 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="portfolio">Portfolio Links (GitHub, Previous Audits, etc.)*</Label>
                <Textarea
                  id="portfolio"
                  placeholder="Enter links to your previous work, separated by new lines"
                  className="mt-1 resize-none"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="telegram" className="text-gray-600">
                  Telegram <span className="text-gray-400">(optional)</span>
                </Label>
                <Input
                  id="telegram"
                  placeholder="Enter Telegram nickname"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="source">How did you find out about us?</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Please choose one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="search">Search Engine</SelectItem>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="friend">Friend's Recommendation</SelectItem>
                    <SelectItem value="conference">Conference</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start space-x-2 mt-4">
                <Checkbox id="terms" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="terms" className="text-sm text-gray-600">
                    I have read and accept the{" "}
                    <a href="#" className="underline font-medium">
                      Terms and Conditions
                    </a>{" "}
                    and the{" "}
                    <a href="#" className="underline font-medium">
                      Privacy Notice
                    </a>
                  </Label>
                </div>
              </div>

              <Button className="w-full bg-[#032757] hover:bg-black text-white">
                Submit Application
              </Button>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                All applications are subject to our verification process. We'll contact you within 5 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditorSignUp;