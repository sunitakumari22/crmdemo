import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingheaderComponent } from './settingheader.component';

describe('SettingheaderComponent', () => {
  let component: SettingheaderComponent;
  let fixture: ComponentFixture<SettingheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
