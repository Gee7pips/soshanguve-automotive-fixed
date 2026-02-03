import { NextResponse } from "next/server"
import { initializeDatabase } from "@/lib/supabase-admin"

export async function GET() {
  try {
    const success = await initializeDatabase()

    if (!success) {
      throw new Error("Failed to initialize database")
    }

    return NextResponse.json({
      success: true,
      message: "Database initialized successfully",
    })
  } catch (error) {
    console.error("Database initialization error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
