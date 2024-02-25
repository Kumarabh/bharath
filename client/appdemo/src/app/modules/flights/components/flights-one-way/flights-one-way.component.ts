import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { AirService } from 'src/app/modules/core/services/air.service';
import { DataService } from 'src/app/modules/core/services/data.service';
import { IAirportResponse, IClassTypeResponse, IConcessionTypeResponse } from 'src/app/modules/shared/models/model';

@Component({
  selector: 'app-flights-one-way',
  templateUrl: './flights-one-way.component.html',
  styleUrls: ['./flights-one-way.component.scss']
})
export class FlightsOneWayComponent implements OnInit, OnDestroy{
  flightsForm!: FormGroup;
  minDate = new Date();
  maxDate = new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate());

  // auto-complete
  options: string[] = ["One", "Two", "Three"];
  filteredOptionsFrom!: Observable<string[]> | undefined;
  filteredOptionsTo!: Observable<string[]> | undefined;
  concessionTypesDropdown: any;
  classTypesDropdown: any;
  airportListDropdown: any;
  classTypesSubscription!: Subscription;
  concessionTypeSubscription!: Subscription;
  getAirportsSubscription!: Subscription;

  constructor(private fb: FormBuilder, private airService: AirService, private dataService: DataService) {}

  ngOnInit() {
    this.createForm();
    this.setAutoComplete();
    this.getAirports();
    this.getClassTypes();
    this.getConcessionTypes();
  }

  getConcessionTypes() {
    this.concessionTypeSubscription = this.dataService.getConcessionTypes().subscribe((response: IConcessionTypeResponse) => {
      this.concessionTypesDropdown = response.responsePayload.domainValues;
    })
  }

  getClassTypes() {
    this.classTypesSubscription = this.dataService.getClassTypes().subscribe((response: IClassTypeResponse) => {
      this.classTypesDropdown = response.responsePayload.domainValues;
    })
  }

  getAirports() {
    this.getAirportsSubscription = this.airService.getAirports().subscribe((response: IAirportResponse) => {
      console.log('==> airports', response.responsePayload.data);
      this.airportListDropdown = response.responsePayload.data
    })
  }

  setAutoComplete() {
    this.filteredOptionsFrom = this.flightsForm.get('from')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filterFrom(value || '')),
    );

    this.filteredOptionsTo = this.flightsForm.get('to')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filterTo(value || '')),
    );
  }

  private _filterFrom(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log('=> value', value, '==> airport Name', this.airportListDropdown[0].attributes.airportName);
    return this.airportListDropdown.filter((data: any) => data.attributes.airportName.toLowerCase().includes(filterValue));
  }

  private _filterTo(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  createForm() {
    this.flightsForm = this.fb.group({
      from: new FormControl('', [ Validators.required ]),
      to: new FormControl('', [ Validators.required ]),
      departureDate: new FormControl(new Date(), [ Validators.required ]),
      returnDate: new FormControl(new Date(), [ Validators.required ]),
      travellers: new FormGroup({
        noOfAdults: new FormControl(1, [ Validators.required ]),
        noOfChildren: new FormControl(1, [ Validators.required ]),
        noOfInfants: new FormControl(1, [ Validators.required ])
      }),
      classType: new FormControl('ECONOMY', [ Validators.required ]),
      concessionType: new FormControl('none', [ Validators.required ])
    })
  }

  onSubmit() {
    console.log('flightsForm', this.flightsForm.valid);
  }

  ngOnDestroy(): void {
      this.classTypesSubscription.unsubscribe();
      this.getAirportsSubscription.unsubscribe();
      this.concessionTypeSubscription.unsubscribe();
  }
}
