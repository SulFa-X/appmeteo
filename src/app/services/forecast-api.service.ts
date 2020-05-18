import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { WeatherResponse } from '../forecast';

@Injectable({
  providedIn: 'root'
})
export class ForecastApiService {

  constructor(private http: HttpClient) { }

  fcRequest(): Observable<WeatherResponse> {
    const insee = "83116";
    const token = '08ddcc5675b44ea1f2c567010e544d25c47ca45a8392efc9ff693e471ebee936';
    const url = `https://api.meteo-concept.com/api/forecast/daily?insee=${insee}&token=${token}`;
    const headers = {
      Accept: 'application/json',
    };
    return this.http.get<WeatherResponse>(url, {headers});
  }
}