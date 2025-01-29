// Ecoute de l'événement "DOMContentLoaded" sur le document (la page web)
document.addEventListener("DOMContentLoaded", () => {
  // Récupération de l'élément HTML <select>
  const selectLang = document.querySelector("#language");
  // Pour chaque langage
  languages.forEach((lang) => {
    // Création de l'élément HTML <option>
    const option = document.createElement("option");
    option.value = lang.code;
    option.textContent = lang.name;
    // Ajout de l'élément <option> créé dans le DOM
    selectLang.appendChild(option);
  });

  // Récupération du bouton "translate" et écoute de l'événement "click" sur celui-ci
  document.querySelector("#translate").addEventListener("click", () => {
    // Récupération et stockage du langage choisi dans la constante language
    const language = selectLang.value;
    // Extension chrome qui va agir sur l'onglet actif et la fenêtre qui est active
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // Injection / éxécution de script dans l'onglet sélectionné
      chrome.scripting.executeScript(
        {
          // Ciblage de l'onglet actif
          target: { tabId: tabs[0].id },
          // Exécution du fichier JavaScript "translate.js"
          files: ["translate.js"],
        },
        () => {
          // Pour envoyer un seul message à une autre partie de votre extension et éventuellement obtenir une réponse, appelez tabs.sendMessage().
          chrome.tabs.sendMessage(tabs[0].id, { language });
        }
      );
    });
  });
});
