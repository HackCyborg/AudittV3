import React from 'react';
import SectionHeading from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { 
  ClipboardList, 
  ShieldCheck, 
  Link as LinkIcon, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  LockKeyhole
} from 'lucide-react';

interface ProcessStep {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  color: string;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    icon: <ClipboardList className="h-6 w-6" />,
    title: "Request an Audit",
    description: "Submit your project for review through our platform and select from our verified auditor network.",
    benefits: [
      "Easy project submission",
      "Auditor matching system",
      "Flexible scheduling"
    ],
    color: "#032757"
  },
  {
    number: 2,
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Thorough Assessment",
    description: "Expert auditors conduct a comprehensive security review of your smart contracts and infrastructure.",
    benefits: [
      "Multi-layer security checks",
      "Vulnerability detection",
      "Best practice recommendations"
    ],
    color: "#4f46e5"
  },
  {
    number: 3,
    icon: <LinkIcon className="h-6 w-6" />,
    title: "Blockchain Verification",
    description: "Audit results are recorded on-chain, providing permanent, tamper-proof evidence of security verification.",
    benefits: [
      "Immutable audit records",
      "Public verification",
      "Transparent process"
    ],
    color: "#0ca5e9"
  }
];

const HowItWorksSection: React.FC = () => {
  
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30 z-0"></div>
      <div className="absolute top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 -left-20 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
      
      {/* Animated hexagon grid */}
      <div className="absolute inset-0 hex-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          tagline="The Process"
          title="How Our Security Audits Work"
          description="Our blockchain-powered platform ensures security and transparency at every step of the audit process."
          textAlignment="center"
        />
        
        {/* Process Steps */}
        <div className="mt-16 mb-20">          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group animate-fade-in relative" 
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="flex flex-col items-center text-center hover:transform hover:scale-105 transition-all duration-300 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
                  {/* Step Number Circle */}
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}CC)`,
                    }}
                  >
                    <div className="text-white flex flex-col items-center">
                      <span className="text-2xl font-bold">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Step Icon */}
                  <div 
                    className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-white group-hover:animate-bounce transition-all duration-300"
                    style={{ color: step.color }}
                  >
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 mb-6">{step.description}</p>
                  
                  {/* Benefits List */}
                  <div className="mt-auto w-full">
                    <ul className="space-y-2">
                      {step.benefits.map((benefit, i) => (
                        <li 
                          key={i} 
                          className="flex items-start"
                          style={{ transitionDelay: `${i * 100}ms` }}
                        >
                          <CheckCircle2 
                            className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5"
                            style={{ color: step.color }} 
                          />
                          <span className="text-slate-700 text-left">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Card */}
        <div className="mt-24 max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#032757] to-blue-500 rounded-2xl transform rotate-1 opacity-10"></div>
          <div className="absolute inset-0 bg-white rounded-2xl shadow-xl"></div>
          
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-blue-100 to-transparent opacity-70"></div>
            
            <div className="p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#032757] text-sm font-medium mb-6">
                  <Calendar className="h-4 w-4 mr-2" /> Schedule in Minutes
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">Start Your Security Journey Today</h3>
                <p className="text-slate-600 mb-8">Ready to secure your Web3 project with industry-leading audit protocols?</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-black hover:bg-black/90 text-white">
                    Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="btn-outline">
                    Contact Sales
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-48 md:h-64 flex items-center justify-center mt-8 md:mt-0">
                <div className="relative w-40 md:w-56 aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#032757]/10 to-blue-400/10 rounded-full animate-pulse transform scale-90"></div>
                  <div className="absolute inset-0 border-2 border-dashed border-[#032757]/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-1/4 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <LockKeyhole className="h-12 w-12 md:h-16 md:w-16 text-[#032757]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
