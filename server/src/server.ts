require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import flightsRoutes from './routes/flights.route';
import airportRoutes from './routes/airports.route';
import classTypeRoutes from './routes/class-type.route';
import concessionTypes from './routes/concession-type.route';
const morgan = require('morgan');
const { default: helmet } = require('helmet');

const app = express();

app.use(cors({origin:'*'}))
app.use(morgan('common'))
app.use(helmet())
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}))

app.use(cors({origin: '*'}));

// app.use('/api/v1/users', verifyToken, userRoutes);
app.use('/api/v1/flights', flightsRoutes)
app.use('/api/v1/airports', airportRoutes)
app.use('/api/v1/class-type', classTypeRoutes)
app.use('/api/v1/concession-type', concessionTypes)


app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
