/**
 * Gère l'affichage et les interactions de la page d'accueil
 */

// CONNEXION A L'API

function fetchArticles() {
    fetch("http://localhost:4000/api/article/")
        .then(function (res) {
            if (res.ok) {
                // get promise
                return res.json();
            }
        })
        .then(function (value) {
            // console.log("API OK", value);
            for (var i in value) {
                document
                    .querySelector(".container")
                    .innerHTML +=
                       value[i].title + '<br /> '; 
        //             '"<div class="col-12 mt-5">
        // <div class="card article">
        //     <div class="card-header ">
        //         <h5 class="card-title d-flex justify-content-between>`${ value[i].title + '<br /> '}`<span class="publication-date">{{ date de publication }}</span></h5>
        //     </div>
        //     <img src="{{ image }}" class="card-img-top">
        //     <span class="fa-stack fa-2x addFavorite">
        //         <i class="fas fa-star fa-stack-1x"></i>
        //         <i class="far fa-star fa-stack-1x"></i>
        //     </span>
        //     <div class="card-body">
        //         <p class="card-text">{{ Contenu }}</p>
        //     </div>
        // </div>
        // </div>';
            }

        })
        .catch(function (err) {
            // Une erreur est survenue
            console.log('Une erreur est survenue.')
        });
};

document.addEventListener("load", fetchArticles());

// for each articles in article : display ce modèle

// for (value in values) {
//     console.log("valeur" + value);
// }