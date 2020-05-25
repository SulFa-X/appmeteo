export interface Forecast {
    insee: string;
    day: number;
    weather: number;
    rr10: number;
    tmin: number;
    tmax:number;
    datetime: string;
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