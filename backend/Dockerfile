# ---- Build stage ----
    FROM eclipse-temurin:21-jdk AS build
    WORKDIR /app
    
    # Leverage Docker layer caching for deps
    COPY backend/.mvn/ .mvn/
    COPY backend/mvnw backend/pom.xml ./
    RUN chmod +x mvnw
    RUN ./mvnw -q -DskipTests dependency:go-offline
    
    # Copy sources and build
    COPY backend/src ./src
    RUN ./mvnw -q -DskipTests package
    
    # ---- Runtime stage ----
    FROM eclipse-temurin:21-jre
    WORKDIR /app
    # Copy the fat jar (adjust the name if your artifactId/version differ)
    COPY --from=build /app/target/*.jar app.jar
    
    EXPOSE 8080
    # Pass DB config via env; Spring reads SPRING_* automatically
    ENTRYPOINT ["java","-jar","/app/app.jar"]