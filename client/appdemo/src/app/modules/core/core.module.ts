import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { AirService } from "./services/air.service";
import { DataService } from "./services/data.service";

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    AirService,
    DataService
  ]
})
export class CoreModule {}