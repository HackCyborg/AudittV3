
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { InfoIcon } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-[#032757] to-blue-600">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-white/10 p-8 rounded-3xl backdrop-blur-sm">
          {/* Left Column - Info */}
          <div className="text-white p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-8 mb-4">
              Join Our Network of<br />
              Elite Auditors
            </h1>
            <p className="text-white mb-8">
              Become part of our trusted community<br />
              of Web3 security professionals.
            </p>

            <div className="mt-auto flex items-center">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white">
                ?
              </div>
              <span className="ml-2 text-sm font-medium text-white">DOCS</span>
            </div>
          </div>

          {/* Right Column - Sign Up Form */}
          <div className="p-8 bg-white rounded-2xl shadow-sm">
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
                <Label htmlFor="experience">Years of Experience*</Label>
                <Input
                  id="experience"
                  type="number"
                  placeholder="Enter years of experience"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="specialization">Specialization*</Label>
                <Input
                  id="specialization"
                  placeholder="e.g., Smart Contracts, DeFi, NFTs"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="portfolio">Portfolio URL</Label>
                <Input
                  id="portfolio"
                  placeholder="Enter your portfolio or Github URL"
                  className="mt-1"
                />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditorSignUp;
