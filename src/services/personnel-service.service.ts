import { Injectable } from '@angular/core';
import { Personnel } from '../models/Personnel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {
  private apiUrl = 'http://localhost:3000/personnels';

  constructor(private http: HttpClient) { }

  getPersonnels(): Observable<Personnel[]> {
    return this.http.get<Personnel[]>(this.apiUrl);
  }

  getPersonnelById(id: number): Observable<Personnel> {
    return this.http.get<Personnel>(`${this.apiUrl}/${id}`);
  }

  addPersonnel(personnel: Personnel): Observable<Personnel> {
    return this.http.post<Personnel>(this.apiUrl, personnel);
  }

  updatePersonnel(id: number, personnel: Personnel): Observable<Personnel> {
    return this.http.put<Personnel>(`${this.apiUrl}/${id}`, personnel);
  }

  deletePersonnel(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

 
}
