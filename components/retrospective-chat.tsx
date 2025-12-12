"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  Trophy,
  Code,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  Bot,
  Cloud,
  Shield,
  FileText,
  MessageSquare,
  CheckCircle2,
  Database,
} from "lucide-react"

const metrics = [
  {
    label: "Infraestrutura em Nuvem",
    icon: <Cloud className="h-8 w-8" />,
    message:
      "Vamos começar pela Infraestrutura em Nuvem! Em 2025, a equipe de TI realizou conquistas impressionantes na modernização e fortalecimento da nossa infraestrutura.",
    highlights: [
      {
        title: "Migração Azure",
        description: "SAP e Qlik Sense migrados para Azure com maior escalabilidade, resiliência e segurança operacional"
      },
      {
        title: "Monitoramento Ativo",
        description: "Integração contínua dos serviços elevando disponibilidade e detecção preventiva de incidentes"
      },
      {
        title: "Azure Virtual Desktop",
        description: "Nova estrutura com servidores robustos e menor concorrência de recursos por usuário"
      }
    ]
  },
  {
    label: "Otimização e Segurança",
    icon: <Shield className="h-8 w-8" />,
    message:
      "Agora vamos falar sobre Otimização e Segurança! A equipe implementou melhorias significativas que aumentaram a eficiência e proteção dos nossos sistemas.",
    highlights: [
      {
        title: "Redução de Custos",
        description: "Desligamento automatizado de VMs sem usuários conectados gerando economia e sustentabilidade financeira"
      },
      {
        title: "Segmentação de Rede",
        description: "Implementação de segmentação entre produção, qualidade e outros ambientes no Azure"
      },
      {
        title: "Azure Firewall",
        description: "Ponto central de conexão fortalecendo segurança e rastreabilidade de acessos"
      },
      {
        title: "Integração Microsoft 365",
        description: "AD integrado ao Microsoft 365 com novos padrões de segurança e privacidade"
      },
      {
        title: "Gestão de Acessos",
        description: "Bloqueio e desbloqueio automatizado de colaboradores em férias ou afastamento"
      },
      {
        title: "MDM-Intune",
        description: "Gerenciamento de tablets e dispositivos móveis com segmentação de perfis"
      }
    ]
  },
  {
    label: "Valor para Nossa Equipe",
    icon: <Users className="h-8 w-8" />,
    message:
      "Valor para Nossa Equipe! Investimos em ferramentas e processos que melhoram a produtividade e organização do nosso time de TI.",
    highlights: [
      {
        title: "Documentação Técnica",
        description: "Criação de documentos e wikis na Azure para melhorar performance e produtividade da equipe"
      },
      {
        title: "Azure DevOps",
        description: "Controle de projetos utilizando metodologia SCRUM para maior organização"
      },
      {
        title: "Pacotes .NET",
        description: "Centralização de bibliotecas e componentes eliminando duplicação de código"
      }
    ]
  },
  {
    label: "Valor para Usuários",
    icon: <MessageSquare className="h-8 w-8" />,
    message:
      "Valor para Usuários! Desenvolvemos soluções que fazem diferença no dia a dia de quem utiliza nossos sistemas e serviços.",
    highlights: [
      {
        title: "ChatBOT com IA",
        description: "Assistente virtual de projetos no PCF e Site Institucional para resolução ágil de dúvidas sobre manuais"
      },
      {
        title: "Espaço do Coordenador",
        description: "Repaginação do site com mais conteúdo, interface atraente e experiência de usuário aprimorada"
      },
      {
        title: "Portal HelpDesk",
        description: "Sistema para equipe de Suporte N1 realizar alterações diretamente, agilizando atendimento"
      },
      {
        title: "Treinamentos",
        description: "Workshops e treinamentos para mais de 350 pessoas nas equipes de Projetos da Fiocruz"
      }
    ]
  },
  {
    label: "Valor para a Fiotec",
    icon: <CheckCircle2 className="h-8 w-8" />,
    message:
      "Valor para a Fiotec - Parte 1! Veja os resultados extraordinários que entregamos para a organização em capacitação, melhorias e migrações.",
    highlights: [
      {
        title: "350+ Pessoas Treinadas",
        description: "Capacitação em diárias e processos para equipes Fiocruz"
      },
      {
        title: "60+ Melhorias Entregues",
        description: "Realizações em infraestrutura, sistemas e processos"
      },
      {
        title: "100% Migrações Concluídas",
        description: "Aplicações críticas operando na Azure com sucesso"
      }
    ]
  },
  {
    label: "Valor para a Fiotec",
    icon: <Database className="h-8 w-8" />,
    message:
      "Valor para a Fiotec - Parte 2! Mais números impressionantes que demonstram o impacto positivo do trabalho da equipe de TI.",
    highlights: [
      {
        title: "260+ Carga de Dados",
        description: "Agilização nas entradas de dados em grandes volumes para diversas áreas"
      },
      {
        title: "6800+ Tickets Atendidos",
        description: "Com SLA cumprido em 86% dos casos"
      },
      {
        title: "97,63% Disponibilidade Média",
        description: "Servidores e serviços mantidos pela equipe de TI"
      }
    ]
  },
]

