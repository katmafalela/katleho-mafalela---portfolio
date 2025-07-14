
import React from 'react';
import type { Skill } from '../types';

interface SkillsProps {
    skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    return (
        <section id="skills" className="py-24">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white tracking-widest">SKILLS</h2>
            <div className="space-y-12">
                {skills.map((skillCategory, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800/50 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-xl">
                        <h3 className="text-2xl font-bold text-teal-500 dark:text-teal-400 mb-6">{skillCategory.category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {skillCategory.technologies.map((tech, i) => (
                                <span key={i} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-teal-500 hover:text-white dark:hover:text-gray-900 cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
