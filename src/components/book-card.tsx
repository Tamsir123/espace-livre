import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Download, Info } from 'lucide-react'
import Link from "next/link"; // Importez Link

export function BookCard() {
  return (
    <div className="bg-black/50 rounded-lg overflow-hidden border border-white/10">
      <div className="relative aspect-[3/4]">
        <Image
          src="/book1.png"
          alt="Book cover"
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-[#FFB800] text-black text-xs px-2 py-1 rounded">
          Nouveau
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-1">Thunmanhandiya</h3>
        <p className="text-sm text-gray-400 mb-4">Mahagamasekara</p>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex-1">
            <Download className="h-4 w-4 mr-2" />
            Télécharger
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
          <Link href="/books/[id]" as={`/books/1`} className="flex items-center">
            <Info className="h-4 w-4 mr-2" />
            Infos
          </Link>
        </Button>
        </div>
      </div>
    </div>
  )
}

