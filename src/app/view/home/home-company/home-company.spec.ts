import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompany } from './home-company';

describe('HomeCompany', () => {
  let component: HomeCompany;
  let fixture: ComponentFixture<HomeCompany>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCompany],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCompany);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
