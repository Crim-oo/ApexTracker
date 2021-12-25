# Apex Legends Stats Tracker
An web application that track a player's stats in the video game 'Apex Legends'. To develop this app, I used React for the front-end and Express/Node.js for the backend. For the backend, I created an API that recieves GET requests for a specified player (ex: /api/v1/profile/:platform/:gamertag) and then sends a GET requests to the [Tracker Network API](https://tracker.gg/developers) given the parameters from the request sent to my API. The Tracker Network then responds with a JSON response containing the player's stats. This JSON response was then parsed and displayed on the front-end.

## Technologies Used
- React
- Node.js
- Express.js

## Getting Started

1. Clone the repo

    ```bash
    git clone https://github.com/Andrei0872/invoice-app.git
    ```

2. Set up the `client`

    Install the required dependencies:

    ```bash
    cd client/ && npm i && cd -
    ```
    
    Set the variables in the `.env` file:

    ```bash
    cp client/.env.example client/.env
    ```

    The `VUE_APP_CRONJOB_START_DATE` variable takes in a number which represents a date in milliseconds. If you set it to `NULL`, the *demo* mode is deactivated. Even if activated, it does nothing except from logging out the user after some certain time. That's because this feature is synchronized with a *cron job* that runs on the server. You can read more about it here.
    <!-- TODO: PROVIDE LINK -->

3. Set up the `server`

    Install the required dependencies:

    ```bash
    cd client/ && npm i && cd -
    ```

    Set the variables in the `.env` file:

    ```bash
    cp server/.env.example server/.env
    ```

    Create a key that will be used for creating **access tokens**:

    ```bash
    openssl rand -base64 32 > ./server/.key
    ```
