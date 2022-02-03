import { HttpEvent, HttpInterceptor } from "@angular/common/http";
import { HttpHandler, HttpRequest } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserStoreService } from "./user-store.service";

@Injectable()
export class WineAppInterceptor implements HttpInterceptor {
  constructor(private userStore: UserStoreService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("INTERCEPTING");
    if (this.userStore.token) {
      console.log("INTERCEPTING, HAS TOKEN");
      const authReq = req.clone({
        headers: req.headers.set("X-AUTH-HEADER", this.userStore.token),
      });
      console.log("Making an authorized request");
      req = authReq;
    }
    return next.handle(req);
  }
}
