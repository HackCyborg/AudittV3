import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import CtaBackground from "../../assets/cta-background.svg";

const CTASection: React.FC = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const mutation = useMutation({
    mutationFn: async (data: { name: string; email: string }) => {
      const response = await apiRequest("POST", "/api/newsletter", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description:
          data.message || "You've been subscribed to our newsletter.",
        variant: "default",
      });
      setName("");
      setEmail("");
    },
    onError: (error) => {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    mutation.mutate({ name, email });
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#032757] to-[#032757] z-0"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-400/20 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              Ready to Secure Your Web3 Project?
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-xl leading-relaxed">
              Join the leading Web3 security platform with blockchain-based
              transparency and a network of verified security experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-white text-[#032757] hover:bg-white/90"
                size="lg"
              >
                Schedule a Demo
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border border-white hover:bg-white/20 text-white"
                size="lg"
              >
                Contact Sales
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-5/12 bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/10 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-white">Stay Updated</h3>
            <p className="mb-6 text-white/90">
              Get the latest updates on Web3 security, audit innovations, and
              platform features.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="transition-all duration-200 hover:transform hover:translate-y-[-2px]">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:bg-white/30 focus:ring-2 focus:ring-white/50 focus:outline-none text-white placeholder-Black"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="transition-all duration-200 hover:transform hover:translate-y-[-2px]">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:bg-white/30 focus:ring-2 focus:ring-white/50 focus:outline-none text-white placeholder-black/10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="transition-all duration-200 hover:transform hover:translate-y-[-2px]">
                <Button
                  type="submit"
                  className="w-full bg-white text-[#032757] hover:bg-white/90"
                  size="lg"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
              <p className="text-sm text-white/80">
                By subscribing, you agree to our Privacy Policy and Terms of
                Service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
