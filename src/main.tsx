import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './components/Layout/index.tsx';
import About from './components/About.tsx';
import Recent from './components/Recent.tsx';
import Articles from './components/Articles.tsx';
import SkillsAndExperience from './components/SkillsAndExperience.tsx';
import Contact from './components/Contact.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <About />
      <Recent />
      <Articles />
      <SkillsAndExperience />
      <Contact />
    </Layout>
  </StrictMode>
);
