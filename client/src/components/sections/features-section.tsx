import React from 'react';
import SectionHeading from '@/components/shared/section-heading';
import { 
  LockKeyhole, 
  Shield, 
  Fingerprint, 
  Users, 
  FileText, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  gradientFrom: string;
  gradientTo: string;
}

const features: Feature[] = [
  {
    icon: <LockKeyhole className="h-8 w-8" />,
    title: "Blockchain-based Audit Registry",
    description: "All audit results are recorded on-chain for transparency and immutable verification.",
    benefits: [
      "Immutable audit records",
      "Public verification",
      "Transparent process"
    ],
    gradientFrom: "#032757",
    gradientTo: "#0a4da3"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Vetted Auditor Network",
    description: "Our auditors undergo rigorous vetting to ensure only the most qualified security experts review your code.",
    benefits: [
      "Expert verification",
      "Trusted professionals",
      "Continuous monitoring"
    ],
    gradientFrom: "#4338ca",
    gradientTo: "#6366f1"
  },
  {
    icon: <Fingerprint className="h-8 w-8" />,
    title: "Bug Bounty Programs",
    description: "Leverage our community of ethical hackers to identify and fix vulnerabilities before they can be exploited.",
    benefits: [
      "Community-powered security",
      "Proactive protection",
      "Competitive rewards"
    ],
    gradientFrom: "#0e7490",
    gradientTo: "#06b6d4"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community Collaboration",
    description: "Join a thriving ecosystem of security professionals, developers, and Web3 enthusiasts sharing knowledge.",
    benefits: [
      "Knowledge sharing",
      "Expert networking",
      "Collaborative security"
    ],
    gradientFrom: "#032757",
    gradientTo: "#0a4da3"
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Regulatory Compliance",
    description: "Stay compliant with evolving Web3 regulations through our standardized audit procedures and documentation.",
    benefits: [
      "Legal confidence",
      "Documentation support",
      "Regular updates"
    ],
    gradientFrom: "#4338ca",
    gradientTo: "#6366f1"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Rapid Response",
    description: "Get immediate attention for critical vulnerabilities with our emergency audit and mitigation services.",
    benefits: [
      "24/7 emergency response",
      "Quick mitigation",
      "Risk prioritization"
    ],
    gradientFrom: "#0e7490",
    gradientTo: "#06b6d4"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-white"></div>
      <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          tagline="Why Choose Auditt"
          title="Securing the Web3 Ecosystem"
          description="Our comprehensive suite of security services provides unparalleled protection and transparency for blockchain projects."
          textAlignment="center"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group animate-fade-in relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Decorative corner gradient */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-5"
                   style={{background: `radial-gradient(circle, ${feature.gradientTo}, ${feature.gradientFrom})`}}></div>
              
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 transform group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: `linear-gradient(135deg, ${feature.gradientFrom}, ${feature.gradientTo})`
                }}
              >
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-[#032757] transition-colors">{feature.title}</h3>
              <p className="text-slate-600 mb-6">{feature.description}</p>
              
              {/* Benefits */}
              <div className="pb-2">
                <div className="border-t border-gray-100 w-16 mb-4"></div>
                <ul className="space-y-2.5">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle 
                        className="h-5 w-5 mr-2.5 flex-shrink-0 mt-0.5" 
                        style={{color: feature.gradientFrom}} 
                      />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Action link */}
              <div className="mt-6 pt-2">
                <button 
                  className="flex items-center text-sm font-medium transition-all"
                  style={{color: feature.gradientFrom}}
                >
                  <span className="group-hover:mr-1 transition-all">Learn more</span> 
                  <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6 text-slate-800">Ready to secure your Web3 project?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-black hover:bg-black/90 text-white">
              Explore Our Services
            </Button>
            <Button size="lg" variant="outline" className="btn-outline">
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute top-1/4 -left-24 w-72 h-72 bg-indigo-50 rounded-full opacity-50 blur-3xl"></div>
    </section>
  );
};

export default FeaturesSection;
