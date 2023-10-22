import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoyStickButtonComponent } from './joy-stick-button.component';

describe('JoyStickButtonComponent', () => {
  let component: JoyStickButtonComponent;
  let fixture: ComponentFixture<JoyStickButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoyStickButtonComponent]
    });
    fixture = TestBed.createComponent(JoyStickButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
