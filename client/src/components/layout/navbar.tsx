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
import { ChevronDown, Shield } from "lucide-react";

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
          {/* Logo (far left) */}
          <div className="flex-shrink-0 mr-8">
            <Link href="/" className="flex items-center space-x-2">
              <AudittLogo className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900">Auditt</span>
            </Link>
          </div>

          {/* Desktop Navigation (center, with good spacing) */}
          <nav className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={cn(
                    "nav-item flex items-center text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap text-sm",
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
                    "nav-item flex items-center text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap text-sm",
                    (isActiveLink("/business") || isActiveLink("/compliance")) &&
                      "text-gray-900",
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
                    <Link href="/post-project" className="w-full cursor-pointer">
                      Post a Project
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/bug-bounty"
                className={cn(
                  "nav-item text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap text-sm",
                  isActiveLink("/bug-bounty") && "text-gray-900",
                )}
              >
                Bug Bounty
              </Link>

              <Link
                href="/compliance"
                className={cn(
                  "nav-item text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap text-sm",
                  isActiveLink("/compliance") && "text-gray-900",
                )}
              >
                Regulatory & Compliance
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger
                  className={cn(
                    "nav-item flex items-center text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap text-sm",
                    (isActiveLink("/community") ||
                      isActiveLink("/forum")) &&
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

              <Link
                href="/contributors"
                className={cn(
                  "nav-item text-gray-600 hover:text-gray-900 font-medium whitespace-nowrap text-sm",
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
            </div>
          </nav>

          {/* CTA Buttons (far right) */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <Link href="/sign-in">
              <Button
                variant="link"
                className="text-gray-700 font-medium hover:text-gray-900"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/post-project">
              <Button className="bg-[#032757] text-white hover:bg-[#032757]/90">
                Get Started
              </Button>
            </Link>
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
