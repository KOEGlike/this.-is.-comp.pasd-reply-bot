# Use Node.js LTS version
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY main.ts ./
COPY .env ./

# Expose port (optional, since you're using Socket Mode)
# EXPOSE 3000

# Start the application
CMD ["npm", "start"]