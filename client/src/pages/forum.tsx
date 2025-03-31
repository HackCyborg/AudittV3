import React, { useState } from "react";
import { Link } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  ChevronDown,
  ChevronUp, 
  MessageSquare,
  Search,
  Shield,
  ArrowRight,
  Star,
  Filter,
  Eye,
  MessageCircle,
  Clock,
  ShieldCheck,
  BookOpen,
  Code,
  Lock,
  Users,
  HelpCircle,
  Rocket,
  Bell,
  User,
  MoveRight,
  Mail,
  Coffee,
  Heart,
  ThumbsUp,
  Plus,
  Pin,
  Flame
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const forumCategories = [
  {
    id: "blockchain-security",
    name: "Blockchain Security",
    icon: <ShieldCheck className="w-5 h-5" />,
    topics: 356,
    posts: 4238,
  },
  {
    id: "smart-contracts",
    name: "Smart Contract Audits",
    icon: <Code className="w-5 h-5" />,
    topics: 289,
    posts: 3127,
  },
  {
    id: "bug-bounty",
    name: "Bug Bounty Programs",
    icon: <BookOpen className="w-5 h-5" />,
    topics: 197,
    posts: 2542,
  },
  {
    id: "defi-security",
    name: "DeFi Security",
    icon: <Lock className="w-5 h-5" />,
    topics: 425,
    posts: 5780,
  },
  {
    id: "security-research",
    name: "Security Research",
    icon: <Rocket className="w-5 h-5" />,
    topics: 168,
    posts: 1937,
  },
  {
    id: "community",
    name: "General Community",
    icon: <Users className="w-5 h-5" />,
    topics: 301,
    posts: 4120,
  },
];

const trendingTopics = [
  {
    id: 1,
    title: "Understanding and preventing reentrancy attacks in Solidity",
    category: "Smart Contract Audits",
    author: "CryptoAuditor",
    replies: 34,
    views: 876,
    lastActive: "2 hours ago",
    isHot: true,
  },
  {
    id: 2,
    title: "Best practices for securing cross-chain bridges against exploits",
    category: "Blockchain Security",
    author: "SecureChain",
    replies: 28,
    views: 743,
    lastActive: "4 hours ago",
    isHot: true,
  },
  {
    id: 3,
    title: "Analyzing recent DeFi protocol hacks: lessons learned",
    category: "DeFi Security",
    author: "DeFiDefender",
    replies: 42,
    views: 1024,
    lastActive: "1 hour ago",
    isHot: true,
  },
  {
    id: 4,
    title: "Bug bounty payouts: what determines vulnerability value?",
    category: "Bug Bounty Programs",
    author: "BugHunter404",
    replies: 19,
    views: 567,
    lastActive: "5 hours ago",
  },
  {
    id: 5,
    title: "Flash loan attack vectors and mitigation strategies",
    category: "DeFi Security",
    author: "SecurityFirst",
    replies: 31,
    views: 812,
    lastActive: "3 hours ago",
    isHot: true,
  },
];

const recentDiscussions = [
  {
    id: 6,
    title: "Implementing secure random number generation in smart contracts",
    category: "Smart Contract Audits",
    author: "RandomSecure",
    replies: 12,
    views: 342,
    lastActive: "1 day ago",
  },
  {
    id: 7,
    title: "Disclosure timeline for critical vulnerabilities in open-source projects",
    category: "Bug Bounty Programs",
    author: "EthicalHacker",
    replies: 23,
    views: 415,
    lastActive: "18 hours ago",
  },
  {
    id: 8,
    title: "Audit tools comparison: Slither vs. Mythril vs. Echidna",
    category: "Security Research",
    author: "AuditPro",
    replies: 26,
    views: 531,
    lastActive: "2 days ago",
  },
  {
    id: 9,
    title: "Formal verification approaches for smart contract auditing",
    category: "Smart Contract Audits",
    author: "FormalVerifier",
    replies: 17,
    views: 298,
    lastActive: "3 days ago",
  },
  {
    id: 10,
    title: "Multi-sig wallet implementations and security considerations",
    category: "Blockchain Security",
    author: "MultiSigDev",
    replies: 29,
    views: 674,
    lastActive: "4 days ago",
  },
];

const featuredMembers = [
  {
    id: 1,
    name: "CryptoAuditor",
    role: "Lead Security Researcher",
    posts: 342,
    joined: "Dec 2022",
    avatar: "CA",
  },
  {
    id: 2,
    name: "SecureChain",
    role: "Smart Contract Auditor",
    posts: 278,
    joined: "Mar 2023",
    avatar: "SC",
  },
  {
    id: 3,
    name: "DeFiDefender",
    role: "DeFi Security Specialist",
    posts: 415,
    joined: "Jan 2023",
    avatar: "DD",
  },
];

const popularTags = [
  "smart-contracts",
  "defi",
  "audits",
  "ethereum",
  "nft-security",
  "cross-chain",
  "zero-knowledge",
  "consensus",
  "governance",
  "evm",
  "solidity",
  "bug-bounty",
];

