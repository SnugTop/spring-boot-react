.EXPORT_ALL_VARIABLES:
include .env

run-backend:
	cd backend && ./mvnw -q spring-boot:run

run-frontend:
	cd react-frontend && npm run start
