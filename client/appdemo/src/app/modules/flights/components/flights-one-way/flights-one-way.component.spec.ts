import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsOneWayComponent } from './flights-one-way.component';

describe('FlightsOneWayComponent', () => {
  let component: FlightsOneWayComponent;
  let fixture: ComponentFixture<FlightsOneWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsOneWayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightsOneWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
