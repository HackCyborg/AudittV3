import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Check, Shield } from "lucide-react";

// Form schema with validations
const formSchema = z.object({
  projectName: z.string().min(3, {
    message: "Project name must be at least 3 characters.",
  }),
  projectDescription: z.string().min(50, {
    message: "Please provide a detailed description (at least 50 characters).",
  }),
  projectType: z.enum(["smart-contract", "protocol", "dapp", "other"], {
    required_error: "Please select a project type.",
  }),
  blockchainType: z.array(z.string()).min(1, {
    message: "Please select at least one blockchain.",
  }),
  codeRepository: z.string().url({
    message: "Please enter a valid URL for your code repository.",
  }).optional().or(z.literal("")),
  budget: z.string().min(1, {
    message: "Please provide a budget estimate.",
  }),
  timeframe: z.enum(["urgent", "standard", "flexible"], {
    required_error: "Please select a timeframe.",
  }),
  contactEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  contactName: z.string().min(2, {
    message: "Please enter your name.",
  }),
  termsAgreed: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const PostProjectPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      projectDescription: "",
      codeRepository: "",
      budget: "",
      contactEmail: "",
      contactName: "",
      termsAgreed: false,
      blockchainType: [],
    },
  });

  // Form submission handler
  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    setSubmitted(true);
    
    // Here you would typically send the data to the server
    // For now just showing success state
    
    // Reset form after short delay for better UX
    setTimeout(() => {
      form.reset();
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Project Details and Benefits */}
          <div className="flex flex-col justify-center p-8 rounded-2xl" style={{ backgroundColor: "#032757" }}>
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
              <span className="ml-2 text-lg font-semibold text-white">Auditt</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mt-8 mb-4">
              Submit Your <br />
              Project for Review
            </h1>
            <p className="text-white/80 mb-8">
              Our verified auditors and bug bounty hunters will help secure your blockchain project with comprehensive security reviews.
            </p>

            <div className="space-y-5 my-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center mt-1">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Expert Review</h3>
                  <p className="text-sm text-white/70">Get your project examined by verified security professionals</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center mt-1">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Flexible Options</h3>
                  <p className="text-sm text-white/70">Choose between traditional audits or bug bounty programs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center mt-1">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Transparent Process</h3>
                  <p className="text-sm text-white/70">Blockchain-verified audit trails ensure trust and accountability</p>
                </div>
              </div>
            </div>

            <div className="mt-auto flex items-center">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white">
                <Shield className="h-4 w-4" />
              </div>
              <span className="ml-2 text-sm font-medium text-white">LEARN MORE</span>
            </div>
          </div>

          {/* Right Column - Project Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="bg-emerald-100 rounded-full p-4 mb-4">
                  <Check className="h-10 w-10 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-emerald-700 mb-2">Project Submitted!</h2>
                <p className="text-slate-600 text-center mb-6">
                  Thank you for submitting your project. Our team will review your submission and connect with you shortly.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)} 
                  className="mt-4 bg-[#032757] hover:bg-[#021c3d] text-white"
                >
                  Submit Another Project
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Details</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      {/* Project Name */}
                      <FormField
                        control={form.control}
                        name="projectName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Name*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your project name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Project Type */}
                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Type*</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select project type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="smart-contract">Smart Contract</SelectItem>
                                <SelectItem value="protocol">DeFi Protocol</SelectItem>
                                <SelectItem value="dapp">Decentralized Application</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Project Description */}
                    <FormField
                      control={form.control}
                      name="projectDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Description*</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your project, its functionality, and your specific security concerns..."
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription className="text-xs">
                            Include key details about architecture, technologies, and specific areas of concern.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Blockchain Type */}
                    <FormField
                      control={form.control}
                      name="blockchainType"
                      render={() => (
                        <FormItem>
                          <FormLabel>Blockchain Types*</FormLabel>
                          <FormDescription className="text-xs mt-0 mb-2">
                            Select all blockchains that your project targets.
                          </FormDescription>
                          
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {[
                              "Ethereum", 
                              "Binance Smart Chain", 
                              "Polygon",
                              "Solana", 
                              "Avalanche", 
                              "Near",
                              "Cosmos", 
                              "Polkadot", 
                              "Other"
                            ].map((blockchain) => (
                              <FormField
                                key={blockchain}
                                control={form.control}
                                name="blockchainType"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={blockchain}
                                      className="flex flex-row items-start space-x-2 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(blockchain)}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, blockchain])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== blockchain
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="font-normal text-sm">
                                        {blockchain}
                                      </FormLabel>
                                    </FormItem>
                                  )
                                }}
                              />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Code Repository */}
                    <FormField
                      control={form.control}
                      name="codeRepository"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Code Repository (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://github.com/your-repo" {...field} />
                          </FormControl>
                          <FormDescription className="text-xs">
                            Private repositories can be shared later with assigned auditors.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-5">
                      {/* Budget */}
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Budget*</FormLabel>
                            <FormControl>
                              <Input placeholder="Budget range in USD" {...field} />
                            </FormControl>
                            <FormDescription className="text-xs">
                              Approximate range for the audit or bounty.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Timeframe */}
                      <FormField
                        control={form.control}
                        name="timeframe"
                        render={({ field }) => (
                          <FormItem className="space-y-2">
                            <FormLabel>Timeframe*</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="urgent" />
                                  </FormControl>
                                  <FormLabel className="font-normal text-sm">
                                    Urgent (1-2 weeks)
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="standard" />
                                  </FormControl>
                                  <FormLabel className="font-normal text-sm">
                                    Standard (2-4 weeks)
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="flexible" />
                                  </FormControl>
                                  <FormLabel className="font-normal text-sm">
                                    Flexible (4+ weeks)
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      {/* Contact Name */}
                      <FormField
                        control={form.control}
                        name="contactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Name*</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Contact Email */}
                      <FormField
                        control={form.control}
                        name="contactEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Email*</FormLabel>
                            <FormControl>
                              <Input placeholder="you@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Terms and Conditions */}
                    <FormField
                      control={form.control}
                      name="termsAgreed"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="grid gap-1.5 leading-none">
                            <FormLabel className="text-sm">
                              I agree to the <a href="#" className="underline font-medium">terms and conditions</a> and the <a href="#" className="underline font-medium">privacy policy</a>
                            </FormLabel>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-[#032757] hover:bg-black text-white mt-4"
                    >
                      Submit Project
                    </Button>
                  </form>
                </Form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostProjectPage;