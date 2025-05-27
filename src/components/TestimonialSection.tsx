
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "Animated space exploration drama gorgeous animation with an exciting and emotional story. Collection of weapons is genuinely cool. 10/10 Game level is satisfying.",
      name: "Mrinnmoy Krishna Roy",
      position: "Art Director",
      avatar: "/lovable-uploads/a20f7ee6-73cc-41c8-a458-476c3d2136c4.png"
    },
    {
      id: 2,
      quote: "Working with Mrinnmoy was transformative for our product. His UX insights and design expertise elevated our application to a level we didn't think was possible.",
      name: "Sarah Johnson",
      position: "Product Manager at TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 3,
      quote: "The attention to detail and user empathy that Mrinnmoy brings to his work is exceptional. Our conversion rates increased by 40% after implementing his design recommendations.",
      name: "David Chen",
      position: "CTO at StartupX",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-padding bg-dark">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl relative">
          <div className="text-center">
            <img 
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].name}
              className="w-16 h-16 rounded-full mx-auto mb-6 object-cover border-2 border-purple-accent"
            />
            
            <div className="mb-8">
              <svg className="w-8 h-8 text-purple-accent mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-4">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="mx-auto w-16 h-1 bg-purple-accent mb-4"></div>
              
              <p className="font-medium text-white">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-text-secondary">{testimonials[currentIndex].position}</p>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline" 
                className="rounded-full h-10 w-10 p-0 border border-white/20 bg-white/5"
                onClick={prevTestimonial}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="white" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </Button>
              
              <Button 
                variant="outline" 
                className="rounded-full h-10 w-10 p-0 border border-white/20 bg-white/5"
                onClick={nextTestimonial}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.1584 3.13514C5.95694 3.32401 5.94673 3.64042 6.13559 3.84188L9.565 7.49991L6.13559 11.1579C5.94673 11.3594 5.95694 11.6758 6.1584 11.8647C6.35986 12.0535 6.67627 12.0433 6.86513 11.8419L10.6151 7.84188C10.7954 7.64955 10.7954 7.35027 10.6151 7.15794L6.86513 3.15794C6.67627 2.95648 6.35986 2.94628 6.1584 3.13514Z" fill="white" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
