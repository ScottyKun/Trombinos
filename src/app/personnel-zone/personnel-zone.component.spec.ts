import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelZoneComponent } from './personnel-zone.component';

describe('PersonnelZoneComponent', () => {
  let component: PersonnelZoneComponent;
  let fixture: ComponentFixture<PersonnelZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnelZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
