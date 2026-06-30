import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeValid } from './home-valid';

describe('HomeValid', () => {
  let component: HomeValid;
  let fixture: ComponentFixture<HomeValid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeValid],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeValid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
