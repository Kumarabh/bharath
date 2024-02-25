import express from 'express';
import { getAllClassTypes } from '../controllers/class-type.controller';
const classTypeRoutes = express.Router();

classTypeRoutes.route('/')
.get(getAllClassTypes)

export default classTypeRoutes;

