
import React from 'react';
import { Link } from 'wouter';

const FindAuditor: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#032757] to-blue-600 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Find an Auditor</h1>
          <div className="grid gap-6">
            {/* Add your auditor search functionality here */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Search and connect with verified security auditors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindAuditor;
