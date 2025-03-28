import React from 'react';
import { Link } from 'wouter';
import { cn } from '@/lib/utils';
import { Shield, ChevronRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenuItem = ({ href, children, special = false, onClick }: { href: string; children: React.ReactNode; special?: boolean; onClick: () => void }) => (
  <Link 
    href={href} 
    onClick={onClick} 
    className={cn(
      "flex items-center justify-between py-3 px-4 border-b border-gray-100",
      special 
        ? "bg-gray-50 text-gray-900 font-medium" 
        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
    )}
  >
    <span>{children}</span>
    <ChevronRight className="h-4 w-4 text-gray-400" />
  </Link>
);

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
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
      <div className="px-0 divide-y divide-gray-100 bg-white">
        <div className="py-1">
          <div className="px-4 py-2 text-sm font-medium text-gray-500 uppercase">For Users</div>
          <MobileMenuItem href="/auditors" onClick={handleLinkClick}>Security Auditors</MobileMenuItem>
          <MobileMenuItem href="/verified-auditors" onClick={handleLinkClick}>Verified Network</MobileMenuItem>
          <MobileMenuItem href="/business" onClick={handleLinkClick}>For Business</MobileMenuItem>
          <MobileMenuItem href="/contributors" onClick={handleLinkClick}>For Contributors</MobileMenuItem>
        </div>
        
        <div className="py-1">
          <div className="px-4 py-2 text-sm font-medium text-gray-500 uppercase">Platform</div>
          <MobileMenuItem href="/bug-bounty" onClick={handleLinkClick}>Bug Bounty</MobileMenuItem>
          <MobileMenuItem href="/audit-marketplace" onClick={handleLinkClick}>Audit Marketplace</MobileMenuItem>
          <MobileMenuItem href="/compliance" onClick={handleLinkClick}>Regulatory & Compliance</MobileMenuItem>
          <MobileMenuItem href="/community" onClick={handleLinkClick}>Community</MobileMenuItem>
        </div>
        
        <MobileMenuItem href="/agentic-audit" onClick={handleLinkClick} special={true}>
          <div className="flex items-center">
            <Shield className="h-4 w-4 mr-2" />
            <span>AI-Powered Audit</span>
          </div>
        </MobileMenuItem>
        
        <div className="p-4 flex flex-col space-y-3">
          <Link 
            href="/sign-in" 
            onClick={handleLinkClick}
            className="w-full text-center px-4 py-2 rounded-md text-gray-700 font-medium border border-gray-300 hover:bg-gray-50"
          >
            Sign In
          </Link>
          <Link 
            href="/post-project" 
            onClick={handleLinkClick}
            className="w-full text-center px-4 py-2 rounded-md bg-[#ff6b35] text-white font-medium hover:bg-[#ff6b35]/90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
