// src/components/ClientToaster.tsx
"use client"

import { Toaster } from "sonner"

export default function ClientToaster() {
  return (
    <Toaster
      theme="light"
      richColors
      position="top-center"
      toastOptions={{
        style: {
          background: "rgba(255,255,255,0.45)",
          backdropFilter: "saturate(180%) blur(28px)",
          WebkitBackdropFilter: "saturate(180%) blur(28px)",

          fontFamily:
            '-apple-system, BlinkMacSystemFont, "SF Pro Text", "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontWeight: 500,

          border: "1px solid rgba(255,255,255,0.35)",
          borderRadius: "22px",
          color: "#000",
          boxShadow: "0 8px 24px rgba(0,0,0,.15)",
          padding: "14px 18px",
        },
      }}
    />
  )
}
