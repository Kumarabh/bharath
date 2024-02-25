
import express from 'express';
import path from 'path';

const getAllAirports = async (req: express.Request, res: express.Response): Promise<any> => {
  const absolutePath = path.resolve(__dirname, '../assets/airport-content.json');
  return res.status(200).sendFile(absolutePath);
  
}

export { getAllAirports }