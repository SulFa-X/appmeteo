import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

export interface Forecast {
    insee: string;
    day: number;
    weather: number;
}
