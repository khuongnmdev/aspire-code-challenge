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
  },
  {
    id: uuidv4(),
    cardHolderName: 'Cyrus Farrell',
    cardNumber: '1234567812345678',
    expirationDate: '12/34',
    cvvNumber: 435,
    isHideInfo: false,
  },
  {
    id: uuidv4(),
    cardHolderName: 'Marcel Douglas',
    cardNumber: '1234567812345678',
    expirationDate: '12/34',
    cvvNumber: 765,
    isHideInfo: false,
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

  public generateCard(cardHolderName: string): void {
    const currentList = this._cardList$.getValue();
    const newItem = {
      id: uuidv4(),
      cardHolderName: cardHolderName,
      cardNumber: this.generateRandomNumber(),
      expirationDate: '12/24',
      cvvNumber: 123,
      isHideInfo: false,
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
}
