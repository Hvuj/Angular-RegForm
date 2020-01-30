import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  // {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'', component:HomeComponent},
  {path:'Home', component:HomeComponent},
  {path:'Form', component:FormComponent},
  {path:'**', component:PageNotFoundComponent}
  //wildcard route always should be the last!
  //because the routes begin from the top, so 1st it tries to find it if not then it uses it
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  FormComponent,
  PageNotFoundComponent,
];

