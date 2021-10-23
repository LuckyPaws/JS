function addRow(param_id) {     //création de fonction

    let objetTable = document.getElementById(param_id);     //on récupère l'id de la fonction
    let numberRows = objetTable.getElementsByTagName("tr").length;      //on récupère la longueur du tableau

    let newRow = document.createElement("tr");      //on crée une ligne du tableau
    let newCell = document.createElement("td");     //on crée un case
    let newCell2 = document.createElement("td");    //une autre case
    let newCell3 = document.createElement("td");    //et encore une

    let newText = document.createTextNode("Première cellule de la ligne n°" + (numberRows));   //on met du texte dans les cases
    let newText2 = document.createTextNode("Deuxième cellule de la ligne n°" + (numberRows));
    let newText3 = document.createTextNode("Troisième cellule de la ligne n°" + (numberRows));

    if (numberRows % 2 == 1)
        newRow.style.backgroundColor = "red";   // si c'est impaire c'est rouge 
    else  
        newRow.style.backgroundColor = "blue";  // si c'est paire c'est bleu

    // Lien entre les textes et les cellules de la nouvelle ligne

    newCell.appendChild(newText);       
    newCell2.appendChild(newText2);
    newCell3.appendChild(newText3);

    // Lien entre les cellules et la ligne

    newRow.appendChild(newCell);
    newRow.appendChild(newCell2);
    newRow.appendChild(newCell3);

    // Lien entre la nouvelle ligne et le tableau

    objetTable.appendChild(newRow);
}