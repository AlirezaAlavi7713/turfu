# 🐾🚗 Projet POO – Voiture & Animaux

Ce projet est un exercice de **programmation orientée objet (POO) en JavaScript** mettant en œuvre des concepts clés comme l’**encapsulation**, l’**héritage** et le **polymorphisme**.

## 📁 Structure du projet

/projet
│
├── index.js ← Fichier principal (instanciation des objets)
├── voiture.js ← Classe Voiture
├── animal.js ← Classe mère Animal
├── chien.js ← Classe Chien (hérite de Animal)
├── chat.js ← Classe Chat (hérite de Animal)


## 🧱 Les classes

### 🔹 `Voiture`
- **Attributs** : `marque`, `model`, `Annee`, `couleur`
- **Méthode** : `afficherdetails()` → affiche les infos de la voiture dans la console

### 🔹 `Animal` (classe mère)
- **Attribut** : `nom`
- **Méthode** : `fairedubruit()` → générique (par défaut)

### 🔹 `Chien` et `Chat` (classes filles)
- Héritent de `Animal`
- Redéfinissent la méthode `fairedubruit()` pour aboyer (`Chien`) ou miauler (`Chat`)

## 🧠 Logique du programme

1. Deux objets `Voiture` sont créés avec des valeurs initiales, puis leurs attributs sont modifiés.
2. Chaque voiture affiche ses détails avec `afficherdetails()`.
3. Trois animaux (`Animal`, `Chien`, `Chat`) sont instanciés.
4. Chacun utilise `fairedubruit()` :
   - `Animal` affiche un bruit générique
   - `Chien` aboie
   - `Chat` miaule

Cela illustre le **polymorphisme** : une même méthode (`fairedubruit`) se comporte différemment selon la classe.

## ✅ Concepts POO utilisés

- **Encapsulation** : chaque classe regroupe données + comportements
- **Héritage** : `Chien` et `Chat` héritent de `Animal`
- **Polymorphisme** : redéfinition de `fairedubruit()`
- **Instanciation** d’objets avec `new`



