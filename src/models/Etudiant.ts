import { Personne } from "./Personne";

export class Etudiant extends Personne {
    
    linkedin!: string;
    alumni!: string;

    constructor(id:number,nom: string, prenom: string, email: string, telephone: number, photo: string, linkedin: string, alumni: string) {
        super(id,nom, prenom, email, telephone, photo);

        this.linkedin = linkedin;
        this.alumni = alumni;
    }

    static empty(): Etudiant {
        return new Etudiant(0,'', '', '', 0, '', '', '');
    }
}
    