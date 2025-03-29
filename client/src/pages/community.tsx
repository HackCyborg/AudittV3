import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SectionHeading from '@/components/shared/section-heading';
import { Users, MessageSquare, Calendar, BookOpen, GraduationCap, Link as LinkIcon, ExternalLink, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';
import Lottie from "lottie-react";
import communityAnimation from "@/assets/animations/bug-animation.json";

const Community: React.FC = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const contactMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message || "Your message has been sent successfully.",
        variant: "default",
      });
      setName('');
      setEmail('');
      setMessage('');
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate({ name, email, message });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Styled like Bug Bounty page */}
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
                <Shield className="h-4 w-4 mr-2" /> Community-Powered Security
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Join Our Web3 Security Community
              </h1>
              <p className="text-white/80 text-lg mb-8 md:pr-8 leading-relaxed">
                Connect with security experts, developers, and Web3 enthusiasts. Share knowledge, collaborate on projects, and stay updated on the latest security practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white hover:bg-white/90 text-[#00264d]">
                  Join Community <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Resources
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg">
                <Lottie
                  animationData={communityAnimation}
                  className="w-full"
                  style={{
                    filter: "drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.2))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            tagline="Community Features"
            title="Connect, Learn, and Contribute"
            description="Our community offers multiple ways to engage with fellow security professionals and Web3 enthusiasts."
            textAlignment="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <MessageSquare className="h-12 w-12 text-primary-600" />,
                title: "Discussion Forums",
                description: "Engage in discussions about Web3 security topics, share insights, and get help with security challenges.",
                link: "#forums"
              },
              {
                icon: <Calendar className="h-12 w-12 text-primary-600" />,
                title: "Events & Webinars",
                description: "Participate in regular online events, security workshops, and webinars led by industry experts.",
                link: "#events"
              },
              {
                icon: <Users className="h-12 w-12 text-primary-600" />,
                title: "Community Projects",
                description: "Collaborate on open-source security tools, research initiatives, and community-driven resources.",
                link: "#projects"
              },
              {
                icon: <BookOpen className="h-12 w-12 text-primary-600" />,
                title: "Knowledge Base",
                description: "Access our extensive collection of security guides, best practices, and educational resources.",
                link: "#knowledge"
              },
              {
                icon: <GraduationCap className="h-12 w-12 text-primary-600" />,
                title: "Learning Paths",
                description: "Follow structured learning paths to develop your Web3 security skills from beginner to expert.",
                link: "#learning"
              },
              {
                icon: <LinkIcon className="h-12 w-12 text-primary-600" />,
                title: "Networking",
                description: "Connect with peers, mentors, and potential employers in the Web3 security space.",
                link: "#networking"
              }
            ].map((feature, index) => (
              <Card key={index} className="border border-gray-100 hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-dark-600">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link href={feature.link}>
                    <Button variant="link" className="p-0 text-primary-600 hover:text-primary-700">
                      Learn more
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-light-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold mb-4 text-dark-700">Upcoming Community Events</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Join these upcoming events to learn from experts and connect with peers</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Smart Contract Security Masterclass",
                  date: "June 15, 2023",
                  time: "11:00 AM - 1:00 PM UTC",
                  type: "Webinar",
                  speaker: "Alex Johnson, Senior Security Auditor"
                },
                {
                  title: "Bug Bounty Hunting Workshop",
                  date: "June 22, 2023",
                  time: "3:00 PM - 5:00 PM UTC",
                  type: "Interactive Workshop",
                  speaker: "Sarah Martinez, Lead Security Researcher"
                },
                {
                  title: "Web3 Security: Trends and Challenges",
                  date: "July 5, 2023",
                  time: "2:00 PM - 3:30 PM UTC",
                  type: "Panel Discussion",
                  speaker: "Various Industry Experts"
                }
              ].map((event, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-semibold mb-2 text-dark-600">{event.title}</h3>
                      <p className="text-gray-500 mb-3">{event.speaker}</p>
                      <p className="text-gray-600 mb-4">
                        {event.type}: An in-depth session covering essential concepts, practical techniques, and interactive Q&A.
                      </p>
                      <Button className="bg-[#032757] hover:bg-black text-white">
                        Register Now
                      </Button>
                    </div>
                    <div className="md:w-1/3 bg-light-500 rounded-lg p-4 flex flex-col justify-center">
                      <div className="text-center">
                        <p className="text-lg font-semibold text-dark-600">{event.date}</p>
                        <p className="text-primary-600">{event.time}</p>
                        <p className="mt-2 text-sm text-gray-500">
                          <Calendar className="inline h-4 w-4 mr-1" />
                          Add to calendar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" className="border-[#032757] text-[#032757] hover:bg-[#032757]/10">
                View All Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold mb-4 text-dark-700">Recent Community Discussions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Join the conversation in our active community forums</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Best Practices for Auditing Cross-Chain Bridges",
                  category: "Smart Contract Security",
                  replies: 24,
                  views: 342,
                  lastActive: "2 hours ago"
                },
                {
                  title: "How to effectively disclose vulnerabilities in DeFi protocols?",
                  category: "Bug Bounty",
                  replies: 17,
                  views: 203,
                  lastActive: "6 hours ago"
                },
                {
                  title: "Understanding re-entrancy vulnerabilities in the latest Solidity version",
                  category: "Technical Discussion",
                  replies: 31,
                  views: 456,
                  lastActive: "1 day ago"
                },
                {
                  title: "Security considerations for implementing upgradeable contracts",
                  category: "Smart Contract Security",
                  replies: 19,
                  views: 287,
                  lastActive: "2 days ago"
                }
              ].map((thread, index) => (
                <div key={index} className="border border-gray-200 rounded-lg hover:shadow-sm transition-all">
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-dark-600 mb-1 hover:text-primary-600 transition-colors">
                          <Link href="#thread">{thread.title}</Link>
                        </h3>
                        <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full mb-2">
                          {thread.category}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 text-right">
                        <p>{thread.replies} replies</p>
                        <p>{thread.views} views</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600 mr-2">
                          U
                        </div>
                        <span className="text-sm text-gray-600">Username</span>
                      </div>
                      <span className="text-xs text-gray-500">Last active: {thread.lastActive}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-[#032757] hover:bg-black text-white">
                Visit Community Forum
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-light-500">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <div className="mb-8 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4 text-dark-700">Get in Touch</h2>
                <p className="text-lg text-gray-600">
                  Have questions about our community? Reach out to us and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#032757] hover:bg-black text-white"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-dark-700 text-center">Community Guidelines</h3>
              
              <div className="space-y-5">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Respect & Inclusivity</h4>
                    <p className="text-gray-600 text-sm">Treat all community members with respect regardless of background or experience level.</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Constructive Discussion</h4>
                    <p className="text-gray-600 text-sm">Focus on constructive feedback and avoid attacking individuals or projects.</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Responsible Disclosure</h4>
                    <p className="text-gray-600 text-sm">Follow responsible disclosure practices for any security vulnerabilities.</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">No Spam or Self-Promotion</h4>
                    <p className="text-gray-600 text-sm">Avoid excessive self-promotion or spamming promotional content.</p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Protect Privacy</h4>
                    <p className="text-gray-600 text-sm">Never share others' personal information without explicit permission.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="outline" className="border-[#032757] text-[#032757] hover:bg-[#032757]/10">
                  View Full Guidelines
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;