# Library Management

Petit projet Angular utilisé comme support pédagogique pour l'apprentissage des tests unitaires.

## Compatibilité

Cette version du projet a été adaptée pour fonctionner avec :

- Angular 20.3
- Node.js 20.19.0 ou supérieur compatible avec Angular 20
- TypeScript 5.9
- Vitest 3.2.7

## Installation

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

Le projet utilise Vitest 3.2.7 avec le builder de tests Angular 20.

```bash
npm test
```

## Important pour l'exercice

Le service de gestion des livres et les formulaires contiennent volontairement plusieurs comportements incorrects ou validations manquantes.

Ces défauts font partie de l'exercice et doivent être mis en évidence par les tests avant d'être corrigés.
