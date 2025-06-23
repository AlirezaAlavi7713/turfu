class vehicule {
      #marque
      #model
      #Annee
    constructor(marque,model,Annee){
        this.#marque = marque;
        this.#model = model;
        this.#Annee = Annee;
    }

    get model(){return this.#model;}
    set model(modelrecu){this.#model = modelrecu}

    afficherdetails(){
        console.log(`ma voiture est une ${this.#marque},${this.#model},de l'annee ${this.#Annee}`)
    }
}
