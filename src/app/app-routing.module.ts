import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BetComponent } from './bet/bet.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{
  path: "",
  redirectTo: "list",
  pathMatch: "full"
}, {
  path: "list",
  component: ListComponent
}, {
  path: "bet",
  component: BetComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
