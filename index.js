const express = require('express');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json') 

const router = express.Router();
const app = express();

app.use(express.json()); 
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3000, () => {
  console.log(`Running on 3000`);
});
