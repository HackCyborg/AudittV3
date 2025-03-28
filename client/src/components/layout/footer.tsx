import React from 'react';
import { Link } from 'wouter';
import { Twitter, Linkedin, Github, Shield, ExternalLink } from 'lucide-react';
import AudittLogo from '../../assets/auditt-logo';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <AudittLogo className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900">Auditt</span>
            </div>
            <p className="text-gray-600 mb-8 max-w-md">
              Auditt provides blockchain-based security solutions for Web3 projects, offering transparent audit registries and bug bounty programs.
            </p>
            <div className="flex space-x-5">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold mb-6 text-gray-900 uppercase tracking-wider">Products</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/bug-bounty" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                  Bug Bounty Platform
                </Link>
              </li>
              <li>
                <Link href="/audit-marketplace" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                  Audit Marketplace
                </Link>
              </li>
              <li>
                <Link href="/verified-auditors" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                  Verified Auditor Network
                </Link>
              </li>
              <li>
                <Link href="/agentic-audit" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                  <span className="flex items-center">
                    <Shield className="h-3 w-3 mr-1" />
                    AI-Powered Audits
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-6 text-gray-900 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about-us" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-6 text-gray-900 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/documentation" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                  Community
                </Link>
              </li>
              <li>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors text-sm flex items-center">
                  <span>Discord</span>
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-gray-900 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-200 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Auditt. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
              Terms
            </Link>
            <Link href="/cookie-policy" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
