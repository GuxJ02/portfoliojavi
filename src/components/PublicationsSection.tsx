import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const PublicationsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const publicationTypes = [
    { id: 'all', label: 'All' },
    { id: 'article', label: 'Article' },
    { id: 'certification', label: 'Certification' },
  ];
  
  const publications = [
    {
      id: 1,
      title: 'RAG Search',
      type: 'article',
      image: 'Images/portada.png',
      description: 'Comprehensive study of RAG workflows, covering scalable indexing, reranking, and local-agent orchestration ',
      link: 'https://medium.com/@javier.garzon.martinez/rag-aplicado-a-la-automatizaci%C3%B3n-de-incidencias-gestionando-el-caos-de-la-bandeja-de-correo-461fd84274ec'
    },
    {
      id: 2,
      title: 'Cybersecurity diploma',
      type: 'certification',
      image: 'Images/Ciberseguridad.png',
      description: 'A university-specific diploma in Cybersecurity, covering ethical hacking, and risk management.',
      link: 'https://www.ufv.es/estudiar-grado-informatica-madrid/'
    },
    {
      id: 3,
      title: 'AWS Certification (In Progress)',
      type: 'certification',
      image: 'Images/Amazon.png',
      description: 'Currently studying for the AWS Founders certification, focusing on cloud machine learning and data engineering.',
      link: 'https://aws.amazon.com/es/certification/'
    },
    {
      id: 4,
      title: 'Computer science degree',
      type: 'certification',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2070',
      description: 'A degree in computer science, focusing on software engineering, data science and machine learning.',
      link: 'https://www.ufv.es/estudiar-grado-informatica-madrid/'
    }
  ];
  
  const filteredPublications = activeFilter === 'all' 
    ? publications 
    : publications.filter(pub => pub.type === activeFilter);

  return (
    <section id="publications" className="section-padding bg-dark bg-subtle-grid">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">My <span style={{ color: '#CBACF9' }}>Achivements</span></h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {publicationTypes.map(type => (
            <Button 
              key={type.id}
              variant={activeFilter === type.id ? "default" : "outline"}
              className={activeFilter === type.id 
                ? "bg-purple-accent hover:bg-purple-accent/90" 
                : "border-white/20 bg-white/5 hover:bg-white/10"}
              onClick={() => setActiveFilter(type.id)}
            >
              {type.label}
            </Button>
          ))}
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredPublications.map(pub => (
            <div key={pub.id} className="card group">
              <div className="relative mb-4 overflow-hidden rounded">
                <img 
                  src={pub.image} 
                  alt={pub.title} 
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-2 right-2 bg-purple-accent px-2 py-1 text-xs font-medium uppercase text-white rounded">
                  {pub.type}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{pub.title}</h3>
              <p className="mb-4 text-sm text-text-secondary">{pub.description}</p>
              
              {/* Simplified link: inline text with arrow, no button hover background */}
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-purple-accent hover:underline"
              >
                Read More
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
