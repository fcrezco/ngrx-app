import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesModifierComponent } from './states-modifier.component';

describe('StatesModifierComponent', () => {
  let component: StatesModifierComponent;
  let fixture: ComponentFixture<StatesModifierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatesModifierComponent]
    });
    fixture = TestBed.createComponent(StatesModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
