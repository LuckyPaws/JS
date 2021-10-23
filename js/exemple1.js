// //alert("Message sur la page");

// {
//const exemple_constante = "Hello OwO";

// let exemple_variable = "Hello World !!!!!";

// console.log(exemple_variable);

// exemple_variable = "Essai 2";

// exemple_variable = 4;
// }

// let variable_1 = "5aaa";

// let variable_2 = 4;

// console.log(variable_1+variable_2);

// console.log(variable_2*variable_1);

// let d = new Date();

// console.log(d);

// console.log(d.getFullYear());

// let txt = "ABCDEFGHIJKLMNOPWQRSTUVWXYZ";

// console.log(txt.length);
// affichage();

// console.log(txt);
// affichage();

// console.log(txt.toLowerCase());
// affichage();

// function affichage() {

//     console.log("--------------------");
//     console.log("-------Exemple------");
//     console.log("--------------------");
// }

// let nombre = "123";

// console.log(parseInt(nombre));
// console.log(Number(nombre));

// let a = 50;

// let b = 3;

// if (a % b == 1) {  //le double == correspond a de la comparaison   le modulo est le reste d'une divison
//     console.log("Ce nombre est impair");
// }
// else {
//     console.log("Ce nombre est pair");
// }

// let var1 = 100;

// let var2 = "100";

// if (var1 === var2) {  //le triple === vérifie la valeur ET le type
//     console.log("Les deux variables sont égals")
// }

// function verif_nombre (a) {
//     if (a % 2) {
//         console.log("Nombre impair")
//     }                                        //Ma version qui marche jsp pk :c
//     else {
//         console.log("Nombre pair")
//     }
// }

// verif_nombre(2)

//Corrigé

// let nombre = 998;

// let result = "";

// result = parite(nombre);

// console.log("Ce nombre est " + result)

// function parite(NbParametre) {

//     if (NbParametre % 2 == 1) {
//         //impaire
//         return "impair";
//     }
//     else {
//         //paire
//         return "pair";
//     }

// }

// console.log("Ce nombre est " + parite(501))     // On peut afficher le résultat comme sa (c'est plus rapide)

//Autre méthode :

// let nombre = 999

// function parite(NbParametre) {

//     if (NbParametre % 2 == 1) {
//         //impaire
//         return "impair";
//     }
//     else {
//         //paire
//         return "pair";
//     }

// }

// console.log("Ce nombre est " + parite(nombre))

// let Texte = document.getElementById("demo").innerHTML;

// console.log(Texte);

// document.getElementById("demo").innerHTML = "bonjour!!!!!"

// function Test() {

//     // let Texte = document.getElementById('demo').innerHTML;
//     // console.log(Texte);

//     document.getElementById('demo').innerHTML = document.getElementById('nom').value;
// }


// exo personnel :

// function fonction_exo() {               //On crée la fonction 
//     let nom = document.getElementById("nom").value;         //On crée une variable pour le nom
//     let prenom = document.getElementById("prenom").value;       //On crée une variable pour le prénom

//     nom = nom.toUpperCase();            //On met le nom en majuscule
//     prenom = prenom.toLowerCase();      //On met le prénom en minuscule

//     resultat = "<h1>Bonjour " + nom + " " + prenom + " !";          //On défini le résultat désiré
//     document.getElementById("affichage").innerHTML = resultat;      //On dit ou on veut aficher le résultat (dans la balise p)

// }

//Autre exemple ressemblant au if, else if, else

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
//     break;
//   default:
//   	day = "Other";
//     break;
// }
// document.getElementById("demo").innerHTML = "Today is " + day;


// let estVrai = true
// let mytexte = (estVrai) ? "OK" : "PAS OK";  //Revient au meme que le if en dessous mais en une seul ligne

// if (estVrai ) {
//     myTexte = "OK";
// } else {
//     myTexte= "PAS OK";
// }

// console.log(myTexte);

// let i = 0          // si supérieur a 10 ne passera pas dans la boucle
// while (i<10) {          //reviens au meme résultat que la boucle for en dessous
//     //
//     i++;
// }

// for (i=0; i<10; i++) {

// }

// i=0;                // si supérieur a 10 passera au moins une fois dans la boucle
// do {
//     //
//     i++;
// } while (i<10)


//EXO



// var prenom = ""         //On crée une variable vide

// while (prenom.length <= 2) {          //on crée une boucle pour vérifier si le nom a minimum 3 caractères
//     prenom = prompt ("Entrez votre nom") ;      // on dit que si c'est pas le cas la fenetre s'affiche en boucle
// }

// alert( "Bonjour "+ prenom + ", bienvenue !")        // si il y a 3 caractère on affiche une alerte pour lui dire bienvenue



// EXO table de multiplication

//               1 Récupérer la valeur qui servira pour générer la table

//              = récupérer la valeur du champ INPUT de la page HTML qui a l'id nombre

//               2 Calculer la table de multiplication

//               3 Afficher la table


//  function multiplication() {

//     let resultat = ""

// //                  //Etape 1 : récuperer la valeur

//      let nb = document.getElementById("nombre").value;

// //                   //Etape 2 : table de multiplication (de 0 a 10)

//      for(let i = 0; i<=10; i++) {

