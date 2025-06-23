class voiture extends vehicule {
    #couleur

    constructor (couleur){
    super(marque,model,Annee)
    this.#couleur = couleur;
    }

    get model(){return this.#couleur;}
    set model(modelrecu){this.#couleur = modelrecu}

    afficherdetails(){
        console.log(`ma voiture a la couleur de${this.#couleur}`)
    }
}

export default voiture