"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Sparkles,
  RefreshCw,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Wand2,
  Target,
  Zap,
  MessageSquare,
  Settings,
  Play,
} from "lucide-react"

export default function AIStudioPage() {
  const [selectedVideo] = useState("My Latest Video.mp4")
  const [isGenerating, setIsGenerating] = useState(false)
  const [creativityLevel, setCreativityLevel] = useState([75])
  const [titleStyle, setTitleStyle] = useState("viral")
  const [customPrompt, setCustomPrompt] = useState("")

  const [generatedTitles, setGeneratedTitles] = useState([
    { id: 1, title: "This ONE Trick Changed Everything (You Won't Believe What Happened)", score: 94, liked: false },
    { id: 2, title: "I Tried This For 30 Days - The Results Will SHOCK You", score: 91, liked: true },
    { id: 3, title: "The Secret That Pros Don't Want You To Know", score: 88, liked: false },
    { id: 4, title: "Why Everyone Is Talking About This Method", score: 85, liked: false },
  ])

  const [chapters, setChapters] = useState([
    { id: 1, time: "0:00", title: "Hook: The Problem Everyone Faces", editable: false },
    { id: 2, time: "0:45", title: "The Solution That Changes Everything", editable: false },
    { id: 3, time: "1:30", title: "Step-by-Step Implementation", editable: false },
    { id: 4, time: "2:15", title: "Real Results & Proof", editable: false },
    { id: 5, time: "2:45", title: "Call to Action", editable: false },
  ])

  const handleGenerateTitles = () => {
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false)
      // Add new generated titles
    }, 2000)
  }

  const handleLikeTitle = (id: number) => {
    setGeneratedTitles((prev) => prev.map((title) => (title.id === id ? { ...title, liked: !title.liked } : title)))
  }

  const makeChapterEditable = (id: number) => {
    setChapters((prev) => prev.map((chapter) => (chapter.id === id ? { ...chapter, editable: true } : chapter)))
  }

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
              AI Content Studio
            </h1>
            <p className="text-gray-400 mt-2">Working on: {selectedVideo}</p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
            >
              <Settings className="w-4 h-4 mr-2" />
              AI Settings
            </Button>
            <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white">
              <Play className="w-4 h-4 mr-2" />
              Preview Video
            </Button>
          </div>
        </div>

        <Tabs defaultValue="titles" className="space-y-6">
          <TabsList className="bg-gray-900/50 border-gray-800">
            <TabsTrigger
              value="titles"
              className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Title Generator
            </TabsTrigger>
            <TabsTrigger
              value="chapters"
              className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
            >
              <Target className="w-4 h-4 mr-2" />
              Smart Chapters
            </TabsTrigger>
            <TabsTrigger
              value="captions"
              className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Caption Editor
            </TabsTrigger>
            <TabsTrigger
              value="optimizer"
              className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
            >
              <Zap className="w-4 h-4 mr-2" />
              AI Optimizer
            </TabsTrigger>
          </TabsList>

          {/* Title Generator Tab */}
          <TabsContent value="titles" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Controls */}
              <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Generation Settings</h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Title Style</label>
                    <Select value={titleStyle} onValueChange={setTitleStyle}>
                      <SelectTrigger className="bg-gray-800 border-gray-700">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="viral">Viral & Clickbait</SelectItem>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="educational">Educational</SelectItem>
                        <SelectItem value="storytelling">Storytelling</SelectItem>
                        <SelectItem value="question">Question-Based</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Creativity Level: {creativityLevel[0]}%</label>
                    <Slider
                      value={creativityLevel}
                      onValueChange={setCreativityLevel}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Custom Prompt (Optional)</label>
                    <Textarea
                      placeholder="e.g., Focus on productivity tips, mention specific results..."
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white resize-none"
                      rows={3}
                    />
                  </div>

                  <Button
                    onClick={handleGenerateTitles}
                    disabled={isGenerating}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                  >
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-4 h-4 mr-2" />
                        Generate New Titles
                      </>
                    )}
                  </Button>
                </div>
              </Card>

              {/* Generated Titles */}
              <div className="lg:col-span-2">
                <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-4">Generated Titles</h3>
                  <div className="space-y-4">
                    {generatedTitles.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors"
                      >
                        <div className="flex-1">
                          <p className="text-white mb-2">{item.title}</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                              {item.score}% Viral Score
                            </Badge>
                            <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400">
                              {titleStyle}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleLikeTitle(item.id)}
                            className={item.liked ? "text-green-400" : "text-gray-400 hover:text-green-400"}
                          >
                            <ThumbsUp className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-red-400">
                            <ThumbsDown className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Smart Chapters Tab */}
          <TabsContent value="chapters" className="space-y-6">
            <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">AI-Generated Chapters</h3>
                <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate All
                </Button>
              </div>

              <div className="space-y-4">
                {chapters.map((chapter) => (
                  <div key={chapter.id} className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
                    <div className="text-cyan-400 font-mono text-sm w-16">{chapter.time}</div>
                    <div className="flex-1">
                      {chapter.editable ? (
                        <Input
                          defaultValue={chapter.title}
                          className="bg-gray-700 border-gray-600 text-white"
                          onBlur={() =>
                            setChapters((prev) =>
                              prev.map((c) => (c.id === chapter.id ? { ...c, editable: false } : c)),
                            )
                          }
                          autoFocus
                        />
                      ) : (
                        <span className="text-white">{chapter.title}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => makeChapterEditable(chapter.id)}
                        className="text-gray-400 hover:text-white"
                      >
                        Edit
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-cyan-400">
                        <RefreshCw className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <p className="text-cyan-400 text-sm">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  Tip: Chapters are optimized based on your video's retention patterns and content flow
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Caption Editor Tab */}
          <TabsContent value="captions" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Caption Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Language</label>
                    <Select defaultValue="en">
                      <SelectTrigger className="bg-gray-800 border-gray-700">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Style</label>
                    <Select defaultValue="natural">
                      <SelectTrigger className="bg-gray-800 border-gray-700">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="natural">Natural Speech</SelectItem>
                        <SelectItem value="formal">Formal</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="technical">Technical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Regenerate Captions
                  </Button>
                </div>
              </Card>

              <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Live Caption Editor</h3>
                <div className="bg-gray-800/50 rounded-lg p-4 max-h-80 overflow-y-auto">
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3 items-start">
                      <span className="text-cyan-400 font-mono w-12">0:00</span>
                      <Textarea
                        defaultValue="Hey everyone, welcome back to my channel!"
                        className="bg-transparent border-none text-gray-300 resize-none p-0 min-h-0 h-auto"
                        rows={1}
                      />
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-cyan-400 font-mono w-12">0:03</span>
                      <Textarea
                        defaultValue="Today I'm going to show you something incredible that will change how you think about productivity."
                        className="bg-transparent border-none text-gray-300 resize-none p-0 min-h-0 h-auto"
                        rows={2}
                      />
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-cyan-400 font-mono w-12">0:07</span>
                      <Textarea
                        defaultValue="This technique has completely transformed my workflow and I can't wait to share it with you."
                        className="bg-transparent border-none text-gray-300 resize-none p-0 min-h-0 h-auto"
                        rows={2}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* AI Optimizer Tab */}
          <TabsContent value="optimizer" className="space-y-6">
            <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-6">AI Content Optimizer</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-white font-medium">Optimization Suggestions</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <Zap className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-green-400 font-medium text-sm">High Impact</p>
                        <p className="text-gray-300 text-sm">
                          Move your hook 15 seconds earlier to capture attention faster
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                      <Target className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-yellow-400 font-medium text-sm">Medium Impact</p>
                        <p className="text-gray-300 text-sm">Add visual elements at 2:30 to prevent viewer drop-off</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <Sparkles className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-blue-400 font-medium text-sm">Enhancement</p>
                        <p className="text-gray-300 text-sm">
                          Your 0:45 segment is highly engaging - replicate this style
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-white font-medium">Quick Actions</h4>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                    >
                      <Wand2 className="w-4 h-4 mr-2" />
                      Generate Hook Variations
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                    >
                      <Target className="w-4 h-4 mr-2" />
                      Optimize for Platform
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      A/B Test Thumbnails
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
