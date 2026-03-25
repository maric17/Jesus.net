# Stage 1: Build the Next.js app
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies first (better caching)
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the code and build
COPY . .
# Ensure your next.config.js has 'output: "export"'
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default NGINX static files
RUN rm -rf ./*

# Copy the static build from the builder stage
# Next.js exports to the 'out' folder by default
COPY --from=builder /app/out .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]