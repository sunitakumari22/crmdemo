import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqMsgComponent } from './faq-msg.component';

describe('FaqMsgComponent', () => {
  let component: FaqMsgComponent;
  let fixture: ComponentFixture<FaqMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqMsgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
