FROM node:lts-alpine

# Installing yarn, serve static server and svgo for svg optimisations
RUN npm install yarn
RUN yarn global add serve svgo

# Setting the working directory
WORKDIR /instrumentality

COPY package.json ./
COPY yarn.lock ./

# Install all dependencies
RUN yarn install

# Copy project files
COPY . .

# Run svgo on all assets
RUN svgo -f ./src/assets/AccountDetails

# Build app
RUN yarn build

# Port for serving the app
EXPOSE 8000

# Serve the site
CMD [ "serve", "-l", "8000", "-s", "-C", "dist/instrumentality" ]