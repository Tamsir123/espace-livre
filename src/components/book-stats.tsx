export function BookStats() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div className="flex-1">
            <div className="relative">
              <img
                src="/Rectangle 21.png"
                alt="Books on shelf"
                className="w-full rounded-lg"
              />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-[#FFB800]">
                  FIND MAGIC WITHIN THE PAGES
                </h3>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Vos lectures <span className="text-[#FFB800]">préférées</span> sont ici !
              </h2>
              <p className="text-gray-300">
                Lisez et partagez vos livres préférés en ligne en toute simplicité ! 
                Explorez un monde d&apos;histoires et d&apos;idées tout en vous connectant 
                avec d&apos;autres lecteurs. Plongez dans notre collection et publiez 
                vos propres œuvres pour inspirer les autres. Commencez votre 
                aventure littéraire dès aujourd&apos;hui et découvrez le plaisir de lire 
                et de créer !
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-bold text-[#FFB800]">800+</p>
                <p className="text-sm text-gray-400">Liste de Livres</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#FFB800]">1K+</p>
                <p className="text-sm text-gray-400">Registered Members</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-[#FFB800]">50+</p>
                <p className="text-sm text-gray-400">Branch Count</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

