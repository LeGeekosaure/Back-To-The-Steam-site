import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectOverview() {
  return (
    <section className="bg-white border-2 border-gray-300 p-8 md:p-12">
      <div className="mb-8">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1681719322999-d083e496f1f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhbSUyMGxvY29tb3RpdmUlMjB0cmFpbnxlbnwxfHx8fDE3NjQxNTIxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Steam locomotive"
          className="w-full h-96 object-cover"
        />
      </div>
      
      <div className="border-t-4 border-gray-800 pt-6 mb-8">
        <h2 className="text-3xl md:text-4xl tracking-wide">
          BACK TO THE STEAM
        </h2>
        <p className="text-xl text-gray-600 mt-4">
          Une équipe qui mêle esthétique rétrofuturiste, rigueur d'ingénierie, design soigné et storytelling unique
        </p>
      </div>
      
      <div className="space-y-6 text-gray-700">
        <p>
          Back to the Steam est bien plus qu'un projet de course automobile : c'est un manifeste qui fusionne 
          l'esthétique steampunk moderne avec une ingénierie solide et rigoureuse. Notre véhicule s'inspire 
          de l'emblématique locomotive 141R pour créer une identité visuelle unique et inoubliable.
        </p>
        
        <p>
          Nous croyons qu'on peut honorer le passé tout en construisant l'avenir, que la beauté mécanique 
          n'est pas morte, et que l'innovation commence par rêver différemment. C'est l'esprit de 
          "Back to the Future", propulsé par la vapeur et la passion.
        </p>
        
        <p>
          Notre équipe pluridisciplinaire combine communication maîtrisée, gestion financière rigoureuse, 
          conception technique de pointe et présentation professionnelle. Ensemble, nous donnons vie à un 
          concept rétrofuturiste qui captive et inspire.
        </p>
      </div>
    </section>
  );
}