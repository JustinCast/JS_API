import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AddFunctionComponent } from './components/dashboard/add-function/add-function.component';
import { ShowFunctionsComponent } from './components/dashboard/show-functions/show-functions.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "add-function", component: AddFunctionComponent
      },
      {
        path: "show-functions", component: ShowFunctionsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
