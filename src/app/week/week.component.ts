import { Component, OnInit } from '@angular/core';
import { Forecast } from '../forecast';
import { ForecastApiService } from '../services/forecast-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {
  forecastTable$: Observable<Forecast[]>;

  constructor(private forecastApi: ForecastApiService) { }

  ngOnInit(): void {
    this.forecastTable$ = this.forecastApi.fcRequest();
  }

}
