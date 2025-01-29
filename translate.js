//Pour recevoir le message, configurez un écouteur d'événements runtime.onMessage
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.language) {
    const translateApi = `https://translate.google.com/translate?hl=${request.language}&sl=auto&tl=${request.language}&u=${window.location.href}`;
    window.location.href = translateApi;
  }
});
