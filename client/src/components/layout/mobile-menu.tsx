import React from 'react';
import { Link, useLocation } from 'wouter';
import { cn } from '@/lib/utils';
import { 
  Shield, 
  ChevronRight,
  User,
  LogIn,
  UserPlus,
  Settings,
  BookOpen,
  MessageSquare,
  FileCode,
  Users,
  Globe,
  Phone,
  Code
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const [location] = useLocation();
  
  const isActiveLink = (path: string) => {
    return location === path;
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div 
      className={cn(
        "md:hidden overflow-hidden transition-all duration-300 shadow-md",
        isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className="px-4 py-4 bg-white">
        {/* Profile Section */}
        <div className="flex items-center mb-6 pb-4 border-b border-gray-200">
          <Avatar className="h-12 w-12 bg-gray-200">
            <AvatarFallback>
              <User className="h-6 w-6 text-gray-700" />
            </AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <h3 className="text-gray-900 font-medium">Account</h3>
            <div className="flex space-x-3 mt-1">
              <Link 
                href="/sign-in" 
                onClick={handleLinkClick}
                className="text-sm text-blue-600 hover:underline"
              >
                Sign In
              </Link>
              <span className="text-gray-300">|</span>
              <Link 
                href="/post-project" 
                onClick={handleLinkClick}
                className="text-sm text-blue-600 hover:underline"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation links */}
        <div className="flex flex-col">
          <Accordion type="single" collapsible className="w-full border-b border-gray-200">
            <AccordionItem value="business" className="border-b-0">
              <AccordionTrigger className="py-3 text-gray-800 hover:no-underline">
                Business
              </AccordionTrigger>
              <AccordionContent>
                <div className="py-1 space-y-2">
                  <Link 
                    href="/business" 
                    onClick={handleLinkClick}
                    className="block py-2 text-gray-700 hover:text-gray-900"
                  >
                    Overview
                  </Link>
                  <Link 
                    href="/post-project" 
                    onClick={handleLinkClick}
                    className="block py-2 text-gray-700 hover:text-gray-900"
                  >
                    Post a Project
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="hackers" className="border-b-0">
              <AccordionTrigger className="py-3 text-gray-800 hover:no-underline">
                Hackers
              </AccordionTrigger>
              <AccordionContent>
                <div className="py-1 space-y-2">
                  <Link 
                    href="/auditors" 
                    onClick={handleLinkClick}
                    className="block py-2 text-gray-700 hover:text-gray-900"
                  >
                    Security Auditors
                  </Link>
                  <Link 
                    href="/verified-auditors" 
                    onClick={handleLinkClick}
                    className="block py-2 text-gray-700 hover:text-gray-900"
                  >
                    Verified Network
                  </Link>
                  <Link 
                    href="/contributors" 
                    onClick={handleLinkClick}
                    className="block py-2 text-gray-700 hover:text-gray-900"
                  >
                    For Contributors
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Standard links */}
          <div className="py-2 space-y-4 border-b border-gray-200">
            <div className="relative flex items-center">
              <div className="absolute -top-1 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] font-medium text-white">
                AI
              </div>
              <Link 
                href="/agentic-audit" 
                onClick={handleLinkClick}
                className="block py-2 text-gray-700 hover:text-gray-900 pr-8"
              >
                Security AI Agents
              </Link>
            </div>

            <Link 
              href="/bug-bounty" 
              onClick={handleLinkClick}
              className="flex items-center py-2 text-gray-700 hover:text-gray-900"
            >
              <BookOpen className="h-4 w-4 mr-2 opacity-70" />
              Bounties
            </Link>

            <Link 
              href="/auditors" 
              onClick={handleLinkClick}
              className="flex items-center py-2 text-gray-700 hover:text-gray-900"
            >
              <FileCode className="h-4 w-4 mr-2 opacity-70" />
              Audits
            </Link>

            <Link 
              href="/forum" 
              onClick={handleLinkClick}
              className="flex items-center py-2 text-gray-700 hover:text-gray-900"
            >
              <MessageSquare className="h-4 w-4 mr-2 opacity-70" />
              Blog
            </Link>

            <Link 
              href="/compliance" 
              onClick={handleLinkClick}
              className="flex items-center py-2 text-gray-700 hover:text-gray-900"
            >
              <Phone className="h-4 w-4 mr-2 opacity-70" />
              Contacts
            </Link>

            <Link 
              href="/community" 
              onClick={handleLinkClick}
              className="flex items-center py-2 text-gray-700 hover:text-gray-900"
            >
              <Users className="h-4 w-4 mr-2 opacity-70" />
              Community
            </Link>
          </div>
          
          {/* Account Section */}
          <div className="mt-6 space-y-3">
            <Link 
              href="/settings" 
              onClick={handleLinkClick}
              className="flex items-center py-2 text-gray-700 hover:text-gray-900"
            >
              <Settings className="h-4 w-4 mr-2 opacity-70" />
              Account Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
