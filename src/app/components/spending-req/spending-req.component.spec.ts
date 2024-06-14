import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingReqComponent } from './spending-req.component';

describe('SpendingReqComponent', () => {
  let component: SpendingReqComponent;
  let fixture: ComponentFixture<SpendingReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpendingReqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpendingReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
