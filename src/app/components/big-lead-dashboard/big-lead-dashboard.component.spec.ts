import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigLeadDashboardComponent } from './big-lead-dashboard.component';

describe('BigLeadDashboardComponent', () => {
  let component: BigLeadDashboardComponent;
  let fixture: ComponentFixture<BigLeadDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigLeadDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigLeadDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