export function RetrospectiveChat() {
  const [currentStep, setCurrentStep] = useState(-1)
  const [showMetric, setShowMetric] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [progress, setProgress] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [textFinished, setTextFinished] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(console.error)
        setIsPlaying(true)
      }
      setCurrentStep(-1)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (hasFinished) return

    if (currentStep === -1 && isAutoPlay) {
      const timer = setTimeout(() => {
        setCurrentStep(0)
        setShowMetric(false)
        setProgress(0)
      }, 4000)

      return () => {
        clearTimeout(timer)
      }
    }

    if (currentStep >= metrics.length) {
      setHasFinished(true)
      return
    }

    if (!showMetric) {
      setIsTyping(true)
      setTextFinished(false)
      setProgress(0)
      const timer = setTimeout(() => {
        setIsTyping(false)
        setShowMetric(true)
        setProgress(0)
      }, 2000)

      return () => {
        clearTimeout(timer)
      }
    } else if (!textFinished) {
      // Aguarda texto terminar de ser digitado
      return
    } else if (isAutoPlay) {
      setProgress(0)
      const timer = setTimeout(() => {
        setShowMetric(false)
        setCurrentStep((prev) => prev + 1)
        setProgress(0)
      }, 10000)

      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 100 / 100, 100))
      }, 100)

      return () => {
        clearTimeout(timer)
        clearInterval(progressInterval)
      }
    }
  }, [currentStep, showMetric, hasFinished, isAutoPlay, textFinished])

  const handleRestart = () => {
    setCurrentStep(-1)
    setShowMetric(false)
    setIsTyping(false)
    setHasFinished(false)
    setIsAutoPlay(true)
    setProgress(0)

    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(console.error)
      setIsPlaying(true)
    }
  }

  const toggleAudio = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch(console.error)
      setIsPlaying(true)
    }
  }

  const handleNext = () => {
    setProgress(0)
    setDisplayedText("")
    setTextFinished(false)
    setIsTyping(false)
    if (currentStep === -1) {
      setCurrentStep(0)
      setShowMetric(false)
    } else if (currentStep < metrics.length - 1) {
      setCurrentStep((prev) => prev + 1)
      setShowMetric(false)
    } else if (currentStep === metrics.length - 1) {
      setCurrentStep(metrics.length)
      setShowMetric(false)
    }
  }

  const handlePrevious = () => {
    setProgress(0)
    setDisplayedText("")
    setTextFinished(false)
    setIsTyping(false)
    if (currentStep === 0) {
      setCurrentStep(-1)
      setShowMetric(false)
    } else if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
      setShowMetric(false)
    }
  }

  const getCurrentContent = () => {
    if (currentStep === -1) {
      return {
        text: "Olá! Eu so um Robô criado pela TI para apresentar a Retrospectiva de 2025 do departamento. Vamos juntos conhecer?",
        metric: null,
      }
    }

    if (currentStep < metrics.length) {
      const metric = metrics[currentStep]
      return {
        text: metric.message,
        metric: showMetric ? metric : null,
      }
    }

    return { text: "", metric: null }
  }

  const content = getCurrentContent()

  useEffect(() => {
    if (isTyping) {
      setDisplayedText("")
      setTextFinished(false)
      return
    }

    const fullText = content.text
    if (displayedText === fullText) {
      if (!textFinished) {
        setTextFinished(true)
      }
      return
    }

    const timer = setTimeout(() => {
      setDisplayedText(fullText.slice(0, displayedText.length + 1))
    }, 30)

    return () => clearTimeout(timer)
  }, [displayedText, content.text, isTyping, textFinished])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      <audio ref={audioRef} loop>
        <source src="/placeholder.mp3" type="audio/mpeg" />
      </audio>

      <div className="flex-1 flex flex-col">
        {!hasFinished ? (
          <>
            <div className="flex-1 flex items-center justify-center p-2 md:p-8">
              <div className="w-full md:max-w-5xl">
                <div className="space-y-2 md:space-y-6 animate-in fade-in-0 slide-in-from-right-10 duration-700">
                  {isTyping ? (
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                      <div className="flex-shrink-0 animate-in fade-in-0 zoom-in-95 duration-700">
                        <div className="flex flex-col items-center gap-3">
                          <div className="relative">
                            <div className="h-28 w-28 md:h-32 md:w-32 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center">
                              <Bot className="h-20 w-20 text-primary" strokeWidth={1.5} />
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={handlePrevious}
                              disabled={currentStep === -1}
                              className="h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-30"
                            >
                              <ChevronLeft className="h-5 w-5" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={handleNext}
                              disabled={currentStep >= metrics.length}
                              className="h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-30"
                            >
                              <ChevronRight className="h-5 w-5" />
                            </Button>
                          </div>
                          {isAutoPlay && (
                            <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden mt-2">
                              <div 
                                className="h-full bg-primary transition-all duration-100 ease-linear"
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="rounded-2xl px-3 py-3 md:px-6 md:py-5 bg-card/80 backdrop-blur-sm w-full md:flex-1">
                        <div className="flex gap-1.5">
                          <div className="h-3 w-3 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]" />
                          <div className="h-3 w-3 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.15s]" />
                          <div className="h-3 w-3 rounded-full bg-muted-foreground animate-bounce" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                        <div className="flex-shrink-0 animate-in fade-in-0 zoom-in-95 duration-700">
                          <div className="flex flex-col items-center gap-3">
                            <div className="relative">
                              <div className="h-28 w-28 md:h-32 md:w-32 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center animate-pulse">
                                <Bot className="h-20 w-20 text-primary" strokeWidth={1.5} />
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={handlePrevious}
                                disabled={currentStep === -1}
                                className="h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-30"
                              >
                                <ChevronLeft className="h-5 w-5" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={handleNext}
                                disabled={currentStep >= metrics.length}
                                className="h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 disabled:opacity-30"
                              >
                                <ChevronRight className="h-5 w-5" />
                              </Button>
                            </div>
                            {isAutoPlay && (
                              <div className="w-24 h-1 bg-white/20 rounded-full overflow-hidden mt-2">
                                <div 
                                  className="h-full bg-primary transition-all duration-100 ease-linear"
                                  style={{ width: `${progress}%` }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="rounded-2xl px-3 py-3 md:px-6 md:py-5 bg-card/80 backdrop-blur-sm text-card-foreground w-full md:flex-1">
                          <p className="text-lg md:text-2xl leading-relaxed text-pretty">{displayedText}<span className="animate-pulse">|</span></p>
                        </div>
                      </div>

                      {content.metric && (
                        <div className="flex items-start gap-0 md:gap-4">
                          <div className="flex-shrink-0 w-0 md:w-32 hidden md:block" />
                          <Card className="p-4 md:p-10 bg-card/80 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/50 transition-colors animate-in fade-in-0 zoom-in-95 duration-500 w-full">
                            <div className="flex items-start justify-between gap-6 mb-6">
                              <div className="flex-1">
                                <p className="text-xl md:text-3xl font-bold mb-2 text-balance">
                                  {content.metric.label}
                                </p>
                              </div>
                              <div className="text-primary/80">{content.metric.icon}</div>
                            </div>
                            {content.metric.highlights && (
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {content.metric.highlights.map((highlight: any, index: number) => {
                                  const hasNumber = /^\d+[+%]?|^\d+[.,]\d+%/.test(highlight.title)
                                  
                                  if (hasNumber) {
                                    // Design para destaques com números
                                    const match = highlight.title.match(/^([\d+%.,]+)\s*(.*)/)
                                    const number = match ? match[1] : highlight.title
                                    const label = match ? match[2] : ""
                                    
                                    return (
                                      <Card key={index} className="p-4 md:p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
                                        <div className="text-center space-y-2">
                                          <div className="text-3xl md:text-5xl font-bold text-primary">
                                            {number}
                                          </div>
                                          <div className="text-sm md:text-base font-semibold text-foreground">
                                            {label}
                                          </div>
                                          <div className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-2 border-t border-primary/20">
                                            {highlight.description}
                                          </div>
                                        </div>
                                      </Card>
                                    )
                                  } else {
                                    // Design original para destaques sem números
                                    return (
                                      <Card key={index} className="p-4 bg-card/60 border-primary/20 hover:border-primary/40 transition-colors">
                                        <div className="border-l-4 border-primary/50 pl-3 py-1">
                                          <h4 className="text-base md:text-lg font-semibold mb-2 text-primary">{highlight.title}</h4>
                                          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                                        </div>
                                      </Card>
                                    )
                                  }
                                })}
                              </div>
                            )}
                          </Card>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>


          </>
        ) : (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center space-y-6 animate-in fade-in-0 zoom-in-95 duration-700 max-w-2xl">
              <Card className="p-10 bg-primary/5 border-primary/20">
                <Sparkles className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-3xl font-semibold mb-4 text-balance">Parabéns pela jornada incrível em 2025!</p>
                <p className="text-muted-foreground text-xl text-pretty">
                  O departamento de TI alcançou resultados extraordinários. Continuem com esse excelente trabalho!
                </p>
              </Card>
              <Button onClick={handleRestart} variant="outline" size="lg" className="gap-2 bg-transparent">
                Ver Novamente
                <Sparkles className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
