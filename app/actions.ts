"use server"

import { supabaseAdmin } from "@/lib/supabase-admin"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitApplication(data: {
  firstName: string
  lastName: string
  email: string
  phone?: string
  dateOfBirth?: string
  gender?: string
  address?: string
  city?: string
  postalCode?: string
  currentSchool?: string
  gradeLevel?: string
  program?: string
  academicAchievements?: string
  extracurricularActivities?: string
  whyJoin: string
  parentName?: string
  parentEmail?: string
  parentPhone?: string
}) {
  try {
    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.whyJoin) {
      throw new Error("Required fields are missing")
    }

    const { error } = await supabaseAdmin.from("applications").insert([
      {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        date_of_birth: data.dateOfBirth,
        gender: data.gender,
        address: data.address,
        city: data.city,
        postal_code: data.postalCode,
        current_school: data.currentSchool,
        grade_level: data.gradeLevel,
        program: data.program,
        academic_achievements: data.academicAchievements,
        extracurricular_activities: data.extracurricularActivities,
        why_join: data.whyJoin,
        parent_name: data.parentName,
        parent_email: data.parentEmail,
        parent_phone: data.parentPhone,
      },
    ])

    if (error) throw error

    // Send notification email
    try {
      await resend.emails.send({
        from: "Soshanguve Engineering School <noreply@soshanguve-engineering.edu.za>",
        to: process.env.ADMIN_EMAIL!,
        subject: "New Student Application",
        text: `New application received from ${data.firstName} ${data.lastName}. Please check the admin dashboard for details.`,
      })
    } catch (emailError) {
      console.error("Email notification failed:", emailError)
    }

    return { success: true }
  } catch (error) {
    console.error("Error in submitApplication:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    }
  }
}

export async function submitContact(data: {
  name: string
  email: string
  message: string
}) {
  try {
    const { error } = await supabaseAdmin.from("contacts").insert([data])
    if (error) throw error
    return { success: true }
  } catch (error) {
    console.error("Error in submitContact:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    }
  }
}

export async function submitSponsorship(data: {
  firstName: string
  lastName: string
  email: string
  phone?: string
  organization?: string
  areaOfInterest?: string
  supportType?: string
  message?: string
}) {
  try {
    const { error } = await supabaseAdmin.from("sponsorships").insert([
      {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        organization: data.organization,
        area_of_interest: data.areaOfInterest,
        support_type: data.supportType,
        message: data.message,
      },
    ])
    if (error) throw error
    return { success: true }
  } catch (error) {
    console.error("Error in submitSponsorship:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    }
  }
}

