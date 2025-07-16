import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Shield, Clock, CheckCircle } from "lucide-react";
import bilheteUnicoHero from "@/assets/bilhete-unico-hero.jpg";

interface HeroSectionProps {
  onStartRequest: () => void;
}

const HeroSection = ({ onStartRequest }: HeroSectionProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-subtle">
      {/* Hero Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${bilheteUnicoHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-brasil opacity-5" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo/Title */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 bg-gradient-primary rounded-xl shadow-glow">
                <CreditCard className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-primary">
                  Passe Fácil
                </h1>
                <p className="text-xl text-muted-foreground">
                  Sistema de Requisição de Bilhete Único
                </p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solicite seu bilhete único estudantil de forma rápida e prática. 
              Basta inserir o CPF do responsável e seguir os passos.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <Card className="border-0 shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-gradient-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Seguro</h3>
                <p className="text-sm text-muted-foreground">
                  Seus dados são protegidos com criptografia avançada
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-gradient-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Rápido</h3>
                <p className="text-sm text-muted-foreground">
                  Processo simplificado em poucos minutos
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-gradient-primary rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Fácil</h3>
                <p className="text-sm text-muted-foreground">
                  Interface intuitiva e processo automatizado
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <Button
              onClick={onStartRequest}
              variant="brasil"
              size="hero"
              className="text-lg font-semibold"
            >
              Solicitar Bilhete Único
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Processo 100% online • Gratuito • Resultado em até 3 dias úteis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;