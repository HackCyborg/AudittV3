import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import MobileMenu from "./mobile-menu";
import AudittLogo from "../../assets/auditt-logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  ChevronDown, 
  Shield, 
  User,
  LogIn,
  UserPlus,
  Settings 
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActiveLink = (path: string) => {
    return location === path;
  };

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center h-16 md:h-20">
          {/* Logo (left aligned) */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <AudittLogo className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900">Auditt</span>
            </Link>
          </div>

          {/* Desktop Navigation (separated from logo, with spacing) */}
          <nav className="hidden md:flex items-center mx-auto">
            <div className="flex items-center space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={cn(
                    "nav-item flex items-center text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap text-sm",
                    (isActiveLink("/business") || isActiveLink("/compliance")) &&
                      "text-gray-900",
                  )}
                >
                  <span>Business</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/business" className="w-full cursor-pointer">
                      Overview
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/post-project" className="w-full cursor-pointer">
                      Post a Project
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger
                  className={cn(
                    "nav-item flex items-center text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap text-sm",
                    (isActiveLink("/auditors") ||
                      isActiveLink("/verified-auditors")) &&
                      "text-gray-900",
                  )}
                >
                  <span>Hackers</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/auditors" className="w-full cursor-pointer">
                      Security Auditors
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/verified-auditors"
                      className="w-full cursor-pointer"
                    >
                      Verified Network
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/contributors" className="w-full cursor-pointer">
                      For Contributors
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="flex-shrink-0 text-gray-600 text-sm font-medium relative">
                <div className="absolute -top-1 -right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-[10px] font-medium text-white">
                  AI
                </div>
                <Link 
                  href="/agentic-audit"
                  className={cn(
                    "nav-item text-gray-600 hover:text-gray-900 whitespace-nowrap",
                    isActiveLink("/agentic-audit") && "text-gray-900"
                  )}  
                >
                  Security AI Agents
                </Link>
              </div>

              <Link
                href="/bug-bounty"
                className={cn(
                  "nav-item text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap text-sm",
                  isActiveLink("/bug-bounty") && "text-gray-900",
                )}
              >
                Bounties
              </Link>

              <Link
                href="/auditors"
                className={cn(
                  "nav-item text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap text-sm",
                  isActiveLink("/auditors") && "text-gray-900",
                )}
              >
                Audits
              </Link>

              <Link
                href="/forum"
                className={cn(
                  "nav-item text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap text-sm",
                  isActiveLink("/forum") && "text-gray-900",
                )}
              >
                Blog
              </Link>

              <Link
                href="/compliance"
                className={cn(
                  "nav-item text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap text-sm",
                  isActiveLink("/compliance") && "text-gray-900",
                )}
              >
                Contacts
              </Link>

              <Link
                href="/community"
                className={cn(
                  "nav-item text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap text-sm",
                  isActiveLink("/community") && "text-gray-900",
                )}
              >
                Community
              </Link>
            </div>
          </nav>

          {/* Profile Dropdown (right) */}
          <div className="hidden md:flex items-center ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <Avatar className="h-10 w-10 bg-gray-200 hover:bg-gray-300 transition-colors">
                  <AvatarFallback>
                    <User className="h-5 w-5 text-gray-700" />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/sign-in" className="w-full cursor-pointer">
                    <LogIn className="mr-2 h-4 w-4" />
                    <span>Sign In</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/post-project" className="w-full cursor-pointer">
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Get Started</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings" className="w-full cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Account Settings</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden ml-auto rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </header>
  );
};

export default Navbar;
