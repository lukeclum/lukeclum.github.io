import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioAppComponent } from './studio-app.component';

describe('StudioAppComponent', () => {
  let component: StudioAppComponent;
  let fixture: ComponentFixture<StudioAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudioAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
