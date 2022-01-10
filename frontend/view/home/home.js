/**
 * Gère l'affichage et les interactions de la page d'accueil
 */
let api = fetch("http://localhost:4000/api/article/");
function fetchArticles() {
    api
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

document.querySelector(".container").innerHTML += `<div class="col-12 mt-5">
<div class="card article">
        <div class="card-header ">
            <h5 class="card-title d-flex justify-content-between">{{ Titre }}<span class="publication-date">{{ date de publication }}</span></h5>
        </div>
        <img src="{{ image }}" class="card-img-top">
            <span class="fa-stack fa-2x addFavorite">
                <i class="fas fa-star fa-stack-1x"></i>
                <i class="far fa-star fa-stack-1x"></i>
            </span>
            <div class="card-body">
                <p class="card-text">{{ Contenu }}</p>
            </div>
    </div>
    </div>`;