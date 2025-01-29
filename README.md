## EXTENSION CHROME : PAGE TRANSLATOR

Les extensions Chrome sont des programmes que vous pouvez installer pour en modifier les fonctionnalités. Les extensions Chrome peuvent par exemple vous aider à automatiser certaines tâches de votre navigateur, à modifier des comportements existants ou encore à améliorer le confort d’utilisation de votre logiciel.

Les extensions Chrome sont construites à l’aide de scripts HTML, JavaScript et CSS et sont comme de petits sites internet, téléchargés depuis le magasin d’applications Chrome.

La seule différence entre une extension Chrome et un site Web ordinaire, c’est que les extensions contiennent un fichier « manifeste », qui leur donne une fonction spécifique à exécuter.

## Le challenge

Création d'une extension Chrome nommée Page Translator qui permet à l'utilisateur de traduire la page web sur laquelle il se trouve en fonction du langage qu'il a choisi au préalable.

j'ai appris grâce à ce projet à :

- configurer de la structure de base de notre extension, y compris le fichier manifeste.
- Concevoir une popup d'extension avec HTML5 et CSS3 afin d'avoir une interface claire et intuitive.
- implémenter le JavaScript pour gérer les demandes de traduction et injecter les traductions dans les pages Web.

## Démonstration

Installation de l'extension chrome :

- Accédez à chrome://extensions dans votre navigateur Google Chrome.
- Cochez la case « Mode développeur ».
- Cliquez sur « Charger l’extension non empaquetée » qui affichera une boîte de dialogue de sélection de fichiers.
- Sélectionnez le répertoire de votre extension.
- Si l'extension est valide, elle devrait se charger immédiatement. Vérifiez que la case « Activé », située à côté de votre extension, est bien cochée afin de pouvoir la voir fonctionner en direct.

## Projet développé avec

- Utilisation des balises sémantiques HTML5
- CSS3
- Animations CSS
- Importation de la police "Roboto"
- Code HTML commenté
- Code css commenté
- manifest.json liste des informations importantes sur la structure et le comportement de cette extension
- popup.html définit le contenu de la popup
- popup.css met en forme le contenu de la popup
- popup.js gére le choix de l'utilisateur en exécutant un script de contenu dans l'onglet actif du navigateur
- background.js fichier JavaScript en tâche de fond
- JavaScript
- Code JavaScript commenté
