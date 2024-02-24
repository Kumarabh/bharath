import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: `app-navbar`,
  templateUrl: `./navbar.component.html`,
  styleUrls: [`./navbar.component.scss`]
})
export class NavbarComponent implements OnInit {
  badgevisible = false;
  searchForm!: FormGroup;
  dataResult: any;
  cartLength: any;
  userLoggedIn: any;

  constructor() {}

  ngOnInit(): void {
      console.log('==> navbar component');
  }
  
  badgevisibility() {
    this.badgevisible = true;
  }
}