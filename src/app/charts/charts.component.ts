import { Component, OnInit } from '@angular/core';
import { WeatherResponse } from '../forecast';
import { ForecastApiService } from '../services/forecast-api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Chart, ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { NumberFormatStyle } from '@angular/common';
import { componentFactoryName, BoundElementProperty } from '@angular/compiler';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  chart$: Observable<{data: ChartDataSets[], labels: Label[]}>;

  options: ChartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: 'rgba(0,255,0,0.9)'
      }
    },
    scales: {
      xAxes: [
          {
              ticks: {
                  fontColor: 'rgba(25, 25, 25, 0.9)'
              },
              scaleLabel: {
                  display: true,
                  labelString: 'Jour',
                  fontColor: 'rgba(25, 25, 25, 0.5)'
              }
          }
      ],
      yAxes: [
          {
              ticks: {
                  callback: function(label, index, labels) {
                      return label + '°C';
                  },
                  fontColor: 'rgba(0, 0, 0, 0.9)'
              },
              scaleLabel: {
                  display: true,
                  labelString: 'Température',
                  fontColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      ]
    }
  }

  constructor(private forecastApi: ForecastApiService) { }

  ngOnInit(): void {  
    this.chart$ = this.forecastApi.fcRequest()
    .pipe(
      map(weatherResponse => {
        const data: ChartDataSets[] = [];
        data.push({
          data: weatherResponse.forecast.map(item => item.tmax),
          label: 'T° max',
          fill: false,
          borderColor:  'rgba(255, 0, 0, 0.8)'
        });
        data.push({
          data: weatherResponse.forecast.map(item => item.tmin),
          label: 'T° min',
          fill: false,
          borderColor:  'rgba(0, 0, 255, 0.8)'
        });
        const labels: Label[] = weatherResponse.forecast.map(item => { const date = new Date(item.datetime);
                                                                        return date.toLocaleDateString('fr-FR', {weekday: 'short', day: 'numeric'}) } );
        return {data, labels};
      })
    );
  }

}

