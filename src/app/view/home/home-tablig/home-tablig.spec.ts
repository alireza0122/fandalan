import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTablig } from './home-tablig';

describe('HomeTablig', () => {
  let component: HomeTablig;
  let fixture: ComponentFixture<HomeTablig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTablig],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTablig);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
