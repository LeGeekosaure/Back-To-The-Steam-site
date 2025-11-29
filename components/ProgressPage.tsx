import { Calendar, CheckCircle, Clock, Circle } from 'lucide-react';
import { progressData } from '../data/progress';

interface TimelineItem {
  id: number;
  titre: string;
  description: string;
  date: string;
  pourcentage: number;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export function ProgressPage() {
  const timelineItems: TimelineItem[] = progressData.timelineItems;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-6 h-6 text-blue-500" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 border-green-500';
      case 'in-progress':
        return 'bg-blue-100 border-blue-500';
      default:
        return 'bg-gray-50 border-gray-300';
    }
  };

  const getProgressColor = (pourcentage: number) => {
    if (pourcentage === 100) return 'bg-green-500';
    if (pourcentage >= 50) return 'bg-blue-500';
    if (pourcentage > 0) return 'bg-yellow-500';
    return 'bg-gray-300';
  };

  // Statistiques globales
  const totalItems = timelineItems.length;
  const completedItems = timelineItems.filter(item => item.status === 'completed').length;
  const inProgressItems = timelineItems.filter(item => item.status === 'in-progress').length;
  const averageProgress = Math.round(
    timelineItems.reduce((sum, item) => sum + item.pourcentage, 0) / totalItems
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl">Avancement</h1>
          <p className="text-xl text-gray-300">
            Suivez l'évolution du projet Back to the Steam
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-2">{averageProgress}%</div>
            <div className="text-gray-600">Avancement Global</div>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow-lg text-center border-2 border-green-200">
            <div className="text-4xl text-green-600 mb-2">{completedItems}</div>
            <div className="text-gray-700">Étapes Complétées</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow-lg text-center border-2 border-blue-200">
            <div className="text-4xl text-blue-600 mb-2">{inProgressItems}</div>
            <div className="text-gray-700">En Cours</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg text-center border-2 border-gray-200">
            <div className="text-4xl text-gray-600 mb-2">{totalItems}</div>
            <div className="text-gray-700">Étapes Totales</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {timelineItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative bg-white rounded-xl shadow-lg p-6 border-l-4 ${getStatusColor(item.status)} transition-all hover:shadow-xl`}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {getStatusIcon(item.status)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-3">
                    <div className="flex-1">
                      <h3 className="text-2xl mb-2">{item.titre}</h3>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl mb-1">{item.pourcentage}%</div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        item.status === 'completed' ? 'bg-green-100 text-green-700' :
                        item.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {item.status === 'completed' ? 'Complété' :
                         item.status === 'in-progress' ? 'En cours' :
                         'À venir'}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    {item.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${getProgressColor(item.pourcentage)} transition-all duration-500 rounded-full`}
                      style={{ width: `${item.pourcentage}%` }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Connector line */}
              {index < timelineItems.length - 1 && (
                <div className="absolute left-[34px] top-full h-6 w-0.5 bg-gray-300" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl mb-4">Nous avançons ensemble</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Chaque étape franchie nous rapproche de notre objectif : présenter un projet 
            exceptionnel qui allie esthétique, ingénierie et passion. Restez connectés pour 
            suivre nos prochaines avancées !
          </p>
        </div>
      </section>
    </div>
  );
}
