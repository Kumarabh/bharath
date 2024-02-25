import express from 'express';
import { getAllFlights } from '../controllers/flights.controller';
const flightsRoutes = express.Router();

flightsRoutes.route('/')
.get(getAllFlights)

export default flightsRoutes;

