
/* Fonction pour ajouter un élément à une liste */

function add_li(sId) {
    let oUl = document.getElementById(sId); 
    let iLength = oUl.getElementsByTagName("li").length;                                // = longueur de la liste (nombre d'items)
 
    let oLi = document.createElement("li");                                             // Création un nouveau noeud item de liste
    let oText = document.createTextNode("Ceci est l'item de liste n°" + (iLength + 1)); // Création  un noeud texte

    oLi.style.color = "blue";

    oLi.appendChild(oText);                 // on attache le noeud texte au noeud item de liste
    oUl.appendChild(oLi);                   // on attache le noeud item de liste au noeud liste
 
    // return oLi;
}

const listDiv = document.querySelector('.list');


/* 2 fonction pour mettre en minuscule/majuscule lors d'un over */

listDiv.addEventListener('mouseover', (event) => {
    if(event.target.tagName == 'LI') {
      event.target.style.textTransform = 'uppercase';
    }
  });
  
  listDiv.addEventListener('mouseout', (event) => {
    if(event.target.tagName == 'LI') {
      event.target.style.textTransform = 'lowercase';
    }
  });
  

  /* Fonction pour supprimer le dernier élement d'une liste */

  /* Recherche du bouton via sa classe */

  const removeItemButton = document.querySelector('button.removeItemButton');  

  removeItemButton.addEventListener('click', () => {
      let list = document.querySelector('ul');
      let li = document.querySelector('li:last-child');
      list.removeChild(li);
    });