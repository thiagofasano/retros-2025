"use client"

import { useState } from "react"
import { WelcomePage } from "@/components/welcome-page"
import { RetrospectiveChat } from "@/components/retrospective-chat"

export default function Page() {
  const [hasStarted, setHasStarted] = useState(false)

  if (!hasStarted) {
    return <WelcomePage onStart={() => setHasStarted(true)} />
  }

  return <RetrospectiveChat />
}
