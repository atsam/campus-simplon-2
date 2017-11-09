/*jshint esversion: 6*/
/*global window, document, console*/

/** @namespace */
const app = (function () {
    "use strict";

    var values = [];

    /**
     * Observe les actions de l'user sur les éléments DOM
     * @return {undefined} RAS
     * @alias app.observer
     */
    const observer = function() {
        document.getElementById("my_btn").onclick = ajouterValeur;
        window.onkeypress = checkerKeypress;
    };

    /**
     * Ajoute une valeur au tableau values[]
     * @alias app.ajouterValeur
     * @param {object} evt - l'évènement click
     * @return {string} la dernière valeur ajoutée
     */
    const ajouterValeur = function(evt) {
        let input = document.getElementById("my_input");
        let list = document.getElementById("my_list");
        let saisie = input.value;
        values.push(saisie);
        list.innerHTML += `<li>${ saisie }</li>`;
        input.value = "";
        return saisie;
    };

    /**
     * Vérifie si la touche entrée est pressée ET que l'input #my_input a le focus. Si c'est le cas, on exécute la fonction ajouterValeur()
     * @alias app.checkerKeypress
     * @param {object} evt - l'évènement keypress
     * @return {undefined} Rien de particulier
     */
    const checkerKeypress = function(evt) {
        if (evt.keyCode === 13 && document.activeElement === document.getElementById("my_input")) {
            ajouterValeur();
        }
    };

    /**
     * Ajoute une valeur à l'array values[]
     * @alias app.init
     */
    const init = function init() {
        observer();
    };

    window.onload = init;

}());
