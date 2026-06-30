import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSlider } from './shared-slider';

describe('SharedSlider', () => {
  let component: SharedSlider;
  let fixture: ComponentFixture<SharedSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedSlider],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedSlider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
