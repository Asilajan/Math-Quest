# 📱 Accéder à Math Quest depuis votre mobile

## ✅ Serveur configuré !

Le serveur Vite est maintenant accessible sur votre réseau local.

### 🌐 URL à utiliser sur votre mobile :

```
http://192.168.1.37:3000
```

## 🔥 Si ça ne marche toujours pas : Configurer le pare-feu Windows

Le pare-feu Windows bloque peut-être la connexion. Voici comment l'autoriser :

### Méthode 1 : Autoriser Node.js (Rapide)

1. **Ouvrir les paramètres du pare-feu**
   - Appuyer sur `Windows + R`
   - Taper `wf.msc`
   - Appuyer sur Entrée

2. **Créer une règle entrante**
   - Cliquer sur "Règles de trafic entrant" (à gauche)
   - Cliquer sur "Nouvelle règle..." (à droite)

3. **Configurer la règle**
   - Type : **Port**
   - Protocole : **TCP**
   - Port : **3000**
   - Action : **Autoriser la connexion**
   - Profils : Cocher **Domaine, Privé, Public**
   - Nom : **Vite Dev Server**

### Méthode 2 : Commande PowerShell (Plus rapide)

Ouvrir PowerShell **en tant qu'administrateur** et exécuter :

```powershell
New-NetFirewallRule -DisplayName "Vite Dev Server" -Direction Inbound -LocalPort 3000 -Protocol TCP -Action Allow
```

### Méthode 3 : Désactiver temporairement le pare-feu (Test uniquement)

**⚠️ Attention : Ne pas laisser désactivé !**

1. Panneau de configuration → Pare-feu Windows Defender
2. Cliquer sur "Activer ou désactiver le pare-feu Windows Defender"
3. Désactiver pour le réseau privé
4. Tester depuis le mobile
5. **Réactiver immédiatement après le test**

## 📱 Test sur mobile

1. **Assurez-vous que votre mobile et votre PC sont sur le même WiFi**
2. **Ouvrir Chrome ou Safari** sur votre mobile
3. **Taper l'URL** : `http://192.168.1.37:3000`
4. **L'application devrait se charger !**

## 🔍 Vérifier l'adresse IP de votre PC

Si 192.168.1.37 ne fonctionne pas, votre IP a peut-être changé :

```bash
# Windows (CMD ou PowerShell)
ipconfig | findstr "IPv4"

# Cherchez la ligne "Adresse IPv4" de votre carte WiFi ou Ethernet
```

## ✅ Checklist de dépannage

- [ ] Le serveur Vite est lancé (voir `pnpm dev`)
- [ ] Le mobile et le PC sont sur le même WiFi
- [ ] L'URL utilisée est `http://192.168.1.37:3000` (pas localhost)
- [ ] Le pare-feu Windows autorise le port 3000
- [ ] Aucun VPN actif sur le mobile ou le PC
- [ ] Le navigateur mobile est Chrome ou Safari (pas Firefox)

## 🎮 Une fois que ça fonctionne

1. **Installer la PWA** : Une bannière apparaîtra pour "Ajouter à l'écran d'accueil"
2. **Profiter de l'app** : Elle fonctionnera comme une vraie application !

---

## 🚀 Pour un accès permanent (Production)

Pour que l'application soit accessible sans lancer le serveur local :

1. **Build de production** :
   ```bash
   cd apps/web
   pnpm build
   ```

2. **Déployer sur un hébergeur** (Vercel, Netlify, etc.)

3. **Obtenir une URL publique** accessible partout

Mais pour le développement, l'accès local suffit ! 📱
