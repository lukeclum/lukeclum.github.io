import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoulePackagingComponent } from './joule-packaging.component';

describe('JoulePackagingComponent', () => {
  let component: JoulePackagingComponent;
  let fixture: ComponentFixture<JoulePackagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoulePackagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoulePackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
