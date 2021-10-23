//le lier a correctionexo pour voir si sa marche
function gestion_clic(id_lien) {

    let msg = document.getElementById(id_lien).innerHTML;

    alert("Clic sur un lien a hrf " + id_lien + " : "+msg);
}

function gestion_clic2(objet_lien) {

    console.log(objet_lien);

    let msg = objet_lien.innerHTML;

    alert(`Clic sur un lien a hrf ${objet_lien} : ${msg}`);
}

function Afficher_lien(objetconcerne) {

    alert(objetconcerne.innerHTML);

}

let liste_a = document.getElementsByTagName('a');

for(let i=0; i<liste_a.length; i++) {

    if ( ( i == 0 ) || ( i = liste_a.length-1) ) {
        liste_a[i].addEventListener('click', function () { 
            Afficher_lien(liste_a[i]); 
        }, false);
    }
}

let x = document.getElementById("demo");

x.addEventListener('mouseover', function (event) { }, false);


document.getElementById("demo")
    .addEventListener('mouseover', function (event) {
        console.log("Tooltip shown");
        console.log(event);

        document.getElementById("myTooltip").style.display = 'block';
        document.getElementById("myTooltip").style.top = (event.clientY + 5) + 'px';
        document.getElementById("myTooltip").style.left = (event.clientX + 5) + 'px';
    }, false);

document.getElementById("demo")
    .addEventListener("mouseout", function () {
        document.getElementById("myTooltip").style.display = 'none';
    }, false);