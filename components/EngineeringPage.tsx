import { ImageWithFallback } from './figma/ImageWithFallback';
import { Cog, Wind, Wrench, Zap } from 'lucide-react';

export function EngineeringPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl">Ingénierie</h1>
          <p className="text-xl text-gray-300">
            La rigueur technique au service d'une vision audacieuse
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-700 leading-relaxed">
            Notre approche technique fusionne esthétique rétrofuturiste et ingénierie moderne. Chaque composant est pensé pour allier performance, fiabilité et cohérence avec notre identité visuelle unique.
          </p>
        </div>

        {/* Technical Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
              <Cog className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl">Mécanique</h3>
            <p className="text-gray-600">
              Conception robuste et précise des systèmes de transmission et de propulsion
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
              <Wind className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl">Aérodynamique</h3>
            <p className="text-gray-600">
              Optimisation des flux d'air pour maximiser la vitesse et la stabilité
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full">
              <Wrench className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl">Fabrication</h3>
            <p className="text-gray-600">
              Techniques modernes incluant l'impression 3D et l'usinage de précision
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full">
              <Zap className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl">Innovation</h3>
            <p className="text-gray-600">
              Solutions créatives pour repousser les limites de la performance
            </p>
          </div>
        </div>

        {/* Mechanical Design */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1727522974614-b592018e49e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmclMjBibHVlcHJpbnRzfGVufDF8fHx8MTc2NDE1NzI5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Engineering Design"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="order-1 md:order-2 space-y-4">
            <h2 className="text-4xl">Conception Mécanique</h2>
            <p className="text-gray-700">
              Notre système mécanique est conçu pour offrir un équilibre optimal entre légèreté, robustesse et efficacité. Chaque pièce est étudiée pour minimiser les frottements et maximiser la transmission de puissance.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">▸</span>
                <span>Châssis optimisé pour un rapport poids/rigidité exceptionnel</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">▸</span>
                <span>Transmission efficace avec un minimum de pertes énergétiques</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">▸</span>
                <span>Composants soigneusement sélectionnés pour leur fiabilité</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Aerodynamics */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl">Aérodynamique</h2>
            <p className="text-gray-700">
              L'aérodynamique est au cœur de notre conception. Inspirés par les formes arrondies des locomotives à vapeur, nous avons développé une carrosserie qui minimise la traînée tout en conservant notre identité visuelle rétrofuturiste.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">▸</span>
                <span>Profil étudié pour réduire la résistance à l'air</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">▸</span>
                <span>Gestion des flux d'air autour et à travers le véhicule</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">▸</span>
                <span>Design qui allie esthétique et performance aérodynamique</span>
              </li>
            </ul>
          </div>
          <div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1760012827122-2b467fa76d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJvZHluYW1pYyUyMGRlc2lnbnxlbnwxfHx8fDE3NjQxNTcyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Aerodynamic Design"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Technical Approach */}
        <div className="bg-gray-100 rounded-xl p-8 md:p-12">
          <h2 className="text-3xl mb-8 text-center">Notre Approche Technique</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl text-blue-600">Recherche & Développement</h3>
              <p className="text-gray-700">
                Phase d'étude approfondie incluant la recherche de solutions techniques, l'analyse comparative et la modélisation des différents systèmes.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl text-green-600">Prototypage</h3>
              <p className="text-gray-700">
                Création de prototypes pour tester et valider nos concepts avant la production finale. Utilisation de l'impression 3D et d'autres techniques modernes.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl text-purple-600">Tests & Optimisation</h3>
              <p className="text-gray-700">
                Cycles de tests rigoureux pour identifier les points d'amélioration et optimiser chaque aspect de la performance du véhicule.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl text-orange-600">Fabrication Finale</h3>
              <p className="text-gray-700">
                Production des composants définitifs avec une attention particulière aux détails, à la qualité et à la cohérence esthétique.
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Tools */}
        <div className="mt-16">
          <h2 className="text-3xl mb-8 text-center">Compétences & Outils</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-4">Conception 3D</h3>
              <p className="text-gray-600 mb-3">Modélisation et simulation de nos systèmes pour garantir leur efficacité</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">CAO</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Simulation</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-4">Fabrication</h3>
              <p className="text-gray-600 mb-3">Techniques modernes pour donner vie à nos conceptions</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Impression 3D</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Usinage</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl mb-4">Électronique</h3>
              <p className="text-gray-600 mb-3">Systèmes embarqués et composants électroniques</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">ESP8266</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Capteurs</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
