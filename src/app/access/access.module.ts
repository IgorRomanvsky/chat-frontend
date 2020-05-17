import { NgModule } from "@angular/core";
import { AccessPageComponent } from "./pages/access-page/access-page.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AccessRoutes } from "./access-routing.module";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { InstructionsComponent } from "./components/instructions/instructions.component";

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(AccessRoutes),
  ],
  declarations: [
    AccessPageComponent,
    LoginFormComponent,
    InstructionsComponent,
  ],
  exports: [AccessPageComponent, LoginFormComponent],
})
export class AccessModule {}
