import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompanies } from './home-companies';

describe('HomeCompanies', () => {
  let component: HomeCompanies;
  let fixture: ComponentFixture<HomeCompanies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCompanies],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCompanies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
