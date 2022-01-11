/**
 * Gère l'affichage et les interactions de la page d'accueil
 */

// CONNEXION A L'API

// function fetchArticles() {
//     fetch("http://localhost:4000/api/article/")
//         .then(function (res) {
//             if (res.ok) {
//                 // get promise
//                 var resultat = res.json();
//                 // console.log("resultat" + resultat);


//                 return resultat;
//             }
//         })
//         .then(function (valueDeSortie) {
//             console.log("API OK", valueDeSortie);
//             return valueDeSortie;
//         })
//         .catch(function (err) {
//             // Une erreur est survenue
//             console.log('Une erreur est survenue.')
//         });
// };

// document
//     .addEventListener("load", fetchArticles());


var modifArticles = fetch("http://localhost:4000/api/article/")
    .then(function (res) {
        if (res.ok) {
            // get promise
            var resultat = res.json();
            // console.log("resultat" + resultat);

            
        }
    })
    .then(function (valueDeSortie) {
        console.log("API OK", valueDeSortie);
        return valueDeSortie;
    })
    .catch(function (err) {
        // Une erreur est survenue
        console.log('Une erreur est survenue.')
    });

console.log("valeur de sortie" + resultat);


// for each articles in article : display ce modèle

// for (value in values) {
//     console.log("valeur" + value);
// }



//     for (let elements in fetchArticles()) {
//         console.log(elements);
//     };
// document
//     .querySelector(".container")
//     .innerHTML +=
//     `<div class="col-12 mt-5">
//         <div class="card article">
//             <div class="card-header ">
//                 <h5 class="card-title d-flex justify-content-between><span class="publication-date">{{ date de publication }}</span></h5>
//             </div>
//             <img src="{{ image }}" class="card-img-top">
//             <span class="fa-stack fa-2x addFavorite">
//                 <i class="fas fa-star fa-stack-1x"></i>
//                 <i class="far fa-star fa-stack-1x"></i>
//             </span>
//             <div class="card-body">
//                 <p class="card-text">{{ Contenu }}</p>
//             </div>
//         </div>
//         </div>`;