import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PrCardInt } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getCards(): Observable<PrCardInt[]> {
    return this.http.get<PrCardInt[]>('assets/data.json');
  }
  getCardsByNumber(ids: number[]): Observable<PrCardInt[]> {
    return this.http.get<PrCardInt[]>('assets/data.json').pipe(
      map((cards: PrCardInt[]) => {
        return cards.filter(card => card.id !== undefined && ids.includes(card.id));
      })
    );
  }
}