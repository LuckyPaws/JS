function gestion_clic(id_lien) {

    let msg = document.getElementById(id_lien).innerHTML;

    alert("Clic sur un lien a hrf " + id_lien + " : "+msg); //identique a l'alert en dessous
}

function gestion_clic2(objet_lien) {

    console.log(objet_lien);

    let msg = objet_lien.innerHTML;

    alert(`Clic sur un lien a hrf ${objet_lien} : ${msg}`); //identique a l'alert au dessus
}

console.log(document.getElementById("a1"));

let liste_a = document.getElementsByTagName('a');

for(let i=0; i<liste_a.length; i++) {
    liste_a[i].addEventListener('click', function() { Afficher_lien(liste_a[i]) }, false);
}

function Afficher_lien(objetconcerne) {

    alert(objetconcerne.innerHTML);
}

