import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    thresholds: {
        http_req_duration: [
            { threshold: 'p(90) < 100', abortOnFail: false },
            { threshold: 'p(95) < 200', abortOnFail: false },
            { threshold: 'p(99) < 300', abortOnFail: false }
        ]
    },
};

export default () => {
    http.get('http://host.docker.internal:5225/WeatherForecast');
}