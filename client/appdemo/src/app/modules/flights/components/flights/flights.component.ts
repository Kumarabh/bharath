import { Component, OnInit } from "@angular/core";

@Component({
  selector: `app-flights`,
  templateUrl: `./flights.component.html`,
  styleUrls: [`./flights.component.scss`]
})
export class FlightsComponent implements OnInit {
  badgevisible = false;
  constructor() {}

  ngOnInit(): void {
      console.log('==> navbar component');
  }
  
  badgevisibility() {
    this.badgevisible = true;
  }
}