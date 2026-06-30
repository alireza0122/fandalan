import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEvents } from './home-events';

describe('HomeEvents', () => {
  let component: HomeEvents;
  let fixture: ComponentFixture<HomeEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeEvents],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeEvents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
