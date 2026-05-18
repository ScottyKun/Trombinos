import { Injectable } from '@angular/core';
import { Enseignant } from '../models/Enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  enseignants: Enseignant[] = []

  constructor() { }

  getEnseignants(): Enseignant[] {
    this.enseignants.push(new Enseignant("Martin", "Sophie", "sophie.martin@universite.fr", 612345678, "./assets/enseignant.webp", "Bâtiment A - Bureau 201", "LIP6", "Intelligence Artificielle"));
    this.enseignants.push(new Enseignant("Dubois", "Thomas", "thomas.dubois@universite.fr", 623456789, "./assets/enseignant.webp", "Bâtiment B - Bureau 105", "LIRMM", "Bases de données"));
    this.enseignants.push(new Enseignant("Laurent", "Claire", "claire.laurent@universite.fr", 634567890, "./assets/enseignant.webp", "Bâtiment C - Bureau 312", "IRISA", "Réseaux neuronaux"));
    this.enseignants.push(new Enseignant("Bernard", "Nicolas", "nicolas.bernard@universite.fr", 645678901, "./assets/enseignant.webp", "Bâtiment D - Bureau 408", "LAAS", "Robotique autonome"));
    this.enseignants.push(new Enseignant("Petit", "Julie", "julie.petit@universite.fr", 656789012, "./assets/enseignant.webp", "Bâtiment E - Bureau 203", "INRIA", "Traitement du langage naturel"));

    return this.enseignants;
  }
}
