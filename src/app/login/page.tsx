'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white flex">
      <div className="flex-1 relative hidden lg:block">
        <Image
          src="/imglogin.png"
          alt="Reader illustration"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#FFB800]">
              Bienvenue sur Espace Livre
            </h1>
            <p className="mt-2 text-gray-400">
              Découvrez une manière simple de lire et partager vos livres tout en bénéficiant
              d&apos;avantages exclusifs.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Entrez votre e-mail"
                className="bg-white/10 border-white/20"
              />
            </div>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Entrez votre mot de passe"
                className="bg-white/10 border-white/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            <div className="text-right">
              <Link href="/forgot-password" className="text-sm text-[#FFB800]">
                Mot de passe oublié ?
              </Link>
            </div>
            <Button className="w-full bg-[#FFB800] hover:bg-[#FFB800]/90">
              Se connecter
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-gray-400">
                Ou continuez avec
              </span>
            </div>
          </div>

                        <Button
                variant="outline"
                className="flex items-center justify-center w-full border border-gray-700 text-white bg-black hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded-md py-2 px-4"
              >
                <Image
                  src="/google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                  className="mr-3"
                />
                <span className="text-sm font-medium">Se connecter avec Google</span>
              </Button>


          <p className="text-center text-sm text-gray-400">
            Vous n&apos;avez pas de compte ?{" "}
            <Link href="/signup" className="text-[#FFB800]">
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

