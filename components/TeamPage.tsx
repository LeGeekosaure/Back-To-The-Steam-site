import { ImageWithFallback } from './figma/ImageWithFallback';

export function TeamPage() {
  const teamMembers = [
    {
      name: 'Enzo Lombard',
      role: 'Chef de Projet',
      description: 'Coordination de l\'équipe et gestion globale du projet',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Molly Speitel',
      role: 'Community Manager',
      description: 'Responsable de la communication et des réseaux sociaux',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      name: 'Manon Wagner-Marschall',
      role: 'Comptable',
      description: 'Gestion financière et budget du projet',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    },
    {
      name: 'Mathéo Henry',
      role: 'Responsable Stand',
      description: 'Conception et gestion du stand de présentation',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      name: 'Alexandre Schoetel',
      role: 'Ingénierie',
      description: 'Conception technique et développement du véhicule',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl mb-4 tracking-wide">NOTRE ÉQUIPE</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Une équipe pluridisciplinaire d'experts passionnés par l'innovation et l'ingénierie de pointe
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className="bg-white border-2 border-blue-600 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <ImageWithFallback 
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="mb-2">{member.name}</h3>
              <div className="text-blue-600 mb-4 tracking-wider text-sm">
                {member.role}
              </div>
              <p className="text-gray-600 text-sm">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}