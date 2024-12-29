'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Upload, Book } from 'lucide-react'
import { useState } from "react"

export default function PublishPage() {
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const [coverImage, setCoverImage] = useState<File | null>(null)

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">Publier un Livre</h1>
            <p className="text-gray-400">
              Partagez votre livre avec notre communauté de lecteurs passionnés
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-white">Titre du livre</Label>
                <Input
                  id="title"
                  placeholder="Entrez le titre de votre livre"
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="author" className="text-white">Auteur</Label>
                <Input
                  id="author"
                  placeholder="Nom de l'auteur"
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-white">Catégorie</Label>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Sélectionnez une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="novel">Novel</SelectItem>
                    <SelectItem value="traduction">Traduction</SelectItem>
                    <SelectItem value="romance">Romance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-white">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Décrivez votre livre..."
                  className="bg-white/10 border-white/20 text-white min-h-[150px]"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-white">Fichier PDF</Label>
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept=".pdf"
                      className="hidden"
                      id="pdf-upload"
                      onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
                    />
                    <label
                      htmlFor="pdf-upload"
                      className="cursor-pointer flex flex-col items-center gap-2"
                    >
                      <Upload className="h-8 w-8 text-[#FFB800]" />
                      <span className="text-sm text-gray-400">
                        {pdfFile ? pdfFile.name : "Cliquez pour télécharger le PDF"}
                      </span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Image de couverture</Label>
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="cover-upload"
                      onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
                    />
                    <label
                      htmlFor="cover-upload"
                      className="cursor-pointer flex flex-col items-center gap-2"
                    >
                      <Book className="h-8 w-8 text-[#FFB800]" />
                      <span className="text-sm text-gray-400">
                        {coverImage ? coverImage.name : "Cliquez pour télécharger la couverture"}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full bg-[#FFB800] hover:bg-[#FFB800]/90 text-black">
              Publier le livre
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

