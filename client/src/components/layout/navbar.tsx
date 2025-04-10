import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import MobileMenu from "./mobile-menu";
import audittLogoJpeg from "../../assets/auditt-logo.jpeg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Shield, User } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActiveLink = (path: string) => {
    return location === path;
  };

  return (
    <header className="sticky top-0 bg-[#032757] border-b border-gray-200 shadow-sm z-50">
      <div className="container mx-auto px-12 md:px-5 max-w-full">
        <div className="flex items-center justify-between h-18 md:h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0 ml-2">
              <Link href="/" className="flex items-center">
                <img
                  src={audittLogoJpeg}
                  alt="Auditt Logo"
                  className="h-16 py-0"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center ml-6 space-x-6">
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={cn(
                    "nav-item flex items-center text-white hover:text-black font-medium whitespace-nowrap text-sm",
                    (isActiveLink("/auditors") ||
                      isActiveLink("/verified-auditors")) &&
                      "text-gray-900",
                  )}
                >
                  <span>For Auditors</span>
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
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger
                  className={cn(
                    "nav-item flex items-center text-white hover:text-black font-medium whitespace-nowrap text-sm",
                    (isActiveLink("/business") ||
                      isActiveLink("/compliance")) &&
                      "text-white-900",
                  )}
                >
                  <span>For Business</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/business" className="w-full cursor-pointer">
                      Overview
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      href="/post-project"
                      className="w-full cursor-pointer"
                    >
                      Post a Project
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/contributors"
                className={cn(
                  "nav-item text-white hover:text-black font-medium whitespace-nowrap text-sm",
                  isActiveLink("/contributors") && "text-gray-900",
                )}
              >
                For Contributors
              </Link>
              <Link
                href="/agentic-audit"
                className={cn(
                  "flex items-center whitespace-nowrap text-yellow-900 px-3 py-1 rounded-full font-medium border border-black-200 transition-all bg-gray-50 hover:bg-blue-100 text-sm",
                  isActiveLink("/agentic-audit") && "bg-gray-100",
                )}
              >
                <Shield className="h-4 w-4 mr-1" />
                <span>Agentic Audit</span>
              </Link>
              <Link
                href="/compliance"
                className={cn(
                  "nav-item text-white hover:text-black font-medium whitespace-nowrap text-sm",
                  isActiveLink("/compliance") && "text-gray-900",
                )}
              >
                Regulatory & Compliance
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger
                  className={cn(
                    "nav-item flex items-center text-white hover:text-black font-medium whitespace-nowrap text-sm",
                    (isActiveLink("/community") || isActiveLink("/forum")) &&
                      "text-gray-900",
                  )}
                >
                  <span>Community</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/community" className="w-full cursor-pointer">
                      Community Home
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/forum" className="w-full cursor-pointer">
                      Discussion Forum
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>

          {/* Right side with profile and mobile menu */}
          <div className="flex items-center">
            {/* User Profile Icon */}
            <div className="hidden md:flex items-center mr-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    <User className="h-5 w-5 text-gray-700" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="w-full cursor-pointer">
                      My Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="w-full cursor-pointer">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="w-full cursor-pointer">
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/logout" className="w-full cursor-pointer">
                      Logout
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden mr-2 rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
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
      </div>

      {/* Mobile Navigation Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </header>
  );
};

export default Navbar;
