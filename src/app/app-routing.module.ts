import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormEnseignantComponent } from './form-enseignant/form-enseignant.component';
import { FormPersonnelComponent } from './form-personnel/form-personnel.component';
import { FormEtudiantComponent } from './form-etudiant/form-etudiant.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {path: 'home', component: HomeComponent},
  {path: 'addEtudiant', component: FormEtudiantComponent},
  {path: 'addPersonnel', component: FormPersonnelComponent},
  {path: 'addEnseignant', component: FormEnseignantComponent},
  { path: 'editEnseignant/:id', component: FormEnseignantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
