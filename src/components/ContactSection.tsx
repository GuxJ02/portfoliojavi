import { Phone, Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-dark">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-md rounded-2xl bg-white/5 p-8 backdrop-blur-sm">
          
          <h2 className="text-center text-3xl font-bold text-orange-accent mb-6">
            Contact me
          </h2>
          
          <div className="space-y-6">
            
            {/* Teléfono */}
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-purple-accent/20 p-3">
                <Phone className="h-6 w-6 text-purple-accent" />
              </div>
              <div>
                <h4 className="text-lg font-medium">Phone Number</h4>
                <p className="text-text-secondary">+34 678 675 239</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-purple-accent/20 p-3">
                <Mail className="h-6 w-6 text-purple-accent" />
              </div>
              <div>
                <h4 className="text-lg font-medium">Email Address</h4>
                <p className="text-text-secondary">
                  javier.garzon.martinez@gmail.com
                </p>
              </div>
            </div>
            
            {/* LinkedIn */}
            <div className="mt-8 border-t border-white/10 pt-6 text-center">
              <p className="mb-4 text-text-secondary">
                Contact me on LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/javier-garz%C3%B3n-62b842255/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-white/5 p-3 transition-colors hover:bg-white/10"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
