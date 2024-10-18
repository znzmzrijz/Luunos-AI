"use client";

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </Button>
  );
}