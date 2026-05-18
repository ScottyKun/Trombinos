import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantZoneComponent } from './etudiant-zone.component';

describe('EtudiantZoneComponent', () => {
  let component: EtudiantZoneComponent;
  let fixture: ComponentFixture<EtudiantZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
