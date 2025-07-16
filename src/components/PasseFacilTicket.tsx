import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, User, Search, FileText, MapPin, Calendar, Phone, IdCard, CheckCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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

interface TicketFormData {
  nomeAluno: string;
  curso: string;
  turno: string;
  ra: string;
  rg: string;
  dataEmissaoRG: string;
  cpfAluno: string;
  celular: string;
  telefoneFixo: string;
  responsavel: string;
  cep: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
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
  const [ticketFormData, setTicketFormData] = useState<TicketFormData>({
    nomeAluno: '',
    curso: '',
    turno: '',
    ra: '',
    rg: '',
    dataEmissaoRG: '',
    cpfAluno: '',
    celular: '',
    telefoneFixo: '',
    responsavel: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
  });
  const [loading, setLoading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const {
    toast
  } = useToast();
  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };
  
  const formatCEP = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{5})(\d{3})/, '$1-$2');
  };
  
  const formatRG = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4');
  };
  
  const formatDate = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
  };
  
  const searchCEP = async (cep: string) => {
    const cleanCEP = cep.replace(/\D/g, '');
    if (cleanCEP.length !== 8) return;
    
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleanCEP}/json/`);
      const data = await response.json();
      
      if (!data.erro) {
        setTicketFormData(prev => ({
          ...prev,
          endereco: data.logradouro || '',
          bairro: data.bairro || '',
          cidade: data.localidade || '',
          estado: data.uf || ''
        }));
      } else {
        toast({
          title: "CEP não encontrado",
          description: "Verifique o CEP informado e tente novamente.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      toast({
        title: "Erro ao buscar CEP",
        description: "Ocorreu um erro ao buscar o endereço. Tente novamente.",
        variant: "destructive"
      });
    }
  };
  
  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCPF(e.target.value);
    setCpf(formatted);
  };
  
  const handleTicketFormSubmit = async () => {
    const requiredFields = ['nomeAluno', 'curso', 'turno', 'ra', 'rg', 'dataEmissaoRG', 'cpfAluno', 'celular', 'telefoneFixo', 'responsavel', 'cep', 'endereco', 'numero', 'bairro', 'cidade', 'estado'];
    const missingFields = requiredFields.filter(field => !ticketFormData[field as keyof TicketFormData]);
    
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
      // Enviar dados para o webhook do N8N
      const response = await fetch('https://n8n.colegiozampieri.com/webhook/bilheteunico', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...ticketFormData,
          cpfResponsavel: cpf,
          timestamp: new Date().toISOString(),
          origem: 'PasseFacil'
        })
      });
      
      if (!response.ok) {
        throw new Error('Erro ao enviar dados para o webhook');
      }
      
      // Mostrar dialog de sucesso
      setShowSuccessDialog(true);
      
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
      const {
        data,
        error
      } = await supabase.from('alunosIntegraSae').select('*').eq('CPF_resp_fin', cpf.replace(/\D/g, ''));
      if (error) {
        throw error;
      }
      if (data && data.length > 0) {
        if (data.length === 1) {
          // Apenas um aluno encontrado
          setStudentData(data[0]);
          
          // Preenche o formulário com os dados do aluno
          setTicketFormData({
            nomeAluno: data[0].aluno,
            curso: data[0].curso_aluno,
            turno: '',
            ra: '',
            rg: '',
            dataEmissaoRG: '',
            cpfAluno: '',
            celular: data[0].whatsapp_fin,
            telefoneFixo: data[0].whatsapp_fin,
            responsavel: '',
            cep: '',
            endereco: '',
            numero: '',
            complemento: '',
            bairro: '',
            cidade: '',
            estado: ''
          });
          
          setStep('display');
          toast({
            title: "Aluno encontrado!",
            description: `Dados de ${data[0].aluno} carregados com sucesso. Preencha os campos restantes.`
          });
        } else {
          // Múltiplos alunos encontrados
          setStudentsList(data);
          setStep('select');
          toast({
            title: "Múltiplos alunos encontrados!",
            description: `Encontrados ${data.length} alunos para este CPF. Selecione o aluno desejado.`
          });
        }
      } else {
        setStep('manual');
        setManualData(prev => ({
          ...prev,
          cpfResponsavel: cpf
        }));
        toast({
          title: "Aluno não encontrado",
          description: "Preencha os dados manualmente abaixo."
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
        description: "Sua requisição de bilhete único foi enviada com sucesso."
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
        description: "Sua requisição de bilhete único foi enviada com sucesso."
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
    
    // Preenche o formulário com os dados do aluno
    setTicketFormData({
      nomeAluno: student.aluno,
      curso: student.curso_aluno,
      turno: '',
      ra: '',
      rg: '',
      dataEmissaoRG: '',
      cpfAluno: '',
      celular: student.whatsapp_fin,
      telefoneFixo: student.whatsapp_fin,
      responsavel: '',
      cep: '',
      endereco: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: ''
    });
    
    setStep('display');
    toast({
      title: "Aluno selecionado!",
      description: `Dados de ${student.aluno} carregados com sucesso. Preencha os campos restantes.`
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
    setTicketFormData({
      nomeAluno: '',
      curso: '',
      turno: '',
      ra: '',
      rg: '',
      dataEmissaoRG: '',
      cpfAluno: '',
      celular: '',
      telefoneFixo: '',
      responsavel: '',
      cep: '',
      endereco: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: ''
    });
  };

  // Comentado - não preciso da tela inicial
  // if (step === 'hero') {
  //   return <HeroSection onStartRequest={() => setStep('search')} />;
  // }

  if (step === 'success') {
    return <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
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
            <Button onClick={resetForm} variant="zampieri" size="lg" className="w-full">
              Nova Requisição
            </Button>
          </CardContent>
        </Card>
      </div>;
  }
  return <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-card">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/ee3f8a19-a099-4c6d-a6de-d9ddb3397a34.png" 
                alt="Colégio Zampieri" 
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-primary">
                  Passe Fácil - Colégio Zampieri
                </CardTitle>
                <p className="text-muted-foreground">
                  Sistema de solicitação de bilhete único estudantil
                </p>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {step === 'search' && <div className="space-y-4">
              <div>
                <Label htmlFor="cpf" className="text-sm font-medium">
                  CPF do Responsável Financeiro
                </Label>
                <p className="text-xs text-muted-foreground mb-2 font-bold">Deve ser o mesmo CPF que aparece no boleto da mensalidade escolar</p>
                <div className="relative">
                  <Input id="cpf" type="text" placeholder="000.000.000-00" value={cpf} onChange={handleCPFChange} maxLength={14} className="pl-10" />
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              <Button onClick={searchStudent} disabled={loading} variant="hero" size="lg" className="w-full">
                {loading ? "Buscando..." : <>
                    <Search className="w-4 h-4" />
                    Buscar Aluno
                  </>}
              </Button>
            </div>}

          {step === 'select' && studentsList.length > 0 && <div className="space-y-4">
              <div className="p-4 bg-accent rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Múltiplos Alunos Encontrados</h3>
                <p className="text-sm text-muted-foreground">
                  Encontrados {studentsList.length} alunos para este CPF. Selecione o aluno desejado:
                </p>
              </div>

              <div className="space-y-3">
                {studentsList.map((student, index) => <div key={`${student.codigo_aluno}-${index}`} className="p-4 border rounded-lg hover:bg-accent cursor-pointer transition-colors" onClick={() => selectStudent(student)}>
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
                  </div>)}
              </div>

              <Button onClick={resetForm} variant="outline" size="lg" className="w-full">
                Nova Busca
              </Button>
            </div>}

          {step === 'display' && studentData && <div className="space-y-6">
              <div className="p-4 bg-accent rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Formulário de Requisição de Bilhete Único</h3>
                <p className="text-sm text-muted-foreground">
                  Complete os dados abaixo para solicitar o bilhete único estudantil.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nome do Aluno */}
                <div>
                  <Label htmlFor="nomeAluno">Nome do Aluno</Label>
                  <Input 
                    id="nomeAluno" 
                    value={ticketFormData.nomeAluno} 
                    onChange={e => setTicketFormData({...ticketFormData, nomeAluno: e.target.value})}
                    placeholder="Nome completo do aluno"
                    disabled
                  />
                </div>

                {/* Curso */}
                <div>
                  <Label htmlFor="curso">Curso</Label>
                  <Input 
                    id="curso" 
                    value={ticketFormData.curso} 
                    onChange={e => setTicketFormData({...ticketFormData, curso: e.target.value})}
                    placeholder="Curso do aluno"
                    disabled
                  />
                </div>

                {/* Turno */}
                <div>
                  <Label htmlFor="turno">Turno *</Label>
                  <Select value={ticketFormData.turno} onValueChange={value => setTicketFormData({...ticketFormData, turno: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o turno" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manha">Manhã</SelectItem>
                      <SelectItem value="tarde">Tarde</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* RA do Aluno */}
                <div>
                  <Label htmlFor="ra">RA do Aluno *</Label>
                  <p className="text-xs text-muted-foreground mb-1">O RA do aluno consta na carteirinha escolar do Zampieri</p>
                  <Input 
                    id="ra" 
                    value={ticketFormData.ra} 
                    onChange={e => setTicketFormData({...ticketFormData, ra: e.target.value})}
                    placeholder="Número do RA"
                  />
                </div>

                {/* RG do Aluno */}
                <div>
                  <Label htmlFor="rg">RG do(a) Aluno(a) *</Label>
                  <Input 
                    id="rg" 
                    value={ticketFormData.rg} 
                    onChange={e => setTicketFormData({...ticketFormData, rg: formatRG(e.target.value)})}
                    placeholder="00.000.000-0"
                    maxLength={12}
                  />
                </div>

                {/* Data de Emissão do RG */}
                <div>
                  <Label htmlFor="dataEmissaoRG">Data de Emissão do RG *</Label>
                  <div className="relative">
                    <Input 
                      id="dataEmissaoRG" 
                      value={ticketFormData.dataEmissaoRG} 
                      onChange={e => setTicketFormData({...ticketFormData, dataEmissaoRG: formatDate(e.target.value)})}
                      placeholder="DD/MM/AAAA"
                      maxLength={10}
                      className="pl-10"
                    />
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                {/* CPF do Aluno */}
                <div>
                  <Label htmlFor="cpfAluno">CPF do Aluno(a) *</Label>
                  <Input 
                    id="cpfAluno" 
                    value={ticketFormData.cpfAluno} 
                    onChange={e => setTicketFormData({...ticketFormData, cpfAluno: formatCPF(e.target.value)})}
                    placeholder="000.000.000-00"
                    maxLength={14}
                  />
                </div>

                {/* Celular */}
                <div>
                  <Label htmlFor="celular">Celular</Label>
                  <div className="relative">
                    <Input 
                      id="celular" 
                      value={ticketFormData.celular} 
                      onChange={e => setTicketFormData({...ticketFormData, celular: e.target.value})}
                      placeholder="(11) 99999-9999"
                      className="pl-10"
                      disabled
                    />
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Telefone Fixo */}
                <div>
                  <Label htmlFor="telefoneFixo">Telefone Fixo</Label>
                  <div className="relative">
                    <Input 
                      id="telefoneFixo" 
                      value={ticketFormData.telefoneFixo} 
                      onChange={e => setTicketFormData({...ticketFormData, telefoneFixo: e.target.value})}
                      placeholder="(11) 9999-9999"
                      className="pl-10"
                      disabled
                    />
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Responsável */}
                <div>
                  <Label htmlFor="responsavel">Responsável *</Label>
                  <Input 
                    id="responsavel" 
                    value={ticketFormData.responsavel} 
                    onChange={e => setTicketFormData({...ticketFormData, responsavel: e.target.value})}
                    placeholder="Nome do responsável"
                  />
                </div>

                {/* CEP */}
                <div>
                  <Label htmlFor="cep">CEP *</Label>
                  <div className="relative">
                    <Input 
                      id="cep" 
                      value={ticketFormData.cep} 
                      onChange={e => {
                        const formatted = formatCEP(e.target.value);
                        setTicketFormData({...ticketFormData, cep: formatted});
                        if (formatted.length === 9) {
                          searchCEP(formatted);
                        }
                      }}
                      placeholder="00000-000"
                      maxLength={9}
                      className="pl-10"
                    />
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Endereço */}
                <div>
                  <Label htmlFor="endereco">Endereço *</Label>
                  <p className="text-xs text-muted-foreground mb-1">Sistema busca automaticamente pelo CEP informado</p>
                  <Input 
                    id="endereco" 
                    value={ticketFormData.endereco} 
                    onChange={e => setTicketFormData({...ticketFormData, endereco: e.target.value})}
                    placeholder="Rua, Avenida, etc."
                  />
                </div>

                {/* Número */}
                <div>
                  <Label htmlFor="numero">Número *</Label>
                  <Input 
                    id="numero" 
                    value={ticketFormData.numero} 
                    onChange={e => setTicketFormData({...ticketFormData, numero: e.target.value})}
                    placeholder="Número da residência"
                  />
                </div>

                {/* Complemento */}
                <div>
                  <Label htmlFor="complemento">Complemento</Label>
                  <Input 
                    id="complemento" 
                    value={ticketFormData.complemento} 
                    onChange={e => setTicketFormData({...ticketFormData, complemento: e.target.value})}
                    placeholder="Apto, Bloco, etc. (opcional)"
                  />
                </div>

                {/* Bairro */}
                <div>
                  <Label htmlFor="bairro">Bairro *</Label>
                  <p className="text-xs text-muted-foreground mb-1">Sistema busca automaticamente pelo CEP informado</p>
                  <Input 
                    id="bairro" 
                    value={ticketFormData.bairro} 
                    onChange={e => setTicketFormData({...ticketFormData, bairro: e.target.value})}
                    placeholder="Bairro"
                  />
                </div>

                {/* Cidade */}
                <div>
                  <Label htmlFor="cidade">Cidade *</Label>
                  <p className="text-xs text-muted-foreground mb-1">Sistema busca automaticamente pelo CEP informado</p>
                  <Input 
                    id="cidade" 
                    value={ticketFormData.cidade} 
                    onChange={e => setTicketFormData({...ticketFormData, cidade: e.target.value})}
                    placeholder="Cidade"
                  />
                </div>

                {/* Estado */}
                <div>
                  <Label htmlFor="estado">Estado *</Label>
                  <p className="text-xs text-muted-foreground mb-1">Sistema busca automaticamente pelo CEP informado</p>
                  <Input 
                    id="estado" 
                    value={ticketFormData.estado} 
                    onChange={e => setTicketFormData({...ticketFormData, estado: e.target.value})}
                    placeholder="Estado"
                  />
                </div>
              </div>

              <div className="p-4 bg-secondary/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Importante:</strong> Todos os campos marcados com (*) são obrigatórios, exceto o complemento.
                </p>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleTicketFormSubmit} disabled={loading} variant="zampieri" size="lg" className="flex-1">
                  {loading ? "Enviando..." : "Enviar Requisição"}
                </Button>
                <Button onClick={resetForm} variant="outline" size="lg">
                  Nova Busca
                </Button>
              </div>
            </div>}

          {step === 'manual' && <div className="space-y-4">
              <div className="p-4 bg-secondary/20 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Preenchimento Manual</h3>
                <p className="text-sm text-muted-foreground">
                  Aluno não encontrado no sistema. Preencha os dados abaixo:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nomeAluno">Nome do Aluno</Label>
                  <Input id="nomeAluno" value={manualData.nomeAluno} onChange={e => setManualData({
                ...manualData,
                nomeAluno: e.target.value
              })} placeholder="Nome completo do aluno" />
                </div>

                <div>
                  <Label htmlFor="nomeResponsavel">Nome do Responsável</Label>
                  <Input id="nomeResponsavel" value={manualData.nomeResponsavel} onChange={e => setManualData({
                ...manualData,
                nomeResponsavel: e.target.value
              })} placeholder="Nome completo do responsável" />
                </div>

                <div>
                  <Label htmlFor="cpfResponsavel">CPF do Responsável</Label>
                  <Input id="cpfResponsavel" value={manualData.cpfResponsavel} onChange={e => setManualData({
                ...manualData,
                cpfResponsavel: e.target.value
              })} placeholder="000.000.000-00" disabled />
                </div>

                <div>
                  <Label htmlFor="telefone">Telefone</Label>
                  <div className="relative">
                    <Input id="telefone" value={manualData.telefone} onChange={e => setManualData({
                  ...manualData,
                  telefone: e.target.value
                })} placeholder="(11) 99999-9999" className="pl-10" />
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="endereco">Endereço</Label>
                  <div className="relative">
                    <Input id="endereco" value={manualData.endereco} onChange={e => setManualData({
                  ...manualData,
                  endereco: e.target.value
                })} placeholder="Rua, número, bairro, cidade" className="pl-10" />
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={manualData.email} onChange={e => setManualData({
                ...manualData,
                email: e.target.value
              })} placeholder="email@exemplo.com" />
                </div>

                <div>
                  <Label htmlFor="escola">Escola</Label>
                  <Input id="escola" value={manualData.escola} onChange={e => setManualData({
                ...manualData,
                escola: e.target.value
              })} placeholder="Nome da escola" />
                </div>

                <div>
                  <Label htmlFor="serie">Série</Label>
                  <Input id="serie" value={manualData.serie} onChange={e => setManualData({
                ...manualData,
                serie: e.target.value
              })} placeholder="Ex: 1º ano, 2º ano..." />
                </div>

                <div>
                  <Label htmlFor="turno">Turno</Label>
                  <Input id="turno" value={manualData.turno} onChange={e => setManualData({
                ...manualData,
                turno: e.target.value
              })} placeholder="Manhã, Tarde ou Noite" />
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleManualSubmit} disabled={loading} variant="zampieri" size="lg" className="flex-1">
                  {loading ? "Enviando..." : "Enviar Requisição"}
                </Button>
                <Button onClick={resetForm} variant="outline" size="lg">
                  Nova Busca
                </Button>
              </div>
            </div>}
        </CardContent>
      </Card>
      
      {/* Dialog de Sucesso */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-primary rounded-full">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <DialogTitle className="text-xl font-bold text-primary">
                Formulário enviado com sucesso!
              </DialogTitle>
            </div>
            <DialogDescription className="text-sm text-muted-foreground space-y-3">
              <p>
                Iremos seguir com o pedido do bilhete único.
              </p>
              <p>
                Quando essa etapa for concluída, avisaremos para que você acesse{' '}
                <a 
                  href="https://estudante.sptrans.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  https://estudante.sptrans.com.br
                </a>
                {' '}para validar o cadastro e pagar a taxa de emissão.
              </p>
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 flex justify-center">
            <Button 
              onClick={() => {
                setShowSuccessDialog(false);
                resetForm();
              }} 
              variant="zampieri" 
              size="lg"
            >
              Nova Requisição
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};
export default PasseFacilTicket;