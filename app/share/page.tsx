"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
  Share2,
  Copy,
  Download,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  TrendingUp,
  Eye,
  Users,
  Link,
  QrCode,
  ImageIcon,
  FileText,
  Crown,
  BarChart3,
} from "lucide-react"

export default function SharePage() {
  const [shareUrl] = useState("https://hookpulse.ai/showcase/user123/video-abc")
  const [isPublic, setIsPublic] = useState(true)
  const [copied, setCopied] = useState(false)

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareToSocial = (platform: string) => {
    const text = "Just analyzed my video with HookPulse AI! 🚀 Check out these incredible insights:"
    const url = shareUrl

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      instagram: `https://instagram.com`, // Instagram doesn't support direct URL sharing
    }

    if (shareUrls[platform as keyof typeof shareUrls]) {
      window.open(shareUrls[platform as keyof typeof shareUrls], "_blank")
    }
  }

  const exportData = (format: string) => {
    // Simulate export functionality
    console.log(`Exporting data as ${format}`)
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
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent mb-4">
            Share Your Success
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcase your video performance, share insights with your team, and flex your growth with the creator
            community
          </p>
        </div>

        <Tabs defaultValue="showcase" className="space-y-6">
          <TabsList className="bg-gray-900/50 border-gray-800 mx-auto">
            <TabsTrigger
              value="showcase"
              className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
            >
              <Crown className="w-4 h-4 mr-2" />
              Public Showcase
            </TabsTrigger>
            <TabsTrigger
              value="social"
              className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Social Sharing
            </TabsTrigger>
            <TabsTrigger
              value="export"
              className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
            >
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </TabsTrigger>
            <TabsTrigger
              value="collaborate"
              className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
            >
              <Users className="w-4 h-4 mr-2" />
              Team Sharing
            </TabsTrigger>
          </TabsList>

          {/* Public Showcase Tab */}
          <TabsContent value="showcase" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Showcase Settings */}
              <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Showcase Settings</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-white font-medium">Public Portfolio</label>
                      <p className="text-sm text-gray-400">Make your results visible to everyone</p>
                    </div>
                    <Switch checked={isPublic} onCheckedChange={setIsPublic} />
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Custom URL</label>
                    <div className="flex gap-2">
                      <Input
                        value="hookpulse.ai/showcase/your-username"
                        className="bg-gray-800 border-gray-700 text-white"
                        readOnly
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                      >
                        Edit
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-white font-medium">Display Options</label>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">Show retention graphs</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">Show AI-generated titles</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">Show viral scores</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">Show growth metrics</span>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview Showcase
                  </Button>
                </div>
              </Card>

              {/* Showcase Preview */}
              <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Live Preview</h3>

                <div className="bg-gray-800/50 rounded-lg p-4 space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">JD</span>
                    </div>
                    <h4 className="text-white font-semibold">John Creator</h4>
                    <p className="text-gray-400 text-sm">Content Creator & YouTuber</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-xl font-bold text-cyan-400">127K</div>
                      <div className="text-xs text-gray-400">Total Views</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-400">94%</div>
                      <div className="text-xs text-gray-400">Avg Viral Score</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-purple-400">23</div>
                      <div className="text-xs text-gray-400">Videos Analyzed</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">Latest Video Performance</span>
                      <Badge className="bg-green-500/20 text-green-400">Above Average</Badge>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <Button size="sm" onClick={handleCopyUrl} className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white">
                    <Copy className="w-4 h-4 mr-2" />
                    {copied ? "Copied!" : "Copy Link"}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    <QrCode className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Achievement Badges */}
            <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-4">Achievement Badges</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/30">
                  <Crown className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-yellow-400">Viral Master</div>
                  <div className="text-xs text-gray-400">5+ videos with 90%+ viral score</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-lg border border-green-500/30">
                  <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-green-400">Growth Hacker</div>
                  <div className="text-xs text-gray-400">100K+ total views</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                  <ImageIcon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-purple-400">Retention Pro</div>
                  <div className="text-xs text-gray-400">Avg 75%+ retention rate</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
                  <Eye className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-cyan-400">AI Pioneer</div>
                  <div className="text-xs text-gray-400">Early HookPulse adopter</div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Social Sharing Tab */}
          <TabsContent value="social" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Share Your Results</h3>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">My Latest Video Analysis</h4>
                        <p className="text-gray-400 text-sm">94% viral score • 2.3M views potential</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center text-sm">
                      <div>
                        <div className="text-cyan-400 font-bold">94%</div>
                        <div className="text-gray-400">Viral Score</div>
                      </div>
                      <div>
                        <div className="text-green-400 font-bold">78%</div>
                        <div className="text-gray-400">Retention</div>
                      </div>
                      <div>
                        <div className="text-purple-400 font-bold">8.4%</div>
                        <div className="text-gray-400">Engagement</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={() => shareToSocial("twitter")}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white justify-start"
                    >
                      <Twitter className="w-4 h-4 mr-3" />
                      Share on Twitter
                    </Button>
                    <Button
                      onClick={() => shareToSocial("linkedin")}
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white justify-start"
                    >
                      <Linkedin className="w-4 h-4 mr-3" />
                      Share on LinkedIn
                    </Button>
                    <Button
                      onClick={() => shareToSocial("instagram")}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white justify-start"
                    >
                      <Instagram className="w-4 h-4 mr-3" />
                      Share on Instagram
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent justify-start"
                    >
                      <Youtube className="w-4 h-4 mr-3" />
                      Share on YouTube Community
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Custom Share Message</h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Share Text</label>
                    <textarea
                      className="w-full h-32 bg-gray-800 border border-gray-700 rounded-lg p-3 text-white resize-none"
                      defaultValue="Just analyzed my video with HookPulse AI! 🚀 

