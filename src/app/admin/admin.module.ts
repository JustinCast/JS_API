import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { AddFunctionComponent } from './components/dashboard/add-function/add-function.component';
import { ShowFunctionsComponent } from './components/dashboard/show-functions/show-functions.component';

@NgModule({
  declarations: [DashboardComponent, AddFunctionComponent, ShowFunctionsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MonacoEditorModule.forRoot()
  ],
  exports: [
    DashboardComponent
  ]
})
export class AdminModule { }
