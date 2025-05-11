import { NextResponse } from "next/server"
import { verifyDatabaseConnection } from "@/lib/supabase-admin"

export async function GET() {
  try {
    const isConnected = await verifyDatabaseConnection()

    if (!isConnected) {
      throw new Error("Database connection failed")
    }

    return NextResponse.json({
      success: true,
      message: "Database connected and tables verified",
    })
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

