import { useState } from 'react';
import { Plus, Edit2, Trash2, X, Save } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  reponse: string;
  categorie: string;
  ordre: number;
}

export function AdminFAQPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState<FAQItem | null>(null);
  
  const [formData, setFormData] = useState({
    question: '',
    reponse: '',
    categorie: 'Projet'
  });

  const categories = ['Projet', 'Technique', 'Équipe', 'Partenaires', 'Compétition'];

  const [faqList, setFaqList] = useState<FAQItem[]>([
    {
      id: 1,
      question: 'Qu\'est-ce que Back to the Steam ?',
      reponse: 'Back to the Steam est notre projet pour la compétition Course en Cours 2024-2025.',
      categorie: 'Projet',
      ordre: 1
    },
    {
      id: 2,
      question: 'Qu\'est-ce que Course en Cours ?',
      reponse: 'Course en Cours est un dispositif pédagogique innovant qui propose aux collégiens et lycéens de créer une mini entreprise sportive.',
      categorie: 'Compétition',
      ordre: 2
    },
    {
      id: 3,
      question: 'Pourquoi le thème de la locomotive à vapeur ?',
      reponse: 'La locomotive 141R représente l\'apogée de l\'ingénierie mécanique du XXe siècle.',
      categorie: 'Projet',
      ordre: 3
    }
  ]);

  const openAddModal = () => {
    setFormData({ question: '', reponse: '', categorie: 'Projet' });
    setIsAddModalOpen(true);
  };

  const openEditModal = (faq: FAQItem) => {
    setSelectedFAQ(faq);
    setFormData({
      question: faq.question,
      reponse: faq.reponse,
      categorie: faq.categorie
    });
    setIsEditModalOpen(true);
  };

  const closeModals = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedFAQ(null);
    setFormData({ question: '', reponse: '', categorie: 'Projet' });
  };

  const handleAdd = () => {
    const newFAQ: FAQItem = {
      id: Math.max(...faqList.map(f => f.id)) + 1,
      question: formData.question,
      reponse: formData.reponse,
      categorie: formData.categorie,
      ordre: faqList.length + 1
    };
    setFaqList([...faqList, newFAQ]);
    closeModals();
  };

  const handleUpdate = () => {
    if (selectedFAQ) {
      setFaqList(faqList.map(faq => 
        faq.id === selectedFAQ.id 
          ? { ...faq, question: formData.question, reponse: formData.reponse, categorie: formData.categorie }
          : faq
      ));
      closeModals();
    }
  };

  const handleDelete = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette question ?')) {
      setFaqList(faqList.filter(faq => faq.id !== id));
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ backgroundColor: '#0F1218' }}>
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-4xl mb-2" style={{ 
              color: '#C97B32',
              fontFamily: 'Orbitron, sans-serif'
            }}>
              Admin FAQ
            </h1>
            <p style={{ color: '#EAEAEA' }}>
              Gestion des questions fréquentes
            </p>
          </div>
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:opacity-90"
            style={{
              backgroundColor: '#C97B32',
              color: '#0F1218'
            }}
          >
            <Plus className="w-5 h-5" />
            Ajouter une question
          </button>
        </div>
      </div>

      {/* Table - Desktop */}
      <div className="max-w-7xl mx-auto hidden md:block">
        <div className="rounded-xl overflow-hidden" style={{
          backgroundColor: '#1a1f2e',
          border: '1px solid #7393CE'
        }}>
          <table className="w-full">
            <thead>
              <tr style={{ 
                backgroundColor: 'rgba(201, 123, 50, 0.1)',
                borderBottom: '1px solid #C97B32'
              }}>
                <th className="px-6 py-4 text-left" style={{ color: '#C97B32' }}>Question</th>
                <th className="px-6 py-4 text-left" style={{ color: '#C97B32' }}>Catégorie</th>
                <th className="px-6 py-4 text-center" style={{ color: '#C97B32' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {faqList.map((faq, index) => (
                <tr 
                  key={faq.id}
                  style={{
                    borderBottom: index < faqList.length - 1 ? '1px solid #7393CE' : 'none'
                  }}
                >
                  <td className="px-6 py-4" style={{ color: '#EAEAEA' }}>
                    {faq.question}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-sm" style={{
                      backgroundColor: '#7393CE',
                      color: '#0F1218'
                    }}>
                      {faq.categorie}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => openEditModal(faq)}
                        className="p-2 rounded-lg transition-all hover:opacity-80"
                        style={{
                          backgroundColor: '#7393CE',
                          color: '#0F1218'
                        }}
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(faq.id)}
                        className="p-2 rounded-lg transition-all hover:opacity-80"
                        style={{
                          backgroundColor: '#d9534f',
                          color: '#EAEAEA'
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cards - Mobile */}
      <div className="max-w-7xl mx-auto md:hidden space-y-4">
        {faqList.map(faq => (
          <div
            key={faq.id}
            className="rounded-lg p-4"
            style={{
              backgroundColor: '#1a1f2e',
              border: '1px solid #7393CE'
            }}
          >
            <div className="mb-3">
              <span className="px-3 py-1 rounded-full text-xs" style={{
                backgroundColor: '#7393CE',
                color: '#0F1218'
              }}>
                {faq.categorie}
              </span>
            </div>
            <h3 className="mb-4" style={{ color: '#EAEAEA' }}>
              {faq.question}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => openEditModal(faq)}
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all"
                style={{
                  backgroundColor: '#7393CE',
                  color: '#0F1218'
                }}
              >
                <Edit2 className="w-4 h-4" />
                Modifier
              </button>
              <button
                onClick={() => handleDelete(faq.id)}
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all"
                style={{
                  backgroundColor: '#d9534f',
                  color: '#EAEAEA'
                }}
              >
                <Trash2 className="w-4 h-4" />
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-2xl rounded-xl p-6 md:p-8" style={{
            backgroundColor: '#1a1f2e',
            border: '2px solid #C97B32',
            boxShadow: '0 8px 40px rgba(201, 123, 50, 0.3)'
          }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl" style={{ 
                color: '#C97B32',
                fontFamily: 'Orbitron, sans-serif'
              }}>
                Ajouter une question
              </h2>
              <button
                onClick={closeModals}
                className="p-2 rounded-lg transition-all hover:opacity-80"
                style={{ backgroundColor: 'rgba(201, 123, 50, 0.2)' }}
              >
                <X className="w-5 h-5" style={{ color: '#C97B32' }} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-2" style={{ color: '#EAEAEA' }}>
                  Question
                </label>
                <input
                  type="text"
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg outline-none"
                  style={{
                    backgroundColor: '#0F1218',
                    color: '#EAEAEA',
                    border: '1px solid #7393CE'
                  }}
                  placeholder="Entrez la question..."
                />
              </div>

              <div>
                <label className="block mb-2" style={{ color: '#EAEAEA' }}>
                  Réponse
                </label>
                <textarea
                  value={formData.reponse}
                  onChange={(e) => setFormData({ ...formData, reponse: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg outline-none resize-none"
                  style={{
                    backgroundColor: '#0F1218',
                    color: '#EAEAEA',
                    border: '1px solid #7393CE'
                  }}
                  placeholder="Entrez la réponse..."
                />
              </div>

              <div>
                <label className="block mb-2" style={{ color: '#EAEAEA' }}>
                  Catégorie
                </label>
                <select
                  value={formData.categorie}
                  onChange={(e) => setFormData({ ...formData, categorie: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg outline-none"
                  style={{
                    backgroundColor: '#0F1218',
                    color: '#EAEAEA',
                    border: '1px solid #7393CE'
                  }}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleAdd}
                disabled={!formData.question || !formData.reponse}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: '#C97B32',
                  color: '#0F1218'
                }}
              >
                <Save className="w-5 h-5" />
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-2xl rounded-xl p-6 md:p-8" style={{
            backgroundColor: '#1a1f2e',
            border: '2px solid #C97B32',
            boxShadow: '0 8px 40px rgba(201, 123, 50, 0.3)'
          }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl" style={{ 
                color: '#C97B32',
                fontFamily: 'Orbitron, sans-serif'
              }}>
                Modifier une question
              </h2>
              <button
                onClick={closeModals}
                className="p-2 rounded-lg transition-all hover:opacity-80"
                style={{ backgroundColor: 'rgba(201, 123, 50, 0.2)' }}
              >
                <X className="w-5 h-5" style={{ color: '#C97B32' }} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-2" style={{ color: '#EAEAEA' }}>
                  Question
                </label>
                <input
                  type="text"
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg outline-none"
                  style={{
                    backgroundColor: '#0F1218',
                    color: '#EAEAEA',
                    border: '1px solid #7393CE'
                  }}
                />
              </div>

              <div>
                <label className="block mb-2" style={{ color: '#EAEAEA' }}>
                  Réponse
                </label>
                <textarea
                  value={formData.reponse}
                  onChange={(e) => setFormData({ ...formData, reponse: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg outline-none resize-none"
                  style={{
                    backgroundColor: '#0F1218',
                    color: '#EAEAEA',
                    border: '1px solid #7393CE'
                  }}
                />
              </div>

              <div>
                <label className="block mb-2" style={{ color: '#EAEAEA' }}>
                  Catégorie
                </label>
                <select
                  value={formData.categorie}
                  onChange={(e) => setFormData({ ...formData, categorie: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg outline-none"
                  style={{
                    backgroundColor: '#0F1218',
                    color: '#EAEAEA',
                    border: '1px solid #7393CE'
                  }}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleUpdate}
                disabled={!formData.question || !formData.reponse}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: '#C97B32',
                  color: '#0F1218'
                }}
              >
                <Save className="w-5 h-5" />
                Mettre à jour
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
