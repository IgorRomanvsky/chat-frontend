import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavBarComponent],
  exports: [NavBarComponent, CommonModule],
})
export class CoreModule {}
