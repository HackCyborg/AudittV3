
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield } from 'lucide-react';

const SignUp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#032757]/5 via-white to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 text-[#032757] mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-[#032757] mb-2">Join Auditt</h1>
            <p className="text-gray-600">Start your journey as a security researcher</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <form className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border-gray-300 focus:border-[#032757] focus:ring-[#032757]"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border-gray-300 focus:border-[#032757] focus:ring-[#032757]"
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  className="w-full border-gray-300 focus:border-[#032757] focus:ring-[#032757]"
                />
              </div>
              
              <Button className="w-full bg-[#032757] hover:bg-[#032757]/90 text-white">
                Create Account
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <img src="https://github.com/favicon.ico" alt="GitHub" className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" className="w-full">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
                  Google
                </Button>
              </div>
            </form>
          </div>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-[#032757] hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
