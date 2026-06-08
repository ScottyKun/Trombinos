import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EtudiantZoneComponent } from './etudiant-zone/etudiant-zone.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EnseignantZoneComponent } from './enseignant-zone/enseignant-zone.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { PersonnelZoneComponent } from './personnel-zone/personnel-zone.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { EnseignantService } from 'src/services/enseignant-service.service';
import { EtudiantService } from 'src/services/etudiant-service.service';
import { PersonnelService } from 'src/services/personnel-service.service';
import { EtudiantPipe } from './etudiant-pipe.pipe';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';
import { FormEnseignantComponent } from './form-enseignant/form-enseignant.component';
import { FormPersonnelComponent } from './form-personnel/form-personnel.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantZoneComponent,
    EtudiantComponent,
    EnseignantZoneComponent,
    EnseignantComponent,
    PersonnelZoneComponent,
    PersonnelComponent,
    EtudiantPipe,
    NavComponent,
    HomeComponent,
    FormEtudiantComponent,
    FormEnseignantComponent,
    FormPersonnelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [
    EnseignantService,
    EtudiantService,
    PersonnelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
