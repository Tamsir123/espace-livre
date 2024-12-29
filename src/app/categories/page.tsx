import { BookCard } from "@/components/book-card"
import { Button } from "@/components/ui/button"

export default function CategoriesPage() {
  const categories = ["Tout", "Novel", "Traduction", "Romance"]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Découvrez Tous les Livres Ici
        </h1>

        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Tout" ? "default" : "outline"}
              className="min-w-[100px]"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <BookCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

