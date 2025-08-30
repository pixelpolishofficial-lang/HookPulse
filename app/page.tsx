"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect } from "react"
import {
  Play,
  Upload,
  BarChart3,
  Share2,
  TrendingUp,
  Eye,
  Clock,
  Target,
  Sparkles,
  Video,
  Users,
  Award,
  Check,
  Star,
  Crown,
  Briefcase,
  CreditCard,
  Handshake,
} from "lucide-react"

export default function HookPulseLanding() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          const animation = element.dataset.animation
          const delay = element.dataset.delay || "0"

          setTimeout(() => {
            if (animation) {
              element.classList.add(`animate-${animation}`)
              element.style.opacity = "1"
              element.style.transform = "none"
            }
          }, Number.parseInt(delay))

          observer.unobserve(element)
        }
      })
    }, observerOptions)

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.opacity = "0"
      observer.observe(htmlEl)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="animated-bg">
        <div className="floating-orb w-96 h-96 top-10 left-10 opacity-30" style={{ animationDelay: "0s" }} />
        <div className="floating-orb w-64 h-64 top-1/2 right-20 opacity-20" style={{ animationDelay: "2s" }} />
        <div className="floating-orb w-80 h-80 bottom-20 left-1/3 opacity-25" style={{ animationDelay: "4s" }} />
        <div className="mesh-gradient top-1/4 left-1/4" style={{ animationDelay: "0s" }} />
        <div className="mesh-gradient top-3/4 right-1/4" style={{ animationDelay: "10s" }} />
      </div>

      <header className="glass-card sticky top-0 z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-xl overflow-hidden">
              <img src="/images/hookpulse-logo.png" alt="HookPulse" className="w-full h-full object-contain" />
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white/70 hover:text-primary transition-colors duration-300">
              Features
            </a>
            <a href="#analytics" className="text-white/70 hover:text-primary transition-colors duration-300">
              Analytics
            </a>
            <a href="#pricing" className="text-white/70 hover:text-primary transition-colors duration-300">
              Pricing
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/5">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-primary text-black font-semibold hover:bg-primary/90 transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="h-screen px-6 relative flex items-center">
        {/* Spline 3D Background */}
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://my.spline.design/radialglass-kuNh75yBZ6B7WLg3P7NMdVlZ/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full pointer-events-none"
            style={{ transform: "scale(2)" }}
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-5"></div>

        {/* Content overlay */}
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <Badge className="mb-8 glass-button text-primary border-primary/30 hover:border-primary/50 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Video Optimization
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
            Turn Your Videos Into
            <span className="gradient-text glow-text block mt-2">Viral Sensations</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Upload videos, get retention heatmaps, AI-generated titles, chapters, captions, and viral insights. Built
            for YouTube and TikTok creators who want to dominate their niche.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-primary text-black font-semibold px-10 py-6 text-lg hover:bg-primary/90 transition-all duration-300 hover-lift rounded-xl"
              >
                <Upload className="w-5 h-5 mr-3" />
                Upload Your First Video
              </Button>
            </Link>
            <Button size="lg" className="glass-button text-white px-10 py-6 text-lg hover-lift rounded-xl">
              <Play className="w-5 h-5 mr-3" />
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10M+</div>
              <div className="text-white/60">Videos Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500K+</div>
              <div className="text-white/60">Creators Trust Us</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-white/60">Engagement Boost</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-32 px-6 bg-background relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2
              className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-on-scroll"
              data-animation="slide-up"
            >
              Supercharge Your Content
            </h2>
            <p
              className="text-xl text-white/70 max-w-3xl mx-auto font-light animate-on-scroll"
              data-animation="slide-up"
              data-delay="200"
            >
              Everything you need to optimize, analyze, and scale your video content with AI precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card
              className="glass-card hover-lift group border-white/10 animate-on-scroll"
              data-animation="slide-in-left"
              data-delay="400"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Retention Heatmaps</h3>
                <p className="text-white/70 leading-relaxed">
                  Visualize exactly where viewers drop off with AI-powered retention analysis and interactive heatmap
                  overlays.
                </p>
              </CardContent>
            </Card>

            <Card
              className="glass-card hover-lift group border-white/10 animate-on-scroll"
              data-animation="slide-up"
              data-delay="600"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">AI-Generated Titles</h3>
                <p className="text-white/70 leading-relaxed">
                  Generate viral-worthy titles that hook viewers instantly using advanced AI trained on millions of
                  successful videos.
                </p>
              </CardContent>
            </Card>

            <Card
              className="glass-card hover-lift group border-white/10 animate-on-scroll"
              data-animation="slide-in-right"
              data-delay="800"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Smart Chapters</h3>
                <p className="text-white/70 leading-relaxed">
                  Automatically generate timestamped chapters that improve watch time and user experience across
                  platforms.
                </p>
              </CardContent>
            </Card>

            <Card
              className="glass-card hover-lift group border-white/10 animate-on-scroll"
              data-animation="slide-in-left"
              data-delay="1000"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Auto Captions</h3>
                <p className="text-white/70 leading-relaxed">
                  Generate accurate, stylized captions that boost accessibility and engagement with perfect timing.
                </p>
              </CardContent>
            </Card>

            <Card
              className="glass-card hover-lift group border-white/10 animate-on-scroll"
              data-animation="slide-up"
              data-delay="1200"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Viral Insights</h3>
                <p className="text-white/70 leading-relaxed">
                  Get actionable recommendations on trending topics, optimal posting times, and viral content patterns.
                </p>
              </CardContent>
            </Card>

            <Card
              className="glass-card hover-lift group border-white/10 animate-on-scroll"
              data-animation="slide-in-right"
              data-delay="1400"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300">
                  <Share2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Growth Analytics</h3>
                <p className="text-white/70 leading-relaxed">
                  Track your progress with beautiful analytics dashboards and share your wins with stunning growth
                  reports.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="analytics" className="py-32 px-6 bg-background relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2
              className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-on-scroll"
              data-animation="slide-up"
            >
              Analytics That Matter
            </h2>
            <p
              className="text-xl text-white/70 max-w-3xl mx-auto font-light animate-on-scroll"
              data-animation="slide-up"
              data-delay="200"
            >
              Beautiful, actionable insights that help you understand your audience and grow your channel.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-on-scroll" data-animation="slide-in-left" data-delay="400">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Video className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Real-time Performance</h3>
                  <p className="text-white/70">
                    Monitor your video performance as it happens with live analytics and instant notifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Audience Insights</h3>
                  <p className="text-white/70">
                    Deep dive into your audience demographics, behavior patterns, and engagement preferences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Competitive Analysis</h3>
                  <p className="text-white/70">
                    See how you stack up against competitors and discover opportunities for growth.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="glass-card p-8 hover-lift rounded-2xl animate-on-scroll"
              data-animation="slide-in-right"
              data-delay="600"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl relative overflow-hidden">
                {/* Animated retention heatmap */}
                <div className="absolute inset-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-semibold text-sm">Retention Analysis</h4>
                    <div className="text-primary text-xs">87% avg retention</div>
                  </div>

                  {/* Animated bars representing retention */}
                  <div className="space-y-2">
                    {[95, 87, 82, 78, 85, 91, 76, 69].map((value, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="text-xs text-white/50 w-8">{i * 30}s</div>
                        <div className="flex-1 bg-white/10 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${value}%`,
                              animationDelay: `${i * 200}ms`,
                              animation: `slideIn 1s ease-out ${i * 200}ms both`,
                            }}
                          />
                        </div>
                        <div className="text-xs text-primary w-8">{value}%</div>
                      </div>
                    ))}
                  </div>

                  {/* Animated pulse indicators */}
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-primary rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 500}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-32 px-6 bg-background relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Choose Your Growth Plan</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              From solo creators to agencies, we have the perfect plan to accelerate your video optimization journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Starter Plan */}
            <Card
              className="glass-card hover-lift border-white/10 relative animate-on-scroll"
              data-animation="slide-up"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <Badge className="glass-button text-primary border-primary/30">Most Popular</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">$9</span>
                  <span className="text-white/60">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    30 video credits per month
                  </li>
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    Caption styling & customization
                  </li>
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    10 title/hook generations per day
                  </li>
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    Basic retention estimates
                  </li>
                </ul>
                <Button className="w-full bg-primary text-black font-semibold hover:bg-primary/90 transition-all duration-300">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card
              className="glass-card hover-lift border-primary/30 relative scale-105 z-10 animate-on-scroll"
              data-animation="slide-up"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-black px-4 py-1 font-semibold">Recommended</Badge>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center">
                    <Crown className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-white">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">$29</span>
                  <span className="text-white/60">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    Unlimited titles & captions
                  </li>
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    Full retention heatmaps via OAuth/CSV
                  </li>
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    Viral idea validator
                  </li>
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    Shareable growth cards
                  </li>
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />2 team seats included
                  </li>
                </ul>
                <Button className="w-full bg-primary text-black font-semibold hover:bg-primary/90 transition-all duration-300">
                  Upgrade to Pro
                </Button>
              </CardContent>
            </Card>

            {/* Agency Plan */}
            <Card
              className="glass-card hover-lift border-white/10 relative animate-on-scroll"
              data-animation="slide-up"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <Badge className="glass-button text-white/70 border-white/20">Enterprise</Badge>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-white">Agency</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">$149</span>
                  <span className="text-white/60">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    Multi-channel management
                  </li>
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    Unlimited team seats
                  </li>
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    White-label PDF reports
                  </li>
                  <li className="flex items-center text-white/80">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    Priority support & SSO
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full glass-button text-white border-white/20 hover:bg-white/5 bg-transparent"
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional pricing options */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-card hover-lift border-white/10 animate-on-scroll" data-animation="slide-up">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Pay-as-you-go</h4>
                    <p className="text-white/60 text-sm">Perfect for occasional use</p>
                  </div>
                </div>
                <p className="text-white/70 mb-4">
                  Transcription & heavy video processing credits at $0.02/min equivalent. No monthly commitment.
                </p>
                <Button
                  variant="outline"
                  className="w-full glass-button text-white border-white/20 hover:bg-white/5 bg-transparent"
                >
                  Add Credits
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift border-white/10 animate-on-scroll" data-animation="slide-up">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Handshake className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Partner/Affiliate</h4>
                    <p className="text-white/60 text-sm">Earn with referrals</p>
                  </div>
                </div>
                <p className="text-white/70 mb-4">
                  Revenue share program for creator referrals who convert. Help others grow while earning.
                </p>
                <Button
                  variant="outline"
                  className="w-full glass-button text-white border-white/20 hover:bg-white/5 bg-transparent"
                >
                  Join Program
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-background relative z-10">
        <div className="container mx-auto text-center">
          <Card
            className="glass-card max-w-4xl mx-auto hover-lift pulse-border animate-on-scroll"
            data-animation="slide-up"
          >
            <CardContent className="p-16">
              <Target className="w-20 h-20 mx-auto mb-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Ready to Go Viral?</h2>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light">
                Join thousands of creators who've transformed their content and boosted engagement with HookPulse's
                AI-powered optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="bg-primary text-black font-semibold px-10 py-6 text-lg hover:bg-primary/90 transition-all duration-300 hover-lift rounded-xl"
                  >
                    <Upload className="w-5 h-5 mr-3" />
                    Start Optimizing Now
                  </Button>
                </Link>
                <Button size="lg" className="glass-button text-white px-10 py-6 text-lg hover-lift rounded-xl">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="glass-card border-t border-white/10 py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 rounded-xl overflow-hidden">
                <img src="/images/hookpulse-logo.png" alt="HookPulse" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="flex items-center space-x-8 text-sm text-white/60">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Terms
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Support
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                API
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sm text-white/50">
            © 2024 HookPulse. Built for creators who want to dominate their niche.
          </div>
        </div>
      </footer>
    </div>
  )
}
