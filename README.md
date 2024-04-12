# Weather API from Rapid API
The Weather API from Rapid API is built using Node.js, Express.js, and Rapid API,  The API allows for viewing the Weather Summary by city name, and Weather hourly forecast  by city

Tech Stack:
- Node.js: A JavaScript runtime environment that allows running JavaScript on the server-side.
- Express.js: A web application framework for Node.js, used for handling server-side logic and creating RESTful APIs.



## Setup

   After cloning, use "npm install" and serve the app using "node server". The example provided here are from Postman.
## 1. View Weather Summary by city

```js
    http://127.0.0.1:8000/api/v1/weather/summary/delhi
```
Here we can replace the  delhi by the desired city nama and we will get data as shown below

![Postman image for weather summary](/assets/ss.png)


## 2. View Weather hourly by city

```js
    http://127.0.0.1:8000/api/v1/weather/hourly/delhi
```