import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FlightsComponent } from "./components/flights/flights.component";

const routes: Routes = [
  { path: '', component: FlightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SearchFlightsRoutingModule {

}