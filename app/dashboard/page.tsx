"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"
import { Share2, TrendingUp, Zap, Copy, Download, Sparkles } from "lucide-react"

// Mock data for demonstration
const retentionData = [
  { time: "0:00", retention: 100, viewers: 1000 },
  { time: "0:15", retention: 95, viewers: 950 },
  { time: "0:30", retention: 88, viewers: 880 },
  { time: "0:45", retention: 82, viewers: 820 },
  { time: "1:00", retention: 75, viewers: 750 },
  { time: "1:15", retention: 68, viewers: 680 },
  { time: "1:30", retention: 62, viewers: 620 },
  { time: "1:45", retention: 58, viewers: 580 },
  { time: "2:00", retention: 55, viewers: 550 },
  { time: "2:15", retention: 52, viewers: 520 },
  { time: "2:30", retention: 48, viewers: 480 },
  { time: "2:45", retention: 45, viewers: 450 },
  { time: "3:00", retention: 42, viewers: 420 },
]

const performanceData = [
  { metric: "Views", value: "127K", change: "+23%", trend: "up" },
  { metric: "Avg. View Duration", value: "2:34", change: "+12%", trend: "up" },
  { metric: "Engagement Rate", value: "8.4%", change: "+5%", trend: "up" },
  { metric: "Click-through Rate", value: "12.1%", change: "-2%", trend: "down" },
]

const aiGeneratedTitles = [
  { title: "This ONE Trick Changed Everything (You Won't Believe What Happened)", score: 94 },
  { title: "I Tried This For 30 Days - The Results Will SHOCK You", score: 91 },
  { title: "The Secret That Pros Don't Want You To Know", score: 88 },
  { title: "Why Everyone Is Talking About This Method", score: 85 },
]

const chapters = [
  { time: "0:00", title: "Hook: The Problem Everyone Faces", engagement: 95 },
  { time: "0:45", title: "The Solution That Changes Everything", engagement: 88 },
  { time: "1:30", title: "Step-by-Step Implementation", engagement: 75 },
  { time: "2:15", title: "Real Results & Proof", engagement: 68 },
  { time: "2:45", title: "Call to Action", engagement: 55 },
]

export default function DashboardPage() {
  const [selectedVideo] = useState("My Latest Video.mp4")

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-cyan-400/8 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Video Analytics
            </h1>
            <p className="text-gray-400 mt-2">Analyzing: {selectedVideo}</p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white">
              <Share2 className="w-4 h-4 mr-2" />
              Share Results
            </Button>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {performanceData.map((item, index) => (
            <Card key={index} className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">{item.metric}</span>
                <TrendingUp className={`w-4 h-4 ${item.trend === "up" ? "text-green-400" : "text-red-400"}`} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
              <div className={`text-sm ${item.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                {item.change} vs last video
              </div>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="retention" className="space-y-6">
          <TabsList className="bg-gray-900/50 border-gray-800">
            <TabsTrigger
              value="retention"
              className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
            >
              Retention Analysis
            </TabsTrigger>
            <TabsTrigger
              value="ai-content"
              className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
            >
              AI Generated Content
            </TabsTrigger>
            <TabsTrigger
              value="insights"
              className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
            >
              Viral Insights
            </TabsTrigger>
          </TabsList>

          {/* Retention Analysis Tab */}
          <TabsContent value="retention" className="space-y-6">
            <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Audience Retention Heatmap</h2>
                <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400">
                  Above Average
                </Badge>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={retentionData}>
                    <defs>
                      <linearGradient id="retentionGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00F5D4" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#00F5D4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                        color: "#F9FAFB",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="retention"
                      stroke="#00F5D4"
                      strokeWidth={2}
                      fill="url(#retentionGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <p className="text-cyan-400 text-sm">
                  <Zap className="w-4 h-4 inline mr-2" />
                  Peak engagement at 0:45 - Consider using this hook style in future videos
                </p>
              </div>
            </Card>

            {/* Smart Chapters */}
            <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white mb-6">AI-Generated Chapters</h2>
              <div className="space-y-4">
                {chapters.map((chapter, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="text-cyan-400 font-mono text-sm">{chapter.time}</div>
                      <div className="text-white">{chapter.title}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-sm text-gray-400">{chapter.engagement}% retention</div>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* AI Generated Content Tab */}
          <TabsContent value="ai-content" className="space-y-6">
            <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h2 className="text-xl font-semibold text-white">Viral Title Suggestions</h2>
              </div>
              <div className="space-y-4">
                {aiGeneratedTitles.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="text-white mb-1">{item.title}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                          {item.score}% Viral Score
                        </Badge>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white mb-6">Auto-Generated Captions</h2>
              <div className="bg-gray-800/50 rounded-lg p-4 max-h-60 overflow-y-auto">
                <div className="space-y-2 text-sm">
                  <div className="flex gap-3">
                    <span className="text-cyan-400 font-mono">0:00</span>
                    <span className="text-gray-300">Hey everyone, welcome back to my channel!</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-cyan-400 font-mono">0:03</span>
                    <span className="text-gray-300">Today I'm going to show you something incredible...</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-cyan-400 font-mono">0:07</span>
                    <span className="text-gray-300">This technique has completely changed how I approach...</span>
                  </div>
                  <div className="text-center py-4">
                    <span className="text-gray-500">... and 47 more lines</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download SRT
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Text
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Viral Insights Tab */}
          <TabsContent value="insights" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Engagement Patterns</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Peak Engagement Time</span>
                    <span className="text-cyan-400">0:45 - 1:15</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Drop-off Point</span>
                    <span className="text-red-400">2:30</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Replay Segments</span>
                    <span className="text-green-400">3 identified</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Optimization Tips</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">Move your hook earlier - viewers drop at 0:15</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">Add visual elements at 2:30 to prevent drop-off</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">Your 0:45 segment is highly engaging - replicate this style</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-4">Viral Potential Score</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  87/100
                </div>
                <Badge className="bg-green-500/20 text-green-400">High Potential</Badge>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">92</div>
                  <div className="text-sm text-gray-400">Hook Score</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">84</div>
                  <div className="text-sm text-gray-400">Content Score</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">85</div>
                  <div className="text-sm text-gray-400">Retention Score</div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
