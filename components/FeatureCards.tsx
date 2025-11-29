import { Lightbulb, Pencil, Settings } from 'lucide-react';

export function FeatureCards() {
  const features = [
    {
      icon: Lightbulb,
      title: 'VISION',
      description: 'Réinventer le transport ferroviaire avec une approche écologique et moderne de la propulsion à vapeur.'
    },
    {
      icon: Pencil,
      title: 'DESIGN',
      description: 'Conception innovante alliant esthétique rétro-futuriste et performance aérodynamique optimale.'
    },
    {
      icon: Settings,
      title: 'ENGINEERING',
      description: 'Ingénierie de pointe pour maximiser l\'efficacité énergétique et réduire les émissions.'
    }
  ];

  return (
    <section id="workshop" className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div 
            key={index}
            className="bg-white border-2 border-blue-600 p-8 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <Icon className="w-16 h-16 mx-auto mb-4 text-blue-600 stroke-[1.5]" />
            <h3 className="mb-4 tracking-wider">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        );
      })}
    </section>
  );
}
