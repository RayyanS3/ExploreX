//NPM/Native modules init
const exp = require('constants');
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const app = express();

//Middleware declerations
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//App functionality
const toursData = JSON.parse(
  fs.readFileSync(__dirname + '/dev-data/data/tours-simple.json')
);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

//Routes

userRouter.route('/').get(getAllUsers).post(addUser);

userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);
