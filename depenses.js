// J06 — Bilan des dépenses
// Type : number[] ; unité de chaque élément : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// retourner le total en FCFA avec reduce.
function calculerTotal(depenses) {
  // Type retour : number ; unité : FCFA
  return depenses.reduce((acc, n) => acc + n, 0);
}

// retourner la moyenne par jour ; 0 si le tableau est vide.
function calculerMoyenne(depenses) {
  // Type retour : number ; unité : FCFA
  if (depenses.length === 0) {
    return 0;
  }
  return calculerTotal(depenses) / depenses.length;
}

// retourner les montants strictement supérieurs à 2000 FCFA.
function filtrerGrossesDepenses(depenses) {
  // Type retour : number[] ; unité de chaque élément : FCFA
  return depenses.filter((montant) => montant > 2000);
}

//  retourner la plus grande dépense ; 0 si le tableau est vide.
function trouverMaximum(depenses) {
  // Type retour : number ; unité : FCFA
  if (depenses.length === 0) {
    return 0;
  }
  return Math.max(...depenses);
}

// copie triée, puis afficher le rapport demandé.
console.log("Tableau initial avant tri :", depensesSemaine);

const depensesTriees = [...depensesSemaine].sort((a, b) => a - b);

console.log("Tableau initial après tri :", depensesSemaine);

const total = calculerTotal(depensesSemaine);
const moyenne = calculerMoyenne(depensesSemaine);
const grossesDepenses = filtrerGrossesDepenses(depensesSemaine);
const maximum = trouverMaximum(depensesSemaine);

console.log(`
--- Rapport des dépenses ---
Total : ${total} FCFA
Moyenne par jour : ${moyenne.toFixed(2)} FCFA
Dépenses au-dessus de 2000 FCFA : ${grossesDepenses.join(", ")} FCFA
Maximum : ${maximum} FCFA
Copie triée croissante : ${depensesTriees.join(", ")} FCFA
`);