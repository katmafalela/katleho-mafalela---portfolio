
import type { PersonalInfo, Skill, Experience, Project } from './types';

export const personalInfo: PersonalInfo = {
    name: 'Katleho Mafalela',
    title: 'Full Stack Developer',
    phone: '+27635677908',
    email: 'katlehomafalela@gmail.com',
    linkedin: 'https://www.linkedin.com/in/katleho-mafalela/',
    github: 'https://www.github.com/katmafalela/',
    location: 'Johannesburg',
    summary: "Highly motivated and experienced Full-Stack Developer with a proven track record of developing cross-platform mobile and web applications. Proficient in JavaScript (React, React Native), Python, and C#, with expertise in front-end frameworks (React.js, Next.js) and back-end technologies (Node.js, Express.js). Strong understanding of HTML, CSS, SASS, and RESTful APIs, with experience in version control (Git) and database management (SQL, NoSQL). Adept at collaborating with development teams to deliver high-quality software solutions in a fast-paced environment.",
    interests: [
        {
            title: "Sci-Fi Enthusiast",
            details: "I'm a huge fan of speculative fiction, from epic fantasies like 'The Lord of the Rings' to thought-provoking sci-fi. This genre's blend of imagination and technology inspires my approach to problem-solving and creation."
        },
        {
            title: "Aquatic Affinity",
            details: "There's a unique tranquility I find in swimming. It's my go-to activity for clearing my head and staying active. It's a different kind of flow state, away from the keyboard."
        },
        {
            title: "Social Connector",
            details: "I thrive on human connection and enjoy being social. Building relationships and collaborating with others is not just part of my work, but a core part of who I am."
        }
    ],
    motivation: "My family is the core of my universe and my greatest motivation. They inspire me to build a better future, one line of code at a time."
};

export const skills: Skill[] = [
    {
        category: 'Back-end and Databases',
        technologies: ['MongoDB', 'MySQL', 'RESTful APIs', 'Node.js', 'Express.js', 'Python', 'C#', 'Java', 'TypeScript', 'PostgreSQL']
    },
    {
        category: 'Frontend Technologies',
        technologies: ['React.js', 'Next.js', 'Liquid', 'Tailwind CSS', 'Material UI', 'HTML5', 'CSS', 'Javascript']
    },
    {
        category: 'Other',
        technologies: ['Postman', 'Docker', 'GitHub', 'Agile/Scrum', 'Git', 'Trello', 'Shopify', 'Microsoft Excel', 'API design']
    }
];

export const experiences: Experience[] = [
    {
        role: 'Software developer',
        company: 'Project Y',
        location: 'Johannesburg, South Africa',
        period: '04/2024 - 01/2025',
        description: 'Project Y is a social impact venture focused on combating global youth unemployment, which affects 73 million young people worldwide, particularly in South Africa, where youth unemployment stands at 60%. The organization addresses the issue by investing in underserved talents, providing financial support for premium education and essential resources like laptops and insurance. Through a comprehensive membership platform, Project Y connects its members with local and international job opportunities, offering a job guarantee. The initiative is funded through income share agreements, ensuring a fair return for investors while precisely measuring impact.',
        points: [
            'Developed and maintained scalable web applications using React.js, Node.js, and PostgreSQL.',
            'Implemented AI-powered features to enhance user engagement and automation. Integrated RESTful APIs to enhance application functionality.',
            'Secured applications by implementing JWT authentication and encryption protocols.'
        ]
    },
    {
        role: 'Data quality assistant',
        company: 'youth@WORK',
        location: 'Randburg, Gauteng, South Africa',
        period: '02/2024 - 04/2024',
        description: 'Youth@work supports South Africa\'s youth to be equipped with the mindset and skills to take ownership and responsibility for their own futures, allowing them to live fulfilled and economically self-sustained lives within thriving communities.',
        points: [
            'Processed and validated data to ensure accuracy and compliance with company standards.',
            'Participated in team meetings to strategize improvements for data systems.'
        ]
    },
    {
        role: 'Game development Team Leader',
        company: 'INDILANG',
        location: 'City of Johannesburg, Gauteng, South Africa',
        period: '06/2023 - 11/2023',
        description: 'A startup gaming studio whose main focus was creating content based on preserving African culture.',
        points: [
            'Developed interactive learning applications for language education using Unity and C#.',
            'Implemented game mechanics and UI/UX features to enhance user engagement.',
            'Utilized GitHub for version control and code collaboration.'
        ]
    }
];

