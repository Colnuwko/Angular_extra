import { Injectable } from '@angular/core';
import { PrCardInt } from '../interfaces';
import {BehaviorSubject, Observable} from "rxjs";
import {it} from "node:test";
@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public dataSubject = new BehaviorSubject<PrCardInt[]>([]); // Создание BehaviorSubject с начальным пустым массивом
data$: Observable<PrCardInt[]> = this.dataSubject.asObservable(); // Преобразование BehaviorSubject в Observable

constructor() { }

getCount(item: PrCardInt):number {
let count: number = 0;
console.log(item);
const currentData = this.dataSubject.getValue(); // Получение текущего значения массива
   for(let i = 0; i < currentData.length; i++){
    if (item.id == currentData[i].id){
      count = currentData[i].count;
      break;
    }
   }
   return count;
}
// Метод для добавления данных в массив
addToBusket(newData: PrCardInt) {
const currentData = this.dataSubject.getValue(); // Получение текущего значения массива
for(let i = 0; i < currentData.length; i++){
      if (newData.id == currentData[i].id){
        currentData[i].count +=1;
        this.dataSubject.next(currentData);
        return;
      }
}
const updatedData = [...currentData, newData]; // Создание нового массива с добавленными данными
this.dataSubject.next(updatedData);
 // Установка нового значения массива
}

// Метод для получения текущих данных массива
getAllBusket(): Observable<PrCardInt[]> {
return this.data$;
}

increment(item: PrCardInt) {
  const currentData = this.dataSubject.getValue();
  for(let i = 0; i < currentData.length; i++){
      if (item.id == currentData[i].id){
        currentData[i].count +=1;
      }
    }
  this.dataSubject.next(currentData);
}

decrement(item:PrCardInt) {
  const currentData = this.dataSubject.getValue();
  for(let i = 0; i < currentData.length; i++){
      if (item.id == currentData[i].id){
        currentData[i].count -=1;
      }
    }

  this.dataSubject.next(currentData);
}

getPriceWithoutSale(): number {
  let summ = 0;
  const currentData = this.dataSubject.getValue();
  for(let i = 0; i < currentData.length; i++) {
    summ += (currentData[i].price*currentData[i].count);
  }
  return summ;
}

getPriceWithSale(): number {
  let summ = 0;
  const currentData = this.dataSubject.getValue();
  for(let i = 0; i < currentData.length; i++) {
    summ += (currentData[i].price * currentData[i].count * (currentData[i].discount)/100);
  }
  return summ;
}

removeData(item: PrCardInt) {
  let index=0;
  const currentData = this.dataSubject.getValue();
  for(let i = 0; i < currentData.length; i++){
      if (item.id == currentData[i].id){
        index = i;
        break;
      }
    }

if (index >= 0 && index < currentData.length) {
  const updatedData = currentData.filter((_, i) => i !== index);
  this.dataSubject.next(updatedData);
}
}
  // cards: PrCardInt[] = [];
  //
  // addToBasket(item: PrCardInt) {
  // this.cards.push(item);
  // console.log(this.cards);
  // }
  //
  // deleteToBasket(item: PrCardInt) {
  //
  //   for(let i = 0; i < this.cards.length; i++){
  //     if (item.id == this.cards[i].id){
  //       delete this.cards[i];
  //       break;
  //     }
  //   }
  //   console.log(this.cards);
  //   return 0;
  // }
  // getAllBusket(){
  //    return this.cards;
  // }
  // constructor() { }
}
