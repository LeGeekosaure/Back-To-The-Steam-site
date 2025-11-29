import { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  reponse: string;
  categorie: string;
  ordre: number;
}

export function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const categories = ['Toutes', 'Projet', 'Technique', 'Équipe', 'Partenaires', 'Compétition'];

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: 'Qu\'est-ce que Back to the Steam ?',
      reponse: 'Back to the Steam est notre projet pour la compétition Course en Cours 2024-2025. Nous créons un véhicule miniature avec un design rétrofuturiste inspiré de la locomotive 141R, alliant l\'esthétique steampunk à l\'ingénierie moderne.',
      categorie: 'Projet',
      ordre: 1
    },
    {
      id: 2,
      question: 'Qu\'est-ce que Course en Cours ?',
      reponse: 'Course en Cours est un dispositif pédagogique innovant qui propose aux collégiens et lycéens de créer une mini entreprise sportive. Les équipes conçoivent, fabriquent et font courir un véhicule propulsé par un moteur électrique sur une piste de 20 mètres.',
      categorie: 'Compétition',
      ordre: 2
    },
    {
      id: 3,
      question: 'Pourquoi le thème de la locomotive à vapeur ?',
      reponse: 'La locomotive 141R représente l\'apogée de l\'ingénierie mécanique du XXe siècle. Son esthétique puissante et ses mécanismes apparents nous inspirent. Nous voulons prouver que le passé peut inspirer l\'avenir, en créant un pont entre l\'ère de la vapeur et les technologies modernes.',
      categorie: 'Projet',
      ordre: 3
    },
    {
      id: 4,
      question: 'Quelles technologies utilisez-vous ?',
      reponse: 'Nous utilisons la CAO (SolidWorks), l\'impression 3D pour les pièces complexes, des simulations aérodynamiques, et un microcontrôleur ESP8266 pour la collecte de données. Le châssis est optimisé pour la légèreté et la rigidité.',
      categorie: 'Technique',
      ordre: 4
    },
    {
      id: 5,
      question: 'Comment est composée l\'équipe ?',
      reponse: 'Notre équipe compte 5 membres : Enzo (chef de projet), Molly (community manager), Manon (comptable), Mathéo (responsable stand) et Alexandre (ingénierie). Chacun apporte ses compétences pour mener le projet vers le succès.',
      categorie: 'Équipe',
      ordre: 5
    },
    {
      id: 6,
      question: 'Comment participer en tant que sponsor ?',
      reponse: 'Nous recherchons activement des partenaires financiers, matériels ou techniques. Votre logo apparaîtra sur notre stand, notre site web et nos réseaux sociaux. Contactez-nous à contact@backtothesteam.fr pour discuter des opportunités.',
      categorie: 'Partenaires',
      ordre: 6
    },
    {
      id: 7,
      question: 'Quels sont vos objectifs de performance ?',
      reponse: 'Nos objectifs incluent : optimisation aérodynamique pour minimiser la traînée, ratio poids/puissance optimal, transmission efficace, stabilité exceptionnelle et finitions soignées. Nous visons l\'excellence technique et esthétique.',
      categorie: 'Technique',
      ordre: 7
    },
    {
      id: 8,
      question: 'Où suivre l\'avancement du projet ?',
      reponse: 'Vous pouvez suivre notre progression sur notre site web (page Avancement), sur Instagram pour du contenu exclusif, et bientôt sur d\'autres réseaux sociaux. Nous publions régulièrement des actualités sur nos avancées.',
      categorie: 'Projet',
      ordre: 8
    },
    {
      id: 9,
      question: 'Quand aura lieu la compétition finale ?',
      reponse: 'La finale régionale aura lieu en avril 2025, suivie de la finale nationale en mai 2025 si nous nous qualifions. Les dates exactes seront communiquées ultérieurement.',
      categorie: 'Compétition',
      ordre: 9
    },
    {
      id: 10,
      question: 'Comment nous contacter ?',
      reponse: 'Vous pouvez nous contacter par email à contact@backtothesteam.fr. Nous sommes également actifs sur Instagram. Pour les partenariats, consultez notre page Partenaires pour plus d\'informations.',
      categorie: 'Équipe',
      ordre: 10
    }
  ];

  const filteredFAQ = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'Toutes' || item.categorie === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.reponse.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => a.ordre - b.ordre);

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0F1218' }}>
      {/* Hero Section */}
      <section className="text-white py-20 px-4" style={{ 
        background: 'linear-gradient(135deg, #0F1218 0%, #1a1f2e 100%)'
      }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl" style={{ 
            fontFamily: 'Orbitron, sans-serif',
            color: '#C97B32'
          }}>
            FAQ
          </h1>
          <p className="text-xl" style={{ color: '#EAEAEA' }}>
            Questions fréquentes sur le projet Back to the Steam
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="lg:grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar Categories - Desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-24 rounded-xl p-6" style={{ 
              backgroundColor: '#1a1f2e',
              border: '1px solid #C97B32',
              boxShadow: '0 4px 20px rgba(121, 147, 206, 0.15)'
            }}>
              <h3 className="text-xl mb-4" style={{ 
                color: '#C97B32',
                fontFamily: 'Orbitron, sans-serif'
              }}>
                Catégories
              </h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="w-full text-left px-4 py-3 rounded-lg transition-all"
                    style={{
                      backgroundColor: selectedCategory === cat ? '#C97B32' : 'transparent',
                      color: selectedCategory === cat ? '#0F1218' : '#EAEAEA',
                      border: `1px solid ${selectedCategory === cat ? '#C97B32' : '#7393CE'}`,
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Categories - Mobile (Horizontal Scroll) */}
            <div className="lg:hidden overflow-x-auto pb-4">
              <div className="flex gap-3 min-w-max">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className="px-4 py-2 rounded-lg whitespace-nowrap transition-all text-sm"
                    style={{
                      backgroundColor: selectedCategory === cat ? '#C97B32' : '#1a1f2e',
                      color: selectedCategory === cat ? '#0F1218' : '#EAEAEA',
                      border: `1px solid ${selectedCategory === cat ? '#C97B32' : '#7393CE'}`,
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-4 pl-12 rounded-lg outline-none transition-all"
                style={{
                  backgroundColor: '#1a1f2e',
                  color: '#EAEAEA',
                  border: '1px solid #7393CE',
                }}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#7393CE' }} />
            </div>

            {/* FAQ Accordions */}
            <div className="space-y-4">
              {filteredFAQ.length === 0 ? (
                <div className="text-center py-12 rounded-xl" style={{ 
                  backgroundColor: '#1a1f2e',
                  color: '#EAEAEA'
                }}>
                  <p className="text-xl">Aucune question trouvée</p>
                  <p className="text-sm mt-2" style={{ color: '#7393CE' }}>
                    Essayez avec d'autres mots-clés
                  </p>
                </div>
              ) : (
                filteredFAQ.map(item => (
                  <div
                    key={item.id}
                    className="rounded-lg overflow-hidden transition-all"
                    style={{
                      backgroundColor: '#1a1f2e',
                      border: `1px solid ${openAccordion === item.id ? '#C97B32' : '#7393CE'}`,
                      boxShadow: openAccordion === item.id ? '0 4px 20px rgba(201, 123, 50, 0.3)' : '0 2px 10px rgba(121, 147, 206, 0.1)'
                    }}
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left transition-colors hover:bg-opacity-80"
                      style={{
                        backgroundColor: openAccordion === item.id ? 'rgba(201, 123, 50, 0.1)' : 'transparent'
                      }}
                    >
                      <div className="flex-1">
                        <span className="text-xs px-2 py-1 rounded-full inline-block mb-2" style={{
                          backgroundColor: '#C97B32',
                          color: '#0F1218'
                        }}>
                          {item.categorie}
                        </span>
                        <h3 className="text-lg" style={{ color: '#EAEAEA' }}>
                          {item.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {openAccordion === item.id ? (
                          <ChevronUp className="w-6 h-6" style={{ color: '#C97B32' }} />
                        ) : (
                          <ChevronDown className="w-6 h-6" style={{ color: '#7393CE' }} />
                        )}
                      </div>
                    </button>
                    
                    {openAccordion === item.id && (
                      <div className="px-6 py-4 border-t" style={{ 
                        borderColor: '#C97B32',
                        backgroundColor: 'rgba(201, 123, 50, 0.05)'
                      }}>
                        <p style={{ color: '#EAEAEA', lineHeight: '1.7' }}>
                          {item.reponse}
                        </p>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 rounded-xl p-8 text-center" style={{
              backgroundColor: '#1a1f2e',
              border: '1px solid #C97B32'
            }}>
              <h3 className="text-2xl mb-4" style={{ color: '#C97B32' }}>
                Vous avez d'autres questions ?
              </h3>
              <p className="mb-6" style={{ color: '#EAEAEA' }}>
                N'hésitez pas à nous contacter directement
              </p>
              <a 
                href="mailto:contact@backtothesteam.fr"
                className="inline-block px-6 py-3 rounded-lg transition-all hover:opacity-90"
                style={{
                  backgroundColor: '#C97B32',
                  color: '#0F1218'
                }}
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>

        {/* Admin Access Button */}
        <div className="text-center py-8">
          <button
            onClick={() => window.location.href = '#admin'}
            className="text-xs px-3 py-1 rounded hover:opacity-70 transition-opacity"
            style={{
              color: '#7393CE',
              opacity: 0.5
            }}
          >
            Admin
          </button>
        </div>
      </section>
    </div>
  );
}
