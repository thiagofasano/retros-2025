"use client"

import { useState } from "react"
import { WelcomePage } from "@/components/welcome-page"
import { RetrospectiveChat } from "@/components/retrospective-chat"

export default function Page() {
  const [hasStarted, setHasStarted] = useState(false)
  const [userName, setUserName] = useState("")

  if (!hasStarted) {
    return <WelcomePage onStart={(name) => {
      setUserName(name)
      setHasStarted(true)
    }} />
  }

  return <RetrospectiveChat userName={userName} />
}
