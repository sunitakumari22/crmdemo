import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudashboardComponent } from './cloudashboard.component';

describe('CloudashboardComponent', () => {
  let component: CloudashboardComponent;
  let fixture: ComponentFixture<CloudashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
