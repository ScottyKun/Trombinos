import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/models/Etudiant';
import { EtudiantService } from 'src/services/etudiant-service.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.css']
})
export class FormEtudiantComponent implements OnInit {

  etudiant :Etudiant = Etudiant.empty();

  constructor(public etudiantService: EtudiantService, private router: Router) { }

  ngOnInit(): void {
  }

  add(){
    this.etudiant.photo="./assets/etudiant.webp"
    this.etudiantService.addEtudiant(this.etudiant).subscribe(
      data=>{
        this.etudiant=data
      }
    )

    this.router.navigate(['/home']);
  }

}
