import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsrComponent } from './msr.component';

describe('MsrComponent', () => {
  let component: MsrComponent;
  let fixture: ComponentFixture<MsrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
