// Fichier de configuration du planning détaillé - Page Avancement
// Vous pouvez modifier ici :
// - titre : le nom de l'étape
// - description : détails sur l'étape
// - date : période de réalisation
// - pourcentage : avancement de 0 à 100
// - status : "completed" (terminé), "in-progress" (en cours), "upcoming" (à venir)

export const progressData = {
  timelineItems: [
    {
      id: 1,
      titre: "Constitution de l'équipe",
      description:
        "Formation de l'équipe Back to the Steam et répartition des rôles : chef de projet, community manager, comptable, responsable stand et ingénierie.",
      date: "Septembre 2024",
      pourcentage: 100,
      status: "completed",
    },
    {
      id: 2,
      titre: "Conception du logo et identité visuelle",
      description:
        "Création du logo rétrofuturiste inspiré de la 141R. Développement de la charte graphique complète avec couleurs dégradées orange/bleu.",
      date: "Octobre 2024",
      pourcentage: 100,
      status: "completed",
    },
    {
      id: 3,
      titre: "Recherche et concept véhicule",
      description:
        "Phase de recherche approfondie sur l'esthétique steampunk et la locomotive 141R. Élaboration des premiers dessins et concepts du véhicule.",
      date: "Novembre 2024",
      pourcentage: 100,
      status: "completed",
    },
    {
      id: 4,
      titre: "Conception technique",
      description:
        "Travail sur la mécanique, l'aérodynamique et le design extérieur. Modélisation 3D des composants principaux.",
      date: "Décembre 2024 - Janvier 2025",
      pourcentage: 85,
      status: "in-progress",
    },
    {
      id: 5,
      titre: "Développement du site web",
      description:
        "Création du site web professionnel avec maquettes Figma. Pages pour présenter le projet, l'équipe, les sponsors et l'avancement.",
      date: "Novembre 2024 - En cours",
      pourcentage: 90,
      status: "in-progress",
    },
    {
      id: 6,
      titre: "Prototypage et impression 3D",
      description:
        "Fabrication des premiers prototypes avec impression 3D. Tests des pièces et ajustements techniques.",
      date: "Janvier 2025",
      pourcentage: 60,
      status: "in-progress",
    },
    {
      id: 7,
      titre: "Communication et réseaux sociaux",
      description:
        "Lancement de la communication sur Instagram. Création de contenu photos et vidéos pour présenter le projet.",
      date: "Décembre 2024 - En cours",
      pourcentage: 75,
      status: "in-progress",
    },
    {
      id: 8,
      titre: "Recherche de sponsors",
      description:
        "Préparation des dossiers de sponsoring et prise de contact avec les entreprises locales de Colmar et environs.",
      date: "Janvier 2025",
      pourcentage: 40,
      status: "in-progress",
    },
    {
      id: 9,
      titre: "Conception du stand",
      description:
        "Design et préparation du stand de présentation avec esthétique cohérente au thème vapeur/rétrofuturiste.",
      date: "Février 2025",
      pourcentage: 30,
      status: "in-progress",
    },
    {
      id: 10,
      titre: "Assemblage final du véhicule",
      description:
        "Assemblage des composants finaux, tests de performance et ajustements. Finitions esthétiques.",
      date: "Mars 2025",
      pourcentage: 0,
      status: "upcoming",
    },
    {
      id: 11,
      titre: "Tests et optimisations",
      description:
        "Cycles de tests rigoureux sur piste. Optimisation de la performance et de la fiabilité.",
      date: "Mars - Avril 2025",
      pourcentage: 0,
      status: "upcoming",
    },
    {
      id: 12,
      titre: "Compétition Course en Cours",
      description:
        "Participation à la finale régionale puis nationale de Course en Cours. Présentation du projet devant le jury.",
      date: "Mai 2025",
      pourcentage: 0,
      status: "upcoming",
    },
    {
      id: 13,
      titre: "Remise des trophés",
      description: "Résultats du concours.",
      date: "Mai 2025",
      pourcentage: 0,
      status: "upcoming",
    },
  ],
};