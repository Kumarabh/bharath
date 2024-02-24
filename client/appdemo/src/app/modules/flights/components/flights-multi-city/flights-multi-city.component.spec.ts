import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsMultiCityComponent } from './flights-multi-city.component';

describe('FlightsMultiCityComponent', () => {
  let component: FlightsMultiCityComponent;
  let fixture: ComponentFixture<FlightsMultiCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsMultiCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightsMultiCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
