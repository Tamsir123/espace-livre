'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Navbar() {
  const pathname = usePathname()
  
  return (
    <nav 
    className="border-b-transparent bg-cover bg-center text-white" 
      style={{ backgroundImage: 'url("/navbar.png")' }}
    >
      <div className="flex h-16 items-center px-4 container mx-auto bg-black bg-opacity-50">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/Rectangle 3.png" alt="Espace Livre" width={40} height={40} />
          <span className="text-xl font-bold text-[#FFB800]">ESPACE LIVRE</span>
        </Link>
        <div className="ml-auto flex items-center space-x-6">
          <Link 
            href="/"
            className={`text-sm ${pathname === '/' ? 'text-[#FFB800]' : 'text-gray-300'}`}
          >
            Accueil
          </Link>
          <Link 
            href="/categories"
            className={`text-sm ${pathname === '/categories' ? 'text-[#FFB800]' : 'text-gray-300'}`}
          >
            Catégories
          </Link>
          <Link 
            href="/mes-livres"
            className={`text-sm ${pathname === '/mes-livres' ? 'text-[#FFB800]' : 'text-gray-300'}`}
          >
            Mes Livres
          </Link>
          <Link 
            href="/publier"
            className={`text-sm ${pathname === '/publier' ? 'text-[#FFB800]' : 'text-gray-300'}`}
          >
            Publier des Livres
          </Link>
          <Link href="/login">
            <Button variant="outline" className="border-[#FFB800] text-[#FFB800]">
              Se connecter
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
