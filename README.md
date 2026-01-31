# GOAT

This project matches users to basketball players based on their preferences and player attributes.

## Tech Stack

- C++ for the initial implementation
- Node.js, Express.js, JavaScript
- Fetch API
- Vanilla HTML/CSS

## Build and Run (Node.js)
/node

Run

npm install
npm start
 
Open browser and go to
http://localhost:3000


## Running the Basketball Matcher Backend with Docker

### Prerequisites
- [Docker CLI](https://docs.docker.com/get-docker/) installed and running  
- [Colima](https://github.com/abiosoft/colima) to run Docker locally if you’re on an older Mac without Docker Desktop, consider using 

### Build  Docker Image

From the backend folder (where your `Dockerfile` lives), run:

Run 

docker build -t basketball-backend .
docker run --rm -it -p 3000:3000 basketball-backend


## Build and Run (C++)
/cpp-version

Compile all source files with:

clang++ -std=c++17 main.cpp player_data.cpp match.cpp questionaire.cpp -o app

./app
