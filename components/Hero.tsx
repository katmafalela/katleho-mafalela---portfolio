
import React from 'react';
import { personalInfo } from '../constants';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-start text-left py-20">
            <div className="max-w-4xl">
                <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-4 tracking-wider">
                    <span className="inline-block fade-in-up" style={{animationDelay: '0.2s'}}>
                        <span className="text-teal-500 dark:text-teal-400 text-glow">KATLEHO</span>
                    </span>
                    <span className="inline-block fade-in-up" style={{animationDelay: '0.4s'}}> MAFALELA</span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 mb-8 font-light tracking-widest fade-in-up" style={{animationDelay: '0.6s'}}>
                    {personalInfo.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed fade-in-up" style={{animationDelay: '0.8s'}}>
                    {personalInfo.summary}
                </p>
                <div className="mt-12 fade-in-up" style={{animationDelay: '1s'}}>
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                         <a 
                            href="/Katleho_Mafalela_CV.pdf"
                            download="Katleho Mafalela - CV.pdf"
                            className="px-8 py-4 bg-teal-500 text-gray-900 font-bold rounded-md hover:bg-teal-600 dark:hover:bg-teal-400 transition-all duration-300 shadow-lg shadow-teal-500/20 transform hover:scale-105 pulse-once"
                        >
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-transparent border-2 border-teal-500 text-teal-500 dark:text-teal-400 font-bold rounded-md hover:bg-teal-500 hover:text-gray-900 dark:hover:text-gray-900 transition-all duration-300 shadow-lg shadow-teal-500/10 transform hover:scale-105"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
