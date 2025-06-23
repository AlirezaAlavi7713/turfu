class voiture {
    #marque
    #model
    #Annee
    #couleur

    constructor (marque, model, Annee, couleur){
    this.#marque = marque;
    this.#model = model;
    this.#Annee = Annee;
    this.#couleur = couleur;
    }

    get model(){
        return this.#model;
    }
    set model(modelrecu){
        if(modelrecu.length > 0)
            this.#model = modelrecu
    }

    afficherdetails(){
        console.log(`ma voiture est une ${this.#marque},${this.#model},de l'annee ${this.#Annee},avec la couleur ${this.#couleur}`)
    }
}

const maVoiture = new voiture("opel","passat",2024,"blanc")
maVoiture.model = "astra"

maVoiture.afficherdetails()