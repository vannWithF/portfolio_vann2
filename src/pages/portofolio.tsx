import React from 'react';
import { motion } from 'framer-motion';

export const PortfolioVann: React.FC = () => {
  // Komponen Navbar
  const Navbar: React.FC = () => (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );

  // Komponen About
  const About: React.FC = () => (
    <section id="about" className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          Hi! I'm Avvan Fauzan, a junior full-stack developer passionate about creating
          clean, responsive, and user-friendly web applications.
        </p>
      </div>
    </section>
  );

  // Komponen ProjectCard
  const ProjectCard: React.FC<{
    title: string;
    description: string;
    image: string;
    link: string;
  }> = ({ title, description, image, link }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-700 rounded-lg p-4 shadow-md"
    >
      <img src={image} alt={title} className="rounded-md mb-4" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
      <a href={link} className="text-blue-400 hover:text-blue-500 mt-2 inline-block">
        Learn more
      </a>
    </motion.div>
  );

  // Komponen Projects
  const Projects: React.FC = () => {
    const projects = [
      {
        title: 'PPDB Online',
        description: 'A platform to manage school registrations with a seamless user experience.',
        image: '/views/ppdb-online.png',
        link: '#',
      },
      {
        title: 'Ecommerce Vann',
        description: 'A modern e-commerce site with responsive design and real-time updates.',
        image: '/views/ecommerce-vann.png',
        link: '#',
      },
      {
        title: 'Fire Department Web',
        description: 'An informative website for fire departments with a dark-themed UI.',
        image: '/views/fire-department.png',
        link: '#',
      },
    ];

    return (
      <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Komponen Contact
  const Contact: React.FC = () => (
    <section id="contact" className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg">Feel free to reach out via email or through my social media channels!</p>
        <ul className="mt-4">
          <li>Email: <a href="mailto:example@example.com" className="text-blue-400">example@example.com</a></li>
          <li>LinkedIn: <a href="#" className="text-blue-400">linkedin.com/in/avvanfauzan</a></li>
        </ul>
      </div>
    </section>
  );

  // Render semua komponen
  return (
    <div className="min-h-screen bg-gray-700">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};


