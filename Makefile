.EXPORT_ALL_VARIABLES:
-include .env


# Backend Operations
build-backend:
	cd backend && ./mvnw clean install -DskipTests

test-backend:
	cd backend && ./mvnw test

run-backend:
	cd backend && ./mvnw -q spring-boot:run


# Frontend Operations
build-frontend:
	cd react-frontend && npm install

run-frontend: build-frontend
	cd react-frontend && npm run start


# Local Environment
COMPOSE_FILE='.local/docker-compose.yaml'

local-env-create:
	docker compose -f $(COMPOSE_FILE) up -d

local-env-stop:
	docker compose -f $(COMPOSE_FILE) stop

local-env-start:
	docker compose -f $(COMPOSE_FILE) start

local-env-teardown:
	docker compose -f $(COMPOSE_FILE) down -v
