import http from 'k6/http';
import { sleep } from 'k6';
// import * as config from './config.js';
const API_BASE_URL = 'http://host.docker.internal:5225';

export const options = {
    vus: 1,
    duration: '1m',

    thresholds: {
        http_req_duration: ['p(95)<1000']
    },
};

export default function () {
    http.get(API_BASE_URL + "/WeatherForecast");
    sleep(1);
}