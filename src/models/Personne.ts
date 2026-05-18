export class Personne{
    nom!: string;
    prenom!: string;
    email!: string;
    telephone!: number;
    photo!: string;

    constructor(nom: string, prenom: string, email: string, telephone: number, photo: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.photo = photo;
    }
}