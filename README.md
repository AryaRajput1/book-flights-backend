# Welcome to Flights Backend

## Project Setup
- Clone project
- There are total `3` microservice(s)
    - Go to FlightSearch Microservice. Type `cd flightSearch`.
    - Type `npm install`
    - Now you have to do db setup
        - Create a config.json file inside config folder. i.e. `src/config/config.json`
        - Paste below code 
        ```json
        {
            "development": {
                "username": <YOUR_DB_USERNAME>,
                "password": <YOUR_DB_PASSWORD>,
                "database": "Flights_SearchDB",
                "host": "127.0.0.1",
                "dialect": "mysql"
            }
        }
        ```
        - Now type `npx sequelize-cli db:create` 

## Project Pattern

- This Project follows controller service repository pattern for each db model i.e. City