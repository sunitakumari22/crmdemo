import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicSeasonComponent } from './academic-season.component';

describe('AcademicSeasonComponent', () => {
  let component: AcademicSeasonComponent;
  let fixture: ComponentFixture<AcademicSeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicSeasonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
