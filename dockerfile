# Use a base Node.js image with the desired version
FROM node:20.9.0

# Set the working directory inside the container
WORKDIR /app

# Copy both package.json and the rest of the application code to the working directory
COPY . ./

# Install dependencies
RUN npm install

# Expose the port that the Ember.js server will run on
EXPOSE 4200

# Define the command to start the Ember.js server
CMD ["npx", "ember", "serve"]
