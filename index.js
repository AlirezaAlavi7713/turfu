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

    get model(){return this.#model;}
    set model(modelrecu){this.#model = modelrecu}

    afficherdetails(){
        console.log(`ma voiture est une ${this.#marque},${this.#model},de l'annee ${this.#Annee},avec la couleur ${this.#couleur}`)
    }
}

const maVoiture = new voiture("opel","suv",2024,"blanc")
maVoiture.model = "astra"
const maVoiture2 = new voiture("volkswagen","passat",2006,"gris")
maVoiture.model = "golf6"

maVoiture.afficherdetails()
maVoiture2.afficherdetails()