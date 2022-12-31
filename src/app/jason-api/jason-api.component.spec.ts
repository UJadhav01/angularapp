import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JasonApiComponent } from './jason-api.component';

describe('JasonApiComponent', () => {
  let component: JasonApiComponent;
  let fixture: ComponentFixture<JasonApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JasonApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JasonApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
