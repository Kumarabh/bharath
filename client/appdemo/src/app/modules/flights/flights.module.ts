import { NgModule } from "@angular/core";
import { FlightsComponent } from "./components/flights/flights.component";
import { FlightsRoutingModule } from "./flights-routing.module";
import { FlightsOneWayComponent } from './components/flights-one-way/flights-one-way.component';
import { FlightsRoundTripComponent } from './components/flights-round-trip/flights-round-trip.component';
import { FlightsMultiCityComponent } from './components/flights-multi-city/flights-multi-city.component';

@NgModule({
  declarations: [
    FlightsComponent,
    FlightsOneWayComponent,
    FlightsRoundTripComponent,
    FlightsMultiCityComponent
  ],
  imports: [
    FlightsRoutingModule
  ]
})
export class FlightsModule {
  
}