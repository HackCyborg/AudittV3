import React from "react";
import { Button } from "@/components/ui/button";
import {
  Shield,
  LockKeyhole,
  FileCheck,
  Zap,
  Clock,
  Check,
} from "lucide-react";
import SectionHeading from "@/components/shared/section-heading";
import CTASection from "@/components/sections/cta-section";

const Business: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#032757] to-blue-600 z-0"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
        <div className="absolute top-1/4 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Secure Your Web3 Project with Confidence
              </h1>
              <p className="text-white/90 text-lg mb-8 md:pr-8 leading-relaxed">
                Auditt provides comprehensive security solutions for blockchain
                projects through transparent audit processes, verified security
                experts, and managed bug bounty programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-white text-[#032757] hover:bg-white/90"
                  size="lg"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-[#032757]  hover:bg-white/10"
                  size="lg"
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-[#032757]/10 to-blue-400/10 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 border-2 border-dashed border-white/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm w-48 h-48 rounded-2xl shadow-lg flex items-center justify-center">
                    <LockKeyhole className="w-28 h-28 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-10 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            tagline="For Businesses"
            title="Comprehensive Security Solutions"
            description="Protect your blockchain projects with our full suite of security services designed for Web3."
            textAlignment="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Shield className="w-10 h-10 text-[#032757]" />,
                title: "Comprehensive Security Audits",
                description:
                  "In-depth reviews of your smart contracts and blockchain infrastructure by our network of verified security experts.",
              },
              {
                icon: <LockKeyhole className="w-10 h-10 text-[#032757]" />,
                title: "Bug Bounty Management",
                description:
                  "Set up and manage bug bounty programs to incentivize security researchers to find and report vulnerabilities.",
              },
              {
                icon: <FileCheck className="w-10 h-10 text-[#032757]" />,
                title: "Blockchain-Verified Reports",
                description:
                  "All audit results are recorded on-chain, providing immutable proof of security verification for your stakeholders.",
              },
              {
                icon: <Zap className="w-10 h-10 text-[#032757]" />,
                title: "Emergency Response",
                description:
                  "Rapid response service for critical vulnerabilities with immediate expert intervention and mitigation strategies.",
              },
              {
                icon: <Clock className="w-10 h-10 text-[#032757]" />,
                title: "Continuous Monitoring",
                description:
                  "Ongoing security monitoring services to ensure your project remains secure as it evolves.",
              },
              {
                icon: <Check className="w-10 h-10 text-[#032757]" />,
                title: "Regulatory and Compliance",
                description:
                  "Guidance and documentation to help your project comply with evolving Web3 security regulations and standards.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110 transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/30 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#032757] text-sm font-medium mb-4">
              <Shield className="h-4 w-4 mr-2" /> Our Advantages
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Why Choose Auditt
            </h2>
            <p className="text-lg text-slate-600">
              Our platform offers unique advantages for Web3 business security
              needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Transparent Verification",
                description:
                  "Our blockchain-based verification system provides immutable proof of security audits, building trust with your community and investors.",
                color: "#032757",
              },
              {
                title: "Elite Auditor Network",
                description:
                  "Access to a network of rigorously vetted security experts specializing in blockchain and smart contract security.",
                color: "#4f46e5",
              },
              {
                title: "Comprehensive Coverage",
                description:
                  "From smart contracts to frontend interfaces, our security solutions cover all aspects of your Web3 project.",
                color: "#0891b2",
              },
              {
                title: "Customizable Solutions",
                description:
                  "Flexible security packages tailored to your project's specific needs, size, and development stage.",
                color: "#032757",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className="w-12 h-1 mb-6 rounded-full"
                  style={{ backgroundColor: feature.color }}
                ></div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800 group-hover:text-[#032757] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-10 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#032757] text-sm font-medium mb-4">
              <FileCheck className="h-4 w-4 mr-2" /> Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              How We've Helped Web3 Projects
            </h2>
            <p className="text-lg text-slate-600">
              See how Auditt has helped secure leading blockchain platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "DeFi Protocol",
                description:
                  "Critical vulnerabilities discovered and fixed before launch, saving millions in potential losses.",
                metric: "14 Vulnerabilities Identified",
                color: "#032757",
                icon: <Shield className="w-16 h-16 text-white/80" />,
              },
              {
                title: "NFT Marketplace",
                description:
                  "Comprehensive security audit and ongoing bug bounty program led to secure, successful launch.",
                metric: "99.8% Security Rating",
                color: "#4f46e5",
                icon: <FileCheck className="w-16 h-16 text-white/80" />,
              },
              {
                title: "Layer 2 Solution",
                description:
                  "Blockchain-verified audit reports helped build investor confidence and community trust.",
                metric: "$50M+ Protected",
                color: "#0891b2",
                icon: <LockKeyhole className="w-16 h-16 text-white/80" />,
              },
            ].map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className="h-40 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${study.color}, ${study.color}CC)`,
                  }}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                  <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
                    {study.icon}
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center bg-blue-50 text-[#032757] text-sm px-3 py-1 rounded-full mb-3">
                    <Check className="h-4 w-4 mr-1" /> {study.metric}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-800">
                    {study.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{study.description}</p>
                  <Button
                    variant="link"
                    className="text-[#032757] p-0 group-hover:underline"
                  >
                    Read Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Business;
