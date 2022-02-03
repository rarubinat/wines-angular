import { Observable, of } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Wine } from "../models/wine";

@Injectable({
  providedIn: "root",
})
export class WineService {
  private API_ENDPOINT = "http://localhost:3000/api/wine";
  constructor(private httpClient: HttpClient) {}

  getWines(): Observable<Wine[]> {
    return this.httpClient.get<Wine[]>(this.API_ENDPOINT);
  }
  getWine(wineID: number): Observable<Wine> {
    return this.httpClient.get<Wine>(`${this.API_ENDPOINT}/${wineID}`);
  }

  changeQuantity(wineID: number, changeInQuantity: number): Observable<Wine> {
    return this.httpClient.patch<Wine>(`${this.API_ENDPOINT}/${wineID}`, {
      changeInQuantity,
    });
  }

  create(wine: Wine): Observable<any> {
    return this.httpClient.post<Wine>(this.API_ENDPOINT, wine);
  }
}
