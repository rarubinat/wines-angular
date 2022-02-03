import { CanActivate, Router } from "@angular/router";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserStoreService } from "../services/user-store.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(private userStore: UserStoreService, private router: Router) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    console.log("AuthGuard#canActivate called");

    if (this.userStore.isLoggedIn()) {
      return true;
    }

    console.log("AuthGuard#canActivate not authorized to access page");
    // Can store current route and redirect back to it
    // Store it in a service, add it to a query param
    this.router.navigate(["login"]);

    return false;
  }
}
