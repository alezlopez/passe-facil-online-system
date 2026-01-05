export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      alunnos_26: {
        Row: {
          celular_pai: string | null
          codigo_aluno: string | null
          cpf_mae: string | null
          cpf_pai: string | null
          created_at: string
          curso: string | null
          id: number
          nome_aluno: string | null
          nome_mae: string | null
          nome_pai: string | null
          telefone_mae: string | null
        }
        Insert: {
          celular_pai?: string | null
          codigo_aluno?: string | null
          cpf_mae?: string | null
          cpf_pai?: string | null
          created_at?: string
          curso?: string | null
          id?: number
          nome_aluno?: string | null
          nome_mae?: string | null
          nome_pai?: string | null
          telefone_mae?: string | null
        }
        Update: {
          celular_pai?: string | null
          codigo_aluno?: string | null
          cpf_mae?: string | null
          cpf_pai?: string | null
          created_at?: string
          curso?: string | null
          id?: number
          nome_aluno?: string | null
          nome_mae?: string | null
          nome_pai?: string | null
          telefone_mae?: string | null
        }
        Relationships: []
      }
      alunos_comunicados_whatsapp: {
        Row: {
          celular_mae: string | null
          celular_pai: string | null
          codigo_aluno: string
          cpf_mae: string | null
          cpf_pai: string | null
          ddd_mae: string | null
          ddd_pai: string | null
          ID: number
          nome_da_mae: string | null
          nome_do_aluno: string | null
          nome_pai: string | null
          turma: string | null
        }
        Insert: {
          celular_mae?: string | null
          celular_pai?: string | null
          codigo_aluno: string
          cpf_mae?: string | null
          cpf_pai?: string | null
          ddd_mae?: string | null
          ddd_pai?: string | null
          ID?: number
          nome_da_mae?: string | null
          nome_do_aluno?: string | null
          nome_pai?: string | null
          turma?: string | null
        }
        Update: {
          celular_mae?: string | null
          celular_pai?: string | null
          codigo_aluno?: string
          cpf_mae?: string | null
          cpf_pai?: string | null
          ddd_mae?: string | null
          ddd_pai?: string | null
          ID?: number
          nome_da_mae?: string | null
          nome_do_aluno?: string | null
          nome_pai?: string | null
          turma?: string | null
        }
        Relationships: []
      }
      alunosIntegraSae: {
        Row: {
          aluno: string | null
          boleto: string | null
          codigo_aluno: number | null
          codigo_mae: number | null
          codigo_pai: number | null
          codigo_resp_fin: number | null
          CPF_resp_fin: string | null
          curso_aluno: string | null
          curso_completo: string | null
          email_resp: string | null
          enviado: boolean | null
          id: number
          id_curso: number | null
          nome_responsavel: string | null
          pago: boolean | null
          valor: string | null
          vencimento: string | null
          whatsapp_fin: string | null
        }
        Insert: {
          aluno?: string | null
          boleto?: string | null
          codigo_aluno?: number | null
          codigo_mae?: number | null
          codigo_pai?: number | null
          codigo_resp_fin?: number | null
          CPF_resp_fin?: string | null
          curso_aluno?: string | null
          curso_completo?: string | null
          email_resp?: string | null
          enviado?: boolean | null
          id: number
          id_curso?: number | null
          nome_responsavel?: string | null
          pago?: boolean | null
          valor?: string | null
          vencimento?: string | null
          whatsapp_fin?: string | null
        }
        Update: {
          aluno?: string | null
          boleto?: string | null
          codigo_aluno?: number | null
          codigo_mae?: number | null
          codigo_pai?: number | null
          codigo_resp_fin?: number | null
          CPF_resp_fin?: string | null
          curso_aluno?: string | null
          curso_completo?: string | null
          email_resp?: string | null
          enviado?: boolean | null
          id?: number
          id_curso?: number | null
          nome_responsavel?: string | null
          pago?: boolean | null
          valor?: string | null
          vencimento?: string | null
          whatsapp_fin?: string | null
        }
        Relationships: []
      }
      codigosCurso: {
        Row: {
          codigo: number | null
          id: number
        }
        Insert: {
          codigo?: number | null
          id?: number
        }
        Update: {
          codigo?: number | null
          id?: number
        }
        Relationships: []
      }
      disciplinas_alunos: {
        Row: {
          disciplina: string
          id: number
        }
        Insert: {
          disciplina: string
          id?: number
        }
        Update: {
          disciplina?: string
          id?: number
        }
        Relationships: []
      }
      interessados_matricula: {
        Row: {
          created_at: string
          escola_atual: string | null
          follow_up: boolean | null
          id: number
          nome_responsavel: string | null
          serie_interesse: string | null
          telefone_responsavel: string | null
          turno_interesse: string | null
        }
        Insert: {
          created_at?: string
          escola_atual?: string | null
          follow_up?: boolean | null
          id?: number
          nome_responsavel?: string | null
          serie_interesse?: string | null
          telefone_responsavel?: string | null
          turno_interesse?: string | null
        }
        Update: {
          created_at?: string
          escola_atual?: string | null
          follow_up?: boolean | null
          id?: number
          nome_responsavel?: string | null
          serie_interesse?: string | null
          telefone_responsavel?: string | null
          turno_interesse?: string | null
        }
        Relationships: []
      }
      lista_vip: {
        Row: {
          cpf_responsavel: string
          created_at: string
          id: number
          nome_aluno: string
          nome_responsavel: string
          serie_aluno: string
          whatsapp_responsavel: string
        }
        Insert: {
          cpf_responsavel: string
          created_at?: string
          id?: never
          nome_aluno: string
          nome_responsavel: string
          serie_aluno: string
          whatsapp_responsavel: string
        }
        Update: {
          cpf_responsavel?: string
          created_at?: string
          id?: never
          nome_aluno?: string
          nome_responsavel?: string
          serie_aluno?: string
          whatsapp_responsavel?: string
        }
        Relationships: []
      }
      numeros_da_sorte: {
        Row: {
          Aluno: string | null
          cpf: string | null
          created_at: string
          id: number
          numero_da_sorte: number | null
        }
        Insert: {
          Aluno?: string | null
          cpf?: string | null
          created_at?: string
          id?: number
          numero_da_sorte?: number | null
        }
        Update: {
          Aluno?: string | null
          cpf?: string | null
          created_at?: string
          id?: number
          numero_da_sorte?: number | null
        }
        Relationships: []
      }
      ocorrencias: {
        Row: {
          "Cod Aluno": number
          "CPF da mãe": string | null
          "CPF do Pai": string | null
          "Email da Mãe": string | null
          "Email do Pai": string | null
          "Nome da mãe": string | null
          "Nome do Aluno": string | null
          "Nome do Pai": string | null
          "Telefone da Mãe": string | null
          "Telefone do Pai": string | null
        }
        Insert: {
          "Cod Aluno": number
          "CPF da mãe"?: string | null
          "CPF do Pai"?: string | null
          "Email da Mãe"?: string | null
          "Email do Pai"?: string | null
          "Nome da mãe"?: string | null
          "Nome do Aluno"?: string | null
          "Nome do Pai"?: string | null
          "Telefone da Mãe"?: string | null
          "Telefone do Pai"?: string | null
        }
        Update: {
          "Cod Aluno"?: number
          "CPF da mãe"?: string | null
          "CPF do Pai"?: string | null
          "Email da Mãe"?: string | null
          "Email do Pai"?: string | null
          "Nome da mãe"?: string | null
          "Nome do Aluno"?: string | null
          "Nome do Pai"?: string | null
          "Telefone da Mãe"?: string | null
          "Telefone do Pai"?: string | null
        }
        Relationships: []
      }
      pre_matricula: {
        Row: {
          atendimentoEducacional: string | null
          boletim: string | null
          codigo_aluno: string | null
          cpf: string | null
          created_at: string
          data_entrevista: string | null
          data_reavaliacao: string | null
          dataNascimento: string | null
          desconto: string | null
          diagnosticoTranstorno: string | null
          dificuldadeAprendizagem: string | null
          dificuldadeAtencao: string | null
          dificuldadeSocializacao: string | null
          email: string | null
          escolaAtual: string | null
          id: number
          laudoMedico: string | null
          link_contrato: string | null
          link_entrevista: string | null
          nome_terapeuta_ocupacional: string | null
          nomeAluno: string | null
          nomeResponsavel: string | null
          obs_entrevista: string | null
          possui_terapeuta_ocupacional: string | null
          repetente: string | null
          Rg_terapeuta_ocupacional: string | null
          serie_pretendida: string | null
          Status: string | null
          telefone_terapeuta_ocupacional: string | null
          tipoEscola: string | null
          turnoPreferencia: string | null
          usoMedicacao: string | null
          whatsapp: string | null
        }
        Insert: {
          atendimentoEducacional?: string | null
          boletim?: string | null
          codigo_aluno?: string | null
          cpf?: string | null
          created_at: string
          data_entrevista?: string | null
          data_reavaliacao?: string | null
          dataNascimento?: string | null
          desconto?: string | null
          diagnosticoTranstorno?: string | null
          dificuldadeAprendizagem?: string | null
          dificuldadeAtencao?: string | null
          dificuldadeSocializacao?: string | null
          email?: string | null
          escolaAtual?: string | null
          id?: number
          laudoMedico?: string | null
          link_contrato?: string | null
          link_entrevista?: string | null
          nome_terapeuta_ocupacional?: string | null
          nomeAluno?: string | null
          nomeResponsavel?: string | null
          obs_entrevista?: string | null
          possui_terapeuta_ocupacional?: string | null
          repetente?: string | null
          Rg_terapeuta_ocupacional?: string | null
          serie_pretendida?: string | null
          Status?: string | null
          telefone_terapeuta_ocupacional?: string | null
          tipoEscola?: string | null
          turnoPreferencia?: string | null
          usoMedicacao?: string | null
          whatsapp?: string | null
        }
        Update: {
          atendimentoEducacional?: string | null
          boletim?: string | null
          codigo_aluno?: string | null
          cpf?: string | null
          created_at?: string
          data_entrevista?: string | null
          data_reavaliacao?: string | null
          dataNascimento?: string | null
          desconto?: string | null
          diagnosticoTranstorno?: string | null
          dificuldadeAprendizagem?: string | null
          dificuldadeAtencao?: string | null
          dificuldadeSocializacao?: string | null
          email?: string | null
          escolaAtual?: string | null
          id?: number
          laudoMedico?: string | null
          link_contrato?: string | null
          link_entrevista?: string | null
          nome_terapeuta_ocupacional?: string | null
          nomeAluno?: string | null
          nomeResponsavel?: string | null
          obs_entrevista?: string | null
          possui_terapeuta_ocupacional?: string | null
          repetente?: string | null
          Rg_terapeuta_ocupacional?: string | null
          serie_pretendida?: string | null
          Status?: string | null
          telefone_terapeuta_ocupacional?: string | null
          tipoEscola?: string | null
          turnoPreferencia?: string | null
          usoMedicacao?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      relacao_alunos: {
        Row: {
          "Código do Aluno": number
          "Curso do Aluno": string | null
          filtro: string | null
          "Nome do Aluno": string | null
          "Nome Responsável": string | null
          "WhatsApp Responsavel": number | null
        }
        Insert: {
          "Código do Aluno": number
          "Curso do Aluno"?: string | null
          filtro?: string | null
          "Nome do Aluno"?: string | null
          "Nome Responsável"?: string | null
          "WhatsApp Responsavel"?: number | null
        }
        Update: {
          "Código do Aluno"?: number
          "Curso do Aluno"?: string | null
          filtro?: string | null
          "Nome do Aluno"?: string | null
          "Nome Responsável"?: string | null
          "WhatsApp Responsavel"?: number | null
        }
        Relationships: []
      }
      rematricula: {
        Row: {
          Anuidade: string | null
          "Atualizou dados Mãe": string | null
          "Atualizou dados Pai": string | null
          "Atualizou Endereço": string | null
          Bairro: string | null
          CEP: string | null
          Ciclo: string | null
          Cidade: string | null
          "Cod Aluno": number
          "CPF da mãe": string | null
          "CPF do Pai": string | null
          "Curso 2025": string | null
          "Curso 2026": string | null
          "Data Nascimento Aluno": string | null
          "Data Nascimento Resp. Financeiro": string | null
          data_rematricula: string | null
          Desconto: string | null
          "Email da Mãe": string | null
          "Email do Pai": string | null
          Endereço: string | null
          Estado: string | null
          "Estado Civil Resp. Financeiro": string | null
          forma_de_pagamento: string | null
          "Id Checkout": string | null
          "Liberado para rematrícula": boolean | null
          "Link Checkout": string | null
          "Link Contrato": string | null
          "mensalidade 2026 com desconto": string | null
          "mensalidade 2026 sem desconto": string | null
          "Naturalidade do Responsável Financeiro": string | null
          "Nome da mãe": string | null
          "Nome do Aluno": string | null
          "Nome do Pai": string | null
          Número: number | null
          "Profissão Resp. Financeiro": string | null
          "Rematrícula a vista": string | null
          "Rematrícula Parcelada": string | null
          "Resp. Financeiro": string | null
          "RG Resp. Financeiro": string | null
          Status: string | null
          "Telefone da Mãe": string | null
          "Telefone do Pai": string | null
          "token contrato": string | null
          "Turno 2026": string | null
        }
        Insert: {
          Anuidade?: string | null
          "Atualizou dados Mãe"?: string | null
          "Atualizou dados Pai"?: string | null
          "Atualizou Endereço"?: string | null
          Bairro?: string | null
          CEP?: string | null
          Ciclo?: string | null
          Cidade?: string | null
          "Cod Aluno": number
          "CPF da mãe"?: string | null
          "CPF do Pai"?: string | null
          "Curso 2025"?: string | null
          "Curso 2026"?: string | null
          "Data Nascimento Aluno"?: string | null
          "Data Nascimento Resp. Financeiro"?: string | null
          data_rematricula?: string | null
          Desconto?: string | null
          "Email da Mãe"?: string | null
          "Email do Pai"?: string | null
          Endereço?: string | null
          Estado?: string | null
          "Estado Civil Resp. Financeiro"?: string | null
          forma_de_pagamento?: string | null
          "Id Checkout"?: string | null
          "Liberado para rematrícula"?: boolean | null
          "Link Checkout"?: string | null
          "Link Contrato"?: string | null
          "mensalidade 2026 com desconto"?: string | null
          "mensalidade 2026 sem desconto"?: string | null
          "Naturalidade do Responsável Financeiro"?: string | null
          "Nome da mãe"?: string | null
          "Nome do Aluno"?: string | null
          "Nome do Pai"?: string | null
          Número?: number | null
          "Profissão Resp. Financeiro"?: string | null
          "Rematrícula a vista"?: string | null
          "Rematrícula Parcelada"?: string | null
          "Resp. Financeiro"?: string | null
          "RG Resp. Financeiro"?: string | null
          Status?: string | null
          "Telefone da Mãe"?: string | null
          "Telefone do Pai"?: string | null
          "token contrato"?: string | null
          "Turno 2026"?: string | null
        }
        Update: {
          Anuidade?: string | null
          "Atualizou dados Mãe"?: string | null
          "Atualizou dados Pai"?: string | null
          "Atualizou Endereço"?: string | null
          Bairro?: string | null
          CEP?: string | null
          Ciclo?: string | null
          Cidade?: string | null
          "Cod Aluno"?: number
          "CPF da mãe"?: string | null
          "CPF do Pai"?: string | null
          "Curso 2025"?: string | null
          "Curso 2026"?: string | null
          "Data Nascimento Aluno"?: string | null
          "Data Nascimento Resp. Financeiro"?: string | null
          data_rematricula?: string | null
          Desconto?: string | null
          "Email da Mãe"?: string | null
          "Email do Pai"?: string | null
          Endereço?: string | null
          Estado?: string | null
          "Estado Civil Resp. Financeiro"?: string | null
          forma_de_pagamento?: string | null
          "Id Checkout"?: string | null
          "Liberado para rematrícula"?: boolean | null
          "Link Checkout"?: string | null
          "Link Contrato"?: string | null
          "mensalidade 2026 com desconto"?: string | null
          "mensalidade 2026 sem desconto"?: string | null
          "Naturalidade do Responsável Financeiro"?: string | null
          "Nome da mãe"?: string | null
          "Nome do Aluno"?: string | null
          "Nome do Pai"?: string | null
          Número?: number | null
          "Profissão Resp. Financeiro"?: string | null
          "Rematrícula a vista"?: string | null
          "Rematrícula Parcelada"?: string | null
          "Resp. Financeiro"?: string | null
          "RG Resp. Financeiro"?: string | null
          Status?: string | null
          "Telefone da Mãe"?: string | null
          "Telefone do Pai"?: string | null
          "token contrato"?: string | null
          "Turno 2026"?: string | null
        }
        Relationships: []
      }
      student_dificults: {
        Row: {
          created_at: string
          dificult_area: string | null
          id: number
          whatsapp: string | null
        }
        Insert: {
          created_at?: string
          dificult_area?: string | null
          id?: number
          whatsapp?: string | null
        }
        Update: {
          created_at?: string
          dificult_area?: string | null
          id?: number
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "student_dificults_whatsapp_fkey"
            columns: ["whatsapp"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["whatsapp"]
          },
        ]
      }
      student_titles: {
        Row: {
          created_at: string
          id: number
          title: string | null
          whatsapp: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          title?: string | null
          whatsapp?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          title?: string | null
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "student_titles_whatsapp_fkey"
            columns: ["whatsapp"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["whatsapp"]
          },
        ]
      }
      students: {
        Row: {
          assinatura_status: string | null
          cancelado_em: string | null
          cancelar_em: string | null
          coins: number | null
          created_at: string | null
          current_mission: string | null
          current_trill: string | null
          email: string | null
          hits: number | null
          id: string
          idade: number | null
          last_payament: string | null
          level: string | null
          mission_amout: number | null
          nome: string | null
          premium: boolean | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          test_amout: number | null
          trial: boolean | null
          trial_ends_at: string | null
          whatsapp: string | null
          xp: number | null
        }
        Insert: {
          assinatura_status?: string | null
          cancelado_em?: string | null
          cancelar_em?: string | null
          coins?: number | null
          created_at?: string | null
          current_mission?: string | null
          current_trill?: string | null
          email?: string | null
          hits?: number | null
          id?: string
          idade?: number | null
          last_payament?: string | null
          level?: string | null
          mission_amout?: number | null
          nome?: string | null
          premium?: boolean | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          test_amout?: number | null
          trial?: boolean | null
          trial_ends_at?: string | null
          whatsapp?: string | null
          xp?: number | null
        }
        Update: {
          assinatura_status?: string | null
          cancelado_em?: string | null
          cancelar_em?: string | null
          coins?: number | null
          created_at?: string | null
          current_mission?: string | null
          current_trill?: string | null
          email?: string | null
          hits?: number | null
          id?: string
          idade?: number | null
          last_payament?: string | null
          level?: string | null
          mission_amout?: number | null
          nome?: string | null
          premium?: boolean | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          test_amout?: number | null
          trial?: boolean | null
          trial_ends_at?: string | null
          whatsapp?: string | null
          xp?: number | null
        }
        Relationships: []
      }
      turmas_alunos: {
        Row: {
          Código: number
          Turma: string | null
        }
        Insert: {
          Código: number
          Turma?: string | null
        }
        Update: {
          Código?: number
          Turma?: string | null
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          created_at: string
          id: string
          user_id: string
          username: string
        }
        Insert: {
          created_at?: string
          id?: string
          user_id: string
          username: string
        }
        Update: {
          created_at?: string
          id?: string
          user_id?: string
          username?: string
        }
        Relationships: []
      }
      vagas_turmas: {
        Row: {
          ativo: boolean | null
          created_at: string | null
          curso: string
          id: number
          max_vagas: number
          turno: string
          updated_at: string | null
        }
        Insert: {
          ativo?: boolean | null
          created_at?: string | null
          curso: string
          id?: number
          max_vagas: number
          turno: string
          updated_at?: string | null
        }
        Update: {
          ativo?: boolean | null
          created_at?: string | null
          curso?: string
          id?: number
          max_vagas?: number
          turno?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      authenticate_with_username: {
        Args: { p_password: string; p_username: string }
        Returns: {
          email: string
          message: string
          success: boolean
          user_id: string
        }[]
      }
      calcular_vagas_disponiveis: {
        Args: { p_curso: string; p_turno: string }
        Returns: {
          curso: string
          disponivel: boolean
          matriculados: number
          max_vagas: number
          turno: string
          vagas_disponiveis: number
        }[]
      }
      get_vagas_disponiveis: {
        Args: never
        Returns: {
          curso: string
          disponivel: boolean
          matriculados: number
          max_vagas: number
          turno: string
          vagas_disponiveis: number
        }[]
      }
      match_documents: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      rematricula_by_codigo_aluno: {
        Args: { p_cod_aluno: number }
        Returns: {
          "Cod Aluno": number
          "CPF da mãe": string
          "CPF do Pai": string
          "Email da Mãe": string
          "Email do Pai": string
          "Nome da mãe": string
          "Nome do Aluno": string
          "Nome do Pai": string
          "Telefone da Mãe": string
          "Telefone do Pai": string
        }[]
      }
      rematricula_by_cpf: {
        Args: { p_cpf: string }
        Returns: {
          Bairro: string
          CEP: string
          Ciclo: string
          Cidade: string
          "Cod Aluno": number
          "CPF da mãe": string
          "CPF do Pai": string
          "Curso 2025": string
          "Curso 2026": string
          Desconto: string
          "Email da Mãe": string
          "Email do Pai": string
          Endereço: string
          "Id Checkout": string
          "Liberado para rematrícula": boolean
          "Link Checkout": string
          "Link Contrato": string
          "mensalidade 2026 com desconto": string
          "mensalidade 2026 sem desconto": string
          "Nome da mãe": string
          "Nome do Aluno": string
          "Nome do Pai": string
          Número: number
          "Rematrícula a vista": string
          "Rematrícula Parcelada": string
          "Resp. Financeiro": string
          Status: string
          "Telefone da Mãe": string
          "Telefone do Pai": string
          "token contrato": string
          "Turno 2026": string
        }[]
      }
      update_rematricula_fields: {
        Args: {
          p_bairro?: string
          p_cep?: string
          p_cidade?: string
          p_cod_aluno: number
          p_data_nascimento_aluno?: string
          p_data_nascimento_resp_financeiro?: string
          p_email_mae?: string
          p_email_pai?: string
          p_endereco?: string
          p_estado?: string
          p_estado_civil_resp_financeiro?: string
          p_naturalidade_resp_financeiro?: string
          p_numero?: number
          p_profissao_resp_financeiro?: string
          p_resp_financeiro?: string
          p_rg_resp_financeiro?: string
          p_telefone_mae?: string
          p_telefone_pai?: string
          p_turno_2026?: string
        }
        Returns: {
          Anuidade: string | null
          "Atualizou dados Mãe": string | null
          "Atualizou dados Pai": string | null
          "Atualizou Endereço": string | null
          Bairro: string | null
          CEP: string | null
          Ciclo: string | null
          Cidade: string | null
          "Cod Aluno": number
          "CPF da mãe": string | null
          "CPF do Pai": string | null
          "Curso 2025": string | null
          "Curso 2026": string | null
          "Data Nascimento Aluno": string | null
          "Data Nascimento Resp. Financeiro": string | null
          data_rematricula: string | null
          Desconto: string | null
          "Email da Mãe": string | null
          "Email do Pai": string | null
          Endereço: string | null
          Estado: string | null
          "Estado Civil Resp. Financeiro": string | null
          forma_de_pagamento: string | null
          "Id Checkout": string | null
          "Liberado para rematrícula": boolean | null
          "Link Checkout": string | null
          "Link Contrato": string | null
          "mensalidade 2026 com desconto": string | null
          "mensalidade 2026 sem desconto": string | null
          "Naturalidade do Responsável Financeiro": string | null
          "Nome da mãe": string | null
          "Nome do Aluno": string | null
          "Nome do Pai": string | null
          Número: number | null
          "Profissão Resp. Financeiro": string | null
          "Rematrícula a vista": string | null
          "Rematrícula Parcelada": string | null
          "Resp. Financeiro": string | null
          "RG Resp. Financeiro": string | null
          Status: string | null
          "Telefone da Mãe": string | null
          "Telefone do Pai": string | null
          "token contrato": string | null
          "Turno 2026": string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "rematricula"
          isOneToOne: false
          isSetofReturn: true
        }
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
