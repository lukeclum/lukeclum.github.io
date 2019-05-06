import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JouleDesignSystemComponent } from './joule-design-system.component';

describe('JouleDesignSystemComponent', () => {
  let component: JouleDesignSystemComponent;
  let fixture: ComponentFixture<JouleDesignSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JouleDesignSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JouleDesignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
