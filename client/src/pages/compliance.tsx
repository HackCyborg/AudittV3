import React from "react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/section-heading";
import Lottie from "lottie-react";
import complianceAnimation from "@/assets/animations/laboratory-animation.json";
import {
  FileText,
  Check,
  Shield,
  FileCheck,
  Scale,
  BookOpen,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Compliance: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-14 lg:py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001c3a] to-[#00264d] z-0"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQgMUM5LjAzOTQzIDEgNS45NjA3OCA1Ljk2MDU3IDEgNS45NjA1N1YxNEgxNFYxWiIgc3Ryb2tlPSIjODA4MDgwIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+Cg==')] opacity-30 z-0"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                <Shield className="h-4 w-4 mr-2" /> Regulatory Excellence
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Regulatory Compliance & Standards
              </h1>
              <p className="text-white/80 text-lg mb-8 md:pr-8 leading-relaxed">
                Navigate the complex regulatory landscape of Web3 with our
                comprehensive compliance solutions. Auditt helps your
                project meet industry standards and regulatory requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-[#00264d]"
                >
                  Get Compliance Audit <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-[#00264d]"
                >
                  Learn About Standards
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg">
                <Lottie
                  animationData={complianceAnimation}
                  className="w-full"
                  style={{
                    filter:
                      "drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.2))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Compliance Matters */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="The Importance"
            title="Why Compliance Matters in Web3"
            description="Regulatory compliance is increasingly critical for blockchain projects to achieve mainstream adoption and long-term success."
            textAlignment="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Shield className="h-10 w-10 text-primary-600" />,
                title: "Risk Mitigation",
                description:
                  "Protect your project from legal challenges, fines, and regulatory actions with proactive compliance measures.",
              },
              {
                icon: <Scale className="h-10 w-10 text-primary-600" />,
                title: "Investor Confidence",
                description:
                  "Build trust with investors by demonstrating your commitment to following regulatory requirements and best practices.",
              },
              {
                icon: <FileCheck className="h-10 w-10 text-primary-600" />,
                title: "Market Access",
                description:
                  "Ensure your project can operate in various jurisdictions by meeting their specific regulatory requirements.",
              },
              {
                icon: <ClipboardCheck className="h-10 w-10 text-primary-600" />,
                title: "Community Trust",
                description:
                  "Foster user confidence by showing that your project adheres to recognized security and operational standards.",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-primary-600" />,
                title: "Future-Proofing",
                description:
                  "Stay ahead of evolving regulations with ongoing compliance updates and adaptations to new requirements.",
              },
              {
                icon: <FileText className="h-10 w-10 text-primary-600" />,
                title: "Audit Documentation",
                description:
                  "Maintain comprehensive documentation of your compliance measures as evidence of due diligence.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border border-gray-100 hover:shadow-md transition-all"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-dark-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="py-16 bg-light-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              tagline="Frameworks"
              title="Web3 Regulatory Landscape"
              description="The regulatory environment for blockchain and Web3 technologies varies by jurisdiction and continues to evolve rapidly."
              textAlignment="left"
            />

            <div className="space-y-6 mt-10">
              {[
                {
                  region: "United States",
                  agencies: [
                    "Securities and Exchange Commission (SEC)",
                    "Commodity Futures Trading Commission (CFTC)",
                    "Financial Crimes Enforcement Network (FinCEN)",
                  ],
                  focus:
                    "Securities regulations, anti-money laundering, KYC requirements",
                },
                {
                  region: "European Union",
                  agencies: [
                    "Markets in Crypto-Assets (MiCA)",
                    "European Banking Authority (EBA)",
                    "European Securities and Markets Authority (ESMA)",
                  ],
                  focus:
                    "Comprehensive crypto asset regulation, stablecoin governance, consumer protection",
                },
                {
                  region: "Asia Pacific",
                  agencies: [
                    "Monetary Authority of Singapore (MAS)",
                    "Japan Financial Services Agency (FSA)",
                    "Hong Kong Securities and Futures Commission (SFC)",
                  ],
                  focus:
                    "Licensing frameworks, capital requirements, operational standards",
                },
                {
                  region: "Global Standards",
                  agencies: [
                    "Financial Action Task Force (FATF)",
                    "International Organization of Securities Commissions (IOSCO)",
                  ],
                  focus:
                    "Anti-money laundering standards, securities market principles, global coordination",
                },
              ].map((framework, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="text-xl font-semibold mb-3 text-dark-600">
                    {framework.region}
                  </h3>
                  <div className="mb-2">
                    <span className="font-medium text-gray-700">
                      Key Regulatory Bodies:
                    </span>
                    <ul className="mt-2 space-y-1">
                      {framework.agencies.map((agency, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{agency}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="font-medium text-gray-700">
                      Focus Areas:
                    </span>
                    <p className="mt-1 text-gray-600">{framework.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Compliance Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Solutions"
            title="Our Compliance Services"
            description="Auditt offers comprehensive solutions to help your Web3 project navigate regulatory requirements and industry standards."
            textAlignment="center"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Compliance Audits",
                description:
                  "Thorough assessment of your project against applicable regulations and standards, with detailed reports and recommendations.",
                features: [
                  "AML/KYC policy review",
                  "Securities law compliance",
                  "Privacy regulation assessment",
                  "Cross-jurisdictional analysis",
                ],
              },
              {
                title: "Documentation & Policies",
                description:
                  "Development of compliant documentation, policies, and procedures tailored to your specific project needs.",
                features: [
                  "Terms of service development",
                  "Privacy policy creation",
                  "Compliance program documentation",
                  "User disclosure templates",
                ],
              },
              {
                title: "Ongoing Compliance Monitoring",
                description:
                  "Continuous monitoring of your project's compliance status and adaptation to new regulatory developments.",
                features: [
                  "Regulatory change alerts",
                  "Periodic compliance reviews",
                  "Documentation updates",
                  "Compliance maintenance",
                ],
              },
              {
                title: "Compliance Certification",
                description:
                  "Blockchain-verified certification of your project's compliance with relevant standards and regulations.",
                features: [
                  "On-chain compliance verification",
                  "Industry standard certifications",
                  "Regulatory disclosure packages",
                  "Investor-ready documentation",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-light-500 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold mb-3 text-dark-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <span className="font-medium text-gray-700">
                    Key Features:
                  </span>
                  <ul className="mt-2 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Standards */}
      <section className="py-16 bg-light-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl p-8 shadow-md border border-gray-100">
            <div className="mb-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-dark-700 mb-4">
                Web3 Security & Compliance Standards
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Auditt helps projects adhere to the following industry
                standards and best practices:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Smart Contract Security Standard (SCSVS)",
                  description:
                    "A framework for assessing the security of smart contracts with specific requirements and verification methods.",
                },
                {
                  name: "DeFi Security Alliance Guidelines",
                  description:
                    "Industry-developed security standards specifically for decentralized finance protocols and applications.",
                },
                {
                  name: "Blockchain Security Certification (BSC)",
                  description:
                    "A comprehensive security certification program covering all aspects of blockchain projects.",
                },
                {
                  name: "Web3 Privacy Framework",
                  description:
                    "Standards for implementing privacy-preserving technologies and practices in Web3 applications.",
                },
                {
                  name: "Cross-Chain Security Protocol",
                  description:
                    "Security standards for bridges, cross-chain messaging, and multi-chain applications.",
                },
                {
                  name: "DAO Governance Security Framework",
                  description:
                    "Best practices for implementing secure and compliant decentralized governance systems.",
                },
              ].map((standard, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 hover:bg-light-500 rounded-lg transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-600 mb-1">
                      {standard.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {standard.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-[#00264d] hover:bg-[#00264d]/90 text-white">
                Download Standards Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
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
            Ensure Your Project's Compliance
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Stay ahead of regulatory requirements with our comprehensive
            compliance services and blockchain-verified certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-[#00264d]"
            >
              Schedule a Compliance Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-[#00264d]"
            >
              Download Compliance Checklist
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;
