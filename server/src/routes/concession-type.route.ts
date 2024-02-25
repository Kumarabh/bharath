import express from 'express';
import { getAllConcessionTypes } from '../controllers/concession-type.controller';
const concessionTypes = express.Router();

concessionTypes.route('/')
.get(getAllConcessionTypes)

export default concessionTypes;
