import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, User, Search, FileText, MapPin, Calendar, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
// import HeroSection from "./HeroSection"; // Comentado - não preciso da tela inicial

interface StudentData {
  aluno: string;
  codigo_aluno: number;
  curso_aluno: string;
  CPF_resp_fin: string;
  whatsapp_fin: string;
  email_resp: string;
}

interface ManualFormData {
  nomeAluno: string;
  nomeResponsavel: string;
  cpfResponsavel: string;
  endereco: string;
  telefone: string;
  email: string;
  escola: string;
  serie: string;
  turno: string;
}

const PasseFacilTicket = () => {
  const [step, setStep] = useState<'hero' | 'search' | 'select' | 'display' | 'manual' | 'success'>('search');
  const [cpf, setCpf] = useState('');
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [studentsList, setStudentsList] = useState<StudentData[]>([]);
  const [manualData, setManualData] = useState<ManualFormData>({
    nomeAluno: '',
    nomeResponsavel: '',
    cpfResponsavel: '',
    endereco: '',
    telefone: '',
    email: '',
    escola: '',
    serie: '',
    turno: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value);
    setCpf(formatted);
  };

  const searchStudent = async () => {
    if (!cpf) {
      toast({
        title: "CPF obrigatório",
        description: "Por favor, insira o CPF do responsável",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('alunosIntegraSae')
        .select('*')
        .eq('CPF_resp_fin', cpf.replace(/\D/g, ''));

      if (error) {
        throw error;
      }

      if (data && data.length > 0) {
        if (data.length === 1) {
          // Apenas um aluno encontrado
          setStudentData(data[0]);
          setStep('display');
          toast({
            title: "Aluno encontrado!",
            description: `Dados de ${data[0].aluno} carregados com sucesso.`,
          });
        } else {
          // Múltiplos alunos encontrados
          setStudentsList(data);
          setStep('select');
          toast({
            title: "Múltiplos alunos encontrados!",
            description: `Encontrados ${data.length} alunos para este CPF. Selecione o aluno desejado.`,
          });
        }
      } else {
        setStep('manual');
        setManualData(prev => ({ ...prev, cpfResponsavel: cpf }));
        toast({
          title: "Aluno não encontrado",
          description: "Preencha os dados manualmente abaixo.",
        });
      }
    } catch (error) {
      console.error('Erro ao buscar aluno:', error);
      toast({
        title: "Erro na busca",
        description: "Ocorreu um erro ao buscar os dados. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleManualSubmit = async () => {
    const requiredFields = ['nomeAluno', 'nomeResponsavel', 'cpfResponsavel', 'endereco', 'telefone', 'email', 'escola', 'serie', 'turno'];
    const missingFields = requiredFields.filter(field => !manualData[field as keyof ManualFormData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      // Aqui você pode salvar os dados ou processar a requisição
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simula processamento
      
      setStep('success');
      toast({
        title: "Requisição enviada!",
        description: "Sua requisição de bilhete único foi enviada com sucesso.",
      });
    } catch (error) {
      console.error('Erro ao enviar requisição:', error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar a requisição. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const processTicketRequest = async () => {
    if (!studentData) return;

    setLoading(true);
    try {
      // Aqui você pode processar a requisição com os dados encontrados
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simula processamento
      
      setStep('success');
      toast({
        title: "Requisição enviada!",
        description: "Sua requisição de bilhete único foi enviada com sucesso.",
      });
    } catch (error) {
      console.error('Erro ao processar requisição:', error);
      toast({
        title: "Erro ao processar",
        description: "Ocorreu um erro ao processar a requisição. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const selectStudent = (student: StudentData) => {
    setStudentData(student);
    setStep('display');
    toast({
      title: "Aluno selecionado!",
      description: `Dados de ${student.aluno} carregados com sucesso.`,
    });
  };

  const resetForm = () => {
    setStep('search');
    setCpf('');
    setStudentData(null);
    setStudentsList([]);
    setManualData({
      nomeAluno: '',
      nomeResponsavel: '',
      cpfResponsavel: '',
      endereco: '',
      telefone: '',
      email: '',
      escola: '',
      serie: '',
      turno: ''
    });
  };

  // Comentado - não preciso da tela inicial
  // if (step === 'hero') {
  //   return <HeroSection onStartRequest={() => setStep('search')} />;
  // }

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-card">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-primary">
              Requisição Enviada!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Sua requisição de bilhete único foi enviada com sucesso. Você receberá um retorno em breve.
            </p>
            <Button 
              onClick={resetForm}
              variant="brasil"
              size="lg"
              className="w-full"
            >
              Nova Requisição
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-card">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-primary">
                Passe Fácil - Requisição de Bilhete Único
              </CardTitle>
              <p className="text-muted-foreground">
                Sistema de solicitação de bilhete único estudantil
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {step === 'search' && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="cpf" className="text-sm font-medium">
                  CPF do Responsável Financeiro
                </Label>
                <p className="text-xs text-muted-foreground mb-2">
                  Informe o CPF do responsável financeiro pelo aluno
                </p>
                <div className="relative">
                  <Input
                    id="cpf"
                    type="text"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={handleCPFChange}
                    maxLength={14}
                    className="pl-10"
                  />
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              <Button
                onClick={searchStudent}
                disabled={loading}
                variant="hero"
                size="lg"
                className="w-full"
              >
                {loading ? (
                  "Buscando..."
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    Buscar Aluno
                  </>
                )}
              </Button>
            </div>
          )}

          {step === 'select' && studentsList.length > 0 && (
            <div className="space-y-4">
              <div className="p-4 bg-accent rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Múltiplos Alunos Encontrados</h3>
                <p className="text-sm text-muted-foreground">
                  Encontrados {studentsList.length} alunos para este CPF. Selecione o aluno desejado:
                </p>
              </div>

              <div className="space-y-3">
                {studentsList.map((student, index) => (
                  <div
                    key={`${student.codigo_aluno}-${index}`}
                    className="p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors"
                    onClick={() => selectStudent(student)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h4 className="font-medium text-primary">{student.aluno}</h4>
                        <p className="text-sm text-muted-foreground">
                          Curso: {student.curso_aluno}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Código: {student.codigo_aluno}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Selecionar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                onClick={resetForm}
                variant="outline"
                size="lg"
                className="w-full"
              >
                Nova Busca
              </Button>
            </div>
          )}

          {step === 'display' && studentData && (
            <div className="space-y-4">
              <div className="p-4 bg-accent rounded-lg">
                <h3 className="font-semibold text-primary mb-3">Dados do Aluno Encontrado</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Nome:</span> {studentData.aluno}
                  </div>
                  <div>
                    <span className="font-medium">Código:</span> {studentData.codigo_aluno}
                  </div>
                  <div>
                    <span className="font-medium">Curso:</span> {studentData.curso_aluno}
                  </div>
                  <div>
                    <span className="font-medium">CPF Responsável:</span> {formatCPF(studentData.CPF_resp_fin)}
                  </div>
                  <div>
                    <span className="font-medium">WhatsApp:</span> {studentData.whatsapp_fin}
                  </div>
                  <div>
                    <span className="font-medium">Email:</span> {studentData.email_resp}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={processTicketRequest}
                  disabled={loading}
                  variant="brasil"
                  size="lg"
                  className="flex-1"
                >
                  {loading ? "Processando..." : "Confirmar Requisição"}
                </Button>
                <Button
                  onClick={resetForm}
                  variant="outline"
                  size="lg"
                >
                  Nova Busca
                </Button>
              </div>
            </div>
          )}

          {step === 'manual' && (
            <div className="space-y-4">
              <div className="p-4 bg-secondary/20 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Preenchimento Manual</h3>
                <p className="text-sm text-muted-foreground">
                  Aluno não encontrado no sistema. Preencha os dados abaixo:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nomeAluno">Nome do Aluno</Label>
                  <Input
                    id="nomeAluno"
                    value={manualData.nomeAluno}
                    onChange={(e) => setManualData({...manualData, nomeAluno: e.target.value})}
                    placeholder="Nome completo do aluno"
                  />
                </div>

                <div>
                  <Label htmlFor="nomeResponsavel">Nome do Responsável</Label>
                  <Input
                    id="nomeResponsavel"
                    value={manualData.nomeResponsavel}
                    onChange={(e) => setManualData({...manualData, nomeResponsavel: e.target.value})}
                    placeholder="Nome completo do responsável"
                  />
                </div>

                <div>
                  <Label htmlFor="cpfResponsavel">CPF do Responsável</Label>
                  <Input
                    id="cpfResponsavel"
                    value={manualData.cpfResponsavel}
                    onChange={(e) => setManualData({...manualData, cpfResponsavel: e.target.value})}
                    placeholder="000.000.000-00"
                    disabled
                  />
                </div>

                <div>
                  <Label htmlFor="telefone">Telefone</Label>
                  <div className="relative">
                    <Input
                      id="telefone"
                      value={manualData.telefone}
                      onChange={(e) => setManualData({...manualData, telefone: e.target.value})}
                      placeholder="(11) 99999-9999"
                      className="pl-10"
                    />
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="endereco">Endereço</Label>
                  <div className="relative">
                    <Input
                      id="endereco"
                      value={manualData.endereco}
                      onChange={(e) => setManualData({...manualData, endereco: e.target.value})}
                      placeholder="Rua, número, bairro, cidade"
                      className="pl-10"
                    />
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={manualData.email}
                    onChange={(e) => setManualData({...manualData, email: e.target.value})}
                    placeholder="email@exemplo.com"
                  />
                </div>

                <div>
                  <Label htmlFor="escola">Escola</Label>
                  <Input
                    id="escola"
                    value={manualData.escola}
                    onChange={(e) => setManualData({...manualData, escola: e.target.value})}
                    placeholder="Nome da escola"
                  />
                </div>

                <div>
                  <Label htmlFor="serie">Série</Label>
                  <Input
                    id="serie"
                    value={manualData.serie}
                    onChange={(e) => setManualData({...manualData, serie: e.target.value})}
                    placeholder="Ex: 1º ano, 2º ano..."
                  />
                </div>

                <div>
                  <Label htmlFor="turno">Turno</Label>
                  <Input
                    id="turno"
                    value={manualData.turno}
                    onChange={(e) => setManualData({...manualData, turno: e.target.value})}
                    placeholder="Manhã, Tarde ou Noite"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={handleManualSubmit}
                  disabled={loading}
                  variant="brasil"
                  size="lg"
                  className="flex-1"
                >
                  {loading ? "Enviando..." : "Enviar Requisição"}
                </Button>
                <Button
                  onClick={resetForm}
                  variant="outline"
                  size="lg"
                >
                  Nova Busca
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PasseFacilTicket;