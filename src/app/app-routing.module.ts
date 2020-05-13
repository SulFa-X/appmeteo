import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeekComponent } from './week/week.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './core/layout/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'forecast',
    component: WeekComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
