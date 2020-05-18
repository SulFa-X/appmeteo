import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeekComponent } from './week/week.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './core/layout/header/header.component';
import { PageNotFoundComponent } from './core/layout/page-not-found/page-not-found.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    WeekComponent,
    HomePageComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
