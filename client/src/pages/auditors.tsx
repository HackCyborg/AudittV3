import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, CheckCircle, Award, Network, Briefcase } from "lucide-react";

const Auditors: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001c3a] to-[#00264d] z-0"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQgMUM5LjAzOTQzIDEgNS45NjA3OCA1Ljk2MDU3IDEgNS45NjA1N1YxNEgxNFYxWiIgc3Ryb2tlPSIjODA4MDgwIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+Cg==')] opacity-30 z-0"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Join Our Verified Auditor Network
              </h1>
              <p className="text-white/90 text-lg mb-8 md:pr-8 leading-relaxed">
                Enhance your reputation, access premium projects, and become
                part of the leading Web3 security ecosystem. Auditt helps
                auditors showcase their expertise and connect with cutting-edge
                blockchain projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auditors/signup">
                  <Button
                    className="bg-white text-[#032757] hover:bg-white/90"
                    size="lg"
                  >
                    Apply to Join
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-white text-[#032757]  hover:bg-white/10"
                  size="lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
                <div className="absolute inset-0 border border-white/20 rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-40 h-40 text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-10 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#032757] text-sm font-medium mb-4">
              <Award className="h-4 w-4 mr-2" /> Auditor Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Why Join Auditt
            </h2>
            <p className="text-lg text-slate-600">
              Our platform provides unique advantages for security experts in
              the Web3 space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-10 h-10 text-[#032757]" />,
                title: "Verified Status",
                description:
                  "Gain a trusted verification badge after our rigorous vetting process, enhancing your reputation in the Web3 security space.",
              },
              {
                icon: <Briefcase className="w-10 h-10 text-[#032757]" />,
                title: "Premium Projects",
                description:
                  "Get matched with high-value, innovative blockchain projects looking for expert security reviews.",
              },
              {
                icon: <Award className="w-10 h-10 text-[#032757]" />,
                title: "Reputation Building",
                description:
                  "Build your professional profile with blockchain-verified audit results and client testimonials.",
              },
              {
                icon: <Network className="w-10 h-10 text-[#032757]" />,
                title: "Expert Network",
                description:
                  "Connect with fellow security professionals and share knowledge in our private auditor community.",
              },
              {
                icon: <Shield className="w-10 h-10 text-[#032757]" />,
                title: "Transparent Process",
                description:
                  "Benefit from our fair, transparent matching system and dispute resolution protocols.",
              },
              {
                icon: <CheckCircle className="w-10 h-10 text-[#032757]" />,
                title: "Continuous Learning",
                description:
                  "Access exclusive training resources and stay current with the latest security practices.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110 transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50/30 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-10 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#032757] text-sm font-medium mb-4">
              <Shield className="h-4 w-4 mr-2" /> Joining Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              How to Become a Verified Auditor
            </h2>
            <p className="text-lg text-slate-600">
              Follow these steps to join our network of elite Web3 security
              professionals
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-16 top-8 bottom-8 w-1 bg-gradient-to-b from-[#032757] via-indigo-500 to-blue-400 rounded-full z-0"></div>

              {[
                {
                  title: "Submit Application",
                  description:
                    "Fill out our comprehensive application form detailing your experience and expertise in Web3 security.",
                  color: "#032757",
                },
                {
                  title: "Technical Assessment",
                  description:
                    "Complete a technical assessment to demonstrate your skills in smart contract auditing and vulnerability detection.",
                  color: "#4f46e5",
                },
                {
                  title: "Background Verification",
                  description:
                    "Our team verifies your past work, references, and contributions to the security community.",
                  color: "#0891b2",
                },
                {
                  title: "Onboarding",
                  description:
                    "Once approved, complete our onboarding process and gain access to the auditor portal and available projects.",
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
                      <span className="text-lg font-bold">{index + 1}</span>
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
              Ready to Join Our Auditor Network?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Take the first step toward becoming a recognized Web3 security
              expert.
            </p>
            <Link href="/auditors/signup">
              <Button
                className="bg-white text-[#032757] hover:bg-white/90"
                size="lg"
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Auditors;