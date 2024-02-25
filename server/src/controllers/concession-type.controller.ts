
import express from 'express';
import path from 'path';

const getAllConcessionTypes = async (req: express.Request, res: express.Response): Promise<any> => {
  const absolutePath = path.resolve(__dirname, '../assets/concession-type.json');
  return res.status(200).sendFile(absolutePath);
  
}

export { getAllConcessionTypes }