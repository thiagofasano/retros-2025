"use client"

import { Button } from "@/components/ui/button"
import { Bot, Sparkles } from "lucide-react"
import Image from "next/image"

import { useState } from "react"
import { Input } from "@/components/ui/input"

type WelcomePageProps = {
  onStart: (name: string) => void
}

export function WelcomePage({ onStart }: WelcomePageProps) {
  const [name, setName] = useState("")

  const handleStart = () => {
    // if (name.trim()) {
      onStart(name.trim())
    // }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
        {/* Fiotec Logo */}
        <div className="flex justify-center mb-6">
          <Image 
            src="/logo-fiotec.png" 
            alt="Logo Fiotec" 
            width={100} 
            height={80}
            className="object-contain"
          />
        </div>

        <br />
        <br />

        {/* Robot Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative h-32 w-32 rounded-3xl bg-gradient-to-br from-primary/90 to-primary flex items-center justify-center shadow-2xl">
              <Bot className="h-16 w-16 text-primary-foreground" />
              <div className="absolute -top-1 -right-1">
                <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
            Vamos conhecer juntos os principais resultados do departamento de TI?
          </h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-xl mx-auto">
            Informe seu nome e clique em ver retrospectiva para começar a explorar as conquistas de 2025!
          </p>
        </div>

        {/* Name Input */}
        <div className="space-y-4 max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Digite seu nome..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleStart()}
            className="text-center text-lg h-14 bg-card/80 backdrop-blur-sm border-2 border-primary/30 focus:border-primary"
          />
        </div>

        {/* Start Button */}
        <Button
          size="lg"
          // disabled={!name.trim()}
          className="text-lg px-12 py-4 h-auto gap-3 shadow-lg hover:shadow-xl transition-all w-full max-w-md animate-pulse hover:animate-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleStart}
        >
          <span>Ver Retrospectiva</span>
          <Sparkles className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
