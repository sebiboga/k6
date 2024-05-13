// This is a simple K6 script
import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
  scenarios: {
    constant_request_rate: {
      executor: 'ramping-vus',
      startVUs: 10,
      stages: [
        { duration: '15m', target: 10 }, // ramp up to 10 VUs over 15 minutes, and stay at 10 VUs for 15 minutes
      ],
      gracefulRampDown: '0s',
    },
  },
};

export default function () {
  http.get('http://test.k6.io');
  sleep(1);
}
