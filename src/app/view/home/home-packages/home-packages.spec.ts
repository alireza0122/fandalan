import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePackages } from './home-packages';

describe('HomePackages', () => {
  let component: HomePackages;
  let fixture: ComponentFixture<HomePackages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePackages],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePackages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
