export class Personne{
    nom!: string;
    prenom!: string;
    email!: string;
    telephone!: number;
    photo!: string;
    id!: number;

    constructor(id:number,nom: string, prenom: string, email: string, telephone: number, photo: string) {
        this.id=id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.photo = photo;
    }
}