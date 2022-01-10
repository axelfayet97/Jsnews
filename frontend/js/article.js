/**
 * Représentation du format d'un article ainsi que le formatage des dates pour affichage
 */

class article {
    constructor(id, title, publicationDate, image, content) {
        this.id = id;
        this.title = title;
        this.publicationDate = publicationDate.toLocalDateString("fr");
        this.image = image;
        this.content = content;
    }
};