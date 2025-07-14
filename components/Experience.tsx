
import React from 'react';
import type { Experience as ExperienceType } from '../types';
import FadeInOnScroll from './FadeInOnScroll';

interface ExperienceProps {
    experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
    return (
        <section id="experience" className="py-24">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white tracking-widest">EXPERIENCE</h2>
            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-6">
                {experiences.map((exp, index) => (
                    <FadeInOnScroll key={index} delay={index * 200}>
                         <div className="mb-12 ml-12 pl-6">
                            <span className="absolute -left-[13px] flex items-center justify-center w-6 h-6 bg-teal-500 rounded-full ring-8 ring-white dark:ring-gray-900">
                            </span>
                            <div className="p-6 bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg relative transition-all duration-300 hover:border-teal-500 dark:hover:border-teal-400/50 hover:shadow-teal-500/10">
                                 <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                        <p className="text-lg text-teal-500 dark:text-teal-400">{exp.company}</p>
                                    </div>
                                    <time className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">{exp.period}</time>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 mb-4">{exp.location}</p>
                                <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-300">{exp.description}</p>
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                                    {exp.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeInOnScroll>
                ))}
            </div>
        </section>
    );
};

export default Experience;
