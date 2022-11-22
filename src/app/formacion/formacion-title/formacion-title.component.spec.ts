import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionTitleComponent } from './formacion-title.component';

describe('FormacionTitleComponent', () => {
  let component: FormacionTitleComponent;
  let fixture: ComponentFixture<FormacionTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacionTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormacionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
