import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTextoComponent } from './footer-texto.component';

describe('FooterTextoComponent', () => {
  let component: FooterTextoComponent;
  let fixture: ComponentFixture<FooterTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterTextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
