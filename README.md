# Math Learning App - MVP Phase 1

Application éducative d'apprentissage des mathématiques pour collégiens avec système adaptatif ELO, gamification, et assistance IA via Abacus.AI.

## 🎯 Fonctionnalités

- **Exercices de mathématiques** : Fractions (addition, soustraction, multiplication, division)
- **Système adaptatif ELO** : Ajuste automatiquement la difficulté en fonction du niveau de l'élève
- **Gamification** : Système de points, streaks quotidiens, et suivi de progression
- **Assistance IA** : Explications personnalisées et indices via Abacus.AI
- **Progressive Web App (PWA)** : Installable et fonctionne hors ligne
- **Génération déterministe** : Exercices reproductibles avec seeds

## 🏗️ Architecture

Monorepo Turborepo avec :
- **`packages/core`** : Logique métier partagée (générateurs, solver, adaptivité)
- **`apps/web`** : Application web React avec Vite
- Prêt pour Phase 2 avec app mobile (React Native)

## 📋 Prérequis

- Node.js 18+
- pnpm 8+
- Compte Firebase (pour Auth et Firestore)
- Compte Abacus.AI (pour l'assistance IA)

## 🚀 Installation

### 1. Cloner et installer les dépendances

```bash
cd /home/ubuntu/math-learning-app
pnpm install
```

### 2. Configuration Firebase

1. Créer un projet Firebase sur [console.firebase.google.com](https://console.firebase.google.com)
2. Activer **Authentication** avec Email/Password
3. Créer une base de données **Firestore** en mode test
4. Récupérer les credentials Firebase

### 3. Configuration Abacus.AI

1. Créer un compte sur [abacus.ai](https://abacus.ai)
2. Créer un nouveau projet
3. Récupérer votre API Key et Project ID

### 4. Variables d'environnement

```bash
cp .env.example apps/web/.env
```

Éditer `apps/web/.env` avec vos credentials :

```env
VITE_FIREBASE_API_KEY=votre_api_key
VITE_FIREBASE_AUTH_DOMAIN=votre_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=votre_project_id
VITE_FIREBASE_STORAGE_BUCKET=votre_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=votre_sender_id
VITE_FIREBASE_APP_ID=votre_app_id
VITE_ABACUS_API_KEY=votre_abacus_api_key
VITE_ABACUS_PROJECT_ID=votre_abacus_project_id
```

## 🎮 Commandes

### Développement

```bash
# Lancer l'app web en mode développement
pnpm dev:web

# Lancer tous les projets en mode dev
pnpm dev
```

L'application sera disponible sur http://localhost:3000

### Build

```bash
# Build l'app web
pnpm build:web

# Build tous les projets
pnpm build
```

### Tests

```bash
# Lancer tous les tests
pnpm test

# Tests en mode watch (package core)
cd packages/core
pnpm test:watch
```

### Qualité du code

```bash
# Linter
pnpm lint

# Formatter
pnpm format
```

## 📦 Structure du projet

```
math-learning-app/
├── packages/
│   └── core/                 # Package logique métier
│       ├── src/
│       │   ├── types.ts      # Interfaces TypeScript
│       │   ├── rng.ts        # Générateur pseudo-aléatoire
│       │   ├── generators/   # Générateurs d'exercices
│       │   ├── solver/       # Calcul des solutions
│       │   ├── adaptivity/   # Système ELO et répétition espacée
│       │   ├── analytics/    # Événements analytics
│       │   └── checkers/     # Comparaison de réponses
│       └── __tests__/        # Tests Vitest
├── apps/
│   └── web/                  # Application web
│       ├── src/
│       │   ├── app/routes/   # Pages (Dashboard, Session)
│       │   ├── components/   # Composants React
│       │   ├── lib/          # Firebase, AI, utils
│       │   └── styles/       # CSS Tailwind
│       └── index.html
├── turbo.json                # Configuration Turborepo
├── package.json              # Workspaces pnpm
└── tsconfig.base.json        # Config TypeScript partagée
```

## 🎲 Seeds de démonstration

Le fichier `seeds.json` contient 5 exercices reproductibles :

```json
[
  { "seed": 12345, "difficulty": 2, "type": "add" },
  { "seed": 67890, "difficulty": 3, "type": "subtract" },
  { "seed": 11111, "difficulty": 5, "type": "add" },
  { "seed": 22222, "difficulty": 7, "type": "subtract" },
  { "seed": 99999, "difficulty": 9, "type": "add" }
]
```

Pour générer ces exercices :

```typescript
import { genAddFractions, genSubtractFractions, solveFraction } from '@math-app/core';

const exercise = genAddFractions(12345, 2);
const solution = solveFraction(exercise);
console.log(exercise.question, '=', solution);
```

## 🗄️ Structure Firestore

### Collections

```
users/{uid}
  - profile: { firstName, class }
  - settings: { hintsEnabled, sessionDurationMin }
  
users/{uid}/skills/{skillId}
  - mastery: number (0-100)
  - lastSeen: timestamp
  - nextReview: timestamp
  
users/{uid}/sessions/{sessionId}
  - startedAt: timestamp
  - durationSec: number
  - scoreTotal: number
  
users/{uid}/attempts/{attemptId}
  - skillId: string
  - difficulty: number
  - itemId: string
  - answer: string
  - correct: boolean
  - timeSec: number
  - hintsUsed: number
  - errorType?: string
  - timestamp: timestamp
```

## 🚀 Déploiement

### Vercel (Recommandé)

1. Push le code sur GitHub
2. Connecter le repo sur [vercel.com](https://vercel.com)
3. Configurer les variables d'environnement
4. Build settings :
   - Build Command: `pnpm build:web`
   - Output Directory: `apps/web/dist`
   - Install Command: `pnpm install`

### Netlify

1. Push le code sur GitHub
2. Connecter le repo sur [netlify.com](https://netlify.com)
3. Configurer les variables d'environnement
4. Build settings :
   - Build Command: `pnpm build:web`
   - Publish Directory: `apps/web/dist`

## 🧪 Tests

Les tests couvrent :
- Reproductibilité des générateurs avec seeds
- Exactitude des solutions calculées
- Simplification des fractions
- Comparaison de réponses équivalentes

```bash
cd packages/core
pnpm test
```

## 📱 PWA

L'application est installable en tant que PWA :
- Manifest configuré
- Service Worker pour cache offline
- Icônes 192x192 et 512x512

## 🎨 Design System

- **Tailwind CSS** pour le styling
- **shadcn/ui** pour les composants
- **Framer Motion** pour les animations
- **Recharts** pour les graphiques
- **Lucide React** pour les icônes

## 🔐 Sécurité & Best Practices

- TypeScript strict mode
- ESLint + Prettier configurés
- Husky pre-commit hooks
- Validation des réponses côté client et serveur
- Limitation des appels IA (20/session)
- Cache des réponses IA fréquentes

## 🐛 Troubleshooting

### L'app ne démarre pas

```bash
# Nettoyer node_modules et reinstaller
rm -rf node_modules packages/*/node_modules apps/*/node_modules
pnpm install
```

### Erreurs TypeScript

```bash
# Vérifier les types
pnpm --filter @math-app/core type-check
pnpm --filter web type-check
```

### Tests qui échouent

```bash
# Vérifier les tests du package core
cd packages/core
pnpm test
```

## 📚 Ressources

- [Documentation Turborepo](https://turbo.build/repo/docs)
- [Documentation Firebase](https://firebase.google.com/docs)
- [Documentation Abacus.AI](https://abacus.ai/docs)
- [Documentation Vite](https://vitejs.dev)
- [Documentation React Router](https://reactrouter.com)

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

MIT

## 👥 Équipe

Développé avec ❤️ pour l'apprentissage des mathématiques

---

**Phase 1 MVP** ✅ - App Web  
**Phase 2** 🚧 - App Mobile React Native
