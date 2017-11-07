/*jshint esversion: 6*/
var session2 = (function () {
    "use strict";

    /********** Préambule - TD Constructeurs **********/

    var Synthetiseur = function(s) {
        this.anneeSortie = s.anneeSortie;
        this.imgUrl = s.imgUrl;
        this.marque = s.marque;
        this.modele = s.modele;
        this.prix = s.prix;
    };

    Synthetiseur.prototype.toString = function() {
        return `ce synthé ${this.modele} de marque ${this.marque} est sorti en ${this.anneeSortie} et coûte actuellement ${this.prix} sur le marché de l'occasion`;
    };

    Synthetiseur.prototype.setPrix = function(p) {
        this.prix = p;
        return p;
    };

    var moog = new Synthetiseur({
        marque: "Moog",
        modele: "Mini-Moog",
        prix: 3500,
        anneeSortie: 1975,
        imgUrl: "http://www.vintagesynth.com/sites/default/files/2017-05/moog_voyager_old_school_lg.jpg"
    });

    var nova = new Synthetiseur({
        marque: "Novation",
        modele: "Supernova",
        prix: 800,
        anneeSortie: 2000,
        imgUrl: "https://medias.audiofanzine.com/images/normal/novation-supernova-iir-8472.jpg"
    });

    (function afficherInfosSynthe() {
        console.log(moog);
        console.log(moog.toString());
        console.log("-----------");
        console.log(nova);
        console.log(nova.toString());
        console.log("-----modification du prix de supernova ------");
        console.log(nova.setPrix(200));
        console.log(nova.toString());
    }());

    /********** JS - SESSION 2 **********/

    var inverserCouleur = function(c) {
        var autre = document.getElementById(c.id === "red" ? "green" : "red");
        var autreCouleur = autre.style.backgroundColor;
        autre.style.backgroundColor = c.style.backgroundColor;
        c.style.backgroundColor = autreCouleur;
    };

    var inverserCouleur2 = function(c) {
        var autre;

        if (c.id === "green") {
            autre = document.getElementById("red");
        } else {
            autre = document.getElementById("green");
        }

        if (c.style.backgroundColor === "red") {
            c.style.backgroundColor = "green";
            autre.style.backgroundColor = "red";
        } else {
            c.style.backgroundColor = "red";
            autre.style.backgroundColor = "green";
        }
    };

    var inverserCouleur3 = function() {
        var i, carres = document.querySelectorAll(".carre");
        for (i = 0; i < carres.length; i += 1) {
            carres[i].classList.toggle("rouge");
            carres[i].classList.toggle("vert");
        }
    };

    var inverserLettres = function(str) {
        var i, tmp = "";
        for (i = str.length - 1; i >= 0; i -= 1) {
            // tmp += str[i];
            tmp += str[i] === " " ? '' : str[i];
        }
        return tmp;
    };

    var inverserLettres2 = function(str) {
        return str.replace(/ /g, '').split('').reverse().join('');
    };

    window.onload = function() {
        var inversion1, inversion2;
        console.log(this);

        document.getElementById("saisie_user").oninput = function() {
            inversion1 = inverserLettres(this.value);
            inversion2 = inverserLettres2(this.value);
            console.log(inversion1 === inversion2); // affiche true
            document.getElementById("res_saisie").textContent = inversion1;
        };
    };

    return {
        inverserCouleur: inverserCouleur,
        inverserCouleur2: inverserCouleur2,
        inverserCouleur3: inverserCouleur3,
        inverserLettres: inverserLettres,
        inverserLettres2: inverserLettres2,
    };
}());
