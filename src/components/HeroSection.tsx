
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-dark bg-subtle-grid bg-fixed flex items-center pt-20 pb-16">
      <div className="absolute inset-0 bg-gradient-radial from-purple-accent/10 via-transparent to-transparent opacity-50"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8 inline-block rounded-full overflow-hidden border-4 border-purple-accent p-1 animate-float">
          <img
            src="Images\Yp.png"
            alt="Javier Garzón"
            className="w-28 h-28 rounded-full object-cover"
          />
        </div>
        
        
        <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold">
          Javier<span className="text-orange-accent"> Garzón</span>
        </h1>
        
        <h2 className="mb-6 text-xl md:text-2xl text-text-secondary">
          Software engineer, building Smart Data Solutions.
        </h2>
        <Button
          className="btn-primary text-base group"
          size="lg"
          onClick={() => {
            const section = document.getElementById("projects");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          View my work
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        
        <div className="mt-20 pt-10 border-t border-white/10">
          <p className="text-sm text-text-secondary mb-5">
            I graduated from <span className="text-orange-accent">Universidad Francisco de Vitoria</span> in 2024, and have since gained experience at multiple companies as a <span className="text-orange-accent">software engineer</span>.
          </p>  
          <div className="flex justify-center space-x-4">
            <div className="bg-white/5 p-3 rounded-lg">
              <img src="public\Images\Capgemini.png" alt="CAPGEMINI" className="h-8 w-auto opacity-70" />
            </div>
           
            <div className="bg-white/5 p-3 rounded-lg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/NTT-Data-Logo.svg" alt="NTT DATA" className="h-8 w-auto opacity-70" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-text-secondary mb-2">Let's connect</p>
        <div className="flex space-x-4 justify-center">
          <a href="https://www.linkedin.com/in/javier-garz%C3%B3n-62b842255/" className="text-white/60 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
             <a
    href="https://github.com/GuxJ02"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/60 hover:text-white transition-colors"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.082-.73.082-.73 
      1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.805 1.304 3.49.997.108-.775.42-1.305.763-1.605-2.665-.305-5.467-1.332-5.467-5.93 
      0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404 
      c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.874.12 3.176.77.84 1.235 
      1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.293 
      0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  </a>
        
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
