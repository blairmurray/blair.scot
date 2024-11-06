# Build stage
FROM node:20-slim as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Copy the built files
COPY out/ ./out/

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/out /usr/share/nginx/html

# Configure nginx to handle SPA routing
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]