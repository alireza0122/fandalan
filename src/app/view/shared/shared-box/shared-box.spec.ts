import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBox } from './shared-box';

describe('SharedBox', () => {
  let component: SharedBox;
  let fixture: ComponentFixture<SharedBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedBox],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
