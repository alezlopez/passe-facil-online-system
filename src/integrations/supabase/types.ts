export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
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
          email_resp: string | null
          enviado: boolean | null
          id: number | null
          id_curso: number | null
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
          email_resp?: string | null
          enviado?: boolean | null
          id?: number | null
          id_curso?: number | null
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
          email_resp?: string | null
          enviado?: boolean | null
          id?: number | null
          id_curso?: number | null
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
      financeiro: {
        Row: {
          created_at: string
          id: number
          nome_usuario: string | null
          whatsapp_usuario: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          nome_usuario?: string | null
          whatsapp_usuario?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          nome_usuario?: string | null
          whatsapp_usuario?: string | null
        }
        Relationships: []
      }
      pre_matricula: {
        Row: {
          atendimentoEducacional: string | null
          boletim: string | null
          cpf: string | null
          created_at: string
          data_entrevista: string | null
          dataNascimento: string | null
          diagnosticoTranstorno: string | null
          dificuldadeAprendizagem: string | null
          dificuldadeAtencao: string | null
          dificuldadeSocializacao: string | null
          email: string | null
          escolaAtual: string | null
          id: number
          laudo: string | null
          laudoMedico: string | null
          link_entrevista: string | null
          nomeAluno: string | null
          nomeResponsavel: string | null
          repetente: string | null
          score: string | null
          serie_pretendida: string | null
          Status: string | null
          tipoEscola: string | null
          turnoPreferencia: string | null
          usoMedicacao: string | null
          whatsapp: string | null
        }
        Insert: {
          atendimentoEducacional?: string | null
          boletim?: string | null
          cpf?: string | null
          created_at: string
          data_entrevista?: string | null
          dataNascimento?: string | null
          diagnosticoTranstorno?: string | null
          dificuldadeAprendizagem?: string | null
          dificuldadeAtencao?: string | null
          dificuldadeSocializacao?: string | null
          email?: string | null
          escolaAtual?: string | null
          id?: number
          laudo?: string | null
          laudoMedico?: string | null
          link_entrevista?: string | null
          nomeAluno?: string | null
          nomeResponsavel?: string | null
          repetente?: string | null
          score?: string | null
          serie_pretendida?: string | null
          Status?: string | null
          tipoEscola?: string | null
          turnoPreferencia?: string | null
          usoMedicacao?: string | null
          whatsapp?: string | null
        }
        Update: {
          atendimentoEducacional?: string | null
          boletim?: string | null
          cpf?: string | null
          created_at?: string
          data_entrevista?: string | null
          dataNascimento?: string | null
          diagnosticoTranstorno?: string | null
          dificuldadeAprendizagem?: string | null
          dificuldadeAtencao?: string | null
          dificuldadeSocializacao?: string | null
          email?: string | null
          escolaAtual?: string | null
          id?: number
          laudo?: string | null
          laudoMedico?: string | null
          link_entrevista?: string | null
          nomeAluno?: string | null
          nomeResponsavel?: string | null
          repetente?: string | null
          score?: string | null
          serie_pretendida?: string | null
          Status?: string | null
          tipoEscola?: string | null
          turnoPreferencia?: string | null
          usoMedicacao?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      quero_conhecer_escola: {
        Row: {
          created_at: string
          id: number
          usuario_nome: string | null
          usuario_whatsapp: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          usuario_nome?: string | null
          usuario_whatsapp?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          usuario_nome?: string | null
          usuario_whatsapp?: string | null
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
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: unknown
      }
      match_documents: {
        Args: { query_embedding: string; match_count?: number; filter?: Json }
        Returns: {
          id: number
          content: string
          metadata: Json
          similarity: number
        }[]
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
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
