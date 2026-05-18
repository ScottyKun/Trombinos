import { Component, OnInit } from '@angular/core';

import { EnseignantService } from '../../services/enseignant-service.service';
import { Enseignant } from '../../models/Enseignant';

@Component({
  selector: 'app-enseignant-zone',
  templateUrl: './enseignant-zone.component.html',
  styleUrls: ['./enseignant-zone.component.css']
})
export class EnseignantZoneComponent implements OnInit {

  enseignants: Enseignant[] = [];

  constructor(public enseignantService: EnseignantService) { 
    
    this.enseignants = this.enseignantService.getEnseignants();

  }

  ngOnInit(): void {
  }

}
