import { Facebook, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-[#FFB800]">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#FFB800]">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#FFB800]">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
        <p className="text-center text-sm text-gray-400">
          © 2024 | Espace Livre
        </p>
        <p className="text-center text-sm text-[#FFB800] mt-2">
          Inscrivez-vous sur notre plateforme en ligne pour profiter au maximum de nos avantages !
        </p>
      </div>
    </footer>
  )
}

