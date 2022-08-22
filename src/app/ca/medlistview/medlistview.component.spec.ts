import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedlistviewComponent } from './medlistview.component';

describe('MedlistviewComponent', () => {
  let component: MedlistviewComponent;
  let fixture: ComponentFixture<MedlistviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedlistviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedlistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
