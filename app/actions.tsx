"use server"

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

    // Send notification email with application details
    await resend.emails.send({
      from: "Soshanguve Engineering School <noreply@soshanguve-engineering.edu.za>",
      to: process.env.ADMIN_EMAIL || "admin@example.com",
      subject: "New Student Application",
      html: `
        <h2>New Application Received</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
        <p><strong>Date of Birth:</strong> ${data.dateOfBirth || "N/A"}</p>
        <p><strong>Gender:</strong> ${data.gender || "N/A"}</p>
        <p><strong>Address:</strong> ${data.address || "N/A"}</p>
        <p><strong>City:</strong> ${data.city || "N/A"}</p>
        <p><strong>Postal Code:</strong> ${data.postalCode || "N/A"}</p>
        <p><strong>Current School:</strong> ${data.currentSchool || "N/A"}</p>
        <p><strong>Grade Level:</strong> ${data.gradeLevel || "N/A"}</p>
        <p><strong>Program:</strong> ${data.program || "N/A"}</p>
        <p><strong>Academic Achievements:</strong> ${data.academicAchievements || "N/A"}</p>
        <p><strong>Extracurricular Activities:</strong> ${data.extracurricularActivities || "N/A"}</p>
        <p><strong>Why Join:</strong> ${data.whyJoin}</p>
        <hr />
        <h3>Parent/Guardian Information</h3>
        <p><strong>Parent Name:</strong> ${data.parentName || "N/A"}</p>
        <p><strong>Parent Email:</strong> ${data.parentEmail || "N/A"}</p>
        <p><strong>Parent Phone:</strong> ${data.parentPhone || "N/A"}</p>
      `,
    })

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
    // Send contact form via email
    await resend.emails.send({
      from: "Soshanguve Engineering School <noreply@soshanguve-engineering.edu.za>",
      to: process.env.ADMIN_EMAIL || "admin@example.com",
      replyTo: data.email,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    })

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
    // Send sponsorship inquiry via email
    await resend.emails.send({
      from: "Soshanguve Engineering School <noreply@soshanguve-engineering.edu.za>",
      to: process.env.ADMIN_EMAIL || "admin@example.com",
      replyTo: data.email,
      subject: "New Sponsorship Inquiry",
      html: `
        <h2>New Sponsorship Inquiry</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
        <p><strong>Organization:</strong> ${data.organization || "N/A"}</p>
        <p><strong>Area of Interest:</strong> ${data.areaOfInterest || "N/A"}</p>
        <p><strong>Support Type:</strong> ${data.supportType || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message || "N/A"}</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Error in submitSponsorship:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    }
  }
}
