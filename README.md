# Weatherly

A web app that demos authentication and third party api use.

# Motivation

To demo authentication

# Build Status

Live: [here](https://sequelize-weather-auth.herokuapp.com/) on Heroku.

# Stack

- Node
- Express
- MySQL
- Sequelize
- jQuery

# 3rd Party APIs

- Open Weather Map [click](https://openweathermap.org/api)

# Requirements

- Node
- Nodemon
- MySQL server

# Setup

- clone to computer using:

```
git clone https://github.com/TS22082/sequelize-auth-materialize.git
```

- run npm install from inside the root directory.

```
npm install
```

Through the mySQL cli or SQL GUI if you have one installed run:

```
DROP DATABASE IF EXISTS dashboard_db;
CREATE DATABASE dashboard_db;
```

**_ Note: you will need accounts and api keys from the newsapi and open weather map._**

Create a .env file in root directory:

```
SECRET=soemhtingsupersecret
WEATHER_KEY=<openweather api key>
```

Start the project:

```
node server.js
```
