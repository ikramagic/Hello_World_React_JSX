# "Hello World!" : React & JSX 🧠

<div>
<img src="src/assets/react.svg" alt="React Logo" width="100" height="100" style="display: inline-block; margin: 0 auto;">
<img src="src/assets/Rotating-earth-animated-unscreened.gif" alt="Earth rotating" width="100" height="100" style="display: inline-block; margin: 0 auto;">
<img src="src/assets/Unofficial_JavaScript_logo_2.svg" alt="Javascript Logo" width="100" height="100" style="display: inline-block; margin: 0 auto;">
</div>

## Utilisation d'images dans un 🧩 composant React ⚛️

On va voir comment apprendre comment utiliser des images dans un 🧩 `React` ⚛️ ! <br>
Que ce soit pour afficher des images dans un composant unique ou pour les réutiliser dans différents endroits de ton application, nous verrons comment faire ça.

## Organisation des images

Il est recommandé de stocker les images spécifiques à un composant dans le même dossier que ce composant. 
<br>
Cela rendra ton composant plus facilement réutilisable en copiant simplement le dossier du composant dans un autre projet.
<br>
Si une image est utilisée à plusieurs endroits différents de ton application, tu peux créer un dossier `assets` situé à la racine du dossier `src` pour y stocker ces images partagées.

## Importation des images

Pour utiliser une image dans un 🧩 composant `React` ⚛️, il te suffit de l'importer comme n'importe quelle librairie `JavaScript`. 
<br>
Ensuite, tu peux utiliser la valeur ainsi importée comme attribut `src` (entre accolades) d'une balise `<img>`.

## Exemple

Supposons que tu as une image nommée `image.png` que tu souhaites centrer dans ta page. Voici comment tu pourrais le faire :

1. Tout d'abord, assure-toi d'avoir placé ton image dans le bon dossier (soit avec le composant, soit dans le dossier `assets`).

2. Ensuite, dans ton fichier JavaScript ou JSX, importe l'image de la manière suivante :

   ```javascript
   import React from "react";
   import image from "./chemin/vers/ton/image.png";
   ```

# Créer a-brillant-react-app avec Vite

**B🌍NJ🌍UR, M🌍NDE !**
<br>
On va créer ta première application `React` ⚛️ en utilisant ⚡`Vite`.
C'est simple et rapide, alors vamos. 🏋🏻‍♀️

<img src="src/assets/Rotating-earth-animated-unscreened.gif" alt="Earth rotating">

## Installation

Tout d'abord, assure-toi d'avoir PNPM et Node.js installés sur ta machine. Si tu as déjà installé `React` ⚛️ globalement avec NPM (-g), désinstalle-le avec `npm uninstall -g create-react-app`. <br>
Nous utiliserons PNPM pour créer notre application avec la dernière version de ⚡`Vite`, `React` ⚛️, et d'autres dépendances. <br>
Installe PNPM avec :

```bash
npm i -g pnpm
```

Maintenant, crée ton application ⚡`Vite` en utilisant la commande suivante :

```bash
pnpm create vite a-brillant-react-app
```

Suis les instructions pour configurer ton projet. Choisis React et JavaScript comme options. Une fois terminé, rends-toi dans le dossier créé avec :

```bash
cd a-brillant-react-app
```

## Présentation

Dans ton projet ⚡`Vite`, tu trouveras un fichier `package.json` contenant les informations de ton application, le dossier `node_modules` pour les dépendances, un dossier `public` pour les ressources statiques, et le dossier `src` contenant tes fichiers sources.

## Lancer your-brilliant-react-app

Avant de commencer, installe les dépendances du projet avec `pnpm install`. Pour lancer ton application, utilise la commande suivante :

```bash
pnpm run dev
```

Rends-toi sur http://localhost:5173/ dans ton navigateur (ou sur http://127.0.0.1:4000/ si tu utilises l'extension ⚡`Vite` pour VS🧊Code) pour voir l'application ⚛️ par défaut.

## Notre 🥇 composant

Crée un fichier `main.jsx` dans le dossier `/src`. Cela servira de point d'entrée pour ton application. Importe `React` ⚛️ et `ReactDOM` pour rendre l'application dans le `DOM` (Document Object Model) :

```javascript
import React from "react";
import ReactDOM from "react-dom";
```

Crée un composant `App` :

```javascript
const App = () => (
  <div>
    <h1>Hello world !</h1>
    <p>Comment ça va ?</p>
  </div>
);
```

Intègre ce composant dans le `DOM` en utilisant `ReactDOM` :

```javascript
ReactDOM.render(<App />, document.getElementById("root"));
```

Désormais, si tu vas sur ton serveur local tu connais on en a déjà parlé (🔎`ctrl+f` 4000 ou 🔎`ctrl+f` 5173 in this `README.md`).

<details>
<summary>that ⵜⴰⵢⵔⵉ ? 1:10 ───ㅇ───── 1:01 </summary>
Cette brilliant-app est ton tout premier 🧩 composant React ! 🧧
</details>

<details>
<summary>that magic? 2:20 ───ㅇ───── 2:02 </summary>
🥏 I am also a DJ ! 👀  
⚡ 🔊 Come check my other portfolio and enjoy the 🔊 ▶︎ •၊၊||၊|။||||။‌‌‌‌‌၊|• 0:99 🎺 [ⵍⵢⵓⴱⵓⴼ](https://www.youtube.com/playlist?list=PLNcTKDW0oKbxBDSO-XiHc-b3JNFTqdYvt) 🎺 & [come here if you like what you hear !](https://www.linkedin.com/in/ikrame-saadi/) 🔊 !⚡
</details>

<a href="https://www.youtube.com/watch?v=BTyQSIJAAgE" target="_blank">Wh@t mag🪄c ?!</a>

<details>
<summary>that ⵍⵢⵓⴱⵓⴼ ? 3:30 ───ㅇ───── 3:03 </summary>
🥏 I am also a DJ ! 👀  
⚡ 🔊 Come check my other portfolio and enjoy the 🔊 ▶︎ •၊၊||၊|။||||။‌‌‌‌‌၊|• 0:99 🎺 [ⵍⵢⵓⴱⵓⴼ](https://www.youtube.com/playlist?list=PLNcTKDW0oKbxBDSO-XiHc-b3JNFTqdYvt) 🎺 & [come here if you like what you hear !](https://www.linkedin.com/in/ikrame-saadi/) 🔊 !⚡
</details>
