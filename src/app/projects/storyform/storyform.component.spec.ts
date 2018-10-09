import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryformComponent } from './storyform.component';

describe('StoryformComponent', () => {
  let component: StoryformComponent;
  let fixture: ComponentFixture<StoryformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
