# Use a lightweight Node.js base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present)
# to leverage Docker's build cache for dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your Express app listens on (e.g., 3000)
EXPOSE 7777

# Define the command to run your application when the container starts
CMD ["npm", "run", "start"] 