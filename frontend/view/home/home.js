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
                let valuesArray = [];
                valuesArray.push(value[i].title);
                valuesArray.push(value[i].id);
                valuesArray.push(value[i].publicationDate);
                valuesArray.push(value[i].image);
                valuesArray.push(value[i].content);
                document
                    .querySelector(".container")
                    .innerHTML +=
                    `<div class="col-12 mt-5">
                        <div class="card article">
                            <div class="card-header ">
                                <h5 class="card-title d-flex justify-content-between><span class="publication-date"> ‘${value[i].publicationDate}‘</span></h5>
                            </div>
                            <img src="‘${console.log(value[i].image)}${"./backend/" + value[i].image}‘" class="card-img-top" >
                            <span class="fa-stack fa-2x addFavorite">
                                <i class="fas fa-star fa-stack-1x"></i>
                                <i class="far fa-star fa-stack-1x"></i>
                            </span>
                            <div class="card-body">
                                <p class="card-text">‘${value[i].content}‘</p>
                            </div>
                        </div>
                    </div>`
            };
            return value;
        })
        .catch(function (err) {
            // Une erreur est survenue
            console.log('Une erreur est survenue.')
        });
};

document.addEventListener("load", fetchArticles());


