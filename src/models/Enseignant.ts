import { Personne } from "./Personne";

export class Enseignant extends Personne {
    
    bureau!: string;
    laboratoire!: string;
    research!: string;

    constructor(nom: string, prenom: string, email: string, telephone: number, photo: string, bureau: string, laboratoire: string, research: string) {
        super(nom, prenom, email, telephone, photo);

        this.bureau = bureau;
        this.laboratoire = laboratoire;
        this.research = research;
    }
}