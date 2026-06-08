import { Component, OnInit } from '@angular/core';
import { Personnel } from 'src/models/Personnel';
import { PersonnelService } from 'src/services/personnel-service.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-form-personnel',
  templateUrl: './form-personnel.component.html',
  styleUrls: ['./form-personnel.component.css']
})
export class FormPersonnelComponent implements OnInit {
  personnel : Personnel = Personnel.empty();

  constructor(public personnelService: PersonnelService, private router: Router) { }

  ngOnInit(): void {
  }

  add(){
    this.personnel.photo = "./assets/images/personnel.webp";
    this.personnelService.addPersonnel(this.personnel).subscribe(
      data=>{
        this.personnel=data
      }
    )
    this.router.navigate(['/home']);
  }

}
