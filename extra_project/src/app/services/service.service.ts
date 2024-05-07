import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PrCardInt } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private cardsUrl = 'assets/data.json'; // Путь к вашему JSON-файлу



  constructor(private http: HttpClient) { }
  getCardsPage(page: number, pageSize: number): Observable<PrCardInt[]> {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return this.http.get<PrCardInt[]>(this.cardsUrl).pipe(
      map((cards: PrCardInt[]) => cards.slice(startIndex, endIndex))
    );
  }

  getCards(): Observable<PrCardInt[]> {
    return this.http.get<PrCardInt[]>(this.cardsUrl);

  }
  getCardsByNumber(ids: number[]): Observable<PrCardInt[]> {
    return this.http.get<PrCardInt[]>(this.cardsUrl).pipe(
      map((cards: PrCardInt[]) => {
        return cards.filter(card => card.id !== undefined && ids.includes(card.id));
      })
    );
  }

}

