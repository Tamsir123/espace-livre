# Espace Livre - Plateforme de Livres Numériques 📚

![Espace Livre Banner](/public/hero-book.jpg)

## 📖 À Propos du Projet

Espace Livre est une plateforme moderne de partage et de lecture de livres numériques, conçue pour créer une communauté dynamique de lecteurs et d'auteurs. Cette application full-stack utilise les dernières technologies web pour offrir une expérience utilisateur optimale.

### 🎯 Objectifs du Projet

- Permettre aux utilisateurs de publier et partager leurs œuvres littéraires
- Faciliter l'accès à une bibliothèque numérique diversifiée
- Créer une communauté interactive autour de la lecture
- Offrir une expérience de lecture fluide et agréable

### 🌟 Fonctionnalités Principales

#### Utilisateurs
- Inscription et authentification (email + Google OAuth)
- Gestion de profil personnalisé
- Système de favoris et de bibliothèque personnelle

#### Livres
- Upload de livres au format PDF
- Prévisualisation des livres
- Système de catégorisation
- Recherche avancée


### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **État Global**: React Context
- **Authentification**: NextAuth.js
- **Formulaires**: React Hook Form
- **Validation**: Zod


## 📁 Structure du Projet

```tree
espace-livre/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (books)/
│   │   │   ├── [id]/
│   │   │   ├── categories/
│   │   │   └── publier/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   └── books/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── auth/
│   │   │   ├── login-form.tsx
│   │   │   └── register-form.tsx
│   │   ├── books/
│   │   │   ├── book-card.tsx
│   │   │   ├── book-details.tsx
│   │   │   ├── book-grid.tsx
│   │   │   └── book-upload-form.tsx
│   │   ├── common/
│   │   │   ├── footer.tsx
│   │   │   └── navbar.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       └── [autres composants UI]
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── db.ts
│   │   └── utils.ts
│   ├── types/
│   │   └── index.ts
│   └── styles/
│       └── custom.css
├── public/
│   ├── images/
│   └── fonts/
└── [fichiers de configuration]
