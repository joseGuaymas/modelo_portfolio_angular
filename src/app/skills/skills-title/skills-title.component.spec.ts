import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTitleComponent } from './skills-title.component';

describe('SkillsTitleComponent', () => {
  let component: SkillsTitleComponent;
  let fixture: ComponentFixture<SkillsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
