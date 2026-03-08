# 💳 BankApp — Plateforme Bancaire Full Stack

Une application bancaire personnelle full-stack développée avec **Laravel 12**, **React.js** et **PostgreSQL**. Les utilisateurs peuvent gérer leur portefeuille, recharger des fonds, transférer de l'argent à d'autres utilisateurs et suivre l'historique complet de leurs transactions en temps réel.

---

## 🚀 Démo Live

> Disponible prochainement après déploiement

---

## ✨ Fonctionnalités

- 🔐 **Authentification Sécurisée** — Auth par token avec Laravel Sanctum
- 💰 **Gestion du Portefeuille** — Rechargez votre solde instantanément
- 💸 **Transferts de Fonds** — Envoyez de l'argent à d'autres utilisateurs par email
- 📊 **Historique des Transactions** — Historique complet avec labels Envoyé, Reçu, Recharge
- 📱 **Design Responsive** — Sidebar mobile avec menu hamburger
- 🛡️ **Rate Limiting** — Endpoints API protégés contre les abus
- ⚡ **Solde en Temps Réel** — Le solde se met à jour instantanément après chaque transaction
- 🔒 **Routes Protégées** — Dashboard protégé avec guards d'authentification

---

## 🛠️ Stack Technique

### Backend

| Technologie     | Usage                      |
| --------------- | -------------------------- |
| Laravel 12      | API REST, Logique Métier   |
| PostgreSQL      | Base de Données            |
| Laravel Sanctum | Authentification par Token |
| PHP 8.2         | Langage Serveur            |

### Frontend

| Technologie  | Usage                          |
| ------------ | ------------------------------ |
| React.js     | Framework UI                   |
| React Router | Routing Client                 |
| Axios        | Client HTTP avec Intercepteurs |
| Tailwind CSS | Styles                         |
| Vite         | Outil de Build                 |
| Context API  | Gestion d'État Global          |

---

## 📁 Structure du Projet

```
backend/
├── app/
│   ├── Http/Controllers/
│   │   ├── AuthController.php      # Register, Login, Logout, Profil
│   │   └── WalletController.php    # Solde, Recharge, Transfert, Transactions
│   └── Models/
│       ├── User.php
│       └── Transaction.php
├── database/migrations/
├── routes/
│   └── api.php
└── config/
    ├── cors.php
    └── sanctum.php

frontend/
├── src/
│   ├── components/
│   │   └── ui/                     # Composants UI réutilisables
│   ├── Context/
│   │   └── Authcontext.jsx         # État Global Auth & Solde
│   ├── layout/
│   │   ├── DashboardLayout.jsx
│   │   ├── Sidebar.jsx
│   │   └── AuthLayout.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── TopUp.jsx
│   │   ├── Transfer.jsx
│   │   ├── Transactions.jsx
│   │   └── Settings.jsx
│   ├── services/
│   │   ├── auth.js                 # Appels API Auth
│   │   └── wallet.js               # Appels API Wallet
│   └── lib/
│       └── axios.js                # Instance Axios avec intercepteurs
```

---

## ⚙️ Installation & Configuration

### Prérequis

- PHP 8.2+
- Composer
- Node.js 18+
- PostgreSQL
- Laravel CLI

### Configuration Backend

```bash
# Cloner le dépôt
git clone https://github.com/learningsin2024-source/bankapp.git
cd bankapp/backend

# Installer les dépendances
composer install

# Copier le fichier d'environnement
cp .env.example .env

# Générer la clé d'application
php artisan key:generate

# Configurer votre fichier .env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=bankingwebsite
DB_USERNAME=postgres
DB_PASSWORD=votremotdepasse

# Exécuter les migrations
php artisan migrate

# Installer Sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"

# Démarrer le serveur
php artisan serve
```

### Configuration Frontend

```bash
cd frontend

# Installer les dépendances
npm install

# Créer le fichier .env
echo "VITE_API_URL=http://127.0.0.1:8000" > .env

# Démarrer le serveur de développement
npm run dev
```

---

## 🔌 Endpoints API

### Authentification

| Méthode | Endpoint             | Description          | Auth Requise |
| ------- | -------------------- | -------------------- | ------------ |
| POST    | `/api/register`      | Inscription          | Non          |
| POST    | `/api/login`         | Connexion            | Non          |
| POST    | `/api/logout`        | Déconnexion          | Oui          |
| GET     | `/api/user`          | Utilisateur courant  | Oui          |
| PUT     | `/api/user/update`   | Modifier profil      | Oui          |
| PUT     | `/api/user/password` | Changer mot de passe | Oui          |

### Portefeuille

| Méthode | Endpoint               | Description                 | Auth Requise |
| ------- | ---------------------- | --------------------------- | ------------ |
| GET     | `/api/wallet/balance`  | Solde du portefeuille       | Oui          |
| POST    | `/api/wallet/top-up`   | Recharger le portefeuille   | Oui          |
| POST    | `/api/wallet/transfer` | Transférer des fonds        | Oui          |
| GET     | `/api/transactions`    | Historique des transactions | Oui          |

---

## 🔒 Fonctionnalités de Sécurité

- Authentification par token avec Laravel Sanctum
- Rate limiting sur tous les endpoints (5 req/min sur auth, 10 req/min sur wallet)
- CORS configuré uniquement pour l'origine frontend
- Hachage des mots de passe avec bcrypt
- Transactions DB atomiques pour les transferts
- Expiration du token avec redirection automatique vers login
- Validation des entrées sur tous les endpoints

---

## 🗄️ Schéma de Base de Données

### Table Users

```
id, name, email, password, balance, created_at, updated_at
```

### Table Transactions

```
id, sender_id, receiver_id, amount, type, status, reference, created_at, updated_at
```

Types de transactions : `topup` | `transfer` | `credit`

---

## 👤 Auteur

**Koumolou Fatihu**

- GitHub: [@learningsin2024-source](https://github.com/learningsin2024-source)
- Email: learningsin2024@gmail.com
- Localisation: Abidjan, Côte d'Ivoire

---

## 📄 Licence

Ce projet est open source et disponible sous la [Licence MIT](LICENSE).
