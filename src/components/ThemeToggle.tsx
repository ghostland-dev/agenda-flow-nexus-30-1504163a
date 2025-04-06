
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

type Theme = 'light' | 'dark';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    // Check if browser has a preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set theme based on preference or default to light
    const initialTheme: Theme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
    
    toast({
      title: `Mode ${newTheme === 'light' ? 'clair' : 'sombre'} activé`,
      description: `L'interface est maintenant en mode ${newTheme === 'light' ? 'clair' : 'sombre'}.`,
      duration: 2000
    });
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme} 
      className="rounded-full"
      aria-label={`Activer le mode ${theme === 'light' ? 'sombre' : 'clair'}`}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;
