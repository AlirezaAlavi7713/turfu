import voiture from "./voiture.js";
import chien from "./chien.js";
import chat from "./chat.js"
import animal from "./animal.js";

const maVoiture = new voiture("opel","suv",2024,"blanc")
maVoiture.marque = "tuyuta"
maVoiture.model = "GTA"
maVoiture.Annee = "1995"
maVoiture.couleur = "bleu"
const maVoiture2 = new voiture("volkswagen","passat",2006,"gris")
maVoiture2.marque = "benz"
maVoiture2.model = "4x4"
maVoiture2.Annee = "2025"
maVoiture2.couleur = "noir"

maVoiture.afficherdetails()
maVoiture2.afficherdetails()

const A = new animal("bete")
const dog = new chien ("rex")
const cat = new chat ("suzi")

A.fairedubruit()
dog.fairedubruit()
cat.fairedubruit()
