"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import { Upload, Video, CheckCircle, AlertCircle, Sparkles } from "lucide-react"

interface UploadedFile {
  file: File
  progress: number
  status: "uploading" | "processing" | "complete" | "error"
  id: string
}

export default function UploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      file,
      progress: 0,
      status: "uploading" as const,
      id: Math.random().toString(36).substr(2, 9),
    }))

    setUploadedFiles((prev) => [...prev, ...newFiles])

    // Simulate upload and processing
    newFiles.forEach((uploadFile) => {
      simulateUpload(uploadFile.id)
    })
  }, [])

  const simulateUpload = (fileId: string) => {
    let progress = 0
    const uploadInterval = setInterval(() => {
      progress += Math.random() * 15
      if (progress >= 100) {
        progress = 100
        clearInterval(uploadInterval)

        setUploadedFiles((prev) =>
          prev.map((f) => (f.id === fileId ? { ...f, progress: 100, status: "processing" } : f)),
        )

        // Simulate AI processing
        setTimeout(() => {
          setUploadedFiles((prev) => prev.map((f) => (f.id === fileId ? { ...f, status: "complete" } : f)))
        }, 3000)
      } else {
        setUploadedFiles((prev) => prev.map((f) => (f.id === fileId ? { ...f, progress } : f)))
      }
    }, 200)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "video/*": [".mp4", ".mov", ".avi", ".mkv", ".webm"],
    },
    maxSize: 500 * 1024 * 1024, // 500MB
  })

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-cyan-400/15 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Upload Your Video
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Drop your video and let our AI analyze retention patterns, generate viral titles, and create engaging
            chapters
          </p>
        </div>

        {/* Upload Zone */}
        <Card className="max-w-4xl mx-auto mb-8 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
          <div
            {...getRootProps()}
            className={`p-12 border-2 border-dashed rounded-lg transition-all duration-300 cursor-pointer ${
              isDragActive
                ? "border-cyan-400 bg-cyan-400/5"
                : "border-gray-600 hover:border-cyan-500 hover:bg-cyan-500/5"
            }`}
          >
            <input {...getInputProps()} />
            <div className="text-center">
              <Upload className={`w-16 h-16 mx-auto mb-4 ${isDragActive ? "text-cyan-400" : "text-gray-400"}`} />
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {isDragActive ? "Drop your videos here" : "Drag & drop your videos"}
              </h3>
              <p className="text-gray-400 mb-4">
                or <span className="text-cyan-400">browse files</span>
              </p>
              <p className="text-sm text-gray-500">Supports MP4, MOV, AVI, MKV, WebM • Max 500MB per file</p>
            </div>
          </div>
        </Card>

        {/* Upload Progress */}
        {uploadedFiles.length > 0 && (
          <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl font-semibold text-white mb-4">Processing Videos</h2>
            {uploadedFiles.map((uploadFile) => (
              <Card key={uploadFile.id} className="p-6 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    {uploadFile.status === "complete" ? (
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    ) : uploadFile.status === "error" ? (
                      <AlertCircle className="w-8 h-8 text-red-400" />
                    ) : uploadFile.status === "processing" ? (
                      <Sparkles className="w-8 h-8 text-cyan-400 animate-spin" />
                    ) : (
                      <Video className="w-8 h-8 text-gray-400" />
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium text-white mb-1">{uploadFile.file.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">{(uploadFile.file.size / (1024 * 1024)).toFixed(1)} MB</p>

                    {uploadFile.status === "uploading" && (
                      <>
                        <Progress value={uploadFile.progress} className="mb-2" />
                        <p className="text-sm text-gray-400">Uploading... {Math.round(uploadFile.progress)}%</p>
                      </>
                    )}

                    {uploadFile.status === "processing" && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        <p className="text-sm text-cyan-400">AI is analyzing your video...</p>
                      </div>
                    )}

                    {uploadFile.status === "complete" && (
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-green-400">Analysis complete!</p>
                        <Button
                          size="sm"
                          className="bg-cyan-500 hover:bg-cyan-600 text-white"
                          onClick={() => (window.location.href = `/dashboard?video=${uploadFile.id}`)}
                        >
                          View Results
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Features Preview */}
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">What You'll Get</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-gray-900/30 border-gray-800 backdrop-blur-sm hover:bg-gray-900/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">AI-Generated Titles</h3>
              <p className="text-gray-400">Get viral-worthy titles optimized for your platform and audience</p>
            </Card>

            <Card className="p-6 bg-gray-900/30 border-gray-800 backdrop-blur-sm hover:bg-gray-900/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Retention Heatmaps</h3>
              <p className="text-gray-400">See exactly where viewers drop off and optimize your content</p>
            </Card>

            <Card className="p-6 bg-gray-900/30 border-gray-800 backdrop-blur-sm hover:bg-gray-900/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Smart Chapters</h3>
              <p className="text-gray-400">Automatically generated chapters and timestamps for better engagement</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
