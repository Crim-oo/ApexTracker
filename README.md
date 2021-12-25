# Apex Legends Stats Tracker
An web application that track a player's stats in the video game 'Apex Legends'. To develop this app, I used React for the front-end and Express/Node.js for the backend. For the backend, I created an API that recieves GET requests for a specified player (ex: /api/v1/profile/:platform/:gamertag) and then sends a GET requests to the [Tracker Network API](https://tracker.gg/developers) given the parameters from the request sent to my API. The Tracker Network then responds with a JSON response containing the player's stats. This JSON response was then parsed and displayed on the front-end.

## Technologies Used
- React
- Node.js
- Express.js

## Getting Started

1. Clone the repo

    ```bash
    git clone https://github.com/Crim-oo/ApexTracker.git
    ```

2. Set up the `client/server`

    Install the required dependencies:

    ```bash
    npm i 
    ```
     ```bash
    cd client/ && npm i 
    ```
    
    Set the variables in the `config.env` file:

    ```bash
    TRAKCER_API_KEY = Your Api Key here. Check out https://tracker.gg/developers for more informations.
    ```
    
3. Run the `application`
    
    Enter this command on the root of the project.
    
    ```bash
    npm run dev 
    ```

