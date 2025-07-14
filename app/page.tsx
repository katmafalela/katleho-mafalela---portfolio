
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import FadeInOnScroll from '@/components/FadeInOnScroll';
import { experiences, projects, skills, personalInfo } from '@/constants';

export default function Home() {
  return (
    <>
      <Hero />
      <FadeInOnScroll>
          <About personalInfo={personalInfo} />
      </FadeInOnScroll>
      <FadeInOnScroll>
          <Skills skills={skills} />
      </FadeInOnScroll>
      <FadeInOnScroll>
          <Experience experiences={experiences} />
      </FadeInOnScroll>
      <FadeInOnScroll>
          <Projects projects={projects} />
      </FadeInOnScroll>
    </>
  );
}
