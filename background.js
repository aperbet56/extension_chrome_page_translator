// Utilisation de l'API chrome.runtime pour récupérer le service worker, renvoyer des informations sur le fichier manifeste, et écouter et répondre aux événements du cycle de vie de l'extension
chrome.runtime.onInstalled.addListener(() => {
  // Affichage dans la console d'un message de réussite de l'installation de l'extension chrome Page translator
  console.log("Page translator Extension Installed !");
});
