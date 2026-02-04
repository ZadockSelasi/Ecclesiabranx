"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { MagnetizeButton } from "@/components/ui/magnetize-button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-emerald-950/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-colors duration-300 border-b border-emerald-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-emerald-400">
                Ecclesiabranx
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
            <Link href="/" className="border-transparent text-emerald-100 hover:border-emerald-500 hover:text-emerald-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="border-transparent text-emerald-300/80 hover:border-emerald-500 hover:text-emerald-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200">
              About
            </Link>
            <Link href="/services" className="border-transparent text-emerald-300/80 hover:border-emerald-500 hover:text-emerald-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200">
              Services
            </Link>
            <Link href="/gallery" className="border-transparent text-emerald-300/80 hover:border-emerald-500 hover:text-emerald-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200">
              Gallery
            </Link>
            <Link href="/contact" className="border-transparent text-emerald-300/80 hover:border-emerald-500 hover:text-emerald-400 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200">
              Contact
            </Link>
            <MagnetizeButton
              mainText="Sign In"
              hoverText="Log In"
              onClick={() => router.push('/signin')}
              className="ml-4 bg-emerald-600 hover:bg-emerald-500 text-white border-transparent px-4 h-10 min-w-[100px]"
              particleCount={8}
              attractRadius={30}
            />
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-emerald-950 border-t border-emerald-900">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="bg-emerald-900/30 border-emerald-500 text-emerald-400 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="border-transparent text-emerald-300 hover:bg-emerald-900/30 hover:border-emerald-700 hover:text-emerald-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              About
            </Link>
            <Link href="/services" className="border-transparent text-emerald-300 hover:bg-emerald-900/30 hover:border-emerald-700 hover:text-emerald-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Services
            </Link>
            <Link href="/gallery" className="border-transparent text-emerald-300 hover:bg-emerald-900/30 hover:border-emerald-700 hover:text-emerald-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Gallery
            </Link>
            <Link href="/contact" className="border-transparent text-emerald-300 hover:bg-emerald-900/30 hover:border-emerald-700 hover:text-emerald-200 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Contact
            </Link>
            <div className="pl-3 pr-4 py-2 border-l-4 border-transparent">
              <MagnetizeButton
                mainText="Sign In"
                hoverText="Log In"
                onClick={() => router.push('/signin')}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white border-transparent justify-center"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
