import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaTitleComponent } from './experiencia-title.component';

describe('ExperienciaTitleComponent', () => {
  let component: ExperienciaTitleComponent;
  let fixture: ComponentFixture<ExperienciaTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
