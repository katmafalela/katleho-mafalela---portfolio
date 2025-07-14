
import React from 'react';
import type { PersonalInfo } from '../types';

interface AboutProps {
    personalInfo: PersonalInfo;
}

const About: React.FC<AboutProps> = ({ personalInfo }) => {
    return (
        <section id="about" className="py-24">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white tracking-widest">ABOUT ME</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {personalInfo.interests.map((interest, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400/50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-teal-500/10">
                        <h3 className="text-2xl font-bold text-teal-500 dark:text-teal-400 mb-3">{interest.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{interest.details}</p>
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center bg-gray-100 dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Motivation</h3>
                 <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto italic">"{personalInfo.motivation}"</p>
            </div>
        </section>
    );
};

export default About;
