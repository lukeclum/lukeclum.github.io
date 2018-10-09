import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPartialComponent } from './project-partial.component';

describe('ProjectPartialComponent', () => {
  let component: ProjectPartialComponent;
  let fixture: ComponentFixture<ProjectPartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
