import { Etudiant } from '../models/Etudiant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiUrl = 'http://localhost:3000/etudiants';

  constructor(private http: HttpClient) { }

  getEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.apiUrl);
  }

  getEtudiantById(id: number): Observable<Etudiant>{
    return this.http.get<Etudiant>(`${this.apiUrl}/${id}`);
  }

  addEtudiant(etudiant: Etudiant): Observable<Etudiant>{
    return this.http.post<Etudiant>(this.apiUrl, etudiant);
  }

  updateEtudiant(id:number, etudiant:Etudiant): Observable<Etudiant>{
    return this.http.put<Etudiant>(`${this.apiUrl}/${id}`, etudiant);
  }

  deleteEtudiant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  
}
