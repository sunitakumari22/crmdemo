import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeechartComponent } from './feechart.component';

describe('FeechartComponent', () => {
  let component: FeechartComponent;
  let fixture: ComponentFixture<FeechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeechartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
