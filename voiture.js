import vehicule from "./vehicule.js";

class voiture extends vehicule {
    #couleur

    constructor (marque, model, Annee, couleur){
        super(marque,model,Annee)
        this.#couleur = couleur;
    }

    get couleur(){return this.#couleur;}
    set couleur(couleurrecu){this.#couleur = couleurrecu}

    afficherdetails(){
        super.afficherdetails();
        console.log(`Ma voiture a la couleur de ${this.#couleur}`)
    }
}

export default voiture