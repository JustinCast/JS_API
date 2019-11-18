import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { AddFunctionComponent } from "./components/dashboard/add-function/add-function.component";
import { ShowFunctionsComponent } from "./components/dashboard/show-functions/show-functions.component";
import { EditFunctionComponent } from "./components/dashboard/edit-function/edit-function.component";
import { AceEditorModule } from 'ng2-ace-editor';
@NgModule({
  declarations: [
    DashboardComponent,
    AddFunctionComponent,
    ShowFunctionsComponent,
    EditFunctionComponent,
  ],
  imports: [
    CommonModule,
    AceEditorModule,
    AdminRoutingModule,
    SharedModule
  ],
  exports: [DashboardComponent],
  entryComponents: [EditFunctionComponent],
})
export class AdminModule {}
