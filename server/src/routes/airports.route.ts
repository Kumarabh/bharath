import express from 'express';
import { getAllAirports } from '../controllers/airports.controller';
const airportRoutes = express.Router();

airportRoutes.route('/')
.get(getAllAirports)

export default airportRoutes;

