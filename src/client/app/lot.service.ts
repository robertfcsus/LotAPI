import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Lot } from './dataSchemaClass';

const api = '/api';

@Injectable()
export class LotService {
    constructor(private http: HttpClient) {}

    getLots() {
        console.log(`Calling get lots `);
        return this.http.get<Array<Lot>>(`${api}/lots`);
    }

    addLot(aLot: Lot) {
        return this.http.post<Lot>(`${api}/lot/`, aLot);
    } 
 
    updateLot(aLot: Lot) {
        return this.http.put<Lot>(`${api}/lot/${aLot.lotId}`, aLot);
    } 

    deleteLot(aLot: Lot) {
        return this.http.delete(`${api}/lot/${aLot.lotId}`);
    } 

}