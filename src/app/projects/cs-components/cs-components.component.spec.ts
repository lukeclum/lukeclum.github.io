import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsComponentsComponent } from './cs-components.component';

describe('CsComponentsComponent', () => {
  let component: CsComponentsComponent;
  let fixture: ComponentFixture<CsComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
