import { Personne } from "./Personne";

export class Enseignant extends Personne {
    
    bureau!: string;
    laboratoire!: string;
    research!: string;

    constructor(id:number,nom: string, prenom: string, email: string, telephone: number, photo: string, bureau: string, laboratoire: string, research: string) {
        super(id,nom, prenom, email, telephone, photo);

        this.bureau = bureau;
        this.laboratoire = laboratoire;
        this.research = research;
    }

    static empty(): Enseignant {
        return new Enseignant(0,'', '', '', 0, '', '', '', '');
    }
}