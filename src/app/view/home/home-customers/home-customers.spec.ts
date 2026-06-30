import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCustomers } from './home-customers';

describe('HomeCustomers', () => {
  let component: HomeCustomers;
  let fixture: ComponentFixture<HomeCustomers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCustomers],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCustomers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
