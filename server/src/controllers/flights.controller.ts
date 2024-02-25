import express from 'express';
import axios, { AxiosResponse } from 'axios';
import { axiosRequestConfig } from '../config/api.constant';
import cheerio from 'cheerio';

const apiUrl = {
  goibibo: `https://www.goindigo.in/flight-booking.html?linkNav=Flights%7CBook%7CHeader%20Menu`,
  indigo: `https://www.goindigo.in/flight-booking.html`,
  airindia: `https://www.airindia.com/in/en/book/search-flights.html`
};
const destinationDropdownListQuerySelector = `destination-auto-suggestion-dropdown__results`
const baseUrl: string = 'https://www.tektutorialshub.com/angular-tutorial/';

const getAllFlights = async (req: express.Request, res: express.Response): Promise<any> => {
  const html = (await axios.get(apiUrl.airindia, axiosRequestConfig)).data;
  const $ = await cheerio.load(html);
  const result: any[] = [];

  // const articles = $('.main-menu li')
  //   for(let e of articles) {
  //     result.push(e.tagName);
  //   }
  //   console.log(result);
  $('.auto-complete-container input')
    const articles = $('.auto-complete-container .airport-country-detail')
    for(let e of articles) {
      result.push($(e).text());
    }
    // const data = articles.first().text();
    // articles
    console.log(result);
  return res.status(200).json();
}

// const getUserById = async (req: express.Request, res: express.Response): Promise<any> => {
//   axiosRequestConfig.params.id = req.params.id;
  
//   const result = await axios.get(baseURL, axiosRequestConfig )
//   return res.status(200).send(result.data);
  
// }


export { getAllFlights }