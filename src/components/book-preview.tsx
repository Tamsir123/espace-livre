'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function BookPreview() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="relative w-full h-full">
      <img
        src="/ouvrir.png"
        alt="Book preview"
        className="w-full h-full object-cover"
      />
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      
    </div>
  )
}

