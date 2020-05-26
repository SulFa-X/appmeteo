import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse, Forecast } from '../forecast';
import { ForecastApiService } from '../services/forecast-api.service';

@Component({
  selector: 'app-pictos',
  templateUrl: './pictos.component.html',
  styleUrls: ['./pictos.component.css']
})
export class PictosComponent implements OnInit {
  weatherResponse$: Observable<WeatherResponse>;

  constructor() { }

  ngOnInit(): void {
  }

  @Input() forecast: Forecast;

}
