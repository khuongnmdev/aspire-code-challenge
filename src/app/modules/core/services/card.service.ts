import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { CardType } from '../models/card';

const MOCK_DATA = [
  {
    id: uuidv4(),
    cardHolderName: 'Lily Carson',
    cardNumber: '1234567812345678',
    expirationDate: '12/34',
    cvvNumber: 123,
    isHideInfo: false,
    isFreezed: false,
  },
  {
    id: uuidv4(),
    cardHolderName: 'Cyrus Farrell',
    cardNumber: '1234567812345678',
    expirationDate: '12/34',
    cvvNumber: 435,
    isHideInfo: true,
    isFreezed: false,
  },
  {
    id: uuidv4(),
    cardHolderName: 'Marcel Douglas',
    cardNumber: '1234567812345678',
    expirationDate: '12/34',
    cvvNumber: 765,
    isHideInfo: true,
    isFreezed: true,
  },
];

@Injectable({
  providedIn: 'root',
})
export class CardService {
  public readonly cardList$: Observable<CardType[]>;

  private readonly _cardList$: BehaviorSubject<CardType[]>;

  public constructor() {
    this._cardList$ = new BehaviorSubject<CardType[]>(MOCK_DATA);
    this.cardList$ = this._cardList$.asObservable();
  }

  public removeCard(index: number): void {
    const newList = this._cardList$.getValue().filter((item, i) => i !== index);
    this._cardList$.next(newList);
  }

  public toggleCard(index: number): void {
    const listCard = this._cardList$.getValue();
    listCard[index].isHideInfo = !listCard[index].isHideInfo;
    this._cardList$.next(listCard);
  }

  public toggleFreezing(index: number): void {
    const listCard = this._cardList$.getValue();
    listCard[index].isFreezed = !listCard[index].isFreezed;
    this._cardList$.next(listCard);
  }

  public generateCard(cardHolderName: string): void {
    const currentList = this._cardList$.getValue();
    const newItem = {
      id: uuidv4(),
      cardHolderName: cardHolderName,
      cardNumber: this.generateRandomNumber(),
      expirationDate: '12/24',
      cvvNumber: this.randomRange(100, 999),
      isHideInfo: false,
      isFreezed: false,
    };
    this._cardList$.next([...currentList, newItem]);
  }

  private generateRandomNumber(): string {
    let result = '';
    for (let i = 0; i < 16; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  }

  private randomRange(min: number, max: number): number {
    var randVal = min + Math.random() * (max - min);
    return Math.round(randVal);
  }
}
