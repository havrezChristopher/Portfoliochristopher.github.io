// // Caractères Matrix (katakana, chiffres, symboles)
// const matrixChars =
//   "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";

// // Créer les colonnes Matrix
// function createMatrixColumns() {
//   const matrixBg = document.getElementById("matrixBg");
//   const columnCount = Math.floor(window.innerWidth / 25);

//   matrixBg.innerHTML = "";

//   for (let i = 0; i < columnCount; i++) {
//     const column = document.createElement("div");
//     column.className = "matrix-column";

//     // Générer une colonne de caractères aléatoires
//     let columnText = "";
//     const charCount = Math.floor(Math.random() * 20) + 10;

//     for (let j = 0; j < charCount; j++) {
//       const randomChar =
//         matrixChars[Math.floor(Math.random() * matrixChars.length)];
//       columnText += randomChar + "\n";
//     }

//     column.textContent = columnText;
//     column.style.left = `${(i * 100) / columnCount}%`;
//     column.style.animationDuration = `${Math.random() * 3 + 2}s`;
//     column.style.animationDelay = `${Math.random() * 2}s`;
//     column.style.fontSize = `${Math.random() * 10 + 12}px`;

//     matrixBg.appendChild(column);
//   }
// }

// // Changer la vitesse de Matrix
// function changeMatrixSpeed(speed) {
//   const columns = document.querySelectorAll(".matrix-column");
//   let speedMultiplier = 1;

//   switch (speed) {
//     case "slow":
//       speedMultiplier = 2;
//       break;
//     case "fast":
//       speedMultiplier = 0.5;
//       break;
//     default:
//       speedMultiplier = 1;
//   }

//   columns.forEach((column) => {
//     const currentDuration = parseFloat(column.style.animationDuration);
//     column.style.animationDuration = `${currentDuration * speedMultiplier}s`;
//   });
// }

// // Basculer entre les modes Matrix
// let isDarkMode = false;
// function toggleMatrixMode() {
//   const body = document.body;
//   isDarkMode = !isDarkMode;

//   if (isDarkMode) {
//     body.classList.add("matrix-dark");
//     document.documentElement.style.setProperty("--matrix-green", "#ff0040");
//     document.documentElement.style.setProperty("--text-color", "#ff0040");
//   } else {
//     body.classList.remove("matrix-dark");
//     document.documentElement.style.setProperty("--matrix-green", "#00ff41");
//     document.documentElement.style.setProperty("--text-color", "#00ff00");
//   }
// }

// // Initialiser au chargement
// window.addEventListener("load", createMatrixColumns);
// window.addEventListener("resize", createMatrixColumns);

// // Régénérer les colonnes périodiquement
// setInterval(() => {
//   const columns = document.querySelectorAll(".matrix-column");
//   columns.forEach((column) => {
//     if (Math.random() < 0.1) {
//       // 10% de chance de changer
//       let newText = "";
//       const charCount = Math.floor(Math.random() * 20) + 10;
//       for (let j = 0; j < charCount; j++) {
//         const randomChar =
//           matrixChars[Math.floor(Math.random() * matrixChars.length)];
//         newText += randomChar + "\n";
//       }
//       column.textContent = newText;
//     }
//   });
// }, 2000);
