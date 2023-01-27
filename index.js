const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } =require('./middlewares/errors.handler');

const app = express();
const port = 3010;


app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port);
