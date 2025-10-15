# 📱 Installer Math Quest sur votre téléphone

## 🎉 Votre application est maintenant une PWA (Progressive Web App) !

Cela signifie que vous pouvez l'installer comme une vraie application sur votre téléphone, sans passer par Google Play Store ou App Store.

---

## 📲 Installation sur Android

### Méthode 1 : Via Chrome (recommandé)

1. **Ouvrez l'application** dans Google Chrome sur votre téléphone
2. Attendez quelques secondes, une bannière apparaîtra en bas de l'écran : **"Ajouter Math Quest à l'écran d'accueil"**
3. Appuyez sur **"Ajouter"**
4. L'application s'installe automatiquement !

### Méthode 2 : Menu Chrome

1. Ouvrez l'application dans Chrome
2. Appuyez sur le menu **⋮** (3 points verticaux) en haut à droite
3. Sélectionnez **"Ajouter à l'écran d'accueil"**
4. Confirmez en appuyant sur **"Ajouter"**

✅ **Résultat** : Une icône "Math Quest" apparaît sur votre écran d'accueil, comme une vraie application !

---

## 🍎 Installation sur iPhone/iPad

### Via Safari

1. **Ouvrez l'application** dans Safari (pas Chrome !)
2. Appuyez sur le bouton **Partager** en bas de l'écran (carré avec une flèche vers le haut ⬆️)
3. Faites défiler et sélectionnez **"Sur l'écran d'accueil"**
4. Donnez un nom (ou laissez "Math Quest")
5. Appuyez sur **"Ajouter"** en haut à droite

✅ **Résultat** : L'icône apparaît sur votre écran d'accueil iOS !

---

## ✨ Avantages de l'installation

### 🚀 Performance
- **Lancement rapide** : S'ouvre comme une application native
- **Mode hors ligne** : Fonctionne sans internet (après le premier chargement)
- **Cache intelligent** : Chargements ultra-rapides

### 📱 Expérience native
- **Plein écran** : Pas de barre d'adresse du navigateur
- **Icône personnalisée** : Château doré avec symboles mathématiques
- **Notifications** : Support des notifications push (à venir)

### 💾 Économie d'espace
- **Légère** : Beaucoup plus légère qu'une application native
- **Mises à jour automatiques** : Pas besoin de mettre à jour manuellement

---

## 🔧 Comment désinstaller

### Sur Android
1. Maintenez l'icône de l'application
2. Faites glisser vers "Désinstaller" ou sélectionnez "Supprimer"

### Sur iOS
1. Maintenez l'icône de l'application
2. Appuyez sur "Supprimer l'app"
3. Confirmez

---

## 🐛 Problèmes courants

### L'option "Ajouter à l'écran d'accueil" n'apparaît pas
- **Android** : Assurez-vous d'utiliser Chrome (pas Firefox ou autre)
- **iOS** : Assurez-vous d'utiliser Safari (pas Chrome)
- Essayez de rafraîchir la page (⟳)

### L'application ne fonctionne pas hors ligne
- Ouvrez l'application une première fois avec internet
- Laissez-la charger complètement
- Ensuite, elle fonctionnera hors ligne

### L'icône n'est pas belle
- C'est normal ! L'icône est générée automatiquement
- Elle peut varier selon l'appareil
- L'icône officielle sera ajoutée plus tard

---

## 🚀 Pour plus tard : Créer un vrai APK

Si vous voulez distribuer l'application sur le Play Store avec un vrai fichier APK :

```bash
# Installer Capacitor
cd apps/web
pnpm add @capacitor/core @capacitor/cli @capacitor/android

# Initialiser
npx cap init

# Ajouter la plateforme Android
npx cap add android

# Synchroniser
npx cap sync

# Ouvrir dans Android Studio
npx cap open android
```

Puis dans Android Studio :
1. Build → Generate Signed Bundle / APK
2. Choisir APK
3. Signer avec votre keystore
4. Générer l'APK

---

## 📞 Besoin d'aide ?

Si vous avez des problèmes :
1. Vérifiez que vous utilisez le bon navigateur (Chrome sur Android, Safari sur iOS)
2. Essayez de vider le cache de votre navigateur
3. Rafraîchissez la page
4. Réessayez l'installation

---

**🎮 Profitez de Math Quest sur votre mobile !**
