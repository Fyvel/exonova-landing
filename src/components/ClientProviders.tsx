"use client"

import { ThemeProvider } from "next-themes"
import React, { ReactNode } from "react"

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" enableSystem>
      {children}
    </ThemeProvider>
  )
}
