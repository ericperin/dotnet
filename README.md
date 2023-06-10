# dotnet
Example of ASP.NET Core project


## k6
Run k6 with the following command:
```shell
docker run --rm -i grafana/k6 run - <scripts/example.js
```
Run a load test with more than one virtual user and a longer duration:
```shell
docker run --rm -i grafana/k6 run --vus 10 --duration 30s - <scripts/example.js
```

## Help
[Hosting ASP.NET Core images with Docker Compose over HTTPS](https://learn.microsoft.com/en-us/aspnet/core/security/docker-compose-https)