import { Component, Input, OnInit } from '@angular/core';
import { Etudiant } from '../../models/Etudiant';
import { EtudiantPipe } from '../etudiant-pipe.pipe';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  @Input() etudiant!: Etudiant;

  constructor() { }

  ngOnInit(): void {
  }

}

