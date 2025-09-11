FROM node:22-alpine

# Apply OS security patches in this layer
RUN apk update && apk upgrade --no-cache

# Create non-root workspace owned by the node user (uid 1000)
WORKDIR /app
RUN chown -R node:node /app
USER node

# Install deps with caching
COPY react-frontend/package*.json ./
RUN npm ci --no-audit --fund=false

# App sources
COPY --chown=node:node react-frontend/ .

EXPOSE 3000
CMD ["npm","run","start"]