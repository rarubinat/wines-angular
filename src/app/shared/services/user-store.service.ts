import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserStoreService {
  private _token: string = null;
  constructor() {
    // Ejercicio 2.4
    this._token = localStorage.getItem("wine-token") || null;
  }

  set token(token: string) {
    this._token = token;
    // Ejercicio 2.4
    localStorage.setItem("wine-token", token);
  }

  get token() {
    return this._token;
  }

  isLoggedIn() {
    return this.token !== null;
  }
}
