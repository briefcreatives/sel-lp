import { Calendar, Mail, Phone, Building, MessageSquare, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.nome || !formData.email || !formData.empresa) {
      toast({
        title: "Form error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Form submitted successfully!",
      description: "We will contact you soon to schedule your demonstration."
    });

    // Reset form
    setFormData({
      nome: '',
      email: '',
      empresa: '',
      telefone: '',
      mensagem: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 reef-accent-section" id="schedule-demo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
             {/* <Badge variant="secondary" className="mb-4 text-lg px-6 py-2 bg-reef-secondary/20 text-reef-secondary border-reef-secondary/40">
               Exclusive Opportunity
             </Badge> */}
           <h2 className="reef-section-title">
             Discover How REEF Can <span className="text-reef-primary">Transform Your Business</span>
           </h2>
           <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
             Smart Energy will be present at Enlit 2025 in Bilbau, a global forum focused on the energy transition and conecting industries to drive the shift toward a decabornized evergy system.
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-reef-background rounded-[20px] p-6 shadow-xl border border-reef-secondary/30">
            <h3 className="text-2xl font-bold text-primary mb-6">Schedule Your Demo</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Name *</label>
                  <Input
                    type="text"
                    value={formData.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                    placeholder="Your full name"
                    className="border-reef-secondary/30 focus:border-reef-secondary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Email *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    className="border-reef-secondary/30 focus:border-reef-secondary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Company *</label>
                  <Input
                    type="text"
                    value={formData.empresa}
                    onChange={(e) => handleInputChange('empresa', e.target.value)}
                    placeholder="Your company name"
                    className="border-reef-secondary/30 focus:border-reef-secondary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Phone</label>
                  <Input
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => handleInputChange('telefone', e.target.value)}
                    placeholder="+351 xxx xxx xxx"
                    className="border-reef-secondary/30 focus:border-reef-secondary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">Message</label>
                <Textarea
                  value={formData.mensagem}
                  onChange={(e) => handleInputChange('mensagem', e.target.value)}
                  placeholder="Tell us about your specific needs..."
                  rows={4}
                  className="border-reef-secondary/30 focus:border-reef-secondary"
                />
              </div>

               <Button
                 type="submit"
                 size="lg"
                 className="w-full py-4 text-lg animate-glow-hover bg-reef-primary hover:bg-reef-primary/90 text-white"
               >
                 <Calendar className="w-5 h-5 mr-2" />
                 Schedule Your Meeting Now
               </Button>
            </form>

            {/* Microsoft Bookings Integration Placeholder */}
            <div className="mt-6 p-4 bg-reef-accent/50 rounded-lg border border-reef-secondary/20">
              <p className="text-sm text-center text-muted-foreground mb-2">
                Or use our online booking system:
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  toast({
                    title: "Redirecting...",
                    description: "Opening Microsoft Bookings system"
                  });
                }}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book via Microsoft Bookings
              </Button>
            </div>
          </div>

          {/* Contact Information & Benefits */}
          <div className="space-y-8">
            {/* Contact Info
            <div className="bg-reef-background rounded-[20px] p-6 shadow-lg border border-reef-secondary/30">
              <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-reef-secondary" />
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <p className="text-muted-foreground">pedro.almeida@smartenergylab.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Building className="w-6 h-6 text-reef-secondary" />
                  <div>
                    <p className="font-medium text-primary">Website</p>
                    <p className="text-muted-foreground">www.smartenergylab.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-reef-secondary" />
                  <div>
                    <p className="font-medium text-primary">Find us</p>
                    <p className="text-reef-secondary font-semibold">Enlit Fair 2025</p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Demo Benefits */}
            <div className="bg-gradient-to-br from-reef-primary to-reef-secondary rounded-[20px] p-8 text-reef-background">
              <h3 className="text-2xl font-bold mb-6">What you'll see in the demo:</h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-reef-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Easy Pairing in action - cable-free installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-reef-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Complete management platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-reef-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Intelligent optimization algorithms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-reef-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>ROI and specific use cases for your business</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
