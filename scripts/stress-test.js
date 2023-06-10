import http from 'k6/http';
import { sleep } from 'k6';
// import * as config from './config.js';
const API_BASE_URL = 'http://host.docker.internal:5225';

export const options = {
    stages: [
        { duration: '5s', target: 5 },
        { duration: '30s', target: 5 },
        { duration: '5s', target: 20 },
        { duration: '30s', target: 20 },
        { duration: '5s', target: 100 },
        { duration: '30s', target: 100 },
        { duration: '5s', target: 200 },
        { duration: '30s', target: 200 },
        { duration: '5s', target: 0 },
    ],
    thresholds: {
        http_req_duration: ['p(90) < 100', 'p(95) < 200', 'p(99.9) < 500'],
    },
};

export default () => {
    http.get(API_BASE_URL + "/WeatherForecast");
};