import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IClassTypeResponse, IConcessionTypeResponse } from "../../shared/models/model";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  getConcessionTypes(): Observable<IConcessionTypeResponse> {
    return this.http.get<IConcessionTypeResponse>(environment.baseUrl + 'concession-type');
  }

  getClassTypes(): Observable<IClassTypeResponse> {
    return this.http.get<IClassTypeResponse>(environment.baseUrl + 'class-type');
  }
}