
var carre = document.getElementById("calque");      //On récupère le carré rouge

var haut_bas = getComputedStyle(carre, null).top;   //je récupère la valeur top

var droite_gauche = getComputedStyle(carre, null).left;     //je récupère la valeur left

haut_bas = haut_bas.match(/\d{3}/);     //Je récupère la valeur sans le px

droite_gauche = droite_gauche.match(/\d{3}/);       //je récupère tjr la valeur sans le px

haut_bas = parseInt(haut_bas[0]);       //Je défini que ce n'est plus une string

droite_gauche = parseInt(droite_gauche[0]);     //Je défini que ce n'est plus une string

var gauche = document.getElementById("gauche");     //je récupère la flèche gauche

var droite = document.getElementById("droite");        //je récupère la flèche droite

var haut = document.getElementById("haut");         //je récupère la flèche haut

var bas = document.getElementById("bas");           //je récupère la flèche bas


gauche.addEventListener("click", function () {      //je dit que lorsqu'on clique sur la fleche de gauche
    droite_gauche -= 1;                             //la valeur left perd 1
    carre.style.left = droite_gauche;               //la nouvelle valeur de left est celle de droite_gauche, on applique cette effet sur le carre
})

droite.addEventListener("click", function () {      //lorsqu'on clique sur la fleche de droite
    droite_gauche += 1;                             //la valeur gagne 1
    carre.style.left = droite_gauche;               //la nouvelle valeur de left est celle de droite_gauche, on applique cette effet sur le carre
})

haut.addEventListener("click", function () {        //lorsqu'on clique sur la fleche du haut
    haut_bas -= 1;                                  //la valeur left perd 1
    carre.style.top = haut_bas;                     //la nouvelle valeur de top est celle de haut_bas, on applique cette effet sur le carre
})

bas.addEventListener("click", function () {         //lorsqu'on clique sur la fleche du bas
    haut_bas += 1;                                  //la valeur gagne 1
    carre.style.top = haut_bas;                     //la nouvelle valeur de top est celle de haut_bas, on applique cette effet sur le carre
})


console.log(haut_bas);
console.log(droite_gauche); 