//        resultat = resultat + nb + " x " + i + " = " + nb*i + "</br>";

//    }

//                  //Etape 3 : Affichage de la table de multiplication

//      document.getElementById("affichage").innerHTML = resultat;
    
//  }


 //EXO afficher l'une après l'autre toutes les tables de multi de 0 à 10

// str = "";               //on défini une string vide

// for(let j = 0; j <= 10; j++) {          //on crée une boucle pour les premier chiffre allant de 0 a 10

//     str += "<table>";                   // on crée un tableau dans la string (ne pas oublier le +=)

//     for(let i = 0; i <= 10; i++) {              //on crée une boucle allant de 0 a 10 pour la deuxieme valeur
//         str += "<tr><td>" + j + " x " + i + " = " + i*j + "</td></tr>";         //on défini le calcul qui se passe dans la string
//     }
//     str += "</table></br>";             //on ferme le tableau dans la string sans oublier le +=
// }

// document.getElementById("affichage").innerHTML = str;           //on renvoie le résultat dans l'html avec l'id "affichage"



 // CORRECTION afficher l'une après l'autre toutes les tables de multi de 0 à 10 ranger dans le dossier sur le bureau




//  let paris = "75015";

//  console.log(paris.match(/[0-9]{2}/));
//  console.log(paris.match(/\d{5}/));

//  var tel = /^(\d{2}(\.|\s)?){5}$/

//  console.log(tel.test("06 07 08 09 01"));
 
//  let email = /[\w.-]+@[\w-]+\.\w{3,6}/;

//  console.log(email);

//  console.log(email.test("toto@gmail.com"));


// ^ valeur régulière, regarder sur Regex101


// var tableau = [50, 2, 6210, 90, 851, 410, 174, 78, 10, 34]


// console.log(tableau)




// Exercice correction

// function client (x) {
//     if(x <= 200) {
//         return "Petit Client"
//     } else if (x <= 2000) {
//         return "Client"
//     } else if (x <= 10000) {
//         return "Client à potentiel"
//     } else {
//         return "Client Grand Compte"
//     }
// }

// function chiffre () {

//     let Texte = document.getElementById("affaire").innerHTML;

//     console.log(Texte);

//     document.getElementById("affaire").innerHTML = client(document.getElementById("ca").value);
// }


//--------------------------------------------------
//--------------------EXERCICE----------------------
//--------------------------------------------------


// Reprendre le script, ajouter un tableau de 10 éléments avec des valeurs au choix (Math.random, entre 0 et 20000) qui représenteront des CA
// Parcourir ce tableau et appeler la fonction « getTypeClient » pour préciser la catégorie des CA (petit client,  etc.).

// function random(min, max) {         //Fonction créer pour générer un chiffre aléatoire entre le min et le max
//     return Math.floor(Math.random() * (max - min)) + min;       //Permet d'avoir un chiffre aléatoire entre le min et le max défini
//   }

//   console.log(random(0, 20000))     //on appelle la fonction et on défini les valeur du min et du max


//   let tableau = []          //on fait une variable tableau qu'on laisse vide pour stocker l'ordre du tableau

//   for (let i=0; i <= 10; i++) {         //on fait une boucle qui se répète 10 fois
      
//     tableau.push(random(0, 20000))          //autre méthode pour générer de l'aléatoire

//     // tableau[i] = random(0, 20000);          //on défini qu'on utilise la fonction random dans le tableau a l'index i
//     console.log(tableau[i]);                //on affiche le résultat
//   }


//   let result = ""                                        //on fait une variable pour stocker le resultat
//   let phrase = ""                 
//                         //on fait une variable pour pouvoir afficher la phrase
//   for (let chiffre=0; chiffre<tableau.length; chiffre++) {      //on crée une boucle pour afficher le type de client
      
//     try {                                           //on prend ce qu'il essaye d'executer
//       result = client(tableau[chiffre]);             //on lie le type de client au resultat

//     //   console.log(result);              //on appelle le resultat de la boucle

//      phrase += "Le client " + (chiffre+1) + " possède un chiffre d'affaire de : " + tableau[chiffre] + ". C'est un " + result + "." + "</br>";                          //on défini la phrase qui sera afficher

//      if (tableau[chiffre] > 15000) {        //on dit que si un ca est supérieur a 15000
//         //Générer une erreur utilisateur

//         throw new Error(`Vérifier le client n°${chiffre+1} qui a un CA très important !`); // on défini l'erreur selon les clients


//      }

//     }
//     catch (error) {         //on récupère l'erreur
//         alert(error);       //on met une alerte
//         console.log(error); // on affiche l'erreur dans la console

//     }

//   }


//   document.getElementById("affaire").innerHTML = phrase ;           //on affiche tout le résultat en html

  
 //---------------ENTRAINEMENT SUR ARBRE GENEALOGIQUE DU CODE---------------------
// C'est de la merde meme en copier coller sa marche pas ses trucs a la con


// Exercice :

// Créer une page HTML avec 3 liens hypertexte
// S’abonner (en HTML) à l’évènement click de chaque lien, et afficher en alerte le  texte du lien cliqué

// Question subisdiaire : faire que les abonnements se fassent via la méthode addListerner