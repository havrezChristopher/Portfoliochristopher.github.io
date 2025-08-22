// développement d'une application en js Vanilla pour reprendre les base
// const motApplication = "Bonjour"; // Essayez de mettre un autre mot ici !
// let motUtilisateur = prompt(
//   "Entrez le mot : " + motApplication + "essayer",
//   "Gredin",
//   "Mécréant",
//   "Vilain"
// );

// switch (motUtilisateur) {
//   case motApplication:
//     console.log("Bravo !");
//     break;
//   case "Gredin":
//     console.log("Restez correct !");
//     break;
//   case "Mécréant":
//     console.log("Restez correct !");
//     break;
//   case "Vilain":
//     console.log("Soyez gentil !");
//     break;
//   default:
//     console.log("Vous avez fait une erreur de frappe.");
// }
// Étape 1 : Testez le premier mot
// Déclarez une variable listeMots qui est un tableau.
const listeMots = ["cachalot", "pétunia", "serviette"];
let score = 0;

// Ce tableau contient trois mots que l’utilisateur devra taper au clavier : “Cachalot”, “Pétunia” et “Serviette”.
// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur

// Déclaration de la variable contenant le mot saisi par l'utilisateur
// Le prompt sert à afficher une popup demandant à l'utilisateur de saisir un mot
let motUtilisateur = prompt("Entrez le mot : " + listeMots[0]);

// Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
if (motUtilisateur === listeMots[0]) {
  score++;
}

// Idem avec le second mot du tableau
// Notez l'absence du "let" devant la déclaration de la variable "motUtilisateur", cela permet de réutiliser la variable déclarée précédemment
motUtilisateur = prompt("Entrez le mot : " + listeMots[1]);
if (motUtilisateur === listeMots[1]) {
  score++;
}

// Idem avec le troisième mot du tableau
motUtilisateur = prompt("Entrez le mot : " + listeMots[2]);
if (motUtilisateur === listeMots[2]) {
  score++;
}

// Affichage du score de l'utilisateur
console.log("Votre score est de " + score + " sur 3");

// Déclarez une deuxième variable score, initialisée à 0, qui contiendra le nombre de mots correctement tapés par l’utilisateur.

// À l’aide de l’instruction prompt, demandez à l’utilisateur de rentrer le mot contenu dans la première case du tableau. N’oubliez pas, la première case d’un tableau est la case numéro zéro !

// Écrivez une première structure conditionnelle pour savoir si le mot tapé par l’utilisateur est bien celui demandé par l’application.

// Si c’est le cas, on augmente la valeur de score de 1.

// Vérifiez avec des console.log si le score final est correct.

// Étape 2 : Testez le second mot
// Demandez à l’utilisateur de rentrer le second mot.

// Faites une seconde structure conditionnelle pour vérifier si le seconde mot tapé par l’utilisateur correspond bien au second mot du tableau.

// Étape 3 : Testez le troisième mot
// Recommencez une troisième fois pour la dernière case du tableau !
