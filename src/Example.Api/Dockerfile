FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["src/Example.Api/Example.Api.csproj", "src/Example.Api/"]
RUN dotnet restore "src/Example.Api/Example.Api.csproj"
COPY . .
WORKDIR "/src/src/Example.Api"
RUN dotnet build "Example.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Example.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Example.Api.dll"]
