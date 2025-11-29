import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';
import { useState } from 'react';

export function PartnersPage() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre intérêt ! Nous vous contacterons très prochainement.');
    setFormData({ company: '', name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl">Partenaires</h1>
          <p className="text-xl text-gray-300">
            Rejoignez l'aventure Back to the Steam
          </p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl mb-6">Pourquoi devenir partenaire ?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Back to the Steam n'est pas qu'un simple projet de course automobile. C'est une aventure humaine, technique et créative qui rassemble passion, innovation et excellence.
              </p>
              <p>
                En nous soutenant, vous associez votre image à un projet unique qui valorise :
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong>L'innovation :</strong> Un concept rétrofuturiste original et audacieux</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong>L'ingénierie :</strong> Des compétences techniques solides et polyvalentes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong>La créativité :</strong> Un design unique qui ne laisse personne indifférent</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span><strong>L'engagement :</strong> Une équipe motivée et professionnelle</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc2NDExODQyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Partnership"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl mb-8 text-center">Avantages pour nos partenaires</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="text-5xl mb-3">📢</div>
              <h3 className="text-xl">Visibilité</h3>
              <p className="text-gray-700">
                Votre logo sur notre stand, notre site web et nos réseaux sociaux
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl mb-3">🤝</div>
              <h3 className="text-xl">Collaboration</h3>
              <p className="text-gray-700">
                Un partenariat authentique avec une équipe engagée et reconnaissante
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="text-5xl mb-3">🎯</div>
              <h3 className="text-xl">Impact Local</h3>
              <p className="text-gray-700">
                Soutien à l'innovation et à l'éducation des jeunes de votre région
              </p>
            </div>
          </div>
        </div>

        {/* Sponsors Section */}
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl mb-8 text-center">Nos Partenaires</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Nous remercions chaleureusement nos partenaires qui nous soutiennent dans cette aventure extraordinaire
          </p>
          
          {/* Sponsors Grid - Ready for logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {/* Placeholder pour les logos des sponsors */}
            <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
              Logo 1
            </div>
            <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
              Logo 2
            </div>
            <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
              Logo 3
            </div>
            <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
              Logo 4
            </div>
            <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
              Logo 5
            </div>
            <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
              Logo 6
            </div>
            <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
              Logo 7
            </div>
            <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400">
              Logo 8
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white rounded-xl p-8 md:p-12">
          <h2 className="text-3xl mb-8 text-center">Nous Contacter</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-2">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl">Email</h3>
              <p className="text-gray-300">contact@backtothesteam.fr</p>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mb-2">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl">Localisation</h3>
              <p className="text-gray-300">Colmar et environs, France</p>
            </div>
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-2">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl">Partenariat</h3>
              <p className="text-gray-300">Financier, matériel, expertise</p>
            </div>
          </div>
          <p className="text-center text-gray-300 mt-8 max-w-2xl mx-auto">
            Intéressé par notre projet ? N'hésitez pas à nous contacter pour discuter des possibilités de partenariat.
          </p>
        </div>
      </section>
    </div>
  );
}