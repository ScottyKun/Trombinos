import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantService } from '../../services/enseignant-service.service';
import { Enseignant } from '../../models/Enseignant';

@Component({
  selector: 'app-enseignant-zone',
  templateUrl: './enseignant-zone.component.html',
  styleUrls: ['./enseignant-zone.component.css']
})
export class EnseignantZoneComponent implements OnInit {

  enseignants: Enseignant[] = [];

  constructor(
    public enseignantService: EnseignantService,
    private router: Router
  ) { 
    this.loadEnseignants();
  }

  ngOnInit(): void {
  }

  loadEnseignants() {
    this.enseignantService.getEnseignants().subscribe(data => {
      this.enseignants = data;
    });
  }

  // Méthode pour supprimer un enseignant
  deleteEnseignant(id: number | undefined) {
    if (id && confirm('Êtes-vous sûr de vouloir supprimer cet enseignant ?')) {
      this.enseignantService.deleteEnseignant(id).subscribe(() => {
        console.log('Enseignant supprimé avec succès');
        this.loadEnseignants(); // Recharger la liste après suppression
      }, error => {
        console.error('Erreur lors de la suppression:', error);
      });
    }
  }

  // Méthode pour naviguer vers le formulaire de modification
  updateEnseignant(id: number | undefined) {
    if (id) {
      this.router.navigate(['/editEnseignant', id]);
    }
  }
}