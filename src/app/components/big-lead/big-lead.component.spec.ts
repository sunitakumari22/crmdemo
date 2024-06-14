import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigLeadComponent } from './big-lead.component';

describe('BigLeadComponent', () => {
  let component: BigLeadComponent;
  let fixture: ComponentFixture<BigLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigLeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
