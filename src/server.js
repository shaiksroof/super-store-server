const express = require('express');
const app = express();
require('./db/conn');
const indexRouter = require('./routes/indexRouter');
const userRouter = require('./routes/userRouter');
const errorHandler = require('./errorHandler');


app.use(express.json());

app.use('/', indexRouter);
app.use('/user', userRouter, errorHandler);

app.listen(3000, () => {
  console.log(`Server started @ ${3000}`);
});
