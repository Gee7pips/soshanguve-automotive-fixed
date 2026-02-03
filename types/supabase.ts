export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string
          name: string
          email: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          message?: string
          created_at?: string
        }
      }
      applications: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          phone: string | null
          date_of_birth: string | null
          gender: string | null
          address: string | null
          city: string | null
          postal_code: string | null
          current_school: string | null
          grade_level: string | null
          program: string | null
          academic_achievements: string | null
          extracurricular_activities: string | null
          why_join: string
          parent_name: string | null
          parent_email: string | null
          parent_phone: string | null
          created_at: string
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          phone?: string | null
          date_of_birth?: string | null
          gender?: string | null
          address?: string | null
          city?: string | null
          postal_code?: string | null
          current_school?: string | null
          grade_level?: string | null
          program?: string | null
          academic_achievements?: string | null
          extracurricular_activities?: string | null
          why_join: string
          parent_name?: string | null
          parent_email?: string | null
          parent_phone?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string | null
          date_of_birth?: string | null
          gender?: string | null
          address?: string | null
          city?: string | null
          postal_code?: string | null
          current_school?: string | null
          grade_level?: string | null
          program?: string | null
          academic_achievements?: string | null
          extracurricular_activities?: string | null
          why_join?: string
          parent_name?: string | null
          parent_email?: string | null
          parent_phone?: string | null
          created_at?: string
        }
      }
      sponsorships: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          phone: string | null
          organization: string | null
          area_of_interest: string | null
          support_type: string | null
          message: string | null
          created_at: string
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          phone?: string | null
          organization?: string | null
          area_of_interest?: string | null
          support_type?: string | null
          message?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string | null
          organization?: string | null
          area_of_interest?: string | null
          support_type?: string | null
          message?: string | null
          created_at?: string
        }
      }
    }
  }
}
