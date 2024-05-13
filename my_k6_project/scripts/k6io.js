// This is a simple K6 script
import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
  scenarios: {
    example_scenario: { 
      // Executor type to use https://grafana.com/docs/k6/latest/using-k6/scenarios/#scenario-executors
      executor: 'shared-iterations',
      // common scenario configuration
      startTime: '10s',
      gracefulStop: '5s',
      env: { EXAMPLE_VAR: 'testing' },
      tags: { example_tag: 'testing' },
      // executor-specific configuration
      vus: 10,     
      maxDuration: '15m',
    }
  }
}

export default function () {
  http.get('http://test.k6.io');
  sleep(1);
}
