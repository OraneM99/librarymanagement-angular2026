# Library Management

Petit projet Angular 22 utilisé comme support pédagogique pour l'apprentissage des tests unitaires.

## Prérequis

Le projet cible Angular 22 et nécessite une version de Node compatible. Un fichier `.nvmrc` est fourni :

```bash
nvm use
```

Lors du premier clonage, installe les dépendances :

```bash
npm install
```

Puis démarre l'application :

```bash
npm start
```

L'application est disponible sur `http://localhost:4200`.

## Tests unitaires

Angular 22 utilise Vitest par défaut pour les nouveaux projets.

```bash
npm test
```

Pour une exécution unique, adaptée à la CI :

```bash
npm run test:ci
```

Pour générer la couverture :

```bash
npm run test:coverage
```

## Important pour l'exercice

Le service de gestion des livres et les formulaires contiennent volontairement plusieurs comportements incorrects ou validations manquantes. Ils ne doivent pas être considérés comme des exemples de logique métier finalisée : ces défauts font partie de l'exercice et doivent être mis en évidence par les tests avant d'être corrigés.
