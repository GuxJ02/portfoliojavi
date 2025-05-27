// src/components/WorkExperienceSection.tsx
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle,   // ⬅️ nuevo icono
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

const experiences = [
  {
    id: 1,
    title: "Software Engineer Intern Full Stack",
    company: "NTT DATA",
    period: "Nov 2023 – Mar 2024",
    description:
      "Worked on a public-sector project, developing a web application for the Madrid local police using C#, SQL Server, HTML and CSS.",
    tags: ["SQL", "C#", "SVN", "Jira"],
    icon: <Briefcase className="h-5 w-5 text-white" />,
  },
  {
    id: 2,
    title: "Software Engineer Intern Full Stack",
    company: "NTT DATA",
    period: "Mar 2024 – Jun 2024",
    description:
      "Joined a newer police-related project using modern C#, REST APIs, SQL Server, HTML and CSS.",
    tags: ["SQL", "C#", "API", "GIT"],
    icon: <Building2 className="h-5 w-5 text-white" />,
  },
  {
    id: 3,
    title: "Software Backend Engineer",
    company: "NTT DATA",
    period: "Sep 2024 – May 2025",
    description:
      "Developed the backend for Instituto de Crédito Oficial (ICO), using Java, Spring Boot and SQL Server with an Angular front-end.",
    tags: ["Java", "API", "SQL", "GIT", "Spring Boot"],
    icon: <Calendar className="h-5 w-5 text-white" />,
  },
  {
    id: 4,
    title: "Software Quality Engineer",
    company: "Capgemini Engineering", 
    period: "Jun 2025 – Present",
    description:
      "Ensuring quality and regulatory compliance (ISO 9001, ISO 12207, ED-153) for air-traffic-management software, focusing on verification, validation and test automation.",
    tags: ["Quality", "ISO 9001", "ISO 12207", "ED-153", "Jira"],
    icon: <CheckCircle className="h-5 w-5 text-white" />,
  },
];

const WorkExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          experiences.forEach((_, i) => {
            setTimeout(
              () => setVisibleCount((c) => Math.max(c, i + 1)),
              i * 550 // delay de 0.55 s entre cada bloque
            );
          });
          obs.disconnect();
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -150px 0px",
      }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="work-experience"
      ref={sectionRef}
      className="section-padding bg-dark"
    >
      <div className="container mx-auto px-4 relative">
        <h2 className="section-title">
          My <span style={{ color: "#836EA7" }}>Work</span> Experience
        </h2>
        <p className="text-text-secondary mb-16 max-w-2xl">
          I have worked on a variety of projects, focusing on back-end development and AI-driven quality for safety-critical systems. Here are some of my most recent roles.
        </p>

        {/* Línea central */}
        <div
          className="
            absolute top-0 left-1/2 transform -translate-x-1/2
            w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent
          "
        />

        <div className="space-y-16">
          {experiences.map((exp, idx) => {
            const alignLeft = idx % 2 === 0;
            const isVisible = idx < visibleCount;
            return (
              <div
                key={exp.id}
                className={`relative flex w-full ${
                  alignLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Punto animado */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 h-6 w-6 rounded-full bg-purple-accent flex items-center justify-center animate-pulse-slow">
                  {exp.icon}
                </div>

                {/* Card */}
                <div
                  className={`
                    w-full md:w-5/12
                    bg-white/10 backdrop-blur-md
                    p-8 rounded-2xl border-t-4 border-purple-accent
                    transform transition-all duration-[1200ms] ease-out
                    ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : alignLeft
                        ? "-translate-x-20 opacity-0"
                        : "translate-x-20 opacity-0"
                    }
                    ${
                      alignLeft
                        ? "ml-4 md:ml-0 md:mr-auto"
                        : "mr-4 md:mr-0 md:ml-auto"
                    }
                  `}
                >
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-text-secondary text-sm italic">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-text-secondary mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-white/5 text-xs text-white"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
