import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiganticSquidComponent } from './gigantic-squid.component';

describe('GiganticSquidComponent', () => {
  let component: GiganticSquidComponent;
  let fixture: ComponentFixture<GiganticSquidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiganticSquidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiganticSquidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
