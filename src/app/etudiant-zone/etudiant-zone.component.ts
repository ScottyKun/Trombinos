import { Component, OnInit } from '@angular/core';

import { EtudiantService } from '../../services/etudiant-service.service';
import { Etudiant } from '../../models/Etudiant';

@Component({
  selector: 'app-etudiant-zone',
  templateUrl: './etudiant-zone.component.html',
  styleUrls: ['./etudiant-zone.component.css']
})
export class EtudiantZoneComponent implements OnInit {
  etudiants: Etudiant[] = [];

  constructor(public etudiantService: EtudiantService) { 
    this.etudiantService.getEtudiants().subscribe(data=>{
      this.etudiants=data
    })
  }


  ngOnInit(): void {
  }

}
