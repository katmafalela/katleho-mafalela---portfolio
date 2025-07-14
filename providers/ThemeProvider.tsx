
'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';
import { ThemeTransition } from '@/components/ThemeTransition';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('dark');
    const [isMounted, setIsMounted] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState<null | 'toDark' | 'toLight'>(null);

    useEffect(() => {
      // On mount, read the theme from localStorage
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      if (savedTheme) {
        setTheme(savedTheme);
      }
      setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;
        
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme, isMounted]);

    const toggleTheme = () => {
        if (!isMounted) return;
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setIsTransitioning(newTheme === 'dark' ? 'toDark' : 'toLight');
    };

    const handleTransitionComplete = () => {
        if (isTransitioning) {
            setTheme(isTransitioning === 'toDark' ? 'dark' : 'light');
            setIsTransitioning(null);
        }
    };
    
    if (!isMounted) {
      // To prevent hydration mismatch, render nothing or a loader until mounted
      return null;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
            {isTransitioning && (
                <ThemeTransition 
                    mode={isTransitioning} 
                    onComplete={handleTransitionComplete} 
                />
            )}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
