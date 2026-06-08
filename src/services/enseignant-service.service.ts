import { Injectable } from '@angular/core';
import { Enseignant } from '../models/Enseignant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private apiUrl = 'http://localhost:3000/enseignants';
  
    constructor(private http: HttpClient) { }
  
    getEnseignants(): Observable<Enseignant[]> {
      return this.http.get<Enseignant[]>(this.apiUrl);
    }
  
    getEnseignantById(id: number): Observable<Enseignant>{
      return this.http.get<Enseignant>(`${this.apiUrl}/${id}`);
    }
  
    addEEnseignant(enseignant: Enseignant): Observable<Enseignant>{
      return this.http.post<Enseignant>(this.apiUrl, enseignant);
    }
  
    updateEnseignant(id:number, enseignant:Enseignant): Observable<Enseignant>{
      return this.http.put<Enseignant>(`${this.apiUrl}/${id}`, enseignant);
    }
  
    deleteEnseignant(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
