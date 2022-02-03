import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { Wine } from "src/app/wines/models/wine";
import { WineQuantityChange } from "src/app/wines/models/wine-quantity-change";
import { WineService } from "../../services/wine.service";

@Component({
  selector: "app-wine-list",
  template: `
    <app-wine-item
      [wine]="wine"
      (quantityChange)="onQuantityChange($event)"
      *ngFor="let wine of wines$ | async"
    ></app-wine-item>
  `,
  styles: [],
})
export class WineListComponent implements OnInit {
  public wines$: Observable<Wine[]>;
  constructor(private wineService: WineService) {}

  ngOnInit() {
    this.wines$ = this.wineService.getWines();
  }
  onQuantityChange(change: WineQuantityChange) {
    this.wineService.changeQuantity(change.wine.id, change.changeInQuantity);
  }
}
