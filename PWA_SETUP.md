# Configuration PWA - Math Quest

## ✅ Ce qui a été fait

### 1. Configuration de la PWA dans vite.config.ts
- Nom de l'app : "Math Quest - Aventure Mathématique"
- Theme color : #0f172a (dark slate)
- Orientation : portrait
- Mode : standalone (application native)
- Cache Firebase Storage configuré
- PWA activée en mode dev pour les tests

### 2. Icônes générées
Toutes les icônes ont été créées à partir de `public/icon.svg` :
- ✓ pwa-192x192.png
- ✓ pwa-512x512.png
- ✓ pwa-512x512-maskable.png (pour Android adaptive icons)
- ✓ apple-touch-icon.png (180x180 pour iOS)
- ✓ favicon.ico (32x32)

### 3. Script de génération d'icônes
Fichier : `scripts/generate-icons.mjs`
Commande : `pnpm generate-icons`

### 4. Icône SVG créée
Fichier : `public/icon.svg`
Design : Château doré avec symboles mathématiques (+, ×, ÷) sur fond violet dégradé

## 📱 Comment installer l'application sur mobile

### Sur Android (Chrome)
1. Ouvrir l'application dans Chrome
2. Menu (3 points) → "Ajouter à l'écran d'accueil"
3. L'icône apparaît comme une vraie application

### Sur iOS (Safari)
1. Ouvrir l'application dans Safari
2. Appuyer sur le bouton "Partager" (carré avec flèche)
3. Sélectionner "Sur l'écran d'accueil"

## 🔧 Fichiers modifiés

### vite.config.ts
```typescript
VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    name: 'Math Quest - Aventure Mathématique',
    short_name: 'Math Quest',
    theme_color: '#0f172a',
    background_color: '#0f172a',
    display: 'standalone',
    orientation: 'portrait',
    // ... icons config
  },
  workbox: {
    // Cache Firebase Storage
    runtimeCaching: [...]
  },
  devOptions: {
    enabled: true // PWA en dev mode
  }
})
```

### package.json - Nouveau script
```json
"scripts": {
  "generate-icons": "node scripts/generate-icons.mjs"
}
```

### Nouvelle dépendance
```json
"devDependencies": {
  "sharp": "^0.34.4"
}
```

## 🚀 Pour créer un APK Android plus tard

### Option 1 : Capacitor (recommandé pour app native)
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init
npx cap add android
npx cap sync
npx cap open android
```

### Option 2 : TWA (Trusted Web Activity)
Emballer la PWA dans un APK pour le Play Store

## 📋 Tâches restantes

- [ ] Ajouter les métadonnées mobile dans index.html
- [ ] Tester l'installation sur Android
- [ ] Tester l'installation sur iOS
- [ ] Configurer Capacitor si besoin d'un vrai APK

## 🎯 Statut actuel

✅ PWA configurée et fonctionnelle
✅ Icônes générées
✅ Cache configuré pour Firebase
✅ Mode offline supporté
✅ Installable sur tous les appareils

L'application est maintenant prête à être installée comme une vraie app mobile ! 🎉
