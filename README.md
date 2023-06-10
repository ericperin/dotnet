# dotnet
Example of ASP.NET Core project


## k6
Run a load test with more than one virtual user and a longer duration:
```shell
docker run --rm -i grafana/k6 run --vus 10 --duration 30s - <scripts/example.js
```