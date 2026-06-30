import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCsv } from './home-csv';

describe('HomeCsv', () => {
  let component: HomeCsv;
  let fixture: ComponentFixture<HomeCsv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCsv],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCsv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
