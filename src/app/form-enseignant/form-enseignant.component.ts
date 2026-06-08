import { Component, OnInit, } from '@angular/core';
import { Enseignant } from 'src/models/Enseignant';
import { EnseignantService } from 'src/services/enseignant-service.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-form-enseignant',
  templateUrl: './form-enseignant.component.html',
  styleUrls: ['./form-enseignant.component.css']
})
export class FormEnseignantComponent implements OnInit {
 enseignant: Enseignant = Enseignant.empty();
  isEditMode: boolean = false; // Pour distinguer entre ajout et modification
  idEnseignant!: number;

  constructor(
    public enseignantService: EnseignantService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Vérifier si on est en mode édition (si un id est présent dans l'URL)
    this.idEnseignant = this.route.snapshot.params['id'];
    if (this.idEnseignant) {
      this.isEditMode = true;
      this.loadEnseignant();
    }
  }

  // Charger les données de l'enseignant à modifier
  loadEnseignant() {
    this.enseignantService.getEnseignantById(this.idEnseignant).subscribe(
      data => {
        this.enseignant = data;
      },
      error => {
        console.error('Erreur lors du chargement:', error);
      }
    );
  }

  // Ajouter un enseignant
  add() {
    this.enseignant.photo = "./assets/enseignant.webp";
    this.enseignantService.addEEnseignant(this.enseignant).subscribe(
      data => {
        this.enseignant = data;
        console.log('Enseignant ajouté avec succès');
        this.router.navigate(['/home']); // Rediriger vers la liste
      },
      error => {
        console.error('Erreur lors de l\'ajout:', error);
      }
    );
  }

  // Modifier un enseignant
  update() {
    this.enseignantService.updateEnseignant(this.idEnseignant, this.enseignant).subscribe(
      data => {
        this.enseignant = data;
        console.log('Enseignant modifié avec succès');
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Erreur lors de la modification:', error);
      }
    );
  }

  // Supprimer un enseignant
  delete() {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet enseignant ?')) {
      this.enseignantService.deleteEnseignant(this.idEnseignant).subscribe(
        () => {
          console.log('Enseignant supprimé avec succès');
          this.router.navigate(['/home']);
        },
        error => {
          console.error('Erreur lors de la suppression:', error);
        }
      );
    }
  }

  onSubmit() {
    if (this.isEditMode) {
      this.update();
    } else {
      this.add();
    }
  }


}
