import { Personne } from "./Personne";

export class Personnel extends Personne {
    
    bureau!: string;
    service!: string;
    compte_X!: string;

    constructor(id:number,nom: string, prenom: string, email: string, telephone: number, photo: string, bureau: string, service: string, compte_X: string) {
        super(id, nom, prenom, email, telephone, photo);

        this.bureau = bureau;
        this.service = service;
        this.compte_X = compte_X;
    }

    static empty(): Personnel {
        return new Personnel(0,'', '', '', 0, '', '', '', '');
    }
}