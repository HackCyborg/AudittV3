
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { InfoIcon } from 'lucide-react';

const SignUp: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("hacker");

  // Hide navbar and footer for this page
  useEffect(() => {
    const navbar = document.querySelector('nav');
    const footer = document.querySelector('footer');
    
    if (navbar) navbar.style.display = 'none';
    if (footer) footer.style.display = 'none';
    
    return () => {
      if (navbar) navbar.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Welcome Message */}
          <div className="flex flex-col justify-center p-8 bg-blue-50 rounded-2xl">
            <div className="flex items-center mb-2">
              <div className="bg-black p-1 rounded">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="ml-2 text-lg font-semibold">Auditt</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-8 mb-4">
              Welcome to the <br />Auditt Dashboard
            </h1>
            <p className="text-gray-600 mb-8">
              Start for free and see how our white hats<br />community can reinforce your security.
            </p>
            
            <div className="mt-auto flex items-center">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white">
                ?
              </div>
              <span className="ml-2 text-sm font-medium">DOCS</span>
            </div>
          </div>
          
          {/* Right Column - Sign Up Form */}
          <div className="p-8 bg-white rounded-2xl shadow-sm">
            <Tabs defaultValue="hacker" className="w-full" onValueChange={setSelectedTab}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="hacker">Hacker</TabsTrigger>
                <TabsTrigger value="company">Company</TabsTrigger>
              </TabsList>
              
              <TabsContent value="hacker" className="space-y-6">
                <div>
                  <Label htmlFor="fullName">
                    Full name*
                  </Label>
                  <Input 
                    id="fullName"
                    placeholder="Enter full name" 
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">
                    Email*
                  </Label>
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
                  <Label htmlFor="telegram" className="text-gray-600">
                    Telegram <span className="text-gray-400">(optional)</span>
                  </Label>
                  <Input 
                    id="telegram"
                    placeholder="Enter Telegram nickname" 
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="source">
                    How did you find out about us?
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Please choose one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="search">Search Engine</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="friend">Friend's Recommendation</SelectItem>
                      <SelectItem value="conference">Conference</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-start space-x-2 mt-4">
                  <Checkbox id="terms" />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="terms" className="text-sm text-gray-600">
                      I have read and accept the <a href="#" className="underline font-medium">Terms and Conditions</a> and the <a href="#" className="underline font-medium">Privacy Notice</a>
                    </Label>
                  </div>
                </div>
                
                <Button className="w-full bg-black hover:bg-black/90 text-white">
                  Create account
                </Button>
              </TabsContent>
              
              <TabsContent value="company" className="space-y-6">
                <div>
                  <Label htmlFor="companyName">
                    Company name*
                  </Label>
                  <Input 
                    id="companyName"
                    placeholder="Enter the name of your company" 
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="companyEmail">
                    Email*
                  </Label>
                  <Input 
                    id="companyEmail"
                    type="email" 
                    placeholder="Enter email address" 
                    className="mt-1"
                  />
                </div>
                
                <div className="relative">
                  <Label htmlFor="companyPassword" className="flex items-center">
                    Password* 
                    <InfoIcon className="h-4 w-4 ml-1 text-gray-400" />
                  </Label>
                  <Input 
                    id="companyPassword"
                    type="password" 
                    placeholder="Enter password" 
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="companysource">
                    How did you find out about us?
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Please choose one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="search">Search Engine</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="recommendation">Recommendation</SelectItem>
                      <SelectItem value="conference">Conference</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-start space-x-2 mt-4">
                  <Checkbox id="companyTerms" />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="companyTerms" className="text-sm text-gray-600">
                      I have read and accept the <a href="#" className="underline font-medium">Terms and Conditions</a> and the <a href="#" className="underline font-medium">Privacy Notice</a>
                    </Label>
                  </div>
                </div>
                
                <Button className="w-full bg-black hover:bg-black/90 text-white">
                  Create account
                </Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
