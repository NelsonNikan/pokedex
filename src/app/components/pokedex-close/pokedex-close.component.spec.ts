import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexCloseComponent } from './pokedex-close.component';

describe('PokedexCloseComponent', () => {
  let component: PokedexCloseComponent;
  let fixture: ComponentFixture<PokedexCloseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexCloseComponent]
    });
    fixture = TestBed.createComponent(PokedexCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
