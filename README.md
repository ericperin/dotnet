# dotnet
Example of ASP.NET Core project


## [k6](https://k6.io/docs/get-started/running-k6/)
Run k6 with the following command:
```shell
docker run --rm -i grafana/k6 run - <scripts/example.js
```
Run a load test with more than one virtual user and a longer duration:
```shell
docker run --rm -i grafana/k6 run --vus 10 --duration 30s - <scripts/basic-test.js
```

### Smoke Test
Is the simplest type of performance test. It tests our application under minimal load, for a very short period of time. Its goals are to identify any apparent bugs or regressions. Because of these characteristics, it makes a great candidate to run on every commit or pull request, as we get fast feedback whilst not slowing our development process down too much.
```shell
docker run --rm -i grafana/k6 run - <scripts/smoke-test.js
```

### Load Test
Assesses our system performance under normal and peak conditions, the latter sometimes referred to as “Capacity Testing”. We mentioned that one of the keys to get the best results from performance testing is to know your goals, and this is critical for load testing. We might have 500 average users during the week,  then 2000 average users on the weekend.

For simplicity’s sake, let’s define our “normal” load as 5 users, and “peak” as 20.
```shell
docker run --rm -i grafana/k6 run - <scripts/load-test.js
```
### Stress Test
Our previous load test is concerned with testing the system under normal load. Stress testing, on the other hand, is concerned with putting the system under extreme pressure, to understand its choke point. These insights can inform decisions like how many servers are needed, how much RAM/CPU is needed, etc. A great example of a stress test, back to our eCommerce example is a “1-hour sale” promotion. During this time, we expect much more load than normal.

Knowing the limits of the system is a bit of trial and error. We can generally start with doubling our normal load conditions, and go from there.
```shell
docker run --rm -i grafana/k6 run - <scripts/stress-test.js
```
### Spike Test
Similar to the stress test, its purpose is to put the system under extreme pressure. Unlike the stress test however which ramps up traffic slowly, the spike test adds an excessive amount of load immediately. This could happen if there was a sudden surge in traffic as a result of a marketing campaign, or maybe some scrapers decide they want to steal content from our API.
```shell
docker run --rm -i grafana/k6 run - <scripts/spike-test.js
```
### Soak Test
This test is concerned with testing our application over an extended period of time, perhaps hours. The purpose of this test is to uncover things like memory leaks, infrastructure issues, or strange bugs relating to the state over a long period of time.
```shell
docker run --rm -i grafana/k6 run - <scripts/soak-test.js
```

## Help
- [Hosting ASP.NET Core images with Docker Compose over HTTPS](https://learn.microsoft.com/en-us/aspnet/core/security/docker-compose-https)
- [Performance testing](https://code-maze.com/aspnetcore-performance-testing-with-k6/)