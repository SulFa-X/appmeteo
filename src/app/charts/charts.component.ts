import { Component, OnInit } from '@angular/core';
import { WeatherResponse } from '../forecast';
import { ForecastApiService } from '../services/forecast-api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Chart, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  chart$: Observable<{data: ChartDataSets[], labels: Label[]}>;


  constructor(private forecastApi: ForecastApiService) { }

  ngOnInit(): void {  
    this.chart$ = this.forecastApi.fcRequest()
    .pipe(
      map(weatherResponse => {
        const data: ChartDataSets[] = [];
        data.push({
          data: weatherResponse.forecast.map(item => item.tmax),
          label: 'T° max'
        });
        data.push({
          data: weatherResponse.forecast.map(item => item.tmin),
          label: 'T° min'
        });
        const labels: Label[] = null;
        return {data, labels};
      })
    );
  }

}