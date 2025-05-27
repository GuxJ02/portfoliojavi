
import { useRef } from 'react';

const ExperienceSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      number: '2+',
      label: 'Years Experience'
    },
    {
      number: '20+',
      label: 'Personal Projects'
    },
    {
      number: '4',
      label: 'Profesional Projects'
    }
  ];

  const experienceText = `I’m a Software Engineer with a strong passion for artificial intelligence, machine learning, and data science. My core expertise lies in backend development with Java, Spring Boot, and API design, while I actively build AI-driven projects around LLMs, vector databases, and Python.

I now also serve as a Software Quality Engineer on air-traffic-management systems, applying ISO 9001/12207 and other safety standards. This role deepens my focus on reliability while I continue bridging solid engineering with smart, scalable AI technologies.`;
  return (
    <section id="experience" className="section-padding bg-dark bg-subtle-grid">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="section-title">
              ABOUT <span style={{ color: '#CBACF9' }}>ME</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">{experienceText}</p>
            <p className="text-text-secondary leading-relaxed">
            I am deeply committed to continuous learning and innovation, always aiming to bridge solid software engineering with smart, scalable technologies.
            </p>
          </div>
          
          <div className="md:col-span-7" ref={statsRef}>
            <div className="grid gap-8 md:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="card flex flex-col items-center justify-center text-center">
                  <h3 className="mb-2 text-4xl font-bold text-purple-accent">{stat.number}</h3>
                  <p className="text-text-secondary text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
