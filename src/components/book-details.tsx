import { ScrollText } from 'lucide-react'

export function BookDetails() {
  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <ScrollText className="h-6 w-6 text-[#FFB800]" />
        <h2 className="text-xl font-semibold text-[#FFB800]">Description</h2>
      </div>
      
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-1000">
          Mahagama Sekara was a legendary poet of the 20th century in Sri Lanka. He was 
          born on 7th April 1929 in Kadawana, Colombo, Sri Lanka. He was the only child of 
          Maha Gamage Jhon Appuhami (father) and Ranawaka Arachchige Rosalin (mother).
        </p>
        <p className="text-gray-1000 mt-4">
          Mahagama Sekara was also known as a great Sri Lankan novelist, translator, artist, 
          playwright, lyricist, filmmaker, philosopher and teacher. Tunmanhandiya is a Sinhala 
          film directed by Mr. Mahagama Sekara [1] and released in Sri Lanka in 1977. The text 
          of the story is based around the life of Abiline ( Joe Abeyekrama ) a vitra artist 
          living in a small village, and his son-in-law Sirisena (Kumara Babasuriya Karunaratne 
          Ranasinghe).
        </p>
        <p className="text-gray-1000 mt-4">
          Abiline is an aimless, alcoholic and in debt. He gets into arguments with his brother 
          (Dharmasisa Kuruppu) and other villagers, and then decides to get a job with a rich 
          landowner (A.P. Gunaratne). In the meantime, on the encouragement of his uncle, 
          Sirisena enrolled in art school and improved his abilities. There he hopes to show 
          off his skills to his uncle, Abilene.
        </p>
      </div>
    </div>
  )
}

