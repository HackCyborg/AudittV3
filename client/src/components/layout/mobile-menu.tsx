import React from 'react';
import { Link, useLocation } from 'wouter';
import { cn } from '@/lib/utils';
import { Shield, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        {/* Navigation links in a single row, matching desktop */}
        <div className="flex flex-col space-y-4">
          {/* For Auditors Section */}
          <div className="space-y-2">
            <div className="font-medium text-gray-900">For Auditors</div>
            <div className="space-y-2 pl-2">
              <Link 
                href="/auditors" 
                onClick={handleLinkClick}
                className={cn(
                  "block py-1 text-gray-700 hover:text-gray-900",
                  isActiveLink("/auditors") && "text-gray-900 font-medium"
                )}
              >
                Security Auditors
              </Link>
              <Link 
                href="/verified-auditors" 
                onClick={handleLinkClick}
                className={cn(
                  "block py-1 text-gray-700 hover:text-gray-900",
                  isActiveLink("/verified-auditors") && "text-gray-900 font-medium"
                )}
              >
                Verified Network
              </Link>
            </div>
          </div>
          
          {/* Platform Section */}
          <div className="space-y-2">
            <div className="font-medium text-gray-900">Platform</div>
            <div className="space-y-2 pl-2">
              <Link 
                href="/bug-bounty" 
                onClick={handleLinkClick}
                className={cn(
                  "block py-1 text-gray-700 hover:text-gray-900",
                  isActiveLink("/bug-bounty") && "text-gray-900 font-medium"
                )}
              >
                Bug Bounty
              </Link>
              <Link 
                href="/compliance" 
                onClick={handleLinkClick}
                className={cn(
                  "block py-1 text-gray-700 hover:text-gray-900",
                  isActiveLink("/compliance") && "text-gray-900 font-medium"
                )}
              >
                Regulatory & Compliance
              </Link>
              <Link 
                href="/contributors" 
                onClick={handleLinkClick}
                className={cn(
                  "block py-1 text-gray-700 hover:text-gray-900",
                  isActiveLink("/contributors") && "text-gray-900 font-medium"
                )}
              >
                For Contributors
              </Link>
              <div className="ml-2 space-y-1 border-l border-gray-200 pl-2">
                <p className="font-medium text-gray-900 py-1">Community</p>
                <Link 
                  href="/community" 
                  onClick={handleLinkClick}
                  className={cn(
                    "block py-1 text-gray-700 hover:text-gray-900 pl-2",
                    isActiveLink("/community") && "text-gray-900 font-medium"
                  )}
                >
                  Community Home
                </Link>
                <Link 
                  href="/forum" 
                  onClick={handleLinkClick}
                  className={cn(
                    "block py-1 text-gray-700 hover:text-gray-900 pl-2",
                    isActiveLink("/forum") && "text-gray-900 font-medium"
                  )}
                >
                  Discussion Forum
                </Link>
              </div>
            </div>
          </div>
          
          {/* Agentic Audit */}
          <Link 
            href="/agentic-audit" 
            onClick={handleLinkClick}
            className={cn(
              "flex items-center whitespace-nowrap text-yellow-900 px-3 py-2 rounded-full font-medium border border-black-200 transition-all bg-gray-50 hover:bg-blue-100 text-sm w-fit",
              isActiveLink("/agentic-audit") && "bg-gray-100"
            )}
          >
            <Shield className="h-4 w-4 mr-1" />
            <span>Agentic Audit</span>
          </Link>
        </div>
        
        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col space-y-3">
          <Link 
            href="/sign-in" 
            onClick={handleLinkClick}
          >
            <Button 
              variant="outline"
              className="w-full text-gray-700 font-medium hover:text-gray-900"
            >
              Sign In
            </Button>
          </Link>
          <Link 
            href="/post-project" 
            onClick={handleLinkClick}
          >
            <Button className="w-full bg-[#032757] text-white hover:bg-black">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
