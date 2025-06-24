class vehicule {
      #marque
      #model
      #Annee
    constructor(marque,model,Annee){
        this.#marque = marque;
        this.#model = model;
        this.#Annee = Annee;
    }

    get marque(){return this.#marque;}
    set marque(marquerecu){this.#marque = marquerecu}

    get model(){return this.#model;}
    set model(modelrecu){this.#model = modelrecu}

    get Annee(){return this.#Annee;}
    set Annee(Anneerecu){this.#Annee = Anneerecu}

    afficherdetails(){
        console.log(`Ma voiture est une ${this.#marque}, ${this.#model}, de l'annee ${this.#Annee}`)
    }
}

export default vehicule