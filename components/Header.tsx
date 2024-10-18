"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MenuIcon, XIcon } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="py-4 px-6 bg-background border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-primary"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
          <span className="text-2xl font-bold">Luunos AI</span>
        </Link>
        <nav className="hidden md:flex space-x-4 items-center">
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Button variant="outline">Log In</Button>
          <Button>Sign Up</Button>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu}>
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 p-4 bg-background border-t">
          <Link href="/dashboard" className="block py-2 hover:underline">
            Dashboard
          </Link>
          <Button variant="outline" className="w-full">Log In</Button>
          <Button className="w-full">Sign Up</Button>
        </div>
      )}
    </header>
  );
}