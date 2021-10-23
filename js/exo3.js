function ajout() {          //on fait une fonction qui va etre lancer a la génération de la page

    window.setInterval(function(){          //on décrit l'intervalle dans la fenetre

        var marge = window.document.getElementById("mouv").style.marginLeft;    //on recupère la marge gauche du titre h1 avec l'id mouv
        if(marge == "") {       //si la marge est = a 0
            marge = "2px";      //alors on rajoute 2px
    };
        marge=(parseFloat(marge)+2)+"px" ;  //transforme la chaine de caractère en nombre flottant après avoir analysé celle ci
        window.document.getElementById("mouv").style.marginLeft = marge; //on dit que le h1 est = a la nouvelle marge
    },200); //on défini a quel cadence

}
