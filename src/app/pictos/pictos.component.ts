import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../forecast';
import { ForecastApiService } from '../services/forecast-api.service';

@Component({
  selector: 'app-pictos',
  templateUrl: './pictos.component.html',
  styleUrls: ['./pictos.component.css']
})
export class PictosComponent implements OnInit {
  weatherResponse$: Observable<WeatherResponse>;


  constructor(private forecastApi: ForecastApiService) { }

  ngOnInit(): void {
    this.weatherResponse$ = this.forecastApi.fcRequest();
  }

}
