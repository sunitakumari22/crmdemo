import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqdashboardComponent } from './faqdashboard.component';

describe('FaqdashboardComponent', () => {
  let component: FaqdashboardComponent;
  let fixture: ComponentFixture<FaqdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
