import { ImageWithFallback } from './figma/ImageWithFallback';
import { timelineData } from '../data/timeline';

export function Timeline() {
  const milestones = timelineData.milestones;

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {milestones.map((milestone, index) => (
        <div 
          key={index}
          className="bg-white border-2 border-blue-600 p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="mb-4">
            <ImageWithFallback 
              src={milestone.image}
              alt={milestone.title}
              className="w-full h-48 object-cover bg-gray-200"
            />
          </div>
          <h3 className="mb-2 tracking-wide">{milestone.title}</h3>
          <div className="border-t border-gray-300 pt-2 mb-3">
            <span className="text-gray-500">{milestone.date}</span>
          </div>
          <p className="text-gray-600 text-sm">{milestone.description}</p>
        </div>
      ))}
    </section>
  );
}
