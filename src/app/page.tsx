import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookCard } from "@/components/book-card"
import { BookStats } from "@/components/book-stats"
import { Search } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-[url('/book.png')] bg-cover bg-center"
          style={{ filter: 'brightness(0.3)' }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl font-bold text-[#FFB800] mb-4">
            The Book Lover&apos;s Dreamland Awaits!
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Le refuge numérique des passionnés de lecture : Partagez, lisez, et laissez-vous inspirer. 
            Découvrez une bibliothèque vivante où chaque histoire peut ouvrir des esprits et toucher des cœurs.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <Input 
              placeholder="Rechercher un livre..." 
              className="bg-white/10 border-white/20"
            />
            <Button className="bg-[#FFB800] hover:bg-[#FFB800]/90">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-20 mx-auto mb-4">
                <img src="/book-stack.svg" alt="Books" className="w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mes Livres</h3>
            </div>
          ))}
        </div>
      </section> */}

      {/* Featured Books Section */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center "  style={{ color: 'black' }}>Nos Meilleurs Choix </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <BookCard key={i} />
      ))}
    </div>
  </div>
</section>


      {/* Stats Section */}
      <BookStats />
    </div>
  )
}