const ThreadItem = ({ thread }: { thread: any }) => {
  return (
    <div className="border-b border-gray-200 hover:bg-light-50 transition-all py-4">
      <div className="flex gap-4">
        {/* Left side - User avatar/info */}
        <div className="w-16 flex-shrink-0">
          <div className="flex flex-col items-center">
            <Avatar className="w-12 h-12 mb-1">
              <AvatarFallback className="bg-primary-100 text-primary-800 font-semibold">
                {thread.author.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="text-xs text-gray-600 text-center">{thread.replies} replies</div>
          </div>
        </div>
        
        {/* Middle - Main content */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {thread.isHot && (
              <div className="flex items-center text-orange-500 text-xs font-medium">
                <Flame className="h-3 w-3 mr-1" /> Hot
              </div>
            )}
            <Badge variant="outline" className="bg-primary-50 text-primary-700 border-primary-200 text-xs">
              {thread.category}
            </Badge>
          </div>
          <h3 className="text-lg font-semibold text-dark-800 hover:text-primary-600 transition-colors mb-1">
            <Link href={`/forum/thread/${thread.id}`}>{thread.title}</Link>
          </h3>
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <span className="text-gray-700 font-medium mr-2">{thread.author}</span>
            <span className="px-1">•</span>
            <span className="flex items-center mr-2">
              <Clock className="w-3 h-3 mr-1" /> {thread.lastActive}
            </span>
            <span className="px-1">•</span>
            <span className="flex items-center">
              <Eye className="w-3 h-3 mr-1" /> {thread.views} views
            </span>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {/* Brief excerpt would go here - since we don't have it in our data, using a placeholder */}
            Discussion about {thread.title.toLowerCase()}. Join the conversation to learn more about best practices and share your experiences.
          </p>
        </div>
        
        {/* Right - Metrics */}
        <div className="w-20 flex-shrink-0 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center rounded-full w-12 h-12 bg-light-100 mb-1">
            <MessageCircle className="h-5 w-5 text-primary-600" />
          </div>
          <span className="text-xs text-gray-600">Last reply</span>
          <span className="text-xs font-medium">{thread.lastActive}</span>
        </div>
      </div>
    </div>
  );
};

const ForumPage = () => {
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-light-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#032757] to-[#0f4c95] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                <MessageSquare className="h-4 w-4 mr-2" /> Blockchain Security Community
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Auditt Security Forum
              </h1>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Join the conversation with security professionals, auditors, and blockchain enthusiasts to discuss the latest in Web3 security.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-md max-w-3xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search discussions, topics, or keywords..."
                  className="pl-10 bg-light-50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="absolute right-0 top-0 bg-[#032757] hover:bg-black rounded-l-none">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forum Navigation */}
      <section className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="discussions" className="w-full">
              <div className="flex items-center justify-between w-full py-2">
                <TabsList className="bg-transparent p-0 h-auto space-x-4">
                  <TabsTrigger 
                    value="discussions" 
                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary-600 data-[state=active]:shadow-none rounded-none px-2 py-2"
                  >
                    All Discussions
                  </TabsTrigger>
                  <TabsTrigger 
                    value="categories" 
                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary-600 data-[state=active]:shadow-none rounded-none px-2 py-2"
                  >
                    Categories
                  </TabsTrigger>
                  <TabsTrigger 
                    value="trending" 
                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary-600 data-[state=active]:shadow-none rounded-none px-2 py-2"
                  >
                    Trending
                  </TabsTrigger>
                  <TabsTrigger 
                    value="members" 
                    className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary-600 data-[state=active]:shadow-none rounded-none px-2 py-2"
                  >
                    Members
                  </TabsTrigger>
                </TabsList>
                
                <div>
                  <Button size="sm" className="bg-[#032757] hover:bg-black text-white">
                    <Plus className="h-4 w-4 mr-1" /> New Post
                  </Button>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="py-6">
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
                  {/* Main Forums Area */}
                  <div className="lg:col-span-5">
                    <TabsContent value="discussions" className="mt-0">
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-dark-700">Recent Discussions</h2>
                        <div className="flex gap-2">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="outline" size="sm" className="flex items-center">
                                <Filter className="h-4 w-4 mr-1" /> Filter
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                              <DropdownMenuLabel>Filter By</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>All Topics</DropdownMenuItem>
                              <DropdownMenuItem>Trending Topics</DropdownMenuItem>
                              <DropdownMenuItem>Most Replies</DropdownMenuItem>
                              <DropdownMenuItem>Hot Topics</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                          <Select defaultValue="recent">
                            <SelectTrigger className="w-[140px]">
                              <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="recent">Most Recent</SelectItem>
                              <SelectItem value="replies">Most Replies</SelectItem>
                              <SelectItem value="views">Most Views</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                        <div className="p-4 border-b border-gray-100 bg-light-50">
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-600">Showing discussions for all topics</div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Button size="sm" variant="ghost" className="text-gray-600">
                                <ThumbsUp className="h-4 w-4 mr-1" /> Most Helpful
                              </Button>
                              <Button size="sm" variant="ghost" className="text-gray-600">
                                <Clock className="h-4 w-4 mr-1" /> Latest
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="divide-y divide-gray-100">
                          {trendingTopics.concat(recentDiscussions).slice(0, 8).map((thread) => (
                            <ThreadItem key={thread.id} thread={thread} />
                          ))}
                        </div>
                        <div className="p-4 border-t border-gray-100 text-center">
                          <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
                            Load More Discussions
                          </Button>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="categories" className="mt-0">
                      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                        <div className="p-4 border-b border-gray-100">
                          <h2 className="text-xl font-bold text-dark-700">Forum Categories</h2>
                        </div>
                        <div className="divide-y divide-gray-100">
                          {forumCategories.map((category) => (
                            <div key={category.id} className="p-4 hover:bg-light-50 transition-colors">
                              <div className="flex items-center">
                                <div className="p-3 rounded-full bg-primary-50 text-primary-600 mr-4">
                                  {category.icon}
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-lg font-semibold text-dark-700 mb-1">
                                    <Link href={`/forum/category/${category.id}`}>{category.name}</Link>
                                  </h3>
                                  <p className="text-sm text-gray-500">
                                    Discussions related to {category.name.toLowerCase()} topics
                                  </p>
                                </div>
                                <div className="text-right text-sm text-gray-500">
                                  <p><strong>{category.topics}</strong> Topics</p>
                                  <p><strong>{category.posts}</strong> Posts</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="trending" className="mt-0">
                      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                        <div className="p-4 border-b border-gray-100">
                          <h2 className="text-xl font-bold text-dark-700">Trending Topics</h2>
                        </div>
                        <div className="divide-y divide-gray-100">
                          {trendingTopics.map((thread) => (
                            <ThreadItem key={thread.id} thread={thread} />
                          ))}
                        </div>
                        <div className="p-4 border-t border-gray-100 text-center">
                          <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
                            View More Trending Topics
                          </Button>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="members" className="mt-0">
                      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                        <div className="p-4 border-b border-gray-100">
                          <h2 className="text-xl font-bold text-dark-700">Community Members</h2>
                        </div>
                        <div className="p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {featuredMembers.concat(featuredMembers).concat(featuredMembers).slice(0, 6).map((member, i) => (
                              <div key={i} className="flex items-start border border-gray-100 rounded-lg p-4 hover:shadow-sm transition-all">
                                <Avatar className="w-16 h-16 mr-4">
                                  <AvatarFallback className="bg-primary-100 text-primary-800 font-semibold">
                                    {member.avatar}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h4 className="font-semibold text-lg text-dark-700">{member.name}</h4>
                                  <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                                  <div className="flex text-xs text-gray-500">
                                    <span className="mr-3">Posts: {member.posts}</span>
                                    <span>Joined: {member.joined}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 text-center">
                            <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50">
                              View All Members
                            </Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    {/* Join Discussion CTA */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mt-8">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-dark-700 mb-4">Join the Discussion</h3>
                        <p className="text-gray-600 mb-6">
                          Have a question about blockchain security or smart contract auditing?
                          Start a new discussion and get insights from our community of experts.
                        </p>
                        <Button size="lg" className="bg-[#032757] hover:bg-black text-white">
                          Start a New Topic <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="lg:col-span-2">
                    <div className="space-y-6">
                      {/* Community Stats */}
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold text-dark-700 mb-3">Community Stats</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Members:</span>
                              <span className="font-medium">12,458</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Topics:</span>
                              <span className="font-medium">3,782</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Posts:</span>
                              <span className="font-medium">28,950</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Online Now:</span>
                              <span className="font-medium text-green-600">243</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Featured Members */}
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold text-dark-700 mb-3">Featured Members</h3>
                          <div className="space-y-4">
                            {featuredMembers.map((member) => (
                              <div key={member.id} className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-sm font-medium text-primary-700 mr-3">
                                  {member.avatar}
                                </div>
                                <div>
                                  <p className="font-medium text-dark-700">{member.name}</p>
                                  <p className="text-xs text-gray-500">{member.role}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <Separator className="my-4" />
                          <div className="text-center">
                            <Button variant="link" className="text-primary-600 p-0">
                              View All Members
                            </Button>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Popular Tags */}
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold text-dark-700 mb-3">Popular Tags</h3>
                          <div className="flex flex-wrap gap-2">
                            {popularTags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="bg-light-100 hover:bg-light-200 cursor-pointer">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Resources */}
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold text-dark-700 mb-3">Forum Resources</h3>
                          <div className="space-y-2">
                            <Button variant="link" className="text-primary-600 p-0 h-auto justify-start">
                              <HelpCircle className="h-4 w-4 mr-2" /> Forum Guidelines
                            </Button>
                            <Button variant="link" className="text-primary-600 p-0 h-auto justify-start">
                              <BookOpen className="h-4 w-4 mr-2" /> Security Resources
                            </Button>
                            <Button variant="link" className="text-primary-600 p-0 h-auto justify-start">
                              <Bell className="h-4 w-4 mr-2" /> Subscribe to Updates
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForumPage;