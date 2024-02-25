import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IAirportResponse } from "../../shared/models/model";

@Injectable()
export class AirService {

  constructor(private http: HttpClient) {}

  getAirports(): Observable<IAirportResponse> {
    return this.http.get<IAirportResponse>(environment.baseUrl + 'airports');
  }

}