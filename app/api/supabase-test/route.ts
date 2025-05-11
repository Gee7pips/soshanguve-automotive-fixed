import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase-admin"

export async function GET() {
  try {
    // Test database connection
    const tables = ["contacts", "applications", "sponsorships"]
    const results = await Promise.all(
      tables.map(async (table) => {
        const { data, error } = await supabaseAdmin.from(table).select("count").single()

        return {
          table,
          exists: !error,
          error: error?.message,
        }
      }),
    )

    return NextResponse.json({
      success: true,
      connection: "successful",
      tables: results,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

