import { NgModule, Input } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { CoreModule } from "../core/core.module";
import { TablePageComponent } from "./table-page/table-page.component";
import { TableRouts } from "./table-routing.module";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    MatTableModule,
    RouterModule.forChild(TableRouts),
  ],
  declarations: [TablePageComponent],
  exports: [],
})
export class TableModule {}
