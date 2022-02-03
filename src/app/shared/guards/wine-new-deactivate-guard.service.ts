import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from "@angular/router";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WineNewComponent } from "../../wines/components/wine-new/wine-new.component";

@Injectable({
  providedIn: "root",
})
export class WineNewDeactivateGuardService
  implements CanDeactivate<WineNewComponent> {
  constructor() {}

  canDeactivate(
    component: WineNewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return window.confirm("Do you want to navigate away from this page?");
  }
}
