import { Injectable } from '@angular/core';

import { Personnel } from '../models/Personnel';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {
  personnels: Personnel[] = [];

  constructor() { }

  getPersonnels(): Personnel[] {
    this.personnels.push(new Personnel("Rousseau", "Sylvie", "sylvie.rousseau@universite.fr", 612345678, "./assets/personnel.webp", "Bâtiment Admin - Bureau 101", "Scolarité", "@sylvie_rousseau"));
    this.personnels.push(new Personnel("Girard", "Philippe", "philippe.girard@universite.fr", 623456789, "./assets/personnel.webp", "Bâtiment Admin - Bureau 205", "RH", "@philippe_girard"));
    this.personnels.push(new Personnel("Leroy", "Céline", "celine.leroy@universite.fr", 634567890, "./assets/personnel.webp", "Bâtiment Admin - Bureau 308", "Comptabilité", "@celine_leroy"));
    this.personnels.push(new Personnel("Mercier", "David", "david.mercier@universite.fr", 645678901, "./assets/personnel.webp", "Bâtiment Admin - Bureau 112", "Bibliothèque", "@david_mercier"));
    this.personnels.push(new Personnel("Blanc", "Marion", "marion.blanc@universite.fr", 656789012, "./assets/personnel.webp", "Bâtiment Admin - Bureau 407", "Communication", "@marion_blanc"));

    return this.personnels;
  }
}
