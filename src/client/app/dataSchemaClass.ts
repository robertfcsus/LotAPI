export interface ILot {
    lotId: number;                  // Unique ID for parking lot on campus
    lotState : string;              // States = {Available, Suspended}
    lotType : string;               // Types = {Faculty, Residence, Student}
    lotName: string;                // School assigned name
    lotVacancy: number;             // Current number of available spaces
    lotGeoLat: string;              // Latitude used for Google Maps API
    lotGeoLong: string;             // Longitude  used for Google Maps API
    lotDescription: string;         // User-friendly description
}

export interface ISpace {
    spaceId: number;                // Unique ID for a parking lot space
    spaceState: string;             // States = {Available, Occupied, Suspended}
    spaceReserved: boolean;         // Boolean bit used to reserve available space for user
    spaceGeoLat: string;            // Latitude used for Google Maps API
    spaceGeoLong: string;           // Longitude used for Google Maps API
}

export interface IDestination {
    destinationId: number;          // Unique ID for destination on campus (e.g., library, classroom)
    destinationTitle: string;       // School assigned title of the destination
    destinationDescription: string; // User-friendly description
}

export class Lot implements ILot {
    lotId: number;                  
    lotState : string;
    lotType : string;        
    lotName: string;                
    lotVacancy: number;             
    lotGeoLat: string;              
    lotGeoLong: string;             
    lotDescription: string;
}

export class LotSpace implements ISpace{
    spaceId: number;
    spaceState: string;
    spaceReserved: boolean;
    spaceGeoLat: string;
    spaceGeoLong: string;
}

export class LotSpaceAvailable implements ISpace{
    spaceId: number;
    spaceState: string;
    spaceReserved: boolean;
    spaceGeoLat: string;
    spaceGeoLong: string;
}

export class Destination {
    destinationId: number;
    destinationTitle: string;
    destinationDescription: string;
}