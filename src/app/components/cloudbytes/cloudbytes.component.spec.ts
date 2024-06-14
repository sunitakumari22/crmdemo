import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudbytesComponent } from './cloudbytes.component';

describe('CloudbytesComponent', () => {
  let component: CloudbytesComponent;
  let fixture: ComponentFixture<CloudbytesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudbytesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudbytesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
