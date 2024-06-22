import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapperTypeComponent } from './papper-type.component';

describe('PapperTypeComponent', () => {
  let component: PapperTypeComponent;
  let fixture: ComponentFixture<PapperTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PapperTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PapperTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
