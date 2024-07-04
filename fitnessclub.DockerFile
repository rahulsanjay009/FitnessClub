# Use an official Node.js runtime as a parent image
FROM node:10.16.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy only the necessary files for running the application
COPY dist ./dist
COPY user-api.js ./
COPY server.js ./

# Expose the port your app runs on
EXPOSE 8080

# Define the command to run your app
CMD ["node", "server.js"]
