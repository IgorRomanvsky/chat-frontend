import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./shared/services/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./access/access.module#AccessModule",
  },
  {
    path: "table",
    loadChildren: "./table/table.module#TableModule",
  },
  {
    canActivate: [AuthGuard],
    path: "chat",
    loadChildren: "./chat/chat.module#ChatModule",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
