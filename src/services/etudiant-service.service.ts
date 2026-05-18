import { Etudiant } from '../models/Etudiant';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor() { }

  etudiants: Etudiant[] = [];

  getEtudiants(): Etudiant[] {
    this.etudiants.push(new Etudiant("Lefebvre", "Emma", "emma.lefebvre@etu.universite.fr", 612345678, "./assets/etudiant.webp", "https://linkedin.com/in/emma-lefebvre", "Promotion 2024"));
    this.etudiants.push(new Etudiant("Moreau", "Lucas", "lucas.moreau@etu.universite.fr", 623456789, "./assets/etudiant.webp", "https://linkedin.com/in/lucas-moreau", "Promotion 2025"));
    this.etudiants.push(new Etudiant("Simon", "Chloé", "chloe.simon@etu.universite.fr", 634567890, "./assets/etudiant.webp", "https://linkedin.com/in/chloe-simon", "Promotion 2024"));
    this.etudiants.push(new Etudiant("Michel", "Hugo", "hugo.michel@etu.universite.fr", 645678901, "./assets/etudiant.webp", "https://linkedin.com/in/hugo-michel", "Promotion 2026"));
    this.etudiants.push(new Etudiant("Roux", "Manon", "manon.roux@etu.universite.fr", 656789012, "./assets/etudiant.webp", "https://linkedin.com/in/manon-roux", "Promotion 2025"));


    return this.etudiants;
  }
}
