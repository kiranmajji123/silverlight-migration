import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedtabsComponent } from './medtabs.component';

describe('MedtabsComponent', () => {
  let component: MedtabsComponent;
  let fixture: ComponentFixture<MedtabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedtabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
