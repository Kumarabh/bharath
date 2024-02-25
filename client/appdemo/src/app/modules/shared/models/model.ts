export interface IClassTypeResponse {
  "code": string;
  "message": string,
  "extendedMessage": null,
  "status": "SUCCESS" | "FAILED",
  "hasError": boolean,
  "responsePayload": {
    "domainValues": IClassTypeDomainValues[]
  }
}

export interface IClassTypeDomainValues {
  "id": number,
  "attributes": {
    "classValue": string,
    "className": string
  }
}

export interface IConcessionTypeResponse {
  "code": string;
  "message": string,
  "extendedMessage": null,
  "status": "SUCCESS" | "FAILED",
  "hasError": boolean,
  "responsePayload": {
    "domainValues": IConcessionTypeDomainValues[]
  }
}

export interface IConcessionTypeDomainValues {
  "id": number,
  "attributes": {
    "concessionValue": string,
    "Title": string,
    "Title_slug": string
  }
}


export interface IAirportResponse {
  "code": string;
  "message": string,
  "extendedMessage": null,
  "status": "SUCCESS" | "FAILED",
  "hasError": boolean,
  "responsePayload": {
    "data": IAirport[]
  }
}

export interface IAirport {
  id: number;
  attributes: {
    "airportCity": string,
    "airportCode": string,
    "airportName": string,
    "countryCode": string,
    "countryName": string,
    "createdAt": string,
    "latitude": number,
    "longitude": number,
    "publishedAt": string,
    "updatedAt": string,
    "isPopular": boolean
  }
}