✨ 94% viral score
📈 78% retention rate  
🎯 8.4% engagement rate

This AI tool is a game-changer for creators! Check out my full results:"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <Input value={shareUrl} className="bg-gray-800 border-gray-700 text-white" readOnly />
                    <Button
                      size="sm"
                      onClick={handleCopyUrl}
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                    <p className="text-cyan-400 text-sm">
                      <Link className="w-4 h-4 inline mr-2" />
                      Your share link includes a beautiful preview card with your key metrics
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Export Data Tab */}
          <TabsContent value="export" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Export Options</h3>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <Button
                      onClick={() => exportData("pdf")}
                      variant="outline"
                      className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                    >
                      <FileText className="w-4 h-4 mr-3" />
                      Export PDF Report
                      <Badge className="ml-auto bg-cyan-500/20 text-cyan-400">Premium</Badge>
                    </Button>
                    <Button
                      onClick={() => exportData("png")}
                      variant="outline"
                      className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                    >
                      <ImageIcon className="w-4 h-4 mr-3" />
                      Export Charts as Images
                    </Button>
                    <Button
                      onClick={() => exportData("csv")}
                      variant="outline"
                      className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                    >
                      <BarChart3 className="w-4 h-4 mr-3" />
                      Export Raw Data (CSV)
                    </Button>
                    <Button
                      onClick={() => exportData("json")}
                      variant="outline"
                      className="w-full justify-start border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                    >
                      <FileText className="w-4 h-4 mr-3" />
                      Export API Data (JSON)
                    </Button>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                    <h4 className="text-cyan-400 font-medium mb-2">Bulk Export</h4>
                    <p className="text-gray-300 text-sm mb-3">Export data from multiple videos at once</p>
                    <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                      Select Videos
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Export History</h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <div className="text-white text-sm font-medium">Video Analysis Report</div>
                      <div className="text-gray-400 text-xs">PDF • 2.3 MB • 2 hours ago</div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <div className="text-white text-sm font-medium">Retention Charts</div>
                      <div className="text-gray-400 text-xs">PNG • 1.2 MB • 1 day ago</div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <div className="text-white text-sm font-medium">Analytics Data</div>
                      <div className="text-gray-400 text-xs">CSV • 0.8 MB • 3 days ago</div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Team Sharing Tab */}
          <TabsContent value="collaborate" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Team Members</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">SM</span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">Sarah Manager</div>
                        <div className="text-gray-400 text-xs">sarah@company.com</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                      Admin
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">ME</span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">Mike Editor</div>
                        <div className="text-gray-400 text-xs">mike@company.com</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                      Editor
                    </Badge>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Invite Team Member
                  </Button>
                </div>
              </Card>

              <Card className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">Shared Projects</h3>

                <div className="space-y-3">
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white text-sm font-medium">Q4 Campaign Videos</div>
                      <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400">
                        12 videos
                      </Badge>
                    </div>
                    <div className="text-gray-400 text-xs">Shared with Sarah, Mike • Updated 2 hours ago</div>
                  </div>

                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white text-sm font-medium">Product Launch Series</div>
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">
                        8 videos
                      </Badge>
                    </div>
                    <div className="text-gray-400 text-xs">Shared with Sarah • Updated 1 day ago</div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Create Shared Project
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
