import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsRoundTripComponent } from './flights-round-trip.component';

describe('FlightsRoundTripComponent', () => {
  let component: FlightsRoundTripComponent;
  let fixture: ComponentFixture<FlightsRoundTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsRoundTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightsRoundTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
