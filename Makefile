.PHONY: run-backend run-frontend

run-backend:
	source .env && cd backend && ./mvnw spring-boot:run

run-frontend:
	cd react-frontend && npm run start