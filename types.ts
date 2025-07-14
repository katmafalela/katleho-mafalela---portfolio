
export interface Skill {
  category: string;
  technologies: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  points: string[];
}

export interface Project {
  title: string;
  location?: string;
  period?: string;
  description: string;
  stacks?: string[];
  link?: string;
  projectLink?: string;
}

export interface PersonalInfo {
    name: string;
    title: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    location:string;
    summary: string;
    interests: {
        title: string;
        details: string;
    }[];
    motivation: string;
}

export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}
