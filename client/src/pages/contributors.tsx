import React from "react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/section-heading";
import {
  Users,
  Code,
  Award,
  BookOpen,
  ArrowRight,
  Globe,
  Bug,
  Medal,
  ChevronRight,
} from "lucide-react";
import { Link } from "wouter";
import BackgroundAnimation from "@/components/animations/background-animation";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/Animation - 1743160461153.json";

const Contributors: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001c3a] to-[#00264d] z-0"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

        {/* Animated background */}
        <BackgroundAnimation className="absolute inset-0" opacity={0.2} />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-400/20 to-transparent"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Contributor Community
              </h1>
              <p className="text-white/90 text-lg mb-8 md:pr-8">
                Contribute to the Auditt ecosystem as a researcher, developer,
                or knowledge contributor. Help build a more secure Web3
                together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-white text-[#00264d] hover:bg-white/90"
                  size="lg"
                >
                  Become a Contributor <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="bg-[#00264d]/10 border-2 border-white/20 backdrop-blur-sm text-white hover:bg-[#00264d]/20"
                  size="lg"
                >
                  Explore Opportunities
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-md">
                <Lottie
                  animationData={animationData}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Contribute Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Get Involved"
            title="Ways to Contribute"
            description="There are multiple ways to become a part of the Auditt ecosystem and help secure the Web3 space."
            textAlignment="center"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Bug className="w-14 h-14 text-[#00264d]" />,
                title: "Bug Bounty Hunter",
                description:
                  "Find and report security vulnerabilities in Web3 projects to earn rewards and build your reputation.",
                link: "/bug-bounty",
              },
              {
                icon: <Code className="w-14 h-14 text-[#00264d]" />,
                title: "Open Source Developer",
                description:
                  "Contribute to our open-source security tools, libraries, and frameworks to improve Web3 security.",
                link: "#",
              },
              {
                icon: <Globe className="w-14 h-14 text-[#00264d]" />,
                title: "Community Educator",
                description:
                  "Create educational content, host workshops, or mentor others in Web3 security best practices.",
                link: "/community",
              },
            ].map((role, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-all flex flex-col h-full"
              >
                <div className="mb-6">{role.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  {role.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {role.description}
                </p>
                <Link href={role.link}>
                  <Button className="bg-[#00264d] text-white hover:bg-[#00264d]/90 mt-auto">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-900">
            Benefits of Contributing
          </h2>
          <p className="text-lg text-center text-gray-600 mb-10 mx-auto max-w-3xl">
            Join our network of security professionals and enjoy these exclusive
            benefits.
          </p>

          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="space-y-6">
                {[
                  {
                    title: "Build Your Reputation",
                    description:
                      "Establish yourself as an expert in Web3 security with verified contributions on our platform.",
                  },
                  {
                    title: "Earn Rewards",
                    description:
                      "Receive competitive rewards for bug bounties and significant contributions to the ecosystem.",
                  },
                  {
                    title: "Access Exclusive Opportunities",
                    description:
                      "Get early access to security challenges, research grants, and career opportunities.",
                  },
                  {
                    title: "Network with Experts",
                    description:
                      "Connect with leading security professionals, auditors, and Web3 developers.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#00264d] text-white flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Contributor Recognition
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: <Medal className="w-10 h-10 text-[#00264d]" />,
                    title: "Contribution Badges",
                    description:
                      "Earn verifiable badges for your security contributions, displayed on your profile.",
                  },
                  {
                    icon: <Award className="w-10 h-10 text-[#00264d]" />,
                    title: "Leaderboards",
                    description:
                      "Get recognized on our community leaderboards for consistent high-quality contributions.",
                  },
                  {
                    icon: <BookOpen className="w-10 h-10 text-[#00264d]" />,
                    title: "Featured Case Studies",
                    description:
                      "Have your significant contributions highlighted in our case studies and blog posts.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <SectionHeading
              tagline="Join the Network"
              title="How to Get Started"
              description="Follow these steps to begin your journey as an Auditt contributor"
              textAlignment="center"
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-16 top-0 bottom-0 w-1 bg-[#00264d]/10 z-0"></div>

              {[
                {
                  title: "Create Your Profile",
                  description:
                    "Sign up and create your contributor profile, highlighting your skills and expertise.",
                },
                {
                  title: "Choose Your Path",
                  description:
                    "Select how you want to contribute: bug hunting, development, education, or research.",
                },
                {
                  title: "Complete Onboarding",
                  description:
                    "Go through our brief onboarding process to understand our standards and processes.",
                },
                {
                  title: "Start Contributing",
                  description:
                    "Begin with your first contribution, whether it's a bug report, code submission, or article.",
                },
              ].map((step, index) => (
                <div key={index} className="flex mb-12 relative z-10">
                  <div className="mr-8 flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#00264d] text-white flex items-center justify-center font-bold text-lg shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Contributors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Community Heroes"
            title="Meet Our Top Contributors"
            description="These members of our community have made exceptional contributions to Web3 security"
            textAlignment="center"
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "David Chen",
                role: "Security Researcher",
                achievement:
                  "Discovered 20+ critical vulnerabilities across DeFi protocols",
                initial: "D",
              },
              {
                name: "Elena Rodriguez",
                role: "Smart Contract Developer",
                achievement:
                  "Created open-source security tools used by 50+ projects",
                initial: "E",
              },
              {
                name: "James Wilson",
                role: "Community Educator",
                achievement:
                  "Authored comprehensive guides on Web3 security best practices",
                initial: "J",
              },
            ].map((contributor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="h-32 bg-gradient-to-r from-[#001c3a] to-[#00264d] flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-2xl font-bold text-[#00264d]">
                    {contributor.initial}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">
                    {contributor.name}
                  </h3>
                  <p className="text-[#00264d] font-medium mb-3">
                    {contributor.role}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-4">
                    <p className="text-gray-600">"{contributor.achievement}"</p>
                  </div>
                  <Button className="w-full bg-[#00264d] text-white hover:bg-[#00264d]/90">
                    View Profile <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001c3a] to-[#00264d] z-0"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-400/20 to-transparent"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our community of security experts, developers, and educators to
            help build a more secure Web3 ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-[#00264d] hover:bg-white/90"
              size="lg"
            >
              Apply to Join <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              className="bg-[#00264d]/10 border-2 border-white/20 backdrop-blur-sm text-white hover:bg-[#00264d]/20"
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contributors;
