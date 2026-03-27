# 🔍 Diagnosis and Fix for Sosha Automotive Deployment Failures

This document outlines the root causes of the recent 20+ Vercel deployment failures for the Sosha Automotive project and provides the necessary code and configuration changes to resolve them.

## 1. Root Cause Analysis

The investigation, combining automated log analysis and manual code inspection, identified two primary issues that were causing the build process to fail consistently.

### Issue 1: Duplicate `metadata` Export in `app/layout.tsx`

The most critical error, causing the Next.js build to crash, was a syntax error in the main layout file. The `metadata` object, which contains site-wide SEO and display information, was being declared and exported twice. 

*   **File:** `app/layout.tsx`
*   **Error:** `SyntaxError: Identifier 'metadata' has already been declared.`
*   **Impact:** This is a fatal build-time error. The Next.js compiler cannot process a file with duplicate top-level constant declarations, causing the build to halt immediately.

### Issue 2: Deprecated `swcMinify` Option in `next.config.js`

The project's Next.js configuration file contained the `swcMinify: true` option. While this was standard practice in older versions of Next.js to enable faster code minification, it has since been deprecated and is now the default behavior.

*   **File:** `next.config.js`
*   **Issue:** Use of a deprecated and now-unnecessary configuration option.
*   **Impact:** While not the primary cause of the build failure, it contributes to configuration clutter and can lead to unexpected issues with newer Next.js versions. Removing it aligns the project with current best practices.

## 2. 🛠️ Code and Configuration Fixes

To resolve these issues, I have created a new branch named `fix/deployment-errors` containing the following changes. These changes should be reviewed and merged into your `main` branch to apply the fix.

### Fix 1: Corrected `app/layout.tsx`

I have removed the erroneous, incomplete, and duplicate `metadata` block. The file now contains only one valid `metadata` export.

```typescript
// /home/ubuntu/Soshanguve-Automotive-/app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClientLayoutWrapper } from "@/components/client-layout-wrapper"

// Configure Inter font with display swap
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Single, correct metadata export
export const metadata: Metadata = {
  metadataBase: new URL("https://www.soshanguve-automotive.edu.za"),
  title: {
    default: "Soshanguve Automotive School of Specialisation",
    template: "%s | Soshanguve Automotive School",
  },
  description: "Empowering Future Innovators in Automotive and Engineering Education",
  // ... other metadata properties
  verification: {
    google: "google-site-verification-code", // Add your Google verification code
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Font preloading and loading */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          />
        </noscript>
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  )
}
```

### Fix 2: Cleaned `next.config.js`

I have removed the `swcMinify: true,` line from the configuration file to align with modern Next.js standards.

```javascript
// /home/ubuntu/Soshanguve-Automotive-/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true, <-- This line has been removed
  poweredByHeader: false,
  compress: true,
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // ... security headers
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

## 3. ✅ How to Deploy the Fix

To resolve the deployment failures, please follow these steps:

1.  **Review and Merge the Pull Request:** I will create a pull request from the `fix/deployment-errors` branch to your `main` branch. Please review the changes and merge them.
2.  **Monitor Deployment:** Once merged, Vercel will automatically trigger a new deployment from the `main` branch. You can monitor its progress in your Vercel dashboard.

Alternatively, you can pull the branch and deploy manually:

```bash
# 1. Fetch the new branch
git fetch origin fix/deployment-errors

# 2. Check out the branch
git checkout fix/deployment-errors

# 3. (Optional) Deploy to Vercel manually
vercel --prod
```

## 4. 💡 Why It Happened

This issue was likely caused by a copy-paste error during development or code merging, where a block of code was inadvertently duplicated. The `swcMinify` issue is a result of evolving Next.js standards. Regularly reviewing code and keeping configurations up-to-date can help prevent such issues in the future.
