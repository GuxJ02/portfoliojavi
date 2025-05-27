
import { 
  Figma, 
  Code, 
  LayoutGrid, 
  Palette, 
  PenTool, 
  Box, 
  FileCode, 
  Database,
  GitBranchIcon
   
} from "lucide-react";
import { SiPython } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { FaNetworkWired } from 'react-icons/fa';
import { SiPytorch } from 'react-icons/si';
import { SiLangchain } from 'react-icons/si';
import { SiGooglecloud } from 'react-icons/si';



const SkillsSection = () => {
  const skills = [
    {
      name: 'Python',
      // quita strokeWidth (no aplica aquí) y ponle el tamaño y color con Tailwind
      icon: <SiPython className="h-10 w-10 text-blue-400" />,
      color: 'bg-blue-500/20',
      iconColor: 'text-blue-400'
    },
    {
      name: 'Java',
      icon: <DiJava className="h-10 w-10 text-red-500" />,
      color: 'bg-red-500/20',
      iconColor: 'text-red-500'
    },
    {
      name: 'Git',
      icon: <GitBranchIcon strokeWidth={1.5} className="h-10 w-10" />,
      color: 'bg-pink-500/20',
      iconColor: 'text-pink-400'
    },
    {
      name: 'APIs',
      icon: <FaNetworkWired strokeWidth={1.5} className="h-10 w-10" />,
      color: 'bg-orange-500/20',
      iconColor: 'text-orange-400'
    },
    {
      name: 'OracleSQL',
      icon: <Database strokeWidth={1.5} className="h-10 w-10" />,
      color: 'bg-green-500/20',
      iconColor: 'text-green-400'
    },
    {
      name: 'PyTorch',
      icon: <SiPytorch className="h-10 w-10" />,
      color: 'bg-orange-500/20',
      iconColor: 'text-orange-500'
    },
    {
      name: 'Langchain',
      icon: <SiLangchain className="h-10 w-10" />,
      color: 'bg-blue-600/20',
      iconColor: 'text-blue-500'
    },
    {
      name: 'Google Cloud',
      icon: <SiGooglecloud className="h-10 w-10" />,
      color: 'bg-blue-500/20',
      iconColor: 'text-blue-600'
    },
  ];

  return (
    <section id="skills" className="section-padding bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">My Key <span style={{ color: '#CBACF9' }}>Skills</span></h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="card flex flex-col items-center p-6">
              <div className={`mb-4 rounded-full p-4 ${skill.color}`}>
                <div className={skill.iconColor}>{skill.icon}</div>
              </div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
