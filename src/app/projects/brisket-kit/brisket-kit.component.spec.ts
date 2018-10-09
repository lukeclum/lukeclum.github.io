import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrisketKitComponent } from './brisket-kit.component';

describe('BrisketKitComponent', () => {
  let component: BrisketKitComponent;
  let fixture: ComponentFixture<BrisketKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrisketKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrisketKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
