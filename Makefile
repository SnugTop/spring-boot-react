.EXPORT_ALL_VARIABLES:
-include .env

# Compose file
COMPOSE_FILE := .local/docker-compose.yaml

# Image tags
BACKEND_IMAGE := spring-boot-react-backend:dev
FRONTEND_IMAGE := spring-boot-react-frontend:dev

# -------- Backend (host) --------
build-backend:
	cd backend && ./mvnw clean install -DskipTests

test-backend:
	cd backend && ./mvnw test

run-backend:
	cd backend && ./mvnw -q spring-boot:run

# -------- Frontend (host) --------
build-frontend:
	cd react-frontend && npm install

run-frontend: build-frontend
	cd react-frontend && npm run start

# -------- Docker images --------
docker-build-backend: build-backend
	docker build -t $(BACKEND_IMAGE) -f backend/Dockerfile .

docker-build-frontend: build-frontend
	docker build -t $(FRONTEND_IMAGE) -f react-frontend/Dockerfile .

docker-build-all: docker-build-backend docker-build-frontend

# -------- Docker Compose (local) --------
compose-up:
	docker compose -f $(COMPOSE_FILE) up   

compose-down:
	docker compose -f $(COMPOSE_FILE) down -v

compose-logs:
	docker compose -f $(COMPOSE_FILE) logs -f

compose-ps:
	docker compose -f $(COMPOSE_FILE) ps

compose-restart:
	docker compose -f $(COMPOSE_FILE) restart


local-env-create:
	docker compose -f $(COMPOSE_FILE) up  
local-env-stop:
	docker compose -f $(COMPOSE_FILE) stop

local-env-start:
	docker compose -f $(COMPOSE_FILE) start

local-env-teardown:
	docker compose -f $(COMPOSE_FILE) down -v