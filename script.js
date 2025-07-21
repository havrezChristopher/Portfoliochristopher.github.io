// développement d'une application en js Vanilla pour reprendre les base
const motApplication = "Bonjour"; // Essayez de mettre un autre mot ici !
let motUtilisateur = prompt(
  "Entrez le mot : " + motApplication + "essayer",
  "Gredin",
  "Mécréant",
  "Vilain"
);

switch (motUtilisateur) {
  case motApplication:
    console.log("Bravo !");
    break;
  case "Gredin":
    console.log("Restez correct !");
    break;
  case "Mécréant":
    console.log("Restez correct !");
    break;
  case "Vilain":
    console.log("Soyez gentil !");
    break;
  default:
    console.log("Vous avez fait une erreur de frappe.");
}
