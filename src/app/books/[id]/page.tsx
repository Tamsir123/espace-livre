import { Button } from "@/components/ui/button";
import { BookDetails } from "@/components/book-details";
import { BookPreview } from "@/components/book-preview";
import { Book } from "lucide-react";

export default function BookPage() {
  return (
    <div className="min-h-screen">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Section - Black Background */}
        <div className="bg-black text-white p-12">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Thunmanhandiya</h1>
              <p className="text-[#FFB800] text-xl">Mahagamasekara</p>
            </div>

            <div className="aspect-[4/3] relative bg-white/10 rounded-lg overflow-hidden">
              <BookPreview />
            </div>
          </div>
        </div>

        {/* Right Section - White Background */}
        <div className="bg-white p-12">
          <div className="space-y-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Book className="h-6 w-6 text-[#FFB800]" />
                <h2 className="text-xl font-semibold text-black">Catégorie: Novel</h2>
              </div>

              <p className="text-gray-700 mb-6">
                Thunmanhandiya, written by Mahagamasekara, is a poignant novel set in rural Sri Lanka. 
                It explores the complexities of human relationships and emotions, depicting the lives 
                of its characters with sensitivity and depth. The story&apos;s rich narrative and evocative 
                setting make it a timeless tale about love, loss, and the ties that bind us.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[#FFB800] font-semibold mb-1">Auteur :</h3>
                  <p className="text-black">Mahagamasekara</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">*publier le 31 Décembre, 2024</p>
                </div>
                <Button className="w-full bg-[#FFB800] hover:bg-[#FFB800]/90 text-black">
                  Lire un extrait
                </Button>
              </div>
            </div>

            <BookDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
