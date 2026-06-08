import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Enseignant } from '../../models/Enseignant';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  @Input() enseignant!: Enseignant;
  @Output() delete = new EventEmitter<number>();
  @Output() update = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.delete.emit(this.enseignant.id);
  }

  onUpdate() {
    this.update.emit(this.enseignant.id);
  }
}