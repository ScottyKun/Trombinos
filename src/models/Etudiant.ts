import { Personne } from "./Personne";

export class Etudiant extends Personne {
    
    linkedin!: string;
    alumni!: string;

    constructor(nom: string, prenom: string, email: string, telephone: number, photo: string, linkedin: string, alumni: string) {
        super(nom, prenom, email, telephone, photo);

        this.linkedin = linkedin;
        this.alumni = alumni;
    }
}
    