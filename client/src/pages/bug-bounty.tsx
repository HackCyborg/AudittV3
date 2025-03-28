import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import SectionHeading from "@/components/shared/section-heading";
import {
  Fingerprint,
  Target,
  Trophy,
  ShieldCheck,
  Zap,
  Users,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Banknote,
  Shield,
} from "lucide-react";

const BugBounty: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#00264d] z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                <ShieldCheck className="h-4 w-4 mr-2" /> Community-Powered Security
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Bug Bounty Programs
              </h1>
              <p className="text-white/80 text-lg mb-8 md:pr-8 leading-relaxed">
                Join our network of security researchers and help protect Web3 projects from vulnerabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/bug-bounty/signup">
                  <Button size="lg" className="bg-white hover:bg-white/90 text-[#00264d]">
                    Start Hunting <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Active Programs
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg">
                <img 
                  src="/src/assets/images/bug-bounty-graphic.png" 
                  alt="Bug Bounty Program" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/30 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-20 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            tagline="Bug Bounty Process"
            title="How Our Bug Bounty Programs Work"
            description="Our streamlined process ensures clear scope, fair rewards, and efficient vulnerability management."
            textAlignment="center"
          />

          <div className="max-w-5xl mx-auto mt-16">
            <div className="relative">
              <div className="hidden md:block absolute left-16 top-8 bottom-8 w-1 bg-gradient-to-b from-[#032757] via-indigo-500 to-blue-400 rounded-full z-0"></div>

              {[
                {
                  icon: <Target className="w-7 h-7" />,
                  title: "Define Scope & Rewards",
                  description:
                    "Clearly define what systems are in scope and establish reward tiers based on vulnerability severity.",
                  color: "#032757",
                },
                {
                  icon: <Users className="w-7 h-7" />,
                  title: "Engage Security Researchers",
                  description:
                    "Your program is shared with our community of verified security researchers who begin hunting for vulnerabilities.",
                  color: "#4f46e5",
                },
                {
                  icon: <ShieldCheck className="w-7 h-7" />,
                  title: "Submission & Verification",
                  description:
                    "Researchers submit detailed vulnerability reports which are verified by our expert team.",
                  color: "#0891b2",
                },
                {
                  icon: <Zap className="w-7 h-7" />,
                  title: "Fix & Remediation",
                  description:
                    "Collaborate with researchers to understand and fix identified vulnerabilities.",
                  color: "#4f46e5",
                },
                {
                  icon: <Trophy className="w-7 h-7" />,
                  title: "Reward Distribution",
                  description:
                    "Once verified and fixed, rewards are distributed to the researchers who discovered the vulnerabilities.",
                  color: "#032757",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex mb-12 relative z-10 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="mr-8 flex-shrink-0">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 text-white"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}, ${step.color}CC)`,
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex-grow group-hover:shadow-md transition-all">
                    <h3 className="text-xl font-semibold mb-3 text-slate-800">
                      {step.title}
                    </h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-white/0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group hover:shadow-md transition-all">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#032757] text-sm font-medium mb-6">
                <Shield className="h-4 w-4 mr-2" /> For Projects
              </div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800">
                Why Launch a Bug Bounty?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Proactive Security",
                    description:
                      "Identify vulnerabilities before malicious actors can exploit them.",
                  },
                  {
                    title: "Cost-Effective",
                    description:
                      "Pay only for verified vulnerabilities, much more cost-effective than security breaches.",
                  },
                  {
                    title: "Community Trust",
                    description:
                      "Demonstrate your commitment to security, building user and investor confidence.",
                  },
                  {
                    title: "Diverse Expertise",
                    description:
                      "Benefit from diverse perspectives and specialized expertise across our researcher community.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-[#032757]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group hover:shadow-md transition-all">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
                <Users className="h-4 w-4 mr-2" /> For Hunters
              </div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800">
                Why Become a Bug Hunter?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Competitive Rewards",
                    description:
                      "Earn bounties for discovering and reporting security vulnerabilities.",
                  },
                  {
                    title: "Build Reputation",
                    description:
                      "Establish yourself in the Web3 security community with verified findings.",
                  },
                  {
                    title: "Learn & Grow",
                    description:
                      "Sharpen your skills by working on cutting-edge blockchain technologies.",
                  },
                  {
                    title: "Ethical Impact",
                    description:
                      "Make a positive impact by helping secure the future of Web3.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/30 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">
              Featured Bug Bounty Programs
            </h2>
            <p className="text-lg text-slate-600">
              Explore active bug bounty programs currently running on our
              platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "DeFi Protocol Alpha",
                rewards: "Up to $50,000",
                focus: "Smart Contract Vulnerabilities",
                status: "Active",
                color: "#032757",
              },
              {
                name: "NFT Marketplace Beta",
                rewards: "Up to $25,000",
                focus: "Frontend & Smart Contract Security",
                status: "Active",
                color: "#4f46e5",
              },
              {
                name: "CrossChain Bridge",
                rewards: "Up to $100,000",
                focus: "Cross-chain Vulnerabilities",
                status: "Active",
                color: "#0891b2",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all h-full">
                  <div
                    className="h-28 flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${program.color}, ${program.color}CC)`,
                    }}
                  >
                    <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
                    <h3 className="text-xl font-bold text-white relative z-10">
                      {program.name}
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-slate-800">
                        {program.rewards}
                      </span>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {program.status}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-6">
                      Focus: {program.focus}
                    </p>
                    <Button
                      className="w-full text-white transition-all"
                      style={{
                        backgroundColor: program.color,
                        boxShadow: `0 4px 14px -3px ${program.color}40`,
                      }}
                    >
                      View Program{" "}
                      <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="btn-outline">
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#032757] to-blue-600 z-0"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-400/20 to-transparent"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Secure Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Launch a bug bounty program today and harness the power of our
              security researcher community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-[#032757] hover:bg-white/90"
                size="lg"
              >
                Start a Bug Bounty <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                size="lg"
              >
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BugBounty;