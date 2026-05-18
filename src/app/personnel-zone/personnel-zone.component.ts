import { Component, OnInit } from '@angular/core';

import { PersonnelService } from '../../services/personnel-service.service';

import { Personnel } from '../../models/Personnel';

@Component({
  selector: 'app-personnel-zone',
  templateUrl: './personnel-zone.component.html',
  styleUrls: ['./personnel-zone.component.css']
})
export class PersonnelZoneComponent implements OnInit {
  personnels: Personnel[] = [];

  constructor(public personnelService: PersonnelService) { 

    this.personnels = this.personnelService.getPersonnels();
  
  }


  ngOnInit(): void {
  }

}
