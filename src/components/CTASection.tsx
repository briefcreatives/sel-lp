import { Calendar, Mail, Phone, Building, MessageSquare, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    posicao: '',
    pais: '',
    mensagem: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
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

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast({
          title: "Recebido!",
          description: "Entraremos em contato em breve.",
        });
        setFormData({
          nome: '',
          email: '',
          empresa: '',
          posicao: '',
          pais: '',
          mensagem: ''
        });
      } else {
        toast({
          title: "Erro ao enviar",
          description: "Tente novamente mais tarde.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Erro de conexão",
        description: "Não foi possível enviar o formulário.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <section className="py-20 reef-accent-section" id="schedule-demo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="text-reef-primary font-[500] text-[30px] tracking-[0.56px] mb-5">
             Discover How REEF Can Transform Your Business
           </h2>
           <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
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
                  <label className="block text-sm font-medium text-primary mb-2">Company position</label>
                  <Input
                    type="text"
                    value={formData.posicao}
                    onChange={(e) => handleInputChange('posicao', e.target.value)}
                    placeholder="e.g. Director, Engineer, etc."
                    className="border-reef-secondary/30 focus:border-reef-secondary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">Base country location</label>
                <Input
                  type="text"
                  value={formData.pais}
                  onChange={(e) => handleInputChange('pais', e.target.value)}
                  placeholder="e.g. Portugal, Spain, etc."
                  className="border-reef-secondary/30 focus:border-reef-secondary"
                />
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

              <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full" onClick={handleClick}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Book via Microsoft Bookings
                </Button>
              </DialogTrigger>

              <DialogContent className="max-w-4xl h-[80vh] p-0 overflow-hidden">
                <DialogHeader className="px-6 py-4 border-b">
                  <DialogTitle className="text-[#01534f]">Microsoft Bookings</DialogTitle>
                </DialogHeader>
                <iframe
                  src="https://outlook.office.com/book/Enlit2025SmartEnergyLab@smartenergylab.com/?ismsaljsauthenabled"
                  width="100%"
                  height="100%"
                  scrolling="yes"
                  style={{ border: "0", minHeight: "calc(80vh - 60px)" }}
                ></iframe>
              </DialogContent>
            </Dialog>
            </div>
          </div>

          {/* Contact Information & Benefits */}
          <div className="space-y-8">

            {/* Demo Benefits */}
            <div className="bg-gradient-to-br from-reef-primary to-reef-secondary rounded-[20px] p-8 text-reef-background">
              <h3 className="text-2xl font-semibold mb-6">What you'll see in the demo:</h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-reef-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span><b className="font-semibold">Seamless integration</b> — discover how REEF connects with batteries, EV chargers, and heat pumps</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-reef-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span><b className="font-semibold">Live pairing demo</b> — see non-wired device communication in action</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-reef-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span><b className="font-semibold">Smart edge-cloud platform</b> — monitor and manage multiple assets in one place, through dedicated interfaces and intelligent algorithms</span>
                </li>
                 <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-reef-background/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span><b className="font-semibold">Partnership potential</b> — explore new business models and digital services for your customers, plus co-development opportunities with REEF</span>
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
