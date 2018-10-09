import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JouleCookViewComponent } from './joule-cook-view.component';

describe('JouleCookViewComponent', () => {
  let component: JouleCookViewComponent;
  let fixture: ComponentFixture<JouleCookViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JouleCookViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JouleCookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
