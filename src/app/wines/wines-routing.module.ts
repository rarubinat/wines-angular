import { RouterModule, Routes } from "@angular/router";

import { AuthGuardService } from "../shared/guards/auth-guard.service";
import { NgModule } from "@angular/core";
import { WineDetailsComponent } from "./components/wine-details/wine-details.component";
import { WineListComponent } from "./components/wine-list/wine-list.component";
import { WineLoadResolverService } from "./services/wine-load-resolver.service";
import { WineNewComponent } from "./components/wine-new/wine-new.component";
import { WineNewDeactivateGuardService } from "../shared/guards/wine-new-deactivate-guard.service";

const routes: Routes = [
  {
    path: "list",
    component: WineListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "create",
    component: WineNewComponent,
    canActivate: [AuthGuardService],
    canDeactivate: [WineNewDeactivateGuardService],
  },
  {
    path: "wine/:id",
    component: WineDetailsComponent,
    canActivate: [AuthGuardService],
    resolve: { wine: WineLoadResolverService },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WinesRoutingModule {}
