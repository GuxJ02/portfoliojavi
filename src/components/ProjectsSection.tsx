import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Incident Response Agent',
      description: 'Advanced incident response agent designed to generate comprehensive reports for incoming incidents by leveraging previous cases stored in a RAG database.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
      category: ['Python', 'RAG-LLM', 'Generative AI', 'Machine Learning'],
      link: 'https://github.com/GuxJ02/email-support-agent'
    },
    {
      id: 2,
      title: 'Reviews Sentiment Analysis',
      description: 'Built for major social platform to analyze user behavior and engagement patterns using machine learning algorithms.',
      image: '/Images/Sentiment.png',
      category: ['UI/UX', 'Analytics', 'Python', 'Django'],
      link: 'https://github.com/GuxJ02/AplicacionNPS'
    },
    {
      id: 3,
      title: 'Agent for YT Video Extraction',
      description: 'Developed a generative AI agent for extracting and revising YouTube videos, utilizing groq api to correctly estructure and order the video information in a more readable format.',
      image: '/Images/ImagenAgenteYT.png',
      category: ['Python', 'Youtube', 'Hugging Face', 'Generative AI'],
      link: 'https://github.com/GuxJ02/YoutubeAI-Extractor'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark bg-subtle-grid">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Personal <span style={{ color: '#CBACF9' }}>Projects</span></h2>
        <p className="mb-10 max-w-2xl text-text-secondary">
          Over the years, I have worked on a variety of projects that showcase my skills and passion for technology. Here are some of my recent personal projects.
        </p>
        
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="card h-full">
              <img 
                src={projects[0].image}
                alt={projects[0].title}
                className="h-64 w-full object-cover rounded mb-4"
              />
              <div className="flex flex-wrap gap-2 mb-3">
                {projects[0].category.map((cat, idx) => (
                  <Badge key={idx} variant="outline" className="bg-white/5">
                    {cat}
                  </Badge>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">{projects[0].title}</h3>
              <p className="text-text-secondary mb-4">{projects[0].description}</p>
              <a href={projects[0].link} target="_blank" rel="noopener noreferrer">
                <Button variant="link" className="p-0 text-purple-accent group">
                  View Project 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <div className="grid gap-8 h-full md:grid-rows-2">
              {projects.slice(1).map((project) => (
                <div key={project.id} className="card">
                  <div className="flex flex-col md:flex-row gap-4">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full md:w-40 h-48 md:h-auto object-cover rounded"
                    />
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.category.map((cat, idx) => (
                          <Badge key={idx} variant="outline" className="bg-white/5">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-text-secondary mb-4">{project.description}</p>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="link" className="p-0 text-purple-accent group">
                          View Project 
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="https://github.com/GuxJ02" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="btn-secondary">
              <span>View All Projects</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
