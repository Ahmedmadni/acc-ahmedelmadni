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
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      exam_questions: {
        Row: {
          answer_index: number
          choices_ar: Json
          choices_en: Json
          created_at: string
          created_by: string | null
          difficulty: string
          duplicate_hash: string | null
          exam_domain: string
          explanation_ar: string
          explanation_en: string
          id: string
          is_public: boolean
          question_ar: string
          question_en: string
          question_type: string
          reference: string
          status: string
          topic: string
          track: Database["public"]["Enums"]["exam_track"]
          updated_at: string
        }
        Insert: {
          answer_index: number
          choices_ar: Json
          choices_en: Json
          created_at?: string
          created_by?: string | null
          difficulty?: string
          duplicate_hash?: string | null
          exam_domain?: string
          explanation_ar?: string
          explanation_en?: string
          id?: string
          is_public?: boolean
          question_ar: string
          question_en: string
          question_type?: string
          reference?: string
          status?: string
          topic?: string
          track: Database["public"]["Enums"]["exam_track"]
          updated_at?: string
        }
        Update: {
          answer_index?: number
          choices_ar?: Json
          choices_en?: Json
          created_at?: string
          created_by?: string | null
          difficulty?: string
          duplicate_hash?: string | null
          exam_domain?: string
          explanation_ar?: string
          explanation_en?: string
          id?: string
          is_public?: boolean
          question_ar?: string
          question_en?: string
          question_type?: string
          reference?: string
          status?: string
          topic?: string
          track?: Database["public"]["Enums"]["exam_track"]
          updated_at?: string
        }
        Relationships: []
      }
      kb_articles: {
        Row: {
          ai_model: string | null
          author_avatar: string | null
          author_name: string
          author_title: string | null
          category_id: string
          content_ar: Json
          content_hash: string | null
          created_at: string
          excerpt_ar: string
          excerpt_en: string
          external_sources: Json
          faq: Json
          featured_image: string | null
          generation_source: string
          id: string
          is_featured: boolean
          keywords: string[]
          meta_description: string | null
          meta_title: string | null
          published_at: string
          reading_minutes: number
          references: Json
          review_notes: string | null
          reviewed_at: string | null
          reviewer_id: string | null
          scheduled_for: string | null
          slug: string
          status: Database["public"]["Enums"]["article_status"]
          title_ar: string
          title_en: string
          updated_at: string
        }
        Insert: {
          ai_model?: string | null
          author_avatar?: string | null
          author_name?: string
          author_title?: string | null
          category_id: string
          content_ar?: Json
          content_hash?: string | null
          created_at?: string
          excerpt_ar: string
          excerpt_en: string
          external_sources?: Json
          faq?: Json
          featured_image?: string | null
          generation_source?: string
          id?: string
          is_featured?: boolean
          keywords?: string[]
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string
          reading_minutes?: number
          references?: Json
          review_notes?: string | null
          reviewed_at?: string | null
          reviewer_id?: string | null
          scheduled_for?: string | null
          slug: string
          status?: Database["public"]["Enums"]["article_status"]
          title_ar: string
          title_en: string
          updated_at?: string
        }
        Update: {
          ai_model?: string | null
          author_avatar?: string | null
          author_name?: string
          author_title?: string | null
          category_id?: string
          content_ar?: Json
          content_hash?: string | null
          created_at?: string
          excerpt_ar?: string
          excerpt_en?: string
          external_sources?: Json
          faq?: Json
          featured_image?: string | null
          generation_source?: string
          id?: string
          is_featured?: boolean
          keywords?: string[]
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string
          reading_minutes?: number
          references?: Json
          review_notes?: string | null
          reviewed_at?: string | null
          reviewer_id?: string | null
          scheduled_for?: string | null
          slug?: string
          status?: Database["public"]["Enums"]["article_status"]
          title_ar?: string
          title_en?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "kb_articles_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "kb_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      kb_bookmarks: {
        Row: {
          article_id: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          article_id: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          article_id?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "kb_bookmarks_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "kb_articles"
            referencedColumns: ["id"]
          },
        ]
      }
      kb_categories: {
        Row: {
          created_at: string
          description_ar: string | null
          description_en: string | null
          icon: string
          id: string
          name_ar: string
          name_en: string
          slug: string
          sort_order: number
        }
        Insert: {
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          icon?: string
          id?: string
          name_ar: string
          name_en: string
          slug: string
          sort_order?: number
        }
        Update: {
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          icon?: string
          id?: string
          name_ar?: string
          name_en?: string
          slug?: string
          sort_order?: number
        }
        Relationships: []
      }
      kb_generation_jobs: {
        Row: {
          article_id: string | null
          attempts: number
          category_id: string | null
          created_at: string
          id: string
          last_error: string | null
          scheduled_for: string
          status: Database["public"]["Enums"]["job_status"]
          topic_hint: string | null
          updated_at: string
        }
        Insert: {
          article_id?: string | null
          attempts?: number
          category_id?: string | null
          created_at?: string
          id?: string
          last_error?: string | null
          scheduled_for?: string
          status?: Database["public"]["Enums"]["job_status"]
          topic_hint?: string | null
          updated_at?: string
        }
        Update: {
          article_id?: string | null
          attempts?: number
          category_id?: string | null
          created_at?: string
          id?: string
          last_error?: string | null
          scheduled_for?: string
          status?: Database["public"]["Enums"]["job_status"]
          topic_hint?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "kb_generation_jobs_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "kb_articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "kb_generation_jobs_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "kb_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      kb_internal_links: {
        Row: {
          anchor_text: string
          article_id: string
          created_at: string
          id: string
          target_article_id: string
        }
        Insert: {
          anchor_text: string
          article_id: string
          created_at?: string
          id?: string
          target_article_id: string
        }
        Update: {
          anchor_text?: string
          article_id?: string
          created_at?: string
          id?: string
          target_article_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "kb_internal_links_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "kb_articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "kb_internal_links_target_article_id_fkey"
            columns: ["target_article_id"]
            isOneToOne: false
            referencedRelation: "kb_articles"
            referencedColumns: ["id"]
          },
        ]
      }
      kb_publishing_calendar: {
        Row: {
          created_at: string
          generated_count: number
          id: string
          month: number
          planned_count: number
          published_count: number
          year: number
        }
        Insert: {
          created_at?: string
          generated_count?: number
          id?: string
          month: number
          planned_count?: number
          published_count?: number
          year: number
        }
        Update: {
          created_at?: string
          generated_count?: number
          id?: string
          month?: number
          planned_count?: number
          published_count?: number
          year?: number
        }
        Relationships: []
      }
      kb_ratings: {
        Row: {
          article_id: string
          created_at: string
          id: string
          rating: number
          user_id: string
        }
        Insert: {
          article_id: string
          created_at?: string
          id?: string
          rating: number
          user_id: string
        }
        Update: {
          article_id?: string
          created_at?: string
          id?: string
          rating?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "kb_ratings_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "kb_articles"
            referencedColumns: ["id"]
          },
        ]
      }
      kb_trusted_sources: {
        Row: {
          base_url: string
          created_at: string
          id: string
          is_active: boolean
          name: string
          priority: number
        }
        Insert: {
          base_url: string
          created_at?: string
          id?: string
          is_active?: boolean
          name: string
          priority?: number
        }
        Update: {
          base_url?: string
          created_at?: string
          id?: string
          is_active?: boolean
          name?: string
          priority?: number
        }
        Relationships: []
      }
      library_items: {
        Row: {
          ai_model: string | null
          author: string | null
          category_slug: string
          cover_image: string | null
          created_at: string
          description_ar: string | null
          description_en: string | null
          duration_hours: number | null
          generation_source: string
          has_pdf: boolean | null
          id: string
          is_free: boolean
          is_published: boolean
          level: string | null
          pdf_path: string | null
          price: number | null
          provider: string | null
          sort_order: number
          tags: string[]
          title_ar: string
          title_en: string | null
          type: Database["public"]["Enums"]["library_item_type"]
          updated_at: string
          url: string | null
        }
        Insert: {
          ai_model?: string | null
          author?: string | null
          category_slug?: string
          cover_image?: string | null
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          duration_hours?: number | null
          generation_source?: string
          has_pdf?: boolean | null
          id?: string
          is_free?: boolean
          is_published?: boolean
          level?: string | null
          pdf_path?: string | null
          price?: number | null
          provider?: string | null
          sort_order?: number
          tags?: string[]
          title_ar: string
          title_en?: string | null
          type: Database["public"]["Enums"]["library_item_type"]
          updated_at?: string
          url?: string | null
        }
        Update: {
          ai_model?: string | null
          author?: string | null
          category_slug?: string
          cover_image?: string | null
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          duration_hours?: number | null
          generation_source?: string
          has_pdf?: boolean | null
          id?: string
          is_free?: boolean
          is_published?: boolean
          level?: string | null
          pdf_path?: string | null
          price?: number | null
          provider?: string | null
          sort_order?: number
          tags?: string[]
          title_ar?: string
          title_en?: string | null
          type?: Database["public"]["Enums"]["library_item_type"]
          updated_at?: string
          url?: string | null
        }
        Relationships: []
      }
      tax_declarations: {
        Row: {
          created_at: string
          id: string
          input_data: Json
          notes: string | null
          period_label: string
          result_data: Json
          type: Database["public"]["Enums"]["tax_declaration_type"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          input_data?: Json
          notes?: string | null
          period_label: string
          result_data?: Json
          type: Database["public"]["Enums"]["tax_declaration_type"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          input_data?: Json
          notes?: string | null
          period_label?: string
          result_data?: Json
          type?: Database["public"]["Enums"]["tax_declaration_type"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "reviewer" | "user"
      article_status:
        | "draft"
        | "pending_review"
        | "approved"
        | "published"
        | "rejected"
      exam_track: "IFRS" | "CMA" | "CPA" | "FMAA" | "ACCA" | "CFA"
      job_status:
        | "queued"
        | "running"
        | "succeeded"
        | "failed"
        | "skipped_duplicate"
      library_item_type: "course" | "book" | "video" | "external_link" | "tool"
      tax_declaration_type: "vat" | "zakat"
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
    Enums: {
      app_role: ["admin", "reviewer", "user"],
      article_status: [
        "draft",
        "pending_review",
        "approved",
        "published",
        "rejected",
      ],
      exam_track: ["IFRS", "CMA", "CPA", "FMAA", "ACCA", "CFA"],
      job_status: [
        "queued",
        "running",
        "succeeded",
        "failed",
        "skipped_duplicate",
      ],
      library_item_type: ["course", "book", "video", "external_link", "tool"],
      tax_declaration_type: ["vat", "zakat"],
    },
  },
} as const
