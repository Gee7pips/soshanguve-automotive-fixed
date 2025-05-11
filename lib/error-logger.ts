type ErrorLoggerOptions = {
  context?: string
  additionalData?: Record<string, unknown>
}

export function logError(error: unknown, options: ErrorLoggerOptions = {}) {
  const errorObject = {
    message: error instanceof Error ? error.message : String(error),
    stack: error instanceof Error ? error.stack : undefined,
    context: options.context,
    timestamp: new Date().toISOString(),
    ...options.additionalData,
  }

  // In development, log to console
  if (process.env.NODE_ENV === "development") {
    console.error("Error:", errorObject)
    return
  }

  // In production, you might want to send this to a logging service
  // For now, we'll just console.error
  console.error("Error:", errorObject)
}

