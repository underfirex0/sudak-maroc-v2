# Sudak Maroc — Site Web Officiel

Site web officiel de **SUDAK Maroc**, spécialiste des colles à carrelage et adjuvants pour mortier et béton à Agadir, Maroc.

Construit avec Next.js 14, Tailwind CSS et Framer Motion pour des animations fluides et une expérience utilisateur exceptionnelle.

---

## 🚀 Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev

# 3. Ouvrir http://localhost:3000
```

---

## 📦 Build pour production

```bash
npm run build
npm start
```

---

## 🌐 Déploiement sur Vercel

1. **Pushez le projet sur GitHub** :
   ```bash
   git init
   git add .
   git commit -m "feat: initial Sudak Maroc website"
   git branch -M main
   git remote add origin https://github.com/VOTRE_USERNAME/sudak-maroc.git
   git push -u origin main
   ```

2. **Importez sur Vercel** :
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez "Add New Project"
   - Importez votre repo GitHub
   - Vercel détecte automatiquement Next.js
   - Cliquez "Deploy" ✅

3. **Domaine personnalisé** :
   - Dans Vercel > Settings > Domains
   - Ajoutez `sudakmaroc.com`
   - Configurez vos DNS chez votre registrar

---

## 📝 Configuration du formulaire de contact

Le formulaire utilise [Formspree](https://formspree.io) pour les emails.

1. Créez un compte sur formspree.io
2. Créez un nouveau formulaire
3. Copiez votre Form ID (ex: `xpwzabcd`)
4. Dans `components/Contact.tsx`, remplacez :
   ```
   https://formspree.io/f/contact@sudakmaroc.com
   ```
   par :
   ```
   https://formspree.io/f/VOTRE_FORM_ID
   ```

---

## 📁 Structure du projet

```
sudak-maroc/
├── app/
│   ├── layout.tsx      # Layout racine + fonts Google
│   ├── page.tsx        # Page principale
│   └── globals.css     # Styles globaux
├── components/
│   ├── Navbar.tsx      # Navigation sticky + mobile
│   ├── Hero.tsx        # Section héro plein écran
│   ├── Stats.tsx       # Compteurs animés + marquee
│   ├── About.tsx       # Histoire de l'entreprise
│   ├── Products.tsx    # Grille des 6 produits
│   ├── WhySudak.tsx    # 4 raisons de choisir Sudak
│   ├── Sectors.tsx     # Secteurs + processus
│   ├── Contact.tsx     # Formulaire + infos contact
│   └── Footer.tsx      # Pied de page complet
├── public/
│   ├── logo.webp       # Logo Sudak Maroc
│   └── factory.webp    # Photo usine Agadir
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🎨 Stack technique

| Technologie | Usage |
|-------------|-------|
| **Next.js 14** | Framework React avec App Router |
| **TypeScript** | Typage statique |
| **Tailwind CSS** | Styles utilitaires |
| **Framer Motion** | Animations et transitions |
| **Lucide React** | Icônes |
| **Google Fonts** | Bebas Neue + Outfit |

---

## 📞 Contact

- **Email** : contact@sudakmaroc.com
- **Tél** : +212 5 28 24 52 67
- **Adresse** : Route Takad, Agadir 80000, Maroc
- **Horaires** : Lun–Ven, 09h00–18h00
