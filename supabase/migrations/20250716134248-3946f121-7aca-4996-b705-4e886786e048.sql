-- Habilitar RLS na tabela alunosIntegraSae
ALTER TABLE public."alunosIntegraSae" ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir leitura pública da tabela alunosIntegraSae
CREATE POLICY "Permitir leitura pública de alunos" 
ON public."alunosIntegraSae" 
FOR SELECT 
USING (true);