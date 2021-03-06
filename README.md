# ZOHO - Contact Management Application
This a basic contact management application for managing contacts. It currently uses MongoDB for the database and FeathersJS for the REST API server.


##  How to install

```bash

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
```


## How to run
Ensure you have mongodb installed in your system and that it is running

### Start the backend server
Start the backend server first:

```bash
cd react-contact-manager/backend
npm start
```
This will run the backend server at localhost:3030. If all is working well, you should be able to access the url http://localhost:3030/contacts from your Browser or Postman

### Start the client
Open a separate terminal to start the client:

```bash
cd react-contact-manager
npm start
```

Your default web browser will be launched automatically with the url http://localhost:3000

### This project is currently hosted at https://coho-ontact-manager.herokuapp.com/lists/ and is not connected with the feathersjs API Server due to the deployment unavailability.


