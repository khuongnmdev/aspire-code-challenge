import { Component, Input, OnInit } from '@angular/core';
import { CardType } from '../../../core/models/card';

const DEFAULT_CARD: CardType = {
	id: '',
	name: 'Name On Card',
	cardNumber: '1234567812345678',
	expirationDate: '12/34',
	cvvNumber: 123,
	isHideInfo: false,
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() public cardData: CardType = DEFAULT_CARD;

  constructor() { }

  ngOnInit() {
  }

}
