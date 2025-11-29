import { ImageWithFallback } from './figma/ImageWithFallback';
import { Target, Lightbulb, Palette, Cog } from 'lucide-react';

export function ProjectPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl">Le Projet</h1>
          <p className="text-xl text-gray-300">
            Back to the Steam : l'alliance du passé et du futur
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-4xl">Vision</h2>
            </div>
            <p className="text-gray-700 text-lg">
              Notre vision est de démontrer qu'innovation et héritage ne sont pas incompatibles. 
              Nous voulons prouver que la beauté mécanique de l'ère vapeur peut inspirer les 
              technologies de demain.
            </p>
            <p className="text-gray-700">
              Back to the Steam incarne cette philosophie : honorer le passé tout en construisant 
              l'avenir, célébrer l'esthétique intemporelle tout en repoussant les limites techniques.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-gray-700 italic">
                "Un projet qui ne se contente pas de participer à Course en Cours, mais qui raconte 
                une histoire, celle d'une époque révolue qui renaît dans le futur."
              </p>
            </div>
          </div>
          <div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1667149226829-d24fba50b536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhbSUyMGxvY29tb3RpdmUlMjBlbmdpbmV8ZW58MXx8fHwxNzY0MTU3Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Vision"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Inspiration */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1581091212911-f4efc3f71c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGVuZ2luZWVyaW5nJTIwdGVhbXxlbnwxfHx8fDE3NjQyMzIyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Inspiration"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Lightbulb className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-4xl">Inspiration</h2>
            </div>
            <p className="text-gray-700 text-lg">
              Notre inspiration principale vient de la locomotive 141R, symbole d'excellence 
              mécanique et de puissance brute. Cette machine légendaire représente l'apogée 
              de l'ingénierie ferroviaire à vapeur.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-2xl">•</span>
                <div>
                  <h3 className="text-xl mb-2">L'esthétique Steampunk</h3>
                  <p className="text-gray-600">
                    Un univers où mécanismes apparents, laiton poli et vapeur se mêlent 
                    dans une danse visuelle captivante
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-2xl">•</span>
                <div>
                  <h3 className="text-xl mb-2">Back to the Future</h3>
                  <p className="text-gray-600">
                    L'esprit de la saga culte : voyager dans le temps, défier les conventions, 
                    créer l'impossible
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-500 text-2xl">•</span>
                <div>
                  <h3 className="text-xl mb-2">L'ingénierie d'excellence</h3>
                  <p className="text-gray-600">
                    La rigueur technique des grandes réalisations mécaniques du XXe siècle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Concept */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Palette className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-4xl">Concept</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1666235729156-7fc93d7922ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjBkZXNpZ24lMjBza2V0Y2h8ZW58MXx8fHwxNjQyMzIyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Concept Design"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl text-orange-700">Design Rétrofuturiste</h3>
              <p className="text-gray-700">
                Notre véhicule fusionne les lignes massives et élégantes de la 141R avec 
                un aérodynamisme moderne. Chaque courbe, chaque détail raconte l'histoire 
                de la vapeur réinventée.
              </p>
              <p className="text-gray-700">
                La carrosserie intègre des éléments visuels rappelant les locomotives : 
                calandres arrondies, rivets apparents, finitions métalliques qui évoquent 
                le laiton et l'acier poli.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl mb-3 text-orange-600">Identité Visuelle</h4>
              <p className="text-gray-600">
                Logo, couleurs et typographie cohérents sur tous les supports : 
                véhicule, stand, site web, réseaux
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl mb-3 text-orange-600">Storytelling</h4>
              <p className="text-gray-600">
                Chaque élément raconte une histoire, créant une expérience immersive 
                qui captive le public
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl mb-3 text-orange-600">Innovation</h4>
              <p className="text-gray-600">
                Des solutions techniques originales qui repoussent les limites du 
                possible dans notre catégorie
              </p>
            </div>
          </div>
        </div>

        {/* Objectifs Techniques */}
        <div>
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <Cog className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl">Objectifs Techniques</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <h3 className="text-2xl mb-4 text-green-700">Performance</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Optimisation aérodynamique pour minimiser la traînée</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Ratio poids/puissance optimal grâce aux matériaux légers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Transmission efficace avec pertes minimales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Stabilité et tenue de route exceptionnelles</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl mb-4 text-blue-700">Fiabilité</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Conception robuste testée et éprouvée</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Composants de qualité sélectionnés avec soin</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Prototypage et tests rigoureux avant finalisation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Maintenance simplifiée pour les ajustements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <h3 className="text-2xl mb-4 text-purple-700">Innovation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Intégration d'impression 3D pour pièces complexes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Solutions créatives pour les défis techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Capteurs et électronique embarquée (ESP8266)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Design paramétrique et simulation numérique</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
              <h3 className="text-2xl mb-4 text-orange-700">Esthétique</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Cohérence visuelle totale avec notre identité</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Finitions soignées qui reflètent notre professionnalisme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Détails qui racontent l'histoire du projet</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Un véhicule qui marque les esprits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl mb-4">Un projet d'excellence</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Back to the Steam représente bien plus qu'un véhicule de course : c'est un manifeste, 
            une vision, une aventure humaine et technique exceptionnelle.
          </p>
        </div>
      </section>
    </div>
  );
}
