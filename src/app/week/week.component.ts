import { Component, OnInit } from '@angular/core';
import { WeatherResponse } from '../forecast';
import { ForecastApiService } from '../services/forecast-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  weatherResponse$: Observable<WeatherResponse[]>;

  weekDays = ['lun.' , 'mar.' , 'mer.' , 'jeu.' , 'ven.' , 'sam.' , 'dim.'];

  constructor(private forecastApi: ForecastApiService) { }

  ngOnInit(): void {
    this.weatherResponse$ = this.forecastApi.fcRequest();
  }

}
