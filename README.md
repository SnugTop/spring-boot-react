# Spring Boot React Tutorial Application
## Overview
A fullstack project, using Spring Boot + Postgres for the backend and React for the frontend.

## Dependencies
- Java 21
- NPM
- Docker

## Backend Operations
### Build
```shell
make build-backend
```

### Test
```shell
make test-backend
```

### Run Backend
```shell
make run-backend
```

## Frontend Operations
### Build Frontend
```shell
make build-frontend
```

### Run Frontend
```shell
make run-frontend
```

## Local Environment
Using Docker and Docker Compose, we can trivially provision a Postgres DB instance. This env is seeded with the 
appropriate schema and some initial test data for a rapid and convenient development feedback loop.

### Credentials for Postgres
```
user: admin
pass: admin
```

### Create Local Environment
```shell
make local-env-create
```

### Stop Local Environment
```shell
make local-env-stop
```

### Start Local Environment
```shell
make local-env-start
```

### Teardown Local Environment
```shell
make local-env-teardown
```
