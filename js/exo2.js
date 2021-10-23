// let rouge = document.getElementById("rouge");

// rouge.addEventListener("mouseover", function(changeux) {
//     changeux.target.style.color = "red";

//     setTimeout(function(){
//         changeux.target.style.color = "" ;
//     }, 600)
// },false )

//^Ma version qui ne marche pas totalement

// let objetdom = []
// objetdom = document.getElementsByTagName("li") ;

// for(let i = 0; i < objetdom.length; i++)
//  {
//     objetdom[i].addEventListener('mouseover', function () { objetdom[i].style.color = "red";}, false); //Quand la souris est dessus c'est rouge
//     objetdom[i].addEventListener('mouseout', function () { objetdom[i].style.color = "black";}, false); //Quand on enleve la souris sa redevient noir
// }

//  VERSION DU PROF

let listeBalisesLi = document.getElementsByTagName('li')   //on recupère les li

console.log(document);

for (let i = 0; i < listeBalisesLi.length; i++) {       //on fait une boucle

    listeBalisesLi[i].addEventListener('mouseover', function () {   //on dit que si la souris est dessus sa devient rouge
        listeBalisesLi[i].style.color = 'red'
    }, false);

    listeBalisesLi[i].addEventListener('mouseout', function () {        //et que si la souris n'est plus dessus sa devient noir
        listeBalisesLi[i].style.color = 'black'
    }, false);
}