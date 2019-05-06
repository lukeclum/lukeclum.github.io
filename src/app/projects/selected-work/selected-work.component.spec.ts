import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedWorkComponent } from './selected-work.component';

describe('SelectedWorkComponent', () => {
  let component: SelectedWorkComponent;
  let fixture: ComponentFixture<SelectedWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
