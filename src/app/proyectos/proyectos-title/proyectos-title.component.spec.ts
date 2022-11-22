import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosTitleComponent } from './proyectos-title.component';

describe('ProyectosTitleComponent', () => {
  let component: ProyectosTitleComponent;
  let fixture: ComponentFixture<ProyectosTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
