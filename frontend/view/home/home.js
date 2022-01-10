/**
 * Gère l'affichage et les interactions de la page d'accueil
 */

function fetchArticles() {
    fetch("http://localhost:4000/api/article/")
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function (value) {
            console.log("BDD OK");
        })
        .catch(function (err) {
            // Une erreur est survenue
            alert('Une erreur est survenue.')
        });
};


document.addEventListener("load", fetchArticles());