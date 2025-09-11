FROM nginx:1.29.1-alpine

RUN apk update && apk upgrade --no-cache

COPY react-frontend/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]