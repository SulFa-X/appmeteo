import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

export interface Forecast {
    insee: string;
    day: number;
    weather: number;
}

export interface City {
    insee: string;
    cp: number;
    name: string;
    latitude: number;
    longitude: number;
    altitude: number;
}

export interface WeatherResponse {
    city: City;
    update: string;
    forecast: Forecast[];
}