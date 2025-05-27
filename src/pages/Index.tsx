
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialSection from "@/components/TestimonialSection";
import PublicationsSection from "@/components/PublicationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WorkExperienceSection from "@/components/WorkExperienceSection";


const Index = () => {
  return (
    <div className="bg-dark">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
       {/* <TestimonialSection />*/}
       <WorkExperienceSection />
      <PublicationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
