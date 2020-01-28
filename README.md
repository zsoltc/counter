## Setup without Docker

Run `npm install` 

### Running only the client React app

Run `npm start` 

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Running with Flask server

Run `npm run build` to create a prod build in the `build` folder.

Run `npm run flask` to start the Flask server. It will serve the client files and expose the random api.

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### Running tests

Run `npm test` 

## Setup with Docker

Run `docker-compose up`

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.
