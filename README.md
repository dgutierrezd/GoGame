# GoGame - To Do App

To Do application built with Node.js for the backend and React Native for the frontend.

## Table of Contents

- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)

## Backend Setup

1. Clone the backend repository:

   ```sh
   git clone https://github.com/dgutierrezd/GoGame.git
   cd GoGame
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add the necessary environment variables. An example `.env` file might look like this:

   ```env
   PORT=3000
   DB_NAME=todo_db
   DB_USER=dgutierrezd
   DB_PASS=
   DB_HOST=localhost
   ```

   Don't forget to create the database on PostgreSQL!

4. Start the backend server:

   ```sh
   npm start
   ```

   The backend server should now be running on `http://localhost:3000`.

## Frontend Setup

1. Clone the frontend repository (React Native):

   ```sh
   git clone https://github.com/dgutierrezd/GoGameApp.git
   cd GoGameApp
   ```

2. Install the dependencies:

   ```sh
   yarn install
   ```

3. Start the React Native development server:

   ```sh
   yarn start
   ```

4. Run the application on your device or emulator:

   For iOS:

   ```sh
   yarn run ios
   ```

   For Android:

   ```sh
   yarn run android
   ```

## Running the Application

1. Ensure the backend server is running.
2. Ensure the React Native development server is running.
3. Open the React Native app on your device or emulator. The app should connect to the backend server and you should be able to add your to do items.
