import { Component, OnInit } from '@angular/core';
import { WeatherResponse } from '../forecast';
import { ForecastApiService } from '../services/forecast-api.service';
import { Observable } from 'rxjs';
import { Chart } from 'chart.js';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  weatherResponse$: Observable<WeatherResponse[]>;


  chart = [];

  constructor(private forecastApi: ForecastApiService) { }

  ngOnInit(): void {
    this.weatherResponse$ = this.forecastApi.fcRequest();

    let temp_max = [];
    let temp_min = [];
    let dates = [];

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            data:temp_max,
            borderColor: '#3cba9f',
            fill: false
          },
          {
            data: temp_min,
            borderColor: '#ffcc00',
            fill: false
          }
        ]
      },
      options: {
        legend : {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    })
  }

}