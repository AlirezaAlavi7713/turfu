import animal from "./animal.js";

class chien extends animal {
    fairedubruit(){
        console.log(`${this.nom} aboie`);
    } 
}

export default chien