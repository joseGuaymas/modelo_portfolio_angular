import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAboutComponent } from './text-about.component';

describe('TextAboutComponent', () => {
  let component: TextAboutComponent;
  let fixture: ComponentFixture<TextAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
