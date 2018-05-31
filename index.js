require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');


const movieRoutes = require('./routes/movies');



app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.bodyParser({extended: true}));


app.get('/', (request, response) => {
  response.send('movie-crud: Slash route is working!');
});

app.use('/movies', movieRoutes);

app.listen(PORT, () => {
  console.log(`movie-crud: Application listening on port no. ${process.env.PORT}...`);
});
