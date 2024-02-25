import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: `app-navbar`,
  templateUrl: `./navbar.component.html`,
  styleUrls: [`./navbar.component.scss`]
})
export class NavbarComponent implements OnInit {
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  mobileQuery!: MediaQueryList;


  constructor() {}

  ngOnInit(): void {
      console.log('==> navbar component');
  }
  
}