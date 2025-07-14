
import React from 'react';
import type { Project } from '../types';

interface ProjectsProps {
    projects: Project[];
}

const ExternalLinkIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);


const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <section id="projects" className="py-24">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white tracking-widest">PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex flex-col justify-between hover:border-teal-500 dark:hover:border-teal-400/50 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-bold text-teal-500 dark:text-teal-400">{project.title}</h3>
                                {(project.projectLink || project.link) && (
                                    <a href={project.projectLink || project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-300">
                                        <ExternalLinkIcon className="w-6 h-6"/>
                                    </a>
                                )}
                            </div>
                            {project.period && <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">{project.period}</p>}
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                        </div>
                        {project.stacks && (
                           <div className="flex flex-wrap gap-2">
                                {project.stacks.map((stack, i) => (
                                    <span key={i} className="text-xs bg-gray-100 dark:bg-gray-700 text-teal-600 dark:text-teal-300 px-3 py-1 rounded-full font-mono">
                                        {stack}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