export const projects: Project[] = [
    {
        title: 'Sisonke-AI-Powered-Community-Resources-Navigator',
        location: 'Sandton, South Africa',
        period: '11/2024',
        description: 'As a backend/frontend developer, I contributed to a community empowerment project addressing poverty and inequality in South African communities, designing and implementing APIs, a forgot password feature, chatbot integration, and frontend connections using Node.js, Express.js, Nodemailer, Hugging Face, and Next.js.',
        stacks: ['NextJS', 'Medium UI', 'NodeJS', 'Python', 'Gemini', 'ExpressJS', 'MongoDB', 'Docker'],
        projectLink: 'https://github.com/202404-Y-ZA-FSW/Sisonke-AI-Powered-Community-Resources-Navigator'
    },
    {
        title: 'E-commerce app',
        description: 'In the backend, I was responsible for creating customer endpoints such as sign in and sign up, registration, update info, customer authentication, and server-side validation. In the frontend, I am responsible for connecting the customer backend with the frontend through RestfulAPIs. I also worked on the search functionality.',
        stacks: ['Typescript', 'NodeJS', 'ExpressJS', 'Tailwind CSS', 'MongoDB', 'Postman']
    },
    {
        title: 'MarsLibs',
        description: 'This was my own version of the Madlibz game, where I used CSS, HTML, and Javascript to create a story with the user filling in the blank spaces with verbs, nouns, and adjectives. The game shows two versions of it. One version is the edit where the user will fill in the blanks, and the other is the preview that is being updated in real time.',
        stacks: ['HTML', 'CSS', 'JavaScript'],
        projectLink: 'https://github.com/katmafalela/Mars-Libz'
    },
    {
        title: 'Ukhula no Nana',
        location: 'Sandton, South Africa',
        period: '02/2023 - Present',
        description: 'The project aimed to develop an interactive children\'s game focused on language learning and literacy skills, utilizing C# as the programming language and Unity as the game engine. The game was designed to teach children to spell and pronounce words in their native languages, promoting linguistic development and cultural heritage. Key features included a drag-and-drop interface for spellings, a grid movement mechanism for an integrated mini-game, and various engaging elements to enhance the learning experience. Although the project was not completed, the concept demonstrated innovation and potential for impact in the field of language education.',
        link: 'https://github.com/katmafalela/Ukhula-noNana',
        stacks: ['Unity game engine', 'C#'],
        projectLink: 'https://github.com/katmafalela/Ukhula-noNana'
    }
];


const portfolioData = {
    personalInfo,
    skills,
    experiences,
    projects
};

// Create a string representation of the portfolio data for the AI
const stringifiedData = JSON.stringify(portfolioData, null, 2);

export const chatbotSystemInstruction = `You are a friendly, professional, and helpful AI assistant on Katleho Mafalela's personal portfolio website. Your name is 'KM-Bot'.
Your main purpose is to answer questions from visitors, like recruiters and hiring managers, about Katleho's skills, experience, and projects.
You MUST base ALL of your answers strictly on the JSON data provided below. Do not add, infer, or invent any details.
If a question is asked that cannot be answered with the provided information (e.g., "What is his favorite food?"), you must politely state that you don't have that specific information.
Keep your answers concise, clear, and easy to read. Use markdown for formatting if it helps (like bullet points).
Always maintain a positive and professional tone.
The data about Katleho is in this JSON object:
${stringifiedData}

When the conversation begins, your first message should be: "Hello! I'm KM-Bot, an AI assistant. I can answer questions about Katleho's skills, experience, and projects. What would you like to know?".
Do not start with "Sure, I can help with that" or similar phrases. Start directly with your designated greeting.
`;
