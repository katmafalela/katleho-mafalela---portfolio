
'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/providers/ThemeProvider';
import { ThemeToggle } from './ThemeToggle';

const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['About', 'Skills', 'Experience', 'Projects'];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg dark:shadow-teal-500/10' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 flex justify-between items-center h-20">
                <a 
                    href="#hero" 
                    className="text-2xl font-bold tracking-widest text-gray-900 dark:text-white hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 z-50"
                    onClick={handleLinkClick}
                >
                    K<span className="text-teal-500 dark:text-teal-400">M</span>
                </a>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a 
                            key={link}
                            href={`#${link.toLowerCase()}`} 
                            className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300 relative group"
                        >
                            {link}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 dark:bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                     <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                     <button 
                        onClick={toggleMenu} 
                        className="z-50 text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-around">
                            <span className={`block w-full h-0.5 bg-current transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
                            <span className={`block w-full h-0.5 bg-current transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`block w-full h-0.5 bg-current transform transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="flex flex-col items-center justify-center h-full space-y-8">
                    {navLinks.map(link => (
                        <a 
                            key={link}
                            href={`#${link.toLowerCase()}`} 
                            onClick={handleLinkClick}
                            className="text-3xl text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300"
                        >
                            {link}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
