import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Component } from "@angular/core";
import { Wine } from "src/app/wines/models/wine";
import { WineService } from "../../services/wine.service";
import { wineNameValidator } from "src/app/wines/validators/wine-name.validator";

@Component({
  selector: "app-wine-new",
  templateUrl: "./wine-new.component.html",
  styleUrls: ["./wine-new.component.css"],
})
export class WineNewComponent {
  public message = "";

  public wineForm: FormGroup;

  constructor(private fb: FormBuilder, private wineService: WineService) {
    this.createForm();
  }

  createForm() {
    this.wineForm = this.fb.group({
      name: ["", [Validators.required, wineNameValidator()]],
      price: [0, [Validators.required, Validators.min(1)]],
      imageUrl: ["", [Validators.required]],
      isOnSale: false,
    });
  }

  createWine() {
    if (this.wineForm.invalid) {
      this.message = "Please correct all errors and resubmit the form";
    } else {
      const wine: Wine = this.wineForm.value;
      this.wineService.create(wine);
    }
  }
}
