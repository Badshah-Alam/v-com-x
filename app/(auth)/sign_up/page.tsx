"use client"
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
      <div className="w-full max-w-4xl p-8 rounded-lg flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 gap-4">
       
        <div className="w-full">
          <h1 className="text-4xl font-bold mb-12">Create An Account</h1>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
           
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-8">Personal Information</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium">First Name*</label>
                <input type="text" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6F3C]" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Last Name*</label>
                <input type="text" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6F3C]" />
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="newsletter" className="mr-2" />
                <label htmlFor="newsletter" className="text-sm">Sign up for newsletter</label>
              </div>
            </div>

           
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-8">Sign in Information</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium">Email*</label>
                <input type="email" className="w-full p-2 border focus:outline-none focus:ring-2 focus:ring-[#FF6F3C] rounded-md" />
              </div>
              <div className="mb-4 relative">
                <label className="block text-sm font-medium">Password*</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full p-2 border focus:outline-none focus:ring-2 focus:ring-[#FF6F3C] rounded-md pr-10"
                />
                <button
                  type="button"
                  className="absolute right-2 top-[43%] transform -translate-y-1/2 text-gray-500"
                  onClick={togglePassword}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                <p className="text-xs text-red-500 mt-1">
                  Password should be between 8-16 characters, contain lower case letters, at least an uppercase letter, a special character, and at least one number.
                </p>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Re-enter The Password*</label>
                <input type="password" className="w-full p-2 border focus:outline-none focus:ring-2 focus:ring-[#FF6F3C] rounded-md" />
              </div>
              <div className="flex items-center mb-4">
                <input type="checkbox" id="agree" className="mr-2" />
                <label htmlFor="agree" className="text-sm">
                  By using this form you agree with the storage and handling of your data by this website.
                </label>
              </div>
              <button className="w-full bg-[#FF6F3C] text-white py-2 rounded-md font-bold hover:bg-orange-600">Sign In</button>
              <p className="text-xs text-red-500 mt-2">*Required Fields</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
