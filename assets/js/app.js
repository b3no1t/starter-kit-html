// importation du fichier message.js donnant accès à la fonction message
import { message } from "./message/message.js";

window.addEventListener("load", (event) => {
  // on appel la fonction message
  message();
  // communication avec la console
  console.log("La page est complètement chargée");
});

