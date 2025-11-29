# Configuration Firebase pour Back to the Steam

## Étape 1 : Créer un projet Firebase

1. Allez sur https://console.firebase.google.com/
2. Cliquez sur "Ajouter un projet"
3. Nommez le projet "back-to-the-steam" (ou autre nom)
4. Suivez les étapes de création

## Étape 2 : Activer Firestore Database

1. Dans le menu de gauche, cliquez sur "Firestore Database"
2. Cliquez sur "Créer une base de données"
3. Choisissez "Commencer en mode production"
4. Sélectionnez un emplacement (europe-west par exemple)

## Étape 3 : Configurer les règles de sécurité

Dans "Firestore Database" > "Règles", remplacez par :

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Lecture publique pour la FAQ
    match /faq/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Étape 4 : Activer l'authentification

1. Dans le menu de gauche, cliquez sur "Authentication"
2. Cliquez sur "Commencer"
3. Activez "Email/Mot de passe"
4. Créez un utilisateur admin :
   - Email : admin@backtothesteam.fr
   - Mot de passe : (choisissez un mot de passe sécurisé)

## Étape 5 : Récupérer la configuration

1. Cliquez sur l'icône d'engrenage ⚙️ > Paramètres du projet
2. Descendez jusqu'à "Vos applications"
3. Cliquez sur l'icône web "</>"
4. Copiez la configuration `firebaseConfig`

## Étape 6 : Mettre à jour le fichier de configuration

Ouvrez `/firebase/config.ts` et remplacez les valeurs par votre configuration Firebase.

## Étape 7 : Initialiser les données FAQ

Une fois connecté à la page Admin, utilisez l'interface pour créer vos premières questions FAQ.

## Structure de la collection Firestore

Collection : `faq`
Document ID : auto-généré
Champs :
- `question` : string
- `reponse` : string
- `categorie` : string
- `ordre` : number
- `createdAt` : timestamp
- `updatedAt` : timestamp

## Connexion Admin

URL : votre-site.com#admin
Login avec l'email et mot de passe créés à l'étape 4.

---

Pour toute question, consultez la documentation Firebase : https://firebase.google.com/docs
