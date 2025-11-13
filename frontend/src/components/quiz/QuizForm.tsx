import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import type { QuizFormData } from "@/pages/Quiz";

type QuizFormProps = {
  onSubmit: (data: QuizFormData) => void;
};

const QuizForm = ({ onSubmit }: QuizFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<QuizFormData>({
    nome: "",
    email: "",
    empresa: "",
    posicao: "",
    pais: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    field: keyof QuizFormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.nome || !formData.email || !formData.empresa) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um endereço de email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://52sr7xqmzgscbrh4z2hpf7sv5q0fxpnk.lambda-url.eu-central-1.on.aws/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            mensagem: `[QUIZ REGISTRATION]\n\n${formData.mensagem || "Participant registered for REEF EM Quiz"}`,
          }),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || "Failed to send email");
      }

      toast({
        title: "Registo bem-sucedido!",
        description: "Dados enviados. Pode agora iniciar o quiz.",
      });

      // Proceed to quiz questions
      onSubmit(formData);
    } catch (error) {
      console.error("[Quiz Form] Error:", error);
      toast({
        title: "Erro ao enviar",
        description:
          error instanceof Error
            ? error.message
            : "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Quiz <span className="text-reef-green">REEF EM</span>
        </h1>
        <p className="text-lg text-gray-300">
          Teste os seus conhecimentos sobre gestão de energia e flexibilidade
          da rede elétrica.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
      >
        <h2 className="text-2xl font-semibold text-white mb-6">
          Registo de Participação
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nome" className="text-white">
              Nome <span className="text-red-500">*</span>
            </Label>
            <Input
              id="nome"
              type="text"
              placeholder="O seu nome"
              value={formData.nome}
              onChange={(e) => handleInputChange("nome", e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="seu.email@empresa.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="empresa" className="text-white">
              Empresa <span className="text-red-500">*</span>
            </Label>
            <Input
              id="empresa"
              type="text"
              placeholder="Nome da empresa"
              value={formData.empresa}
              onChange={(e) => handleInputChange("empresa", e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="posicao" className="text-white">
              Posição na Empresa
            </Label>
            <Input
              id="posicao"
              type="text"
              placeholder="ex: Gestor de Energia"
              value={formData.posicao}
              onChange={(e) => handleInputChange("posicao", e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pais" className="text-white">
              País
            </Label>
            <Input
              id="pais"
              type="text"
              placeholder="ex: Portugal"
              value={formData.pais}
              onChange={(e) => handleInputChange("pais", e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensagem" className="text-white">
              Mensagem (Opcional)
            </Label>
            <Textarea
              id="mensagem"
              placeholder="Alguma mensagem adicional..."
              value={formData.mensagem}
              onChange={(e) => handleInputChange("mensagem", e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[100px]"
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="outline"
              className="w-full border-2 border-white bg-transparent hover:bg-white/90 text-white font-semibold py-6 text-lg transition-all duration-300"
            >
              {isSubmitting ? "A enviar..." : "Iniciar Quiz"}
            </Button>
          </div>

          <p className="text-sm text-gray-400 text-center">
            <span className="text-red-500">*</span> Campos obrigatórios
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default QuizForm;
