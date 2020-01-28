# API Project: Timestamp Microservice for FCC

This project was built as part of the [FreeCodeCamp curriculum](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice).

https://timestamp-microservice.allymurray.com

## Built with

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [CORS](https://github.com/expressjs/cors)
- [dotenv](https://github.com/motdotla/dotenv)

### Development tools

- [ESLint](https://eslint.org)
- [Jest](https://jestjs.io)
- [nodemon](https://nodemon.io)
- [SuperTest](https://github.com/visionmedia/supertest)

## User stories :

1. The API endpoint is `GET [project_url]/api/timestamp/:date_string?`
2. A date string is valid if can be successfully parsed by `new Date(date_string)` (JS) . Note that the unix timestamp needs to be an **integer** (not a string) specifying **milliseconds**. In our test we will use date strings compliant with ISO-8601 (e.g. `"2016-11-20"`) because this will ensure a UTC timestamp.
3. If the date string is **empty** it should be equivalent to trigger `new Date()`, i.e. the service uses the current timestamp.
4. If the date string is **valid** the api returns a JSON having the structure
   `{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }`
   e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`.
5. If the date string is **invalid** the api returns a JSON having the structure `{"unix": null, "utc" : "Invalid Date" }`. It is what you get from the date manipulation functions used above.

### Example usage:

- https://timestamp-microservice.allymurray.com/api/timestamp/2020-08-20
- https://timestamp-microservice.allymurray.com/api/timestamp/1601510400000

### Example output:

- { "unix": 1597618800000, "utc": "Fri, 17 July 2020 00:00:00 GMT" }
