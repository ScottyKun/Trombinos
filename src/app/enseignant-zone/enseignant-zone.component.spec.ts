import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantZoneComponent } from './enseignant-zone.component';

describe('EnseignantZoneComponent', () => {
  let component: EnseignantZoneComponent;
  let fixture: ComponentFixture<EnseignantZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignantZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnseignantZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
