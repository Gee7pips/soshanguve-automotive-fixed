import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL")
}

if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY")
}

// Create Supabase admin client with service role key
export const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  },
)

// Verify database connection and table existence
export async function verifyDatabaseConnection() {
  try {
    // Test connection by selecting from contacts table
    const { data, error } = await supabaseAdmin.from("contacts").select("id").limit(1)

    if (error) {
      console.error("Database verification error:", error)
      return false
    }

    return true
  } catch (error) {
    console.error("Database connection error:", error)
    return false
  }
}

// Helper function to handle database errors
export function handleDatabaseError(error: unknown) {
  console.error("Database error:", error)

  if (error instanceof Error) {
    // Check for specific Supabase error codes
    const message = error.message
    if (message.includes("relation") && message.includes("does not exist")) {
      return "Database tables not found. Please ensure tables are created."
    }
    if (message.includes("permission denied")) {
      return "Permission denied. Please check database permissions."
    }
    return error.message
  }

  return "An unexpected database error occurred"
}

// Add this function and export it
export async function initializeDatabase() {
  try {
    // Test connection by selecting from contacts table
    const { data, error } = await supabaseAdmin.from("contacts").select("id").limit(1)

    if (error) {
      console.error("Database initialization error:", error)
      return false
    }

    console.log("Database initialized successfully")
    return true
  } catch (error) {
    console.error("Database initialization error:", error)
    return false
  }
}
