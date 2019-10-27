import { NgModule } from "@angular/core";
import { Routes, RouterModule  } from "@angular/router";
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { FunctionComponent } from './components/function/function.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent , canActivate: [AuthGuardService] },
  { path: "home", component: HomeComponent },
  { path: "functions", component: FunctionComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
