import { ActivatedRouteSnapshot, Resolve } from "@angular/router";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Wine } from "../models/wine";
import { WineService } from "../services/wine.service";

@Injectable({
  providedIn: "root",
})
export class WineLoadResolverService implements Resolve<Wine> {
  constructor(private wineService: WineService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Wine | Observable<Wine> | Promise<Wine> {
    const wineID = +route.paramMap.get("id");
    return this.wineService.getWine(wineID);
  }
}